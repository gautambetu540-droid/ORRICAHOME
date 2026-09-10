const footer=document.querySelector('#site-footer');if(footer)footer.innerHTML=`<footer class="rich-footer"><div class="footer-grid"><div class="footer-brand"><img src="assets/orrica-edge-logo.png" alt="Orrica Edge"><p>Leading the way with intelligent recruitment solutions built to drive business growth and connect exceptional people with exceptional opportunities.</p><div class="socials"><a href="https://github.com/gautambetu540-droid/orrica-edge-frontend" target="_blank" rel="noreferrer">GH</a><a href="mailto:info@orricaedge.com">@</a><a href="https://wa.me/919753791491" target="_blank" rel="noreferrer">WA</a></div></div><div><h4>Quick Links</h4><a href="index.html">Home</a><a href="about.html">About us</a><a href="jobs.html">Careers</a><a href="contact.html">Contact us</a></div><div><h4>Services</h4><a href="index.html#services">BPO recruitment</a><a href="index.html#services">Banking hiring</a><a href="index.html#services">Sales &amp; collections</a><a href="index.html#services">Bulk hiring</a><a href="index.html#services">Non-voice hiring</a></div><div><h4>Contact</h4><a href="mailto:sudhanshu@orricaedge.com">sudhanshu@orricaedge.com</a><a href="mailto:info@orricaedge.com">info@orricaedge.com</a><a href="tel:+919753791491">+91 97537 91491</a><a href="https://wa.me/919753791491" target="_blank" rel="noreferrer">Chat on WhatsApp ↗</a></div></div><div class="copyright"><strong>ORRICA</strong><span>© 2026 Orrica Edge. All rights reserved. &nbsp; <a href="terms.html">Terms &amp; Conditions</a> · <a href="privacy.html">Privacy Policy</a></span></div></footer>`;

// Add the workspace login action to the top navigation on the public home page.
const nav=document.querySelector('.hero header .nav');
if(nav&&!nav.querySelector('.workspace-login')){
  const login=document.createElement('a');
  login.className='button light workspace-login';
  login.href='/admin/login';
  login.setAttribute('aria-label','Workspace Login');
  login.innerHTML='Workspace Login <span>↗</span>';
  const hire=nav.querySelector('.button.orange');
  if(hire) nav.insertBefore(login,hire); else nav.appendChild(login);
  const style=document.createElement('style');
  style.textContent='.workspace-login{white-space:nowrap}.nav{gap:14px}.navlinks{margin-left:auto}@media(max-width:760px){.workspace-login{display:inline-flex!important;font-size:11px!important;padding:11px 14px!important}}';
  document.head.appendChild(style);
}
