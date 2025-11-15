<template>
  <div id="app">
    <nav>
      <div class="container">
        <div class="logo">
          <router-link to="/">
            <img src="/logo.svg" alt="Dasa Ouhrabkova - Evolvo.cz" />
          </router-link>
        </div>
        <ul>
          <li><router-link to="/">Domů</router-link></li>
          <li><router-link to="/kurzy">Kurzy</router-link></li>
          <li><router-link to="/o-mne">O mně</router-link></li>
          <li><router-link to="/recenze">Recenze</router-link></li>
          <li><router-link to="/kontakt">Kontakt</router-link></li>
        </ul>
      </div>
    </nav>

    <main>
      <router-view />
    </main>

    <footer>
      <div class="container">
        <p>&copy; 2024 Dasa Ouhrabkova - Evolvo.cz</p>
        <p>Profesionální vzdělávání pro úředníky, sociální pracovníky a firmy</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
