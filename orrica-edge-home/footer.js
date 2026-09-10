(function(){
  var mount=document.querySelector('#site-footer');
  if(!mount)return;
  document.querySelectorAll('.footer,.rich-footer,.rf-cta,.rf-main,.rf-bottom').forEach(function(el){el.remove();});
  document.querySelectorAll('body>div').forEach(function(el){if((el.textContent||'').trim().startsWith('Connect:'))el.remove();});
  mount.innerHTML='';mount.style.display='block';mount.style.width='100%';
  var root=mount.shadowRoot||mount.attachShadow({mode:'open'});
  fetch('/orrica-edge-home/footer-template.html',{cache:'no-store'}).then(function(r){if(!r.ok)throw new Error('Footer template unavailable');return r.text();}).then(function(source){
    var doc=new DOMParser().parseFromString(source,'text/html'),style=doc.querySelector('style'),footer=doc.querySelector('footer');
    if(!style||!footer)throw new Error('Invalid footer template');
    var css=style.textContent.replace(/:root\s*\{/,' :host{').replace(/\n\s*body\s*\{[^}]*\}\s*/,'\n');
    root.innerHTML='';
    if(!document.querySelector('link[data-orrica-footer-fonts]')){var font=document.createElement('link');font.rel='stylesheet';font.dataset.orricaFooterFonts='1';font.href='https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap';document.head.appendChild(font);}
    var sheet=document.createElement('style');sheet.textContent=css;root.appendChild(sheet);root.appendChild(footer);
    var brand=root.querySelector('.footer-home-link');if(brand)brand.href='/';
    var workspace=root.querySelector('a[href="/admin/login"]');if(workspace)workspace.href='/admin/login';
    var wa=root.querySelector('.socials a[aria-label="WhatsApp"] path');if(wa)wa.setAttribute('d','M12.02 2C6.5 2 2.04 6.46 2.04 12c0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.28A9.94 9.94 0 0 0 12.02 22C17.55 22 22 17.54 22 12S17.55 2 12.02 2zm5.6 14.15c-.24.67-1.4 1.28-1.93 1.34-.52.06-1 .26-3.37-.7-2.86-1.16-4.7-4.06-4.84-4.25-.14-.18-1.15-1.53-1.15-2.92 0-1.39.73-2.08 1-2.36.26-.28.57-.35.76-.35.2 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.81 2 .88 2.15.07.14.11.31.02.5-.09.18-.14.29-.28.45-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.25 2.24 1.39.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.26.13.44.19.5.3.07.11.07.62-.17 1.29z');
  }).catch(function(err){console.error('ORRICAEDGE footer:',err);mount.innerHTML='';});
})();