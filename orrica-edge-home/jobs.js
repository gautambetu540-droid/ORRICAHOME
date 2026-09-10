const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));

/* =========================================================
   GLOBAL NAVIGATION FIX
   jobs.html lives under /orrica-edge-home internally, but all
   public navigation must use root-safe URLs so /index.html does
   not produce a Vercel 404.
========================================================= */
(function fixPublicNavigation(){
  const routes={
    'index.html':'/',
    'index.html#about':'/#about',
    'index.html#services':'/#services',
    'index.html#process':'/#process',
    'index.html#jobs':'/#jobs',
    'jobs.html':'/jobs',
    'job.html':'/job',
    'about.html':'/about',
    'contact.html':'/contact',
    'terms.html':'/terms',
    'privacy.html':'/privacy',
    'cookies.html':'/cookies'
  };

  document.querySelectorAll('a[href]').forEach(a=>{
    const raw=(a.getAttribute('href')||'').trim();
    if(routes[raw]) a.setAttribute('href',routes[raw]);
    if(raw==='assets/orrica-edge-logo.png') return;
  });

  /* Breadcrumb must always return to the public homepage. */
  const breadcrumb=document.querySelector('.breadcrumb a');
  if(breadcrumb) breadcrumb.setAttribute('href','/');

  /* Premium, aligned jobs header. */
  const header=document.querySelector('.sub-nav');
  if(header){
    header.style.display='flex';
    header.style.alignItems='center';
    header.style.justifyContent='space-between';
    header.style.gap='22px';
    header.style.padding='14px 24px';
    header.style.boxSizing='border-box';
    header.style.position='relative';
    header.style.zIndex='20';

    const brand=header.querySelector('.brand');
    if(brand){
      brand.style.display='inline-flex';
      brand.style.alignItems='center';
      brand.style.flex='0 0 auto';
      brand.style.minWidth='185px';
    }

    const logo=header.querySelector('.brand img');
    if(logo){
      logo.style.width='190px';
      logo.style.height='52px';
      logo.style.objectFit='contain';
      logo.style.objectPosition='left center';
      logo.style.filter='brightness(0) invert(1)';
    }

    const nav=header.querySelector('nav');
    if(nav){
      nav.style.display='flex';
      nav.style.alignItems='center';
      nav.style.justifyContent='center';
      nav.style.gap='30px';
      nav.style.margin='0 auto';
      nav.style.flex='1 1 auto';
    }

    const actions=header.querySelector(':scope > div');
    if(actions){
      actions.style.display='flex';
      actions.style.alignItems='center';
      actions.style.justifyContent='flex-end';
      actions.style.gap='10px';
      actions.style.flex='0 0 auto';
    }
  }
})();

let jobs=[];
const list=document.querySelector('#job-list'),search=document.querySelector('#search'),location=document.querySelector('#location'),team=document.querySelector('#team');

function card(j){
  return `<article class="job-card"><div><span class="job-team">${esc(j.team)}</span><h3>${esc(j.title)}</h3><p>${esc(j.summary)}</p><div class="job-meta"><span>⌖ ${esc(j.location)}</span><span>◷ ${esc(j.type)}</span><span>↗ ${esc(j.experience)}</span></div></div><a href="/job?id=${encodeURIComponent(j.id)}" aria-label="View ${esc(j.title)}">→</a></article>`
}

function render(){
  let found=jobs.filter(j=>[j.title,j.team,j.location,j.summary].join(' ').toLowerCase().includes(search.value.toLowerCase())&&(!location.value||j.location===location.value)&&(!team.value||j.team===team.value));
  list.innerHTML=found.length?found.map(card).join(''):`<div class="empty">No roles match those filters. Try another search.</div>`;
  document.querySelector('#results').textContent=`${found.length} open role${found.length===1?'':'s'}`
}

fetch('/api/jobs').then(r=>r.json()).then(data=>{
  jobs=data;
  document.querySelector('#role-count').textContent=data.length;
  for(const prop of ['location','team']) [...new Set(data.map(j=>j[prop]))].sort().forEach(v=>document.querySelector('#'+prop).insertAdjacentHTML('beforeend',`<option>${esc(v)}</option>`));
  render()
});

[search,location,team].forEach(el=>el.addEventListener('input',render));
document.querySelector('#reset').onclick=()=>{search.value=location.value=team.value='';render()};
