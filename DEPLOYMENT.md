# Deployment Guide - Evolvo.cz

## Quick Deploy Options

### 1. Netlify (Recommended)

Nejjednodušší způsob nasazení:

1. Připojte GitHub repository k Netlify
2. Nastavte build příkaz: `npm run build`
3. Nastavte publish directory: `dist`
4. Nasaďte!

### 2. Vercel

1. Importujte projekt z GitHub
2. Vercel automaticky detekuje Vite
3. Nasaďte s jedním kliknutím

### 3. GitHub Pages

```bash
# Build projekt
npm run build

# Nasaďte dist složku na GitHub Pages
```

### 4. Vlastní server

```bash
# Build projekt
npm run build

# Nahrajte obsah dist/ složky na váš webový server
# Ujistěte se, že server podporuje SPA routing
```

## Konfigurace pro produkci

### Base URL

Pokud nasazujete do podsložky, upravte `vite.config.js`:

```javascript
export default defineConfig({
  base: '/your-subfolder/',
  plugins: [vue()]
})
```

### Environment Variables

Vytvořte `.env.production` pro produkční proměnné:

```
VITE_API_URL=https://api.evolvo.cz
VITE_CONTACT_EMAIL=info@evolvo.cz
```

## Server Requirements

- **Node.js**: Pouze pro build (není potřeba v produkci)
- **Webový server**: Nginx, Apache, nebo jakýkoliv statický hosting
- **HTTPS**: Doporučeno pro formulář

## SPA Routing Setup

### Nginx

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### Apache

Vytvořte `.htaccess` v dist složce:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Performance Tips

1. ✅ Aktivujte gzip kompresi
2. ✅ Nastavte správné cache headers
3. ✅ Použijte CDN pro statické soubory
4. ✅ Minimalizujte obrázky (logo.svg je již optimalizované)

## Doména evolvo.cz

Pro nasazení na vlastní doménu:

1. Nakonfigurujte DNS záznamy na váš hosting
2. Nastavte HTTPS certifikát (např. Let's Encrypt)
3. Ujistěte se, že formulář funguje přes HTTPS

## Kontaktní formulář

Pro produkční nasazení kontaktního formuláře doporučujeme:

- **Formspree** (https://formspree.io)
- **EmailJS** (https://www.emailjs.com)
- **Vlastní backend API**

Příklad integrace s Formspree v `Contact.vue`:

```vue
<form @submit.prevent="handleSubmit" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## Monitoring

Doporučené nástroje:
- Google Analytics
- Hotjar pro user behavior
- Sentry pro error tracking
