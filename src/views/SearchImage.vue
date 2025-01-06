<template>
    <div id="search">
      <h1>Recherche d'image</h1>
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Entrez un mot-clé"
      />
      <button class="btn" @click="searchImage">Rechercher</button>
  
      <div v-if="results.length > 0" class="results">
        <h2>Résultats :</h2>
        <ul>
          <li v-for="(result, index) in results" :key="index">
            {{ result }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchImage',
    data() {
      return {
        searchQuery: '',
        results: [],
      };
    },
    methods: {
      searchImage() {
        // Simuler une recherche
        this.results = [
          `Résultat 1 pour "${this.searchQuery}"`,
          `Résultat 2 pour "${this.searchQuery}"`,
          `Résultat 3 pour "${this.searchQuery}"`,
        ];
      },
    },
  };
  </script>
  
  <style>
  #search {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: Arial, sans-serif;
  }
  
  input {
    padding: 10px;
    margin: 10px 0;
    font-size: 16px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  
  
  .results {
    margin-top: 20px;
    text-align: left;
  }
  
  .results ul {
    list-style-type: none;
    padding: 0;
  }
  </style>
  