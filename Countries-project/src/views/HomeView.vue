<script setup>

import { useCountriesStore } from '../stores/counter';
import { useRouter } from 'vue-router';
import { onMounted } from "vue";
import NavbarComponent from '../components/NavbarComponent.vue';

const router = useRouter();
const countriesStore = useCountriesStore();
//countriesStore.getCountriesData();


onMounted(() => {
  countriesStore.fetchCountriesData(); // Fetch countries when the component is mounted
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
/*select{
  padding: 14px 90px 14px 24px;
  border: none;
  color: #111517;
  font-family: 'Nunito Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; 
  border-radius: 5px;
  background: #FFF;
  width: 100px;
}
option{
  color: red;
  
}*/
select {
  /* Adjust the width here to reduce the width of the select dropdown */
  width: 150px;
  /* Customize the appearance of the select dropdown */
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

/* Styles dropdown arrow */
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

/* Style the selected option */
select option:checked {
  background-color: #ae1f1f;
}

/* Style on focus */
select:focus {
  outline: none;
  border-color: #1e87f0;
  box-shadow: 0 0 0 2px rgba(30, 135, 240, 0.2);
}

/* Style on hover */
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
  border: 1px solid red;
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
  border: 1px solid red;
}
.countryInfo h3{
  color: #111517;
  font-family: 'Nunito Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 26px; /* 144.444% */
}
.country-info p{
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
  border: 1px solid red;
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
  border: 1px solid red
}

}
</style>

























<!-- <script setup>
import {ref, computed} from 'vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import {useCountryStore} from '../stores/counter'

const countryStore = useCountryStore()

countryStore.fetchCountry()

</script>

<template>
<div class="main">
<NavbarComponent/>
<div class="inputField">
  <img src="../assets/searchsearch.png" alt="">

  <input v-model="countriesStore.search" type="text" placeholder="Search for a country…">
        </div>
        <div class="region-box">
        <select v-model="countriesStore.selectedRegion" name="region" id="region">
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">0ceania</option>
        </select>
        </div>

 <label for="Region"></label>
<select name= Filter by Region: id="regionNames">
  <option value="africa">Africa</option>
  <option value="america">America</option>
  <option value="asia">Asia</option>
  <option value="europe">Europe</option>
</select> -->
<!-- <div class="countries">
  <div class="cards" v-for="country in countryStore.countries" :key="recipe.idMeal">
     <img class="cardImg" :src="recipe.strMealThumb" :alt="recipe.strMeal" /> 
     <p>{{ recipe.strMeal }}</p>
</div> 
 </div> 
<div>
  <div class="cards">
        <div class="card" v-for="(country, index) in countryStore.countryData" :key="index">
            <div class="flag">
                <img :src="country.flags.png" :alt="country.flags.svg">
            </div>
             <div class="flag-details"> 
                <h3 class="country">{{ country.name.common }}</h3>
                <div class="c-details">
                    <p><b>Population:</b> <span>{{ country.population }}</span></p>
                    <p><b>Region:</b>  <span>{{ country.region }}</span></p>
                    <p><b>Capital:</b>  <span>{{ country.capital }}</span></p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<style scoped>

.main{
  background: #FAFAFA;
}
.inputField{
  width: 343px;
height: 48px;
border-radius: 5px;
background: #FFF;
box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
padding: 14px 0px 14px 32px;
margin:24px 16px
}

.input{
 border: none;
}
.cards{
  width: 264px;
height: 336px;
border-radius: 5px;
background: #FFF;
box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
padding: 40px 55px 40px 55px;
}
</style> -->