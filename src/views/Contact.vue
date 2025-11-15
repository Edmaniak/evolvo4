<template>
  <div class="contact">
    <section class="hero">
      <div class="container">
        <h1>Kontakt</h1>
        <p>Mám zájem o kurz nebo mám dotaz</p>
      </div>
    </section>

    <section class="container">
      <div style="max-width: 800px; margin: 0 auto;">
        <div class="card">
          <h2>Kontaktní formulář</h2>
          <p style="margin-bottom: 30px; color: var(--text-light);">
            Vyplňte prosím formulář níže a já se vám ozvu do 24 hodin. 
            Společně najdeme kurz na míru vašim potřebám.
          </p>

          <form @submit.prevent="handleSubmit" v-if="!submitted">
            <div class="form-group">
              <label for="name">Jméno a příjmení *</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                required
                placeholder="Vaše celé jméno"
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
                placeholder="Název vaší organizace"
              />
            </div>

            <div class="form-group">
              <label for="courseType">Typ kurzu *</label>
              <select id="courseType" v-model="form.courseType" required>
                <option value="">-- Vyberte typ kurzu --</option>
                <option value="urednici">Kurzy pro úředníky</option>
                <option value="socialni">Kurzy pro sociální pracovníky</option>
                <option value="firemni">Kurzy pro firmy</option>
                <option value="jiny">Jiný / Individuální požadavek</option>
              </select>
            </div>

            <div class="form-group">
              <label for="participants">Předpokládaný počet účastníků</label>
              <input 
                type="number" 
                id="participants" 
                v-model="form.participants"
                min="1"
                placeholder="např. 10"
              />
            </div>

            <div class="form-group">
              <label for="message">Zpráva / Dotaz *</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                required
                placeholder="Popište prosím, co vás zajímá, jaké máte požadavky na kurz, nebo se zeptejte na cokoliv..."
              ></textarea>
            </div>

            <div class="form-group">
              <label style="display: flex; align-items: center; cursor: pointer;">
                <input 
                  type="checkbox" 
                  v-model="form.gdpr" 
                  required
                  style="width: auto; margin-right: 10px;"
                />
                <span>Souhlasím se zpracováním osobních údajů *</span>
              </label>
            </div>

            <button type="submit">Odeslat poptávku</button>
          </form>

          <div v-if="submitted" style="text-align: center; padding: 40px;">
            <div style="font-size: 60px; color: var(--accent-color); margin-bottom: 20px;">✓</div>
            <h3 style="color: var(--accent-color); margin-bottom: 15px;">Děkuji za vaši zprávu!</h3>
            <p style="font-size: 1.1em; margin-bottom: 30px;">
              Vaše poptávka byla úspěšně odeslána. Ozvu se vám co nejdříve, obvykle do 24 hodin.
            </p>
            <button @click="resetForm" style="background-color: var(--text-light);">
              Odeslat další zprávu
            </button>
          </div>
        </div>

        <div class="cards mt-40">
          <div class="card">
            <div class="card-icon">📧</div>
            <h3>E-mail</h3>
            <p><a href="mailto:info@evolvo.cz" style="color: var(--primary-color); text-decoration: none;">info@evolvo.cz</a></p>
          </div>

          <div class="card">
            <div class="card-icon">📱</div>
            <h3>Telefon</h3>
            <p><a href="tel:+420777888999" style="color: var(--primary-color); text-decoration: none;">+420 777 888 999</a></p>
          </div>

          <div class="card">
            <div class="card-icon">🌐</div>
            <h3>Web</h3>
            <p style="color: var(--primary-dark); font-weight: 600;">www.evolvo.cz</p>
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
      // In a real application, this would send data to a backend
      console.log('Form submitted:', this.form)
      
      // Simulate form submission
      this.submitted = true
      
      // Scroll to top to show success message
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
