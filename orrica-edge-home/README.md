# Orrica Edge website

Run the local website with Node.js 18 or later:

```powershell
node server.cjs
```

Then open `http://127.0.0.1:4173`.

- Home: `/`
- Open roles: `/jobs.html`
- Job detail: select any open role
- Recruiter posting portal: `/admin.html`

Jobs posted through the recruiter portal are saved in `data/jobs.json` and appear immediately on both the homepage and open-roles page. Add authentication and use a managed database before public deployment.
