<template>
  <div class="contact">
    <section class="hero">
      <div class="hero-image">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="contactGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#E8C5A5;stop-opacity:0.5" />
              <stop offset="50%" style="stop-color:#C7E8DC;stop-opacity:0.5" />
              <stop offset="100%" style="stop-color:#B4A5D5;stop-opacity:0.5" />
            </linearGradient>
          </defs>
          <rect width="1200" height="600" fill="url(#contactGrad)"/>
          <circle cx="250" cy="250" r="100" fill="#E8D5E8" opacity="0.15"/>
          <circle cx="950" cy="350" r="130" fill="#C7E8DC" opacity="0.15"/>
          <rect x="500" y="150" width="200" height="200" rx="100" fill="#B4A5D5" opacity="0.1"/>
          <path d="M 150,400 Q 300,350 450,400 Q 600,450 750,400" stroke="#E8C5A5" stroke-width="3" fill="none" opacity="0.2"/>
          <circle cx="600" cy="100" r="50" fill="#E8D5E8" opacity="0.12"/>
        </svg>
      </div>
      <div class="container">
        <h1>Spojme se</h1>
        <p>Začněme společnou cestu k vašemu růstu</p>
      </div>
    </section>

    <section class="container">
      <div style="max-width: 900px; margin: 0 auto;">
        <div class="card">
          <h2>Napište mi</h2>
          <p style="margin-bottom: 40px; color: var(--text-light); font-size: 1.1em; line-height: 1.9;">
            Ráda s vámi promluvím o tom, jak společně můžeme podpořit váš osobní růst nebo rozvoj vašeho týmu. 
            Vyplňte formulář níže a ozvěme se vám do 24 hodin.
          </p>

          <form @submit.prevent="handleSubmit" v-if="!submitted">
            <div class="form-group">
              <label for="name">Vaše jméno *</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                required
                placeholder="Jak vám mám říkat?"
              />
            </div>

            <div class="form-group">
              <label for="email">E-mail *</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                required
                placeholder="vas@email.cz"
              />
            </div>

            <div class="form-group">
              <label for="phone">Telefon</label>
              <input 
                type="tel" 
                id="phone" 
                v-model="form.phone"
                placeholder="+420 xxx xxx xxx"
              />
            </div>

            <div class="form-group">
              <label for="organization">Organizace / Firma</label>
              <input 
                type="text" 
                id="organization" 
                v-model="form.organization"
                placeholder="Pokud píšete za organizaci"
              />
            </div>

            <div class="form-group">
              <label for="courseType">Co vás zajímá? *</label>
              <select id="courseType" v-model="form.courseType" required>
                <option value="">-- Vyberte, prosím --</option>
                <option value="urednici">Kurzy pro úředníky</option>
                <option value="socialni">Kurzy pro sociální pracovníky</option>
                <option value="firemni">Kurzy pro týmy a firmy</option>
                <option value="jiny">Individuální setkání</option>
              </select>
            </div>

            <div class="form-group">
              <label for="participants">Kolik vás bude?</label>
              <input 
                type="number" 
                id="participants" 
                v-model="form.participants"
                min="1"
                placeholder="Orientačně"
              />
            </div>

            <div class="form-group">
              <label for="message">Vaše zpráva *</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                required
                placeholder="Co vás vede k tomu, napsat mi? Co byste rádi změnili nebo objevili?"
              ></textarea>
            </div>

            <div class="form-group">
              <label style="display: flex; align-items: center; cursor: pointer;">
                <input 
                  type="checkbox" 
                  v-model="form.gdpr" 
                  required
                  style="width: auto; margin-right: 12px;"
                />
                <span>Souhlasím se zpracováním osobních údajů *</span>
              </label>
            </div>

            <button type="submit">Odeslat zprávu</button>
          </form>

          <div v-if="submitted" style="text-align: center; padding: 60px 40px;">
            <div style="font-size: 80px; margin-bottom: 30px;">🌸</div>
            <h3 style="color: var(--primary-dark); margin-bottom: 20px; font-size: 2em;">Děkuji za vaši zprávu</h3>
            <p style="font-size: 1.2em; margin-bottom: 40px; line-height: 1.9; color: var(--text-light);">
              Vaše slova ke mně dorazila. Brzy se vám ozvu a společně najdeme cestu, která bude pro vás ta pravá.
            </p>
            <button @click="resetForm" style="background: linear-gradient(135deg, var(--tertiary-color), var(--accent-color));">
              Napsat další zprávu
            </button>
          </div>
        </div>

        <div class="cards mt-40">
          <div class="card">
            <div class="card-icon">💌</div>
            <h3>E-mail</h3>
            <p><a href="mailto:info@evolvo.cz" style="color: var(--primary-color); text-decoration: none;">info@evolvo.cz</a></p>
          </div>

          <div class="card">
            <div class="card-icon">☎️</div>
            <h3>Telefon</h3>
            <p><a href="tel:+420777888999" style="color: var(--primary-color); text-decoration: none;">+420 777 888 999</a></p>
          </div>

          <div class="card">
            <div class="card-icon">🌐</div>
            <h3>Web</h3>
            <p style="color: var(--primary-dark); font-weight: 400;">www.evolvo.cz</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      submitted: false,
      form: {
        name: '',
        email: '',
        phone: '',
        organization: '',
        courseType: '',
        participants: '',
        message: '',
        gdpr: false
      }
    }
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.form)
      this.submitted = true
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    resetForm() {
      this.submitted = false
      this.form = {
        name: '',
        email: '',
        phone: '',
        organization: '',
        courseType: '',
        participants: '',
        message: '',
        gdpr: false
      }
    }
  }
}
</script>
