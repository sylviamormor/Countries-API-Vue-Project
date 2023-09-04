<script setup>

import NavbarComponent from '../components/NavbarComponent.vue';
import { useRoute, RouterLink } from 'vue-router';
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
    <RouterLink to="/">
        <button>back</button>
    </RouterLink>
   
    
    <div class="countryInfo">
      <div>
      <img :src="countryStore.countryDetails[0]?.flags.png" :alt="countryStore.countryDetails[0]?.name.common" class="flag">
    </div>
    <div class="allInfo">
      <div class="info">
        <h2>{{ countryStore.countryDetails[0]?.name.common }}</h2>
        <p><strong>Native Name:</strong> {{ countryStore.countryDetails[0]?.name.nativeName }}</p>
        <p><strong>Population:</strong> {{ countryStore.countryDetails[0]?.population }}</p>
        <p><strong>Region:</strong> {{ countryStore.countryDetails[0]?.region }}</p>
        <p><strong>Subregion:</strong> {{ countryStore.countryDetails[0]?.subregion }}</p>
        <p><strong>Capital:</strong> {{ countryStore.countryDetails[0]?.capital[0] }}</p>
       <p><strong>Top Level Domain:</strong> {{ countryStore.countryDetails[0]?.tld[0] }}</p>
       <p><strong>Languages:</strong> {{ countryStore.countryDetails[0]?.languages[0] }}</p>
        
     
      </div>
        <div class="border" >
          <p><strong>Border Countries:</strong></p>
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

.border{
  display: flex;
  flex-direction: colomn;
  gap: 65px;
  padding-top: 70px;
}
ul{
  display: flex;
  flex-direction: row;
  gap: 32px;
}
li{
max-width: 96px;
width: 100%;
max-height: 28px;
height: 100%;
border-radius: 2px;
border: 0px solid #979797;
background: #FFF;
box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.10);
padding: 5px 27px;
list-style: none;
}


@media (min-width: 1024px) {
  
.countryInfo{
    display: flex;
    flex-direction: row;
    gap:80px ;
}

.countryInfo img{
    max-width: 559.715px;
height: 483.169px;

}

.border{
  display: flex;
  flex-direction: colomn;
  gap: 65px;
  padding-top: 70px;
}
ul{
  display: flex;
  flex-direction: row;
  gap: 32px;
}
li{
max-width: 96px;
width: 100%;
max-height: 28px;
height: 100%;
border-radius: 2px;
border: 0px solid #979797;
background: #FFF;
box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.10);
padding: 5px 27px;
list-style: none;
}


}
</style>
