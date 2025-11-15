<template>
  <div class="reviews">
    <section class="hero">
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
