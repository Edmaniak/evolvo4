<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <h1>Vzdělávání, které posouvá vpřed</h1>
        <p>Profesionální kurzy a školení pro úředníky, sociální pracovníky a soukromé firmy. Rozvíjejte své dovednosti s Evolvo.cz</p>
        <router-link to="/kontakt" class="cta-button">Mám zájem o kurz</router-link>
      </div>
    </section>

    <section class="container">
      <h2>Co nabízím</h2>
      <div class="cards">
        <div class="card">
          <div class="card-icon">📚</div>
          <h3>Pro úředníky</h3>
          <p>Specializované kurzy zaměřené na efektivní komunikaci, právní předpisy a moderní administrativu pro veřejný sektor.</p>
        </div>

        <div class="card">
          <div class="card-icon">🤝</div>
          <h3>Pro sociální pracovníky</h3>
          <p>Praktická školení v oblasti práce s klienty, krizové intervence a profesního rozvoje v sociálních službách.</p>
        </div>

        <div class="card">
          <div class="card-icon">💼</div>
          <h3>Pro soukromé firmy</h3>
          <p>Firemní vzdělávání zaměřené na rozvoj měkkých dovedností, teambuilding a efektivní komunikaci v týmu.</p>
        </div>
      </div>
    </section>

    <section class="container">
      <div style="background: linear-gradient(135deg, #E8F4F8 0%, #FFFFFF 100%); padding: 60px 40px; border-radius: 16px; text-align: center;">
        <h2>Proč zvolit Evolvo.cz?</h2>
        <div class="cards">
          <div class="card">
            <div class="card-icon">✓</div>
            <h3>Praktický přístup</h3>
            <p>Kurzy postavené na reálných situacích a praktických cvičeních</p>
          </div>
          <div class="card">
            <div class="card-icon">⭐</div>
            <h3>Zkušená lektorka</h3>
            <p>Profesionální přístup s letitými zkušenostmi v oboru</p>
          </div>
          <div class="card">
            <div class="card-icon">🎯</div>
            <h3>Individuální přístup</h3>
            <p>Kurzy přizpůsobené specifickým potřebám vašeho týmu</p>
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
