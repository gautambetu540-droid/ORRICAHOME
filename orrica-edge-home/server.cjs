const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const jobsFile = path.join(root, 'data', 'jobs.json');
const types = { '.html':'text/html', '.png':'image/png', '.css':'text/css', '.js':'text/javascript', '.json':'application/json' };
const readJobs = () => JSON.parse(fs.readFileSync(jobsFile, 'utf8'));

http.createServer((req, res) => {
  if (req.url === '/api/jobs' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(readJobs()));
  }
  if (req.url === '/api/jobs' && req.method === 'POST') {
    let payload = '';
    req.on('data', chunk => payload += chunk);
    req.on('end', () => {
      try {
        const job = JSON.parse(payload);
        if (!job.title || !job.team || !job.location || !job.summary || !job.description) throw new Error('Missing required fields');
        job.id = `${job.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${Date.now()}`;
        job.postedAt = new Date().toISOString().slice(0, 10);
        job.skills = Array.isArray(job.skills) ? job.skills : [];
        const jobs = readJobs();
        jobs.unshift(job);
        fs.writeFileSync(jobsFile, JSON.stringify(jobs, null, 2));
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(job));
      } catch {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Unable to publish role' }));
      }
    });
    return;
  }
  if (req.url === '/api/contact' && req.method === 'POST') {
    let payload = '';
    req.on('data', chunk => payload += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(payload);
        if (!data.name || !data.email || !data.message) throw new Error('Missing fields');
        const clean = value => String(value || '').replace(/[<>]/g, '').trim();
        const message = `New website enquiry%0A%0AName: ${encodeURIComponent(clean(data.name))}%0AEmail: ${encodeURIComponent(clean(data.email))}%0APhone: ${encodeURIComponent(clean(data.phone))}%0AInterest: ${encodeURIComponent(clean(data.interest))}%0A%0AMessage: ${encodeURIComponent(clean(data.message))}`;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ whatsappUrl: `https://wa.me/919753791491?text=${message}` }));
      } catch {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Unable to send message' }));
      }
    });
    return;
  }
  const requested = req.url === '/' ? '/index.html' : decodeURIComponent(req.url.split('?')[0]);
  const file = path.resolve(root, `.${requested}`);
  if (!file.startsWith(root) || !fs.existsSync(file)) return res.writeHead(404).end('Not found');
  res.writeHead(200, { 'Content-Type': `${types[path.extname(file)] || 'application/octet-stream'}; charset=utf-8` });
  fs.createReadStream(file).pipe(res);
}).listen(process.env.PORT || 4173, '127.0.0.1', () => console.log('Orrica Edge is running on http://127.0.0.1:4173'));
