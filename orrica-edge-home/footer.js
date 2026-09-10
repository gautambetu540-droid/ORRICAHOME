(function(){
  function init(){
    if(document.getElementById('orrica-edge-ui-fix')) return;

    /* Remove any legacy footer so only one footer remains. */
    document.querySelectorAll('footer,.footer').forEach(function(el){
      if(!el.closest('#site-footer')) el.remove();
    });

    /* Header wordmark: keep ORRICA light and EDGE orange. */
    document.querySelectorAll('.brand-logo').forEach(function(img){
      var link=img.closest('.brand-link');
      if(!link) return;
      link.innerHTML='<span class="oe-header-wordmark" aria-label="ORRICAEDGE"><span>orrica</span><b>edge</b></span>';
    });

    /* Fix the final hiring CTA without touching the hero typography. */
    var nodes=document.querySelectorAll('h1,h2,h3,h4,p');
    nodes.forEach(function(el){
      var t=(el.textContent||'').replace(/\s+/g,' ').trim().toLowerCase();
      if(t.indexOf('build the team that moves your business forward')!==-1){
        el.classList.add('oe-final-title');
        var section=el.closest('section') || el.parentElement;
        if(section){
          section.classList.add('oe-final-cta');
          var p=section.querySelector('p');
          if(p) p.classList.add('oe-final-copy');
        }
      }
    });

    /* Ensure the footer mount exists even if an older index omitted it. */
    var mount=document.querySelector('#site-footer');
    if(!mount){
      mount=document.createElement('div');
      mount.id='site-footer';
      document.body.appendChild(mount);
    }

    mount.innerHTML=`
      <footer class="oe-footer" aria-label="Site footer">
        <div class="oe-glow-a"></div><div class="oe-glow-b"></div><div class="oe-watermark">ORRICAEDGE</div>
        <div class="oe-wrap">
          <div class="oe-cta">
            <div>
              <div class="oe-eyebrow">Let's work together</div>
              <h2>Build your next great team.</h2>
              <p>Find the right people. Hire faster. Grow better.</p>
            </div>
            <div class="oe-cta-btns">
              <a class="oe-btn oe-btn-primary" href="contact.html">Hire Talent <span>↗</span></a>
              <a class="oe-btn oe-btn-ghost" href="mailto:info@orricaedge.com">Talk to Us</a>
            </div>
          </div>
          <div class="oe-rule"></div>
          <div class="oe-grid">
            <div class="oe-brand">
              <a class="oe-logo" href="/" aria-label="ORRICAEDGE Home"><span class="oe-footer-wordmark"><span>orrica</span><b>edge</b></span></a>
              <div class="oe-tagline">People. Talent. Growth.</div>
              <p class="oe-desc">Intelligent recruitment solutions that connect exceptional people with exceptional opportunities.</p>
              <div class="oe-socials">
                <a href="https://github.com/gautambetu540-droid/orrica-edge-frontend" target="_blank" rel="noopener" aria-label="GitHub">GH</a>
                <a href="https://www.linkedin.com/in/sudhanshu-g-512937375/" target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
                <a href="mailto:info@orricaedge.com" aria-label="Email">@</a>
                <a href="https://wa.me/919753791491" target="_blank" rel="noopener" aria-label="WhatsApp">WA</a>
              </div>
            </div>
            <div class="oe-col"><div class="oe-col-label">Company</div><ul class="oe-col-list">
              <li><a href="about.html">About Us</a></li><li><a href="index.html#process">Our Process</a></li><li><a href="jobs.html">Careers</a></li><li><a href="contact.html">Contact Us</a></li><li><a href="/admin/login">Workspace Login</a></li>
            </ul></div>
            <div class="oe-col"><div class="oe-col-label">Solutions</div><ul class="oe-col-list">
              <li><a href="index.html#services">BPO Recruitment</a></li><li><a href="index.html#services">Banking / BFSI Hiring</a></li><li><a href="index.html#services">Sales &amp; Collections</a></li><li><a href="index.html#services">Bulk Hiring</a></li><li><a href="index.html#services">Non-Voice Hiring</a></li><li><a href="index.html#services">Customer Support</a></li>
            </ul></div>
            <div class="oe-col"><div class="oe-col-label">Connect</div><ul class="oe-col-list oe-connect-list">
              <li><a href="mailto:sudhanshu@orricaedge.com">✉ sudhanshu@orricaedge.com</a></li><li><a href="tel:+919753791491">☎ +91 97537 91491</a><small>Also available on WhatsApp</small></li><li><a href="https://wa.me/919753791491" target="_blank" rel="noopener">WhatsApp</a></li><li><a href="https://whatsapp.com/channel/0029VbAsVFr4Y9lwo6JDRA2t" target="_blank" rel="noopener">WhatsApp Channel</a></li>
            </ul></div>
          </div>
          <div class="oe-rule"></div>
          <div class="oe-bottom"><span>© 2026 ORRICAEDGE. All rights reserved.</span><span><a href="terms.html">Terms &amp; Conditions</a><i>·</i><a href="privacy.html">Privacy Policy</a></span><em>Made for better hiring.</em></div>
        </div>
      </footer>`;

    var style=document.createElement('style');
    style.id='orrica-edge-ui-fix';
    style.textContent=`
      /* HEADER LOGO */
      .nav .brand-link{min-width:145px;display:inline-flex;align-items:center;justify-content:flex-start;height:54px;padding-left:7px;}
      .oe-header-wordmark{display:inline-flex;align-items:baseline;font-family:Sora,Inter,sans-serif;font-size:21px;font-weight:800;letter-spacing:-.055em;line-height:1;white-space:nowrap;}
      .oe-header-wordmark span{color:#fff}.oe-header-wordmark b{color:#ff6b3d;font-weight:800}
      .nav .brand-link:hover .oe-header-wordmark span{color:#fff}

      /* FINAL ORANGE CTA */
      .oe-final-cta{padding:48px 52px!important;}
      .oe-final-cta .oe-final-title{max-width:760px!important;font-family:Sora,Inter,sans-serif!important;font-size:clamp(48px,5.15vw,68px)!important;line-height:1.02!important;letter-spacing:-.055em!important;margin-bottom:18px!important;}
      .oe-final-cta .oe-final-copy{max-width:720px!important;line-height:1.55!important;margin-top:0!important;}
      .oe-final-cta a{margin-top:28px;}

      /* FOOTER */
      .oe-footer{--bg:#080e1f;--line:rgba(255,255,255,.09);--ink:#f3f5fa;--dim:#8c96b4;--orange:#ff6b3d;position:relative;display:block;width:100%;overflow:hidden;background:var(--bg);color:var(--ink);font-family:Inter,Arial,sans-serif;padding:72px 56px 0;box-sizing:border-box;-webkit-font-smoothing:antialiased;}
      .oe-footer *{box-sizing:border-box}.oe-wrap{max-width:1320px;margin:auto;position:relative;z-index:1}.oe-glow-a{position:absolute;top:-240px;right:-180px;width:620px;height:620px;border-radius:50%;background:radial-gradient(circle,rgba(255,107,61,.14),transparent 68%);pointer-events:none}.oe-glow-b{position:absolute;bottom:-250px;left:-140px;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(76,110,255,.09),transparent 70%);pointer-events:none}.oe-watermark{position:absolute;right:-25px;bottom:-38px;font-family:Sora,Arial,sans-serif;font-size:170px;font-weight:800;letter-spacing:-.05em;color:transparent;-webkit-text-stroke:1px rgba(255,255,255,.035);pointer-events:none;white-space:nowrap}.oe-cta{display:flex;align-items:flex-end;justify-content:space-between;gap:30px;flex-wrap:wrap;padding-bottom:42px}.oe-eyebrow{color:var(--orange);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.13em;margin-bottom:12px}.oe-cta h2{font-family:Sora,Inter,sans-serif;font-size:clamp(32px,4vw,52px);line-height:1.05;letter-spacing:-.045em}.oe-cta p{color:var(--dim);font-size:16px;margin-top:12px}.oe-cta-btns{display:flex;gap:10px;flex-wrap:wrap}.oe-btn{display:inline-flex;align-items:center;gap:8px;padding:14px 22px;border-radius:999px;text-decoration:none;font-size:14px;font-weight:700;transition:.2s ease}.oe-btn-primary{background:var(--orange);color:#091126}.oe-btn-ghost{border:1px solid rgba(255,255,255,.16);color:var(--ink);background:rgba(255,255,255,.025)}.oe-btn:hover{transform:translateY(-2px)}.oe-rule{height:1px;background:var(--line)}.oe-grid{display:grid;grid-template-columns:1.45fr 1fr 1fr 1.05fr;gap:42px;padding:48px 0 52px}.oe-footer-wordmark{display:inline-flex;align-items:baseline;font-family:Sora,Inter,sans-serif;font-size:27px;font-weight:800;letter-spacing:-.055em}.oe-footer-wordmark span{color:#fff}.oe-footer-wordmark b{color:var(--orange)}.oe-tagline{font-family:Sora,Inter,sans-serif;font-size:17px;font-weight:700;margin-top:22px}.oe-desc{max-width:310px;color:var(--dim);font-size:14px;line-height:1.65;margin-top:9px}.oe-socials{display:flex;gap:9px;margin-top:22px}.oe-socials a{width:38px;height:38px;border:1px solid rgba(255,255,255,.12);border-radius:11px;display:flex;align-items:center;justify-content:center;color:var(--dim);text-decoration:none;font-size:12px;font-weight:700}.oe-socials a:hover{border-color:var(--orange);color:#fff}.oe-col-label{font-family:Sora,Inter,sans-serif;font-size:14px;font-weight:700;margin-bottom:18px}.oe-col-label:before{content:'';display:inline-block;width:6px;height:6px;background:var(--orange);transform:rotate(45deg);margin:0 9px 1px 0}.oe-col-list{list-style:none;display:flex;flex-direction:column;gap:11px;padding:0;margin:0}.oe-col-list a{color:var(--dim);font-size:14px;text-decoration:none}.oe-col-list a:hover{color:#fff}.oe-connect-list small{display:block;color:#57628a;font-size:11px;margin:3px 0 0 20px}.oe-bottom{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;padding:22px 0;font-size:12px;color:#57628a}.oe-bottom a{color:#57628a;text-decoration:none}.oe-bottom a:hover{color:#fff}.oe-bottom i{font-style:normal;margin:0 10px;opacity:.5}.oe-bottom em{font-style:normal}
      @media(max-width:980px){.oe-final-cta{padding:40px 32px!important}.oe-grid{grid-template-columns:1fr 1fr;row-gap:40px}.oe-footer{padding-left:30px;padding-right:30px}.oe-watermark{font-size:100px}}
      @media(max-width:700px){.nav .brand-link{min-width:115px}.oe-header-wordmark{font-size:18px}.oe-final-cta{padding:34px 24px!important}.oe-final-cta .oe-final-title{font-size:clamp(38px,10vw,52px)!important}.oe-grid{grid-template-columns:1fr}.oe-cta{align-items:flex-start}.oe-bottom{align-items:flex-start;flex-direction:column}.oe-footer{padding-left:22px;padding-right:22px}}
    `;
    document.head.appendChild(style);

    document.documentElement.classList.add('orrica-edge-ui-ready');
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
