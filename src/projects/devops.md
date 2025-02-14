---
banner: '/devops/media/images/devops-banner.png'
title: DevOps
description: Overview of the DevOps stuff I've done
date: '2025-01-28'
tags:
  - DOCKER
  - CADDY
  - PM2
  - CLOUDFLARE
  - CHECKMK
published: true
order: 3
---

<script>

  import Tags from '../lib/components/Tags.svelte'
</script>

## Development and Operations 🐋

<hr />

### **Web Server Configuration**

<Tags tags={[
"Docker", "CADDY", "PM2", "Cloudflare", "CheckMK"
]} />

**DNS & Web Server Management**

- Configure DNS records (A, CNAME, TXT, MX) and domain resolution (Cloudflare)
- Manage subdomains, redirects, and email routing with MX records
- Set up and configure web servers (Caddy) for static & dynamic sites
- Implement reverse proxies for backend services (Node.js APIs)
- Manage SSL/TLS (Let’s Encrypt), caching, and compression (gzip)
- Configure URL rewrites, redirects, error pages, and client-side routing for SPAs

**Application Hosting & Deployment**

- Host and manage Node.js applications with PM2 & systemd
- Deploy applications using Git (`scp`, `rsync` for file transfers)
- Configure environment variables and run applications in production mode
- Automate system updates, security patches, and scheduled tasks (cron jobs)

**Containerization & Security**

- Deploy and manage applications with Docker & Docker Compose
- Set up reverse proxies for containerized services and manage networking
- Secure servers: SSH key authentication, firewalls, and least privilege access
- Restrict root login, disable password-based SSH, and monitor threats

**Monitoring & Optimization**

- Centralized logging, log rotation, and request rate limiting
- Monitor server performance using `htop`, `top`, `netstat`, and PM2 logs

<br />

---
