<template>
  <div class="about">
    <section class="hero">
      <div class="container">
        <h1>O mně</h1>
        <p>Dasa Ouhrabkova - Vaše průvodkyně profesním rozvojem</p>
      </div>
    </section>

    <section class="container">
      <div style="max-width: 800px; margin: 0 auto;">
        <div class="card">
          <h2>Vítejte!</h2>
          <p style="font-size: 1.1em; line-height: 1.8; margin-bottom: 20px;">
            Jmenuji se <strong>Dasa Ouhrabkova</strong> a věnuji se profesnímu vzdělávání pro úředníky, sociální pracovníky a soukromé firmy. 
            Mým cílem je pomáhat lidem rozvíjet jejich dovednosti a dosahovat lepších výsledků v práci.
          </p>

          <h3>Moje specializace</h3>
          <p style="line-height: 1.8; margin-bottom: 20px;">
            S dlouholetými zkušenostmi v oblasti vzdělávání se zaměřuję na praktický přístup, který účastníkům kurzů 
            přináší konkrétní nástroje použitelné v každodenní praxi. Každý kurz připravuji na míru tak, aby odpovídal 
            specifickým potřebám dané organizace nebo skupiny.
          </p>

          <h3>Oblasti působení</h3>
          <ul style="line-height: 2; margin: 20px 0; padding-left: 30px;">
            <li>Komunikační dovednosti a asertivita</li>
            <li>Práce s náročnými situacemi a klienty</li>
            <li>Týmová spolupráce a budování vztahů</li>
            <li>Krizová intervence a podpora</li>
            <li>Profesní rozvoj a prevence vyhoření</li>
            <li>Moderní přístupy ve veřejné správě</li>
          </ul>

          <h3>Filozofie práce</h3>
          <p style="line-height: 1.8; margin-bottom: 20px;">
            Věřím, že kvalitní vzdělávání musí být <strong>praktické, inspirativní a přátelské</strong>. 
            V mých kurzech se neučíte jen teorii, ale pracujete s reálnými situacemi a získáváte nástroje, 
            které můžete okamžitě využít. Kladu důraz na pozitivní atmosféru a individuální přístup ke každému účastníkovi.
          </p>

          <h3>Hodnoty, kterými se řídím</h3>
          <div class="cards" style="margin-top: 30px;">
            <div class="card">
              <div class="card-icon">💡</div>
              <h3>Profesionalita</h3>
              <p>Odbornost a zkušenosti na prvním místě</p>
            </div>
            <div class="card">
              <div class="card-icon">❤️</div>
              <h3>Empatie</h3>
              <p>Pochopení a respekt ke každému</p>
            </div>
            <div class="card">
              <div class="card-icon">🌱</div>
              <h3>Rozvoj</h3>
              <p>Neustálé zlepšování a růst</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-40">
          <p style="font-size: 1.2em; color: var(--primary-dark); margin-bottom: 20px;">
            Těším se na spolupráci s vámi!
          </p>
          <router-link to="/kontakt" class="cta-button">Napište mi</router-link>
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
