<template>
  <div class="reviews">
    <section class="hero">
      <div class="hero-image">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="reviewsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#C7E8DC;stop-opacity:0.6" />
              <stop offset="50%" style="stop-color:#E8D5E8;stop-opacity:0.5" />
              <stop offset="100%" style="stop-color:#E8C5A5;stop-opacity:0.4" />
            </linearGradient>
          </defs>
          <rect width="1200" height="600" fill="url(#reviewsGrad)"/>
          <polygon points="200,150 250,250 150,250" fill="#B4A5D5" opacity="0.12"/>
          <polygon points="1000,400 1100,500 900,500" fill="#C7E8DC" opacity="0.15"/>
          <polygon points="600,100 650,180 550,180" fill="#E8C5A5" opacity="0.1"/>
          <circle cx="350" cy="400" r="90" fill="#E8D5E8" opacity="0.15"/>
          <circle cx="850" cy="250" r="75" fill="#B4A5D5" opacity="0.12"/>
          <path d="M 100,500 Q 300,450 500,500 T 900,500" stroke="#C7E8DC" stroke-width="3" fill="none" opacity="0.2"/>
        </svg>
      </div>
      <div class="container">
        <h1>Recenze</h1>
        <p>Co říkají účastníci mých kurzů</p>
      </div>
    </section>

    <section class="container">
      <div class="cards">
        <div class="card">
          <div style="color: #FFD700; font-size: 24px; margin-bottom: 15px;">★★★★★</div>
          <p style="font-style: italic; margin-bottom: 15px;">
            "Kurz komunikace pro úředníky mi otevřel oči. Konečně umím lépe zvládat náročné situace s občany. 
            Paní Ouhrabkova má skvělý přístup a vše vysvětlí jasně a srozumitelně."
          </p>
          <p style="font-weight: 600; color: var(--primary-dark);">Jana K., úřednice</p>
        </div>

        <div class="card">
          <div style="color: #FFD700; font-size: 24px; margin-bottom: 15px;">★★★★★</div>
          <p style="font-style: italic; margin-bottom: 15px;">
            "Školení krizové intervence bylo velmi přínosné. Praktická cvičení a reálné příklady z praxe - 
            přesně to, co jsme potřebovali. Určitě doporučuji!"
          </p>
          <p style="font-weight: 600; color: var(--primary-dark);">Martin P., sociální pracovník</p>
        </div>

        <div class="card">
          <div style="color: #FFD700; font-size: 24px; margin-bottom: 15px;">★★★★★</div>
          <p style="font-style: italic; margin-bottom: 15px;">
            "Firemní kurz týmové komunikace výrazně zlepšil atmosféru v našem týmu. Dasa je profesionální 
            lektorka s individuálním přístupem. Děkujeme!"
          </p>
          <p style="font-weight: 600; color: var(--primary-dark);">Petra Š., HR manažerka</p>
        </div>

        <div class="card">
          <div style="color: #FFD700; font-size: 24px; margin-bottom: 15px;">★★★★★</div>
          <p style="font-style: italic; margin-bottom: 15px;">
            "Kurz time managementu mi pomohl zorganizovat si práci mnohem efektivněji. Získal jsem praktické 
            nástroje, které používám každý den."
          </p>
          <p style="font-weight: 600; color: var(--primary-dark);">Tomáš V., projektový manažer</p>
        </div>

        <div class="card">
          <div style="color: #FFD700; font-size: 24px; margin-bottom: 15px;">★★★★★</div>
          <p style="font-style: italic; margin-bottom: 15px;">
            "Školení prevence vyhoření bylo jako záchranný kruh. Naučila jsem se techniky sebepéče, 
            které mi pomáhají udržet si energii a radost z práce."
          </p>
          <p style="font-weight: 600; color: var(--primary-dark);">Lucie N., sociální pracovnice</p>
        </div>

        <div class="card">
          <div style="color: #FFD700; font-size: 24px; margin-bottom: 15px;">★★★★★</div>
          <p style="font-style: italic; margin-bottom: 15px;">
            "Profesionální přístup, příjemná atmosféra a hlavně praktické výstupy. 
            Kurz manažerských dovedností splnil všechna naše očekávání."
          </p>
          <p style="font-weight: 600; color: var(--primary-dark);">Robert K., vedoucí oddělení</p>
        </div>
      </div>

      <div class="text-center mt-40">
        <div class="card" style="max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #E8F4F8 0%, #FFFFFF 100%);">
          <h3>Najdete nás i na Google</h3>
          <p style="margin-bottom: 20px;">
            Další recenze a hodnocení našich služeb najdete na Google Maps.
          </p>
          <a 
            href="https://www.google.com/search?q=evolvo.cz" 
            target="_blank" 
            rel="noopener noreferrer"
            class="cta-button"
            style="display: inline-block;"
          >
            Zobrazit recenze na Google
          </a>
        </div>
      </div>

      <div class="text-center mt-40">
        <p style="font-size: 1.2em; color: var(--primary-dark); margin-bottom: 20px;">
          Chcete se také stát součástí spokojených klientů?
        </p>
        <router-link to="/kontakt" class="cta-button">Kontaktujte mě</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Reviews'
}
</script>
