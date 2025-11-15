<template>
  <div class="kurzy">
    <section class="hero">
      <div class="container">
        <h1>Nabídka kurzů</h1>
        <p>Profesionální vzdělávací programy šité na míru vašim potřebám</p>
      </div>
    </section>

    <section class="container">
      <h2>Kurzy pro úředníky</h2>
      <div class="cards">
        <div class="card">
          <div class="card-icon">📋</div>
          <h3>Efektivní komunikace ve veřejné správě</h3>
          <p><strong>Délka:</strong> 2 dny</p>
          <p><strong>Zaměření:</strong> Komunikace s občany, řešení konfliktů, asertivita</p>
          <p>Naučte se profesionálně komunikovat s veřejností a efektivně řešit náročné situace.</p>
        </div>

        <div class="card">
          <div class="card-icon">⚖️</div>
          <h3>Právní minimum pro úředníky</h3>
          <p><strong>Délka:</strong> 1 den</p>
          <p><strong>Zaměření:</strong> Základy správního práva, GDPR, práva občanů</p>
          <p>Přehled nejdůležitějších právních předpisů pro každodenní praxi.</p>
        </div>

        <div class="card">
          <div class="card-icon">💻</div>
          <h3>Digitalizace ve veřejné správě</h3>
          <p><strong>Délka:</strong> 1 den</p>
          <p><strong>Zaměření:</strong> E-government, digitální služby, moderní nástroje</p>
          <p>Využití moderních technologií pro zefektivnění práce úřadu.</p>
        </div>
      </div>

      <h2 class="mt-40">Kurzy pro sociální pracovníky</h2>
      <div class="cards">
        <div class="card">
          <div class="card-icon">🆘</div>
          <h3>Krizová intervence</h3>
          <p><strong>Délka:</strong> 2 dny</p>
          <p><strong>Zaměření:</strong> Řešení krizových situací, podpora klientů</p>
          <p>Praktické techniky pro zvládání krizových situací a poskytování efektivní pomoci.</p>
        </div>

        <div class="card">
          <div class="card-icon">🗣️</div>
          <h3>Efektivní komunikace s klienty</h3>
          <p><strong>Délka:</strong> 2 dny</p>
          <p><strong>Zaměření:</strong> Aktivní naslouchání, empatie, budování vztahu</p>
          <p>Rozvoj komunikačních dovedností pro práci s různými typy klientů.</p>
        </div>

        <div class="card">
          <div class="card-icon">🛡️</div>
          <h3>Prevence syndromu vyhoření</h3>
          <p><strong>Délka:</strong> 1 den</p>
          <p><strong>Zaměření:</strong> Sebepéče, supervize, work-life balance</p>
          <p>Techniky pro udržení psychické pohody a profesní efektivity.</p>
        </div>
      </div>

      <h2 class="mt-40">Kurzy pro soukromé firmy</h2>
      <div class="cards">
        <div class="card">
          <div class="card-icon">👥</div>
          <h3>Týmová komunikace a spolupráce</h3>
          <p><strong>Délka:</strong> 2 dny</p>
          <p><strong>Zaměření:</strong> Efektivní komunikace, řešení konfliktů, budování týmu</p>
          <p>Posílení týmové spolupráce a zlepšení komunikace mezi kolegy.</p>
        </div>

        <div class="card">
          <div class="card-icon">📊</div>
          <h3>Manažerské dovednosti</h3>
          <p><strong>Délka:</strong> 2 dny</p>
          <p><strong>Zaměření:</strong> Vedení lidí, delegování, motivace týmu</p>
          <p>Rozvoj klíčových dovedností pro efektivní vedení týmu.</p>
        </div>

        <div class="card">
          <div class="card-icon">🎯</div>
          <h3>Time management a produktivita</h3>
          <p><strong>Délka:</strong> 1 den</p>
          <p><strong>Zaměření:</strong> Prioritizace, plánování, efektivní využití času</p>
          <p>Nástroje a techniky pro zvýšení osobní i týmové produktivity.</p>
        </div>
      </div>

      <div class="text-center mt-40">
        <router-link to="/kontakt" class="cta-button">Nezávazná poptávka</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Kurzy'
}
</script>

<style scoped>
.card p {
  margin: 8px 0;
}
</style>
