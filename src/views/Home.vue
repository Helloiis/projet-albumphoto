<template>
    <div id="home">
      <p>Choisissez une action :</p>
      <div class="buttons">
        <button @click="goToImport" class="btn">Annoter une image</button>
        <button @click="goToSearch" class="btn">Rechercher une image</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    methods: {
    goToImport() {
      this.$router.push('/import'); // Redirige vers la page d'import
    },
    goToSearch() {
      this.$router.push('/search'); // Redirige vers la page de recherche
    },
  },
  };
  </script>
  
  <style>
  #home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  .buttons {
    margin-top: 20px;
  }
  
  .btn {
  margin: 10px;
  background: rgb(87, 87, 87);
  color: rgba(255, 255, 255, 0.8);
  border: none; /* Supprime la bordure */
  text-decoration: none;
  padding: 15px 40px;
  border-radius: 4px;
  font-weight: normal;
  cursor: pointer; /* Change le curseur en "main" */
  font-size: 14px; /* Taille de la police */
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
}

.btn:hover {
  color: rgba(255, 255, 255, 1);

  box-shadow: 0 5px 15px rgba(180, 180, 180, 0.4);
}
  </style>
  