<script setup>

import NavbarComponent from '../components/NavbarComponent.vue';
import { useRoute } from 'vue-router';
import { useCountriesStore } from '../stores/counter';
import { onMounted } from 'vue';
const route = useRoute();

const countryStore = useCountriesStore();
countryStore.updateSelectedCountry(route.params.name);




onMounted(() => {
    countryStore.fetchCountryDetails();
})


</script>

<template>
  <main>
    <NavbarComponent/>
    <!-- <RouterLink></RouterLink> -->
    <button>back</button>
    
    <div class="countryInfo">
      <img :src="countryStore.countryDetails[0]?.flags.png" :alt="countryStore.countryDetails[0]?.name.common" class="flag">
      <div class="info">
        <h2>{{ countryStore.countryDetails[0]?.name.common }}</h2>
        <p><strong>Native Name:</strong> {{ countryStore.countryDetails[0]?.name.nativeName }}</p>
        <p><strong>Population:</strong> {{ countryStore.countryDetails[0]?.population }}</p>
        <p><strong>Region:</strong> {{ countryStore.countryDetails[0]?.region }}</p>
        <p><strong>Subregion:</strong> {{ countryStore.countryDetails[0]?.subregion }}</p>
        <p><strong>Capital:</strong> {{ countryStore.countryDetails[0]?.capital[0] }}</p>
        <p><strong>Top Level Domain:</strong> {{ countryStore.countryDetails[0]?.tld[0] }}</p>
        <p><strong>Border Countries:</strong></p>
        <div>
        <ul>
          <li v-for="borderCountry in countryStore.countryDetails[0]?.borders" :key="borderCountry">
            {{ borderCountry }}
          </li>
        </ul>
    </div>
      </div>
      </div>
  </main>
</template>

<style scoped>
.countryInfo{
    display: flex;
    flex-direction: column;
    padding-left: 28px;
    padding-right: 28px;
   

}
.countryInfo img{
    padding-bottom: 20px;
}

button{
    border-radius: 2px;
background: #FFF;
box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);
width: 104px;
height: 32px;
margin-bottom: 50px;
margin-left: 20px;

}


@media (min-width: 1024px) {
.countryInfo{
    display: flex;
    flex-direction: row;
    gap:120px ;
}

.countryInfo img{
    max-width: 559.715px;
height: 483.169px;

}
}
</style>
