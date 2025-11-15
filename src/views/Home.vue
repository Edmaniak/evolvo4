<template>
  <div class="home">
    <section class="hero">
      <div class="hero-image">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="homeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#E8D5E8;stop-opacity:0.6" />
              <stop offset="50%" style="stop-color:#C7E8DC;stop-opacity:0.5" />
              <stop offset="100%" style="stop-color:#E8C5A5;stop-opacity:0.4" />
            </linearGradient>
          </defs>
          <rect width="1200" height="600" fill="url(#homeGrad)"/>
          <circle cx="200" cy="150" r="120" fill="#B4A5D5" opacity="0.15"/>
          <circle cx="900" cy="400" r="150" fill="#C7E8DC" opacity="0.2"/>
          <circle cx="600" cy="300" r="100" fill="#E8C5A5" opacity="0.15"/>
          <path d="M 300,500 Q 400,350 500,500 T 700,500" stroke="#B4A5D5" stroke-width="3" fill="none" opacity="0.2"/>
          <path d="M 100,200 Q 250,100 400,200 T 700,200" stroke="#C7E8DC" stroke-width="2" fill="none" opacity="0.25"/>
        </svg>
      </div>
      <div class="container">
        <h1>Cesta k osobnímu růstu a transformaci</h1>
        <p>Doprovázím vás na cestě k hlouběkému porozumění sobě samým. Profesionální vzdělávání s osobním přístupem pro úředníky, sociální pracovníky a týmy.</p>
        <router-link to="/kontakt" class="cta-button">Začít společnou cestu</router-link>
      </div>
    </section>

    <section class="container">
      <h2>S kým pracuji</h2>
      <div class="cards">
        <div class="card">
          <div class="card-icon">🌸</div>
          <h3>Pro úředníky</h3>
          <p>Podpořím vás v nalezení rovnováhy mezi profesionalitou a lidskostí. Společně objevíme sílu autentické komunikace a empatického přístupu k lidem.</p>
        </div>

        <div class="card">
          <div class="card-icon">🌿</div>
          <h3>Pro sociální pracovníky</h3>
          <p>Nabízím bezpečný prostor pro regeneraci, reflexi a posílení vašich vnitřních zdrojů. Naučíme se pečovat o sebe, abychom mohli pečovat o druhé.</p>
        </div>

        <div class="card">
          <div class="card-icon">🦋</div>
          <h3>Pro týmy a firmy</h3>
          <p>Vytvořím prostor pro autentickou komunikaci, vzájemné pochopení a harmonii v týmu. Růst společně znamená růst každého jednotlivce.</p>
        </div>
      </div>
    </section>

    <section class="container">
      <div style="background: linear-gradient(135deg, rgba(232, 213, 232, 0.4) 0%, rgba(199, 232, 220, 0.4) 100%); padding: 80px 50px; border-radius: 40px; text-align: center;">
        <h2>Moje hodnoty</h2>
        <div class="cards">
          <div class="card">
            <div class="card-icon">💫</div>
            <h3>Autentičnost</h3>
            <p>Věřím v sílu být sám sebou a vytvářet prostředí, kde se každý může otevřít</p>
          </div>
          <div class="card">
            <div class="card-icon">🌺</div>
            <h3>Soucit a empatie</h3>
            <p>Přistupuji k vám s porozuměním, respektem a srdečností</p>
          </div>
          <div class="card">
            <div class="card-icon">🌱</div>
            <h3>Jemná transformace</h3>
            <p>Změna nemusí být bolestivá - může být přirozená jako růst květiny</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
