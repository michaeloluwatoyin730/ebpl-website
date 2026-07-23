const fs = require('fs');

// Fix index.html - replace SVG logo mark with real logo
let index = fs.readFileSync('index.html', 'utf8');
index = index.replace(
  `<svg class="nav__logo-mark" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="36" height="36" rx="6" fill="#0B3D2E"/>
          <path d="M8 12h20v3H8zM8 17h14v3H8zM8 22h20v3H8z" fill="#C8972A"/>
        </svg>`,
  `<img src="assets/img/ebpl-logo.png" style="width:36px;height:36px;border-radius:6px;object-fit:cover;" alt="EBPL Logo">`
);
fs.writeFileSync('index.html', index);
console.log('index.html: Fixed');

// Fix brands.html - add real FlashPay and ADDY logos
let brands = fs.readFileSync('pages/brands.html', 'utf8');

// FlashPay logo
brands = brands.replace(
  `        <div class="brand-hero__logo" style="background: #1A3C2E;">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M22 4L12 18h8L14 32l16-18h-9L22 4z" fill="#C8972A"/>
          </svg>
        </div>`,
  `        <div class="brand-hero__logo" style="background:#1A3C2E; overflow:hidden;">
          <img src="../assets/img/flashpay-logo.png" style="width:72px;height:72px;object-fit:cover;" alt="FlashPay Logo">
        </div>`
);

// ADDY logo
brands = brands.replace(
  `        <div class="brand-hero__logo" style="background: #C8972A;">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="18" font-weight="800" fill="white" font-family="Georgia,serif">A</text>
          </svg>
        </div>`,
  `        <div class="brand-hero__logo" style="background:#C8972A; overflow:hidden;">
          <img src="../assets/img/addy-logo.png" style="width:72px;height:72px;object-fit:cover;" alt="ADDY Logo">
        </div>`
);

fs.writeFileSync('pages/brands.html', brands);
console.log('brands.html: Fixed');
