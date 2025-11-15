<template>
  <div class="about">
    <section class="hero">
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
