<template>
  <div class="kurzy">
    <section class="hero">
      <div class="hero-image">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="kurzyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#C7E8DC;stop-opacity:0.6" />
              <stop offset="100%" style="stop-color:#B4A5D5;stop-opacity:0.5" />
            </linearGradient>
          </defs>
          <rect width="1200" height="600" fill="url(#kurzyGrad)"/>
          <circle cx="150" cy="450" r="80" fill="#8B7FB8" opacity="0.1"/>
          <circle cx="1000" cy="150" r="120" fill="#C7E8DC" opacity="0.15"/>
          <rect x="400" y="100" width="150" height="150" rx="20" fill="#E8D5E8" opacity="0.15" transform="rotate(15 475 175)"/>
          <rect x="700" y="350" width="120" height="120" rx="15" fill="#E8C5A5" opacity="0.12" transform="rotate(-20 760 410)"/>
          <path d="M 200,300 L 350,150 L 500,300 L 350,450 Z" fill="#B4A5D5" opacity="0.1"/>
        </svg>
      </div>
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
