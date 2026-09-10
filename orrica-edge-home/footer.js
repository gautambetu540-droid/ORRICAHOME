(function(){
  var mount=document.querySelector('#site-footer');
  if(!mount)return;

  // Remove every previous footer implementation so only the new uploaded design remains.
  document.querySelectorAll('.footer,.rich-footer,.rf-cta,.rf-main,.rf-bottom').forEach(function(el){el.remove();});
  document.querySelectorAll('body>div').forEach(function(el){if((el.textContent||'').trim().startsWith('Connect:'))el.remove();});
  mount.innerHTML='';
  mount.style.display='block';
  mount.style.width='100%';

  // Load the uploaded footer as an isolated Shadow DOM so its Sora/Inter typography
  // cannot overwrite the main website's fonts or layout.
  var root=mount.shadowRoot||mount.attachShadow({mode:'open'});
  fetch('/orrica-edge-home/footer-template.html',{cache:'no-store'})
    .then(function(r){if(!r.ok)throw new Error('Footer template unavailable');return r.text();})
    .then(function(source){
      var doc=new DOMParser().parseFromString(source,'text/html');
      var style=doc.querySelector('style');
      var footer=doc.querySelector('footer');
      if(!style||!footer)throw new Error('Invalid footer template');
      var css=style.textContent.replace(/:root\s*\{/,' :host{').replace(/\n\s*body\{[\s\S]*?\}\s*/,'\n');
      root.innerHTML='';
      var font=document.createElement('link');
      font.rel='stylesheet';
      font.href='https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap';
      document.head.appendChild(font);
      var sheet=document.createElement('style');sheet.textContent=css;root.appendChild(sheet);
      root.appendChild(footer);

      // Ensure the ORRICAEDGE brand always returns to the homepage.
      var brand=root.querySelector('.footer-home-link');
      if(brand)brand.href='/';
      // Keep all required workspace/contact actions working.
      var workspace=root.querySelector('a[href="/admin/login"]');
      if(workspace)workspace.href='/admin/login';
    })
    .catch(function(err){
      console.error('ORRICAEDGE footer:',err);
      mount.innerHTML='';
    });
})();