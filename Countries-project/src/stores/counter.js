import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import axios from 'axios'

export const useCountriesStore = defineStore('country', () => {
  const countriesList = ref([])
  const countryDetails = ref([])
  const selectedCountry = ref('')
  const selectedRegion = ref('');
  const searchText = ref('')
  
  async function fetchCountriesData() {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`)
      countriesList.value = response.data;
    } catch (error) {
      console.error(error)
    }
  };

  async function fetchCountryDetails() {
    try {
      const result = await axios.get(`https://restcountries.com/v3.1/name/${selectedCountry.value}`)
      countryDetails.value = result.data;
    } catch (error) {
      console.error(error)
    }
  };

  function updateSelectedCountry(name){
    console.log(name)
    selectedCountry.value = name
  }

  // Define computed property for filtered countries
  const filteredCountries = computed(() => {
    console.log(selectedRegion.value)
    if (searchText.value) {
      if(selectedRegion.value){
        return countriesList.value.filter(country => country.region === selectedRegion.value && country.name.common.toLowerCase().includes(searchText.value.toLocaleLowerCase()));
      }else{
        return countriesList.value.filter(country => country.name.common.toLowerCase().includes(searchText.value.toLocaleLowerCase()));
      }
      }
    else if(selectedRegion.value){
      return countriesList.value.filter(country => country.region === selectedRegion.value);
    }
    
    else {
      return countriesList.value
    }
  });

  return { searchText, countryDetails, updateSelectedCountry, selectedCountry, fetchCountryDetails, countriesList, fetchCountriesData, selectedRegion, filteredCountries };
});











































