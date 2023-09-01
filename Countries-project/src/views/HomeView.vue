<script setup>

import { useCountriesStore } from '../stores/counter';
import { useRouter } from 'vue-router';
import { onMounted } from "vue";
import NavbarComponent from '../components/NavbarComponent.vue';

const router = useRouter();
const countriesStore = useCountriesStore();


onMounted(() => {
  countriesStore.fetchCountriesData(); 
});
</script>

<template>
  <main>
    <NavbarComponent/>
    <section>
      <div class="search">
        <div class="inputField">
          <img src="../assets/searchsearch.png">
          <input v-model="countriesStore.search" type="text" placeholder="Search for a country…">
        </div>
        <div class="regionField">
        <select v-model="countriesStore.selectedRegion" name="region" id="region">
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">0ceania</option>
        </select>
        </div>
        
      </div>
      
      <div class="cardSection" v-if="countriesStore.filteredCountries.length > 0">
        <div class="countryCards" @click="router.push({ name: 'detail', params: { name: country.name.common}} )" v-for="country in countriesStore.filteredCountries" :key="country.name.common" >
          <img :src="country.flags.png" alt="flag" class="flag">
          <div class="countryInfo">
            <h3>{{ country.name.common }}</h3>
            <p><strong>Population:</strong> {{ country.population }}</p>
            <p><strong>Region:</strong> {{ country.region?.common }}</p>
            <p><strong>Capital:</strong> {{ country.capital?.[0] }}</p>
          </div>
          
        </div>
      </div>
      <p v-else>No results</p>
    </section>
  </main>
</template>

<style scoped>
section{
  background: #FAFAFA;
  height: 100vh;
}
.search{
  display: flex;
  flex-direction: column;
  
  gap: 40px;
  padding: 24px 16px 32px 16px;
}
.inputField{
  display: flex;
  align-items: center;
  gap: 26px;
  padding: 16px 32px;
  border-radius: 5px;
  background: #FFF;
  
}
.inputField img{
  width: 15.556px;
  height: 15.556px;
}

input{
  width: 100%;
  color: #C4C4C4;
  font-family: 'Nunito Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  border: none;
  

}
textarea:focus, input:focus{
  outline: none;
}

select {
  
  width: 150px;
 
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #111517;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  
  background-repeat: no-repeat;
  background-position: right center;
}


select::-ms-expand {
  display: none;
}


option {
  color: #111517;
  background-color: #fff;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
}


select option:checked {
  background-color: #f5f2f2;
}


select:focus {
  outline: none;
  border-color: #1e87f0;
  box-shadow: 0 0 0 2px rgba(30, 135, 240, 0.2);
}


select:hover {
  border-color: #aaa;
}
.cardSection{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}
.countryCards{
  
  border-radius: 5px;
  background: #FFF;
}
.countryCards img{
  width: 267px;
height: 160px;
}
.countryInfo{
  padding: 24px 0px 48px 24px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
 
}
.countryInfo h3{
  color: #111517;
  font-family: 'Nunito Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 26px; /* 144.444% */
}
.countryInfo p{
  color: #111517;
  font-family: 'Nunito Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 114.286% */
}

@media (min-width: 1024px) {
.search{
  flex-direction: row;
  justify-content: space-between;
  padding: 48px 80px;
}
.inputField{
  padding: 19px 200px 19px 32px;
  
}
.inputField img{
  width: 17.5px;
  height: 17.5px;
  
}
input{
  color: #848484;
  font-size: 14px;
  width: 100%;


}

select{
  font-size: 14px;
  padding: 19px 77px 19px 24px;
   
}


}
</style>

























