(function(){
  const old=document.querySelector('.footer');
  if(old) old.remove();
  document.querySelectorAll('body>div').forEach(function(el){
    const t=(el.textContent||'').trim();
    if(t.startsWith('Connect:')) el.remove();
  });
  const mount=document.querySelector('#site-footer');
  if(!mount)return;
  mount.innerHTML=`<footer class="rich-footer">
    <div class="footer-cta">
      <div><h2>Build your next great team.</h2><p>Find the right people. Hire faster. Grow better.</p></div>
      <div class="footer-cta-actions"><a class="footer-btn primary" href="contact.html">Hire Talent <span>↗</span></a><a class="footer-btn secondary" href="mailto:info@orricaedge.com">Talk to Us <span>↗</span></a></div>
    </div>
    <div class="footer-main">
      <div class="footer-brand"><a class="footer-logo-home" href="/" aria-label="ORRICAEDGE Home"><img src="assets/orrica-edge-logo.png" alt="Orrica Edge"></a><strong>People. Talent. Growth.</strong><p>Intelligent recruitment solutions that connect exceptional people with exceptional opportunities.</p><div class="socials">
        <a href="https://github.com/gautambetu540-droid/orrica-edge-frontend" target="_blank" aria-label="GitHub">GH</a><a href="https://www.linkedin.com/in/sudhanshu-g-512937375/" target="_blank" aria-label="LinkedIn">in</a><a href="mailto:info@orricaedge.com" aria-label="Email">✉</a><a href="https://wa.me/919753791491" target="_blank" aria-label="WhatsApp">◔</a><a href="https://whatsapp.com/channel/0029VbAsVFr4Y9lwo6JDRA2t" target="_blank" aria-label="WhatsApp Channel">◔</a>
      </div></div>
      <div><h4>Company</h4><a href="about.html">About Us</a><a href="index.html#process">Our Process</a><a href="jobs.html">Careers</a><a href="contact.html">Contact Us</a><a href="/admin/login">Workspace Login</a></div>
      <div><h4>Solutions</h4><a href="index.html#services">BPO Recruitment</a><a href="index.html#services">Banking / BFSI Hiring</a><a href="index.html#services">Sales &amp; Collections</a><a href="index.html#services">Bulk Hiring</a><a href="index.html#services">Non-Voice Hiring</a><a href="index.html#services">Customer Support</a></div>
      <div><h4>Connect</h4><a href="mailto:sudhanshu@orricaedge.com">sudhanshu@orricaedge.com</a><a href="mailto:info@orricaedge.com">info@orricaedge.com</a><a href="tel:+919753791491">+91 97537 91491</a><a href="https://wa.me/919753791491" target="_blank">Chat on WhatsApp ↗</a><a href="https://whatsapp.com/channel/0029VbAsVFr4Y9lwo6JDRA2t" target="_blank">WhatsApp Channel ↗</a></div>
    </div>
    <div class="copyright"><b>ORRICAEDGE</b><span>© 2026 ORRICAEDGE. All rights reserved &nbsp; | &nbsp; <a href="terms.html">Terms &amp; Conditions</a> &nbsp; | &nbsp; <a href="privacy.html">Privacy Policy</a></span><em>Made for better hiring.</em></div>
  </footer>`;
  const s=document.createElement('style');s.id='orrica-footer-final';s.textContent=`
    .footer{display:none!important}.rich-footer{display:block!important;background:linear-gradient(110deg,#071a38 0%,#12356d 100%);color:#fff;position:relative;overflow:hidden;font-family:Manrope,Arial,sans-serif}
    .footer-cta{max-width:1515px;margin:auto;padding:66px 58px 50px;display:flex;align-items:center;justify-content:space-between;gap:40px;border-bottom:1px solid rgba(255,255,255,.14)}
    .footer-cta h2{margin:0 0 12px;font:700 clamp(38px,4.2vw,66px)/1.04 "Space Grotesk",Manrope,sans-serif;letter-spacing:-.055em}.footer-cta p{margin:0;color:#abc2df;font-size:18px}
    .footer-cta-actions{display:flex;gap:14px;flex-wrap:wrap}.footer-btn{display:inline-flex!important;align-items:center;justify-content:center;gap:10px;padding:18px 27px;border-radius:999px;text-decoration:none!important;font-weight:800;font-size:17px;white-space:nowrap}.footer-btn.primary{background:#ff6b2c;color:#fff}.footer-btn.secondary{border:1px solid rgba(255,255,255,.35);color:#fff;background:transparent}.footer-btn:hover{transform:translateY(-2px)}
    .footer-main{max-width:1515px;margin:auto;padding:62px 58px 54px;display:grid;grid-template-columns:1.55fr .95fr 1.05fr 1.15fr;gap:58px}.footer-brand img{display:block;width:185px;height:auto;max-height:60px;object-fit:contain;object-position:left;filter:brightness(0) invert(1);margin-bottom:48px}.footer-logo-home{display:block;width:max-content;line-height:0;cursor:pointer}.footer-logo-home:hover{opacity:.88}.footer-brand strong{display:block;font:700 25px "Space Grotesk",Manrope,sans-serif;margin-bottom:19px}.footer-brand p{max-width:470px;color:#aac0dc;font-size:17px;line-height:1.7;margin:0}.rich-footer h4{margin:2px 0 25px;color:#ff6b2c;font-size:17px;font-weight:800;text-transform:uppercase;letter-spacing:.01em}.rich-footer .footer-main>div:not(.footer-brand) a{display:block;color:#b7cae2;text-decoration:none;font-size:17px;margin:0 0 18px;line-height:1.3}.rich-footer .footer-main a:hover{color:#fff}.socials{display:flex;gap:12px;margin-top:34px;flex-wrap:wrap}.socials a{width:51px;height:51px!important;border:1px solid rgba(255,255,255,.38);border-radius:50%;display:inline-flex!important;align-items:center;justify-content:center;color:#fff!important;text-decoration:none!important;font-weight:800;font-size:16px!important;margin:0!important}.copyright{max-width:1515px;margin:auto;padding:20px 58px 28px;border-top:1px solid rgba(255,255,255,.14);display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:24px;color:#91a9c8;font-size:14px}.copyright b{color:#fff;font-size:19px}.copyright a{color:#a8bbd3;text-decoration:none}.copyright em{font-style:normal;white-space:nowrap}
    @media(max-width:900px){.footer-cta{display:block;padding:48px 28px}.footer-cta-actions{margin-top:25px}.footer-main{grid-template-columns:1fr 1fr;padding:45px 28px;gap:35px}.copyright{grid-template-columns:1fr;padding:18px 28px}.copyright em{white-space:normal}}
    @media(max-width:600px){.footer-cta h2{font-size:39px}.footer-cta p{font-size:15px}.footer-btn{width:100%;font-size:14px}.footer-main{grid-template-columns:1fr;padding:38px 22px}.footer-brand img{margin-bottom:32px}.footer-brand strong{font-size:21px}.footer-brand p,.rich-footer .footer-main>div:not(.footer-brand) a{font-size:14px}.rich-footer h4{font-size:13px}.socials a{width:44px;height:44px!important}.copyright{padding:16px 22px;font-size:11px}}
  `;document.head.appendChild(s);
  function addLogin(){const nav=document.querySelector('.hero header .nav');if(!nav)return;if(!nav.querySelector('.workspace-login')){const a=document.createElement('a');a.className='button light workspace-login';a.href='/admin/login';a.innerHTML='Workspace Login <span>↗</span>';const hire=nav.querySelector('.button.orange');hire?nav.insertBefore(a,hire):nav.appendChild(a)} }
  function normalizeLogoHome(){document.querySelectorAll('.footer-logo-home').forEach(function(a){a.href='/';});document.querySelectorAll('header a img').forEach(function(img){const a=img.closest('a');if(a)a.href='/';});}
  addLogin();normalizeLogoHome();setTimeout(addLogin,100);setTimeout(addLogin,500);setTimeout(normalizeLogoHome,100);setTimeout(normalizeLogoHome,500);
})();