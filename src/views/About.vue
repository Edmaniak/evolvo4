<template>
  <div class="about">
    <section class="hero">
      <div class="hero-image">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#E8D5E8;stop-opacity:0.5" />
              <stop offset="50%" style="stop-color:#E8C5A5;stop-opacity:0.4" />
              <stop offset="100%" style="stop-color:#C7E8DC;stop-opacity:0.5" />
            </linearGradient>
          </defs>
          <rect width="1200" height="600" fill="url(#aboutGrad)"/>
          <ellipse cx="300" cy="200" rx="150" ry="100" fill="#B4A5D5" opacity="0.12"/>
          <ellipse cx="900" cy="400" rx="180" ry="120" fill="#C7E8DC" opacity="0.15"/>
          <path d="M 600,100 Q 650,200 600,300 Q 550,400 600,500" stroke="#E8D5E8" stroke-width="4" fill="none" opacity="0.2"/>
          <circle cx="800" cy="200" r="60" fill="#E8C5A5" opacity="0.15"/>
          <circle cx="400" cy="450" r="70" fill="#B4A5D5" opacity="0.1"/>
        </svg>
      </div>
      <div class="container">
        <h1>O mně</h1>
        <p>Jsem Daša – průvodkyně na cestě k osobnímu růstu</p>
      </div>
    </section>

    <section class="container">
      <div style="max-width: 900px; margin: 0 auto;">
        <div class="card">
          <h2>Vítejte na mé cestě</h2>
          <p style="font-size: 1.15em; line-height: 2; margin-bottom: 30px;">
            Jmenuji se <strong>Daša Ouhrabková</strong> a je mi ctí provázet lidi na jejich cestě k hlubšímu porozumění sobě samým. 
            Věřím, že skutečná změna přichází zevnitř – jemně, přirozeně, jako rozkvétající květina.
          </p>

          <h3>Co mě vede</h3>
          <p style="line-height: 2; margin-bottom: 30px;">
            Po letech práce s lidmi jsem pochopila, že nejcennější je vytvořit bezpečný prostor, kde můžete být sami sebou. 
            Pracuji s úředníky, sociálními pracovníky a týmy způsobem, který respektuje jedinečnost každého člověka 
            a podporuje přirozený růst bez zbytečného tlaku.
          </p>

          <h3>Moje cesta</h3>
          <ul style="line-height: 2.2; margin: 30px 0; padding-left: 30px; list-style: none;">
            <li>🌸 Autentická komunikace a hluboké naslouchání</li>
            <li>🌿 Práce s emocemi a vnitřními zdroji</li>
            <li>🦋 Podpora transformace bez násilí</li>
            <li>💫 Vytváření prostoru pro růst a léčení</li>
            <li>🌺 Prevence vyhoření a péče o sebe</li>
            <li>🌱 Harmonie v týmu a mezilidských vztazích</li>
          </ul>

          <h3>Moje filozofie</h3>
          <p style="line-height: 2; margin-bottom: 30px;">
            Věřím v <strong>jemnost, autenticitu a respekt</strong>. 
            V mých setkáních není místo pro výkon nebo dokonalost – jen pro upřímnost, růst a objevování. 
            Každý člověk má v sobě moudrost a sílu. Moje role je pouze vytvořit prostor, kde to může zazářit.
          </p>

          <h3>Co vás čeká</h3>
          <div class="cards" style="margin-top: 40px;">
            <div class="card">
              <div class="card-icon">💫</div>
              <h3>Bezpečný prostor</h3>
              <p>Místo bez hodnocení, plné přijetí a podpory</p>
            </div>
            <div class="card">
              <div class="card-icon">🌸</div>
              <h3>Osobní přístup</h3>
              <p>Každé setkání je jedinečné, jako vy</p>
            </div>
            <div class="card">
              <div class="card-icon">🌿</div>
              <h3>Jemná transformace</h3>
              <p>Změna, která přichází přirozeně a v pravý čas</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-40">
          <p style="font-size: 1.3em; color: var(--primary-dark); margin-bottom: 30px; font-style: italic;">
            "Nejkrásnější dar, který můžeme dát druhým, je naše autentická přítomnost."
          </p>
          <router-link to="/kontakt" class="cta-button">Pojďme se poznat</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
