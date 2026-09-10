(function(){
  var old=document.querySelector('.footer');if(old)old.remove();
  document.querySelectorAll('body>div').forEach(function(el){if((el.textContent||'').trim().startsWith('Connect:'))el.remove();});

  // --- Favicon (only injects if the page doesn't already have one) ---
  if(!document.querySelector('link[rel="icon"]')){
    var fav=document.createElement('link');
    fav.rel='icon';
    fav.type='image/svg+xml';
    fav.href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='16' fill='%230a1226'/%3E%3Cpath d='M20 40 L32 22 L44 40' stroke='%23ff6b3d' stroke-width='5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3Ccircle cx='32' cy='46' r='3.4' fill='%23ff6b3d'/%3E%3C/svg%3E";
    document.head.appendChild(fav);
  }

  var mount=document.querySelector('#site-footer');if(!mount)return;

  // --- Icon set (inline SVG, crisp at any size, inherits currentColor) ---
  var ICON_ARROW='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>';
  var ICON_GITHUB='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12.05c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.78 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.6.24 2.77.12 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.68.42.36.78 1.07.78 2.16v3.2c0 .3.2.66.79.55A10.55 10.55 0 0 0 23.5 12.05C23.5 5.73 18.27.5 12 .5Z"/></svg>';
  var ICON_LINKEDIN='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>';
  var ICON_MAIL='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3.5 6.5 8.5 6.2 8.5-6.2"/></svg>';
  var ICON_WHATSAPP='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.02 2C6.5 2 2.04 6.46 2.04 12c0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.28A9.94 9.94 0 0 0 12.02 22C17.55 22 22 17.54 22 12S17.55 2 12.02 2zm5.6 14.15c-.24.67-1.4 1.28-1.93 1.34-.52.06-1 .26-3.37-.7-2.86-1.16-4.7-4.06-4.84-4.25-.14-.18-1.15-1.53-1.15-2.92 0-1.39.73-2.08 1-2.36.26-.28.57-.35.76-.35.2 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.81 2 .88 2.15.07.14.11.31.02.5-.09.18-.14.29-.28.45-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.25 2.24 1.39.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.26.13.44.19.5.3.07.11.07.62-.17 1.29z"/></svg>';
  var ICON_CHANNEL='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M14.5 5.5a8 8 0 0 1 0 13"/><path d="M12.2 8a4 4 0 0 1 0 8"/></svg>';
  var ICON_PHONE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.7a2 2 0 0 1-.4 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.8 2.1z"/></svg>';

  mount.innerHTML = `
    <footer class="oe-footer">
      <div class="oe-glow-a"></div>
      <div class="oe-glow-b"></div>
      <div class="oe-top-fade"></div>
      <div class="oe-watermark">ORRICAEDGE</div>

      <div class="oe-wrap">

        <div class="oe-cta">
          <div>
            <div class="oe-eyebrow">Let's work together</div>
            <h2>Build your next great team.</h2>
            <p>Find the right people. Hire faster. Grow better.</p>
          </div>
          <div class="oe-cta-btns">
            <a class="oe-btn oe-btn-primary" href="contact.html">Hire Talent <span>${ICON_ARROW}</span></a>
            <a class="oe-btn oe-btn-ghost" href="mailto:info@orricaedge.com">Talk to Us</a>
          </div>
        </div>

        <div class="oe-rule"></div>

        <div class="oe-grid">

          <div class="oe-brand">
            <a class="oe-logo" href="/" aria-label="ORRICAEDGE Home"><img src="assets/orrica-edge-logo.png" alt="Orrica Edge"></a>
            <div class="oe-tagline">People. Talent. Growth.</div>
            <p class="oe-desc">Intelligent recruitment solutions that connect exceptional people with exceptional opportunities.</p>
            <div class="oe-socials">
              <a href="https://github.com/gautambetu540-droid/orrica-edge-frontend" target="_blank" aria-label="GitHub">${ICON_GITHUB}</a>
              <a href="https://www.linkedin.com/in/sudhanshu-g-512937375/" target="_blank" aria-label="LinkedIn">${ICON_LINKEDIN}</a>
              <a href="mailto:info@orricaedge.com" aria-label="Email">${ICON_MAIL}</a>
              <a href="https://wa.me/919753791491" target="_blank" aria-label="WhatsApp">${ICON_WHATSAPP}</a>
              <a href="https://whatsapp.com/channel/0029VbAsVFr4Y9lwo6JDRA2t" target="_blank" aria-label="WhatsApp Channel">${ICON_CHANNEL}</a>
            </div>
          </div>

          <div class="oe-col">
            <div class="oe-col-label">Company</div>
            <ul class="oe-col-list">
              <li><a href="about.html">About Us</a></li>
              <li><a href="index.html#process">Our Process</a></li>
              <li><a href="jobs.html">Careers</a></li>
              <li><a href="contact.html">Contact Us</a></li>
              <li><a href="/admin/login">Workspace Login</a></li>
            </ul>
          </div>

          <div class="oe-col">
            <div class="oe-col-label">Solutions</div>
            <ul class="oe-col-list">
              <li><a href="index.html#services">BPO Recruitment</a></li>
              <li><a href="index.html#services">Banking / BFSI Hiring</a></li>
              <li><a href="index.html#services">Sales &amp; Collections</a></li>
              <li><a href="index.html#services">Bulk Hiring</a></li>
              <li><a href="index.html#services">Non-Voice Hiring</a></li>
              <li><a href="index.html#services">Customer Support</a></li>
            </ul>
          </div>

          <div class="oe-col">
            <div class="oe-col-label">Connect</div>
            <ul class="oe-col-list oe-connect-list">
              <li class="oe-connect-item"><a href="mailto:sudhanshu@orricaedge.com"><span class="oe-ic">${ICON_MAIL}</span>sudhanshu@orricaedge.com</a></li>
              <li class="oe-connect-item"><a href="tel:+919753791491"><span class="oe-ic">${ICON_PHONE}</span>+91 97537 91491</a><span class="oe-connect-note">Also on WhatsApp</span></li>
              <li class="oe-connect-item"><a href="https://wa.me/919753791491" target="_blank"><span class="oe-ic">${ICON_WHATSAPP}</span>Chat on WhatsApp</a></li>
              <li class="oe-connect-item"><a href="https://whatsapp.com/channel/0029VbAsVFr4Y9lwo6JDRA2t" target="_blank"><span class="oe-ic">${ICON_CHANNEL}</span>WhatsApp Channel</a></li>
            </ul>
          </div>

        </div>

        <div class="oe-rule"></div>

        <div class="oe-bottom">
          <b>ORRICAEDGE</b>
          <span>© 2026 ORRICAEDGE. All rights reserved &nbsp;|&nbsp; <a href="terms.html">Terms &amp; Conditions</a> &nbsp;|&nbsp; <a href="privacy.html">Privacy Policy</a></span>
          <em>Made for better hiring.</em>
        </div>

      </div>
    </footer>
  `;

  var s=document.createElement('style');
  s.id='orrica-footer-style';
  s.textContent=`
    .oe-footer{
      --bg-0:#080e1f; --line:rgba(255,255,255,.09);
      --ink:#f3f5fa; --ink-dim:#8c96b4; --ink-dimmer:#57628a;
      --orange:#ff6b3d; --orange-2:#ff8552;
      position:relative; display:block!important; width:100%; overflow:hidden;
      box-sizing:border-box; background:var(--bg-0); color:var(--ink);
      font-family:'Inter',Manrope,Arial,sans-serif; -webkit-font-smoothing:antialiased;
      padding:88px 56px 0;
    }
    .oe-footer,.oe-footer *{box-sizing:border-box}
    .oe-footer a{font-family:inherit}
    .oe-glow-a{position:absolute;top:-220px;right:-160px;width:640px;height:640px;border-radius:50%;background:radial-gradient(circle,rgba(255,107,61,.16),transparent 68%);pointer-events:none;z-index:0}
    .oe-glow-b{position:absolute;bottom:-260px;left:-120px;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,rgba(76,110,255,.10),transparent 70%);pointer-events:none;z-index:0}
    .oe-top-fade{position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(255,107,61,.55),transparent)}
    .oe-watermark{position:absolute;right:-24px;bottom:-30px;font-family:Manrope,Arial,sans-serif;font-weight:800;font-size:170px;letter-spacing:-.03em;color:transparent;-webkit-text-stroke:1px rgba(255,255,255,.045);pointer-events:none;z-index:0;user-select:none;white-space:nowrap}
    .oe-wrap{max-width:1320px;margin:0 auto;position:relative;z-index:1}

    .oe-cta{display:flex;align-items:flex-end;justify-content:space-between;gap:32px;flex-wrap:wrap;padding-bottom:52px}
    .oe-eyebrow{display:inline-flex;align-items:center;gap:8px;color:var(--orange);font-size:13.5px;font-weight:600;margin-bottom:14px}
    .oe-eyebrow::before{content:"";width:16px;height:1px;background:var(--orange)}
    .oe-cta h2{font-family:Manrope,Arial,sans-serif;font-weight:800;font-size:clamp(32px,4.2vw,54px);line-height:1.05;letter-spacing:-.02em;max-width:660px;margin:0}
    .oe-cta p{margin-top:12px;color:var(--ink-dim);font-size:17px}
    .oe-cta-btns{display:flex;gap:12px;flex-wrap:wrap}
    .oe-btn{display:inline-flex!important;align-items:center;gap:8px;padding:15px 26px;border-radius:100px;font-weight:700;font-size:15px;text-decoration:none!important;white-space:nowrap;transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease,background .18s ease}
    .oe-btn span{display:inline-flex;width:15px;height:15px}
    .oe-btn span svg{width:100%;height:100%}
    .oe-btn:hover{transform:translateY(-2px)}
    .oe-btn-primary{background:linear-gradient(135deg,var(--orange),var(--orange-2));color:#0a1226!important;box-shadow:0 8px 24px -8px rgba(255,107,61,.55)}
    .oe-btn-primary:hover{box-shadow:0 12px 28px -8px rgba(255,107,61,.7)}
    .oe-btn-ghost{border:1px solid rgba(255,255,255,.18);color:var(--ink)!important}
    .oe-btn-ghost:hover{border-color:rgba(255,255,255,.4);background:rgba(255,255,255,.04)}

    .oe-rule{border-top:1px solid var(--line)}

    .oe-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;padding:52px 0 60px}

    .oe-logo{display:block;width:max-content;line-height:0;margin-bottom:22px}
    .oe-logo img{display:block;width:170px;height:auto;object-fit:contain;object-position:left center;filter:brightness(0) invert(1)}
    .oe-tagline{font-family:Manrope,Arial,sans-serif;font-weight:700;font-size:17px}
    .oe-desc{color:var(--ink-dim);font-size:14.5px;line-height:1.65;max-width:300px;margin-top:10px}

    .oe-socials{display:flex;gap:10px;margin-top:24px}
    .oe-socials a{position:relative;width:40px;height:40px;display:inline-flex!important;align-items:center;justify-content:center;margin:0!important;border-radius:12px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.02);color:var(--ink-dim)!important;text-decoration:none!important;overflow:hidden;transition:transform .2s ease,border-color .2s ease}
    .oe-socials a svg{position:relative;z-index:1;width:17px;height:17px;transition:transform .2s ease}
    .oe-socials a::before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,var(--orange),var(--orange-2));opacity:0;transition:opacity .2s ease}
    .oe-socials a:hover{transform:translateY(-3px);border-color:transparent}
    .oe-socials a:hover::before{opacity:1}
    .oe-socials a:hover svg{color:#0a1226;transform:scale(1.05)}

    .oe-col-label{position:relative;display:inline-flex;align-items:center;gap:8px;font-family:Manrope,Arial,sans-serif;font-weight:700;font-size:14.5px;color:var(--ink);margin:2px 0 22px}
    .oe-col-label::before{content:"";width:6px;height:6px;border-radius:2px;background:var(--orange);transform:rotate(45deg)}
    .oe-col-list{list-style:none;display:flex;flex-direction:column;gap:13px;margin:0;padding:0}
    .oe-col-list a{color:var(--ink-dim)!important;text-decoration:none!important;font-size:14.5px;transition:color .15s ease,padding-left .15s ease;display:inline-flex;align-items:center;gap:8px}
    .oe-col-list a:hover{color:var(--ink)!important;padding-left:5px}
    .oe-ic{display:inline-flex;width:14px;height:14px;flex-shrink:0;color:var(--orange)}
    .oe-ic svg{width:100%;height:100%}
    .oe-connect-item{display:flex;flex-direction:column;gap:2px}
    .oe-connect-note{color:var(--ink-dimmer);font-size:12px;margin-left:22px}

    .oe-bottom{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:24px;padding:24px 0 30px;font-size:13px;color:var(--ink-dimmer)}
    .oe-bottom b{color:var(--ink);font-size:18px;font-weight:800}
    .oe-bottom a{color:var(--ink-dimmer)!important;text-decoration:none}
    .oe-bottom a:hover{color:var(--ink-dim)!important}
    .oe-bottom em{font-style:normal;white-space:nowrap;justify-self:end}

    .footer,.footer-top,.footer-bottom{display:none!important}

    @media (max-width:980px){
      .oe-footer{padding:64px 28px 0}
      .oe-grid{grid-template-columns:1fr 1fr;row-gap:40px}
      .oe-watermark{font-size:86px}
    }
    @media (max-width:600px){
      .oe-cta{display:block}
      .oe-cta-btns{margin-top:22px}
      .oe-btn{width:100%;justify-content:center}
      .oe-grid{grid-template-columns:1fr}
      .oe-bottom{grid-template-columns:1fr;text-align:left}
      .oe-bottom em{justify-self:start}
    }
  `;
  document.head.appendChild(s);

  function login(){var nav=document.querySelector('.hero header .nav');if(!nav)return;if(!nav.querySelector('.workspace-login')){var a=document.createElement('a');a.className='button light workspace-login';a.href='/admin/login';a.innerHTML='Workspace Login <span>↗</span>';var hire=nav.querySelector('.button.orange');hire?nav.insertBefore(a,hire):nav.appendChild(a)}}
  function logos(){document.querySelectorAll('.oe-logo,header .brand').forEach(function(a){a.href='/';})}
  login();logos();setTimeout(login,150);setTimeout(login,600);setTimeout(logos,150);setTimeout(logos,600);
})();
