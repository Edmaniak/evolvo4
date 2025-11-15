<template>
  <div class="home">
    <section class="hero">
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
