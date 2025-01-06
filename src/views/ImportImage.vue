<template>
    <div id="app">
      
      <div  v-if="!imageSrc">
        <!-- Formulaire d'importation -->
        <input hidden type="file" ref="file" @change="onFileChange" accept="image/*" />
        <button class="import" @click="$refs.file.click()">Importer une image</button>
      </div>
  
      <!-- Affichage de l'image importée -->
      <div class="content-img" v-else>
        <img :src="imageSrc" alt="Image importée" />
        <input hidden type="file" ref="file" @change="onFileChange" accept="image/*" />
  
        <div class="form-container">
          <h2>Annoter la photo</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="who">Qui est sur la photo ?</label>
              <input
                type="text"
                id="who"
                v-model="photoInfo.who"
                placeholder="Nom(s) des personnes"
              />
            </div>
            <div class="form-group">
              <label for="what">Qu'y a-t-il sur la photo ?</label>
              <textarea
                id="what"
                v-model="photoInfo.what"
                placeholder="Description du contenu"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="where">Où la photo a-t-elle été prise ?</label>
              <input
                type="text"
                id="where"
                v-model="photoInfo.where"
                placeholder="Lieu de la prise"
              />
            </div>
            <div class="form-group">
              <label for="when">Quand la photo a-t-elle été prise ?</label>
              <input
                type="date"
                id="when"
                v-model="photoInfo.when"
              />
            </div>
            <button type="submit">Enregistrer les informations</button>
          </form>
          <button class="import" @click="$refs.file.click()">Changer d'image</button>
        </div>
  
        
      </div>
      
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageSrc: null, // Lien de l'image sélectionnée
        photoInfo: {
          who: "",
          what: "",
          where: "",
          when: "",
        },
      };
    },
    methods: {
      onFileChange(event) {
        const file = event.target.files[0]; // Récupère le premier fichier sélectionné
        if (file) {
          // Crée un objet URL temporaire pour l'image
          this.imageSrc = URL.createObjectURL(file);
        } else {
          this.imageSrc = null;
        }
      },
      changeImage() {
        this.imageSrc = null;
      }
    },
  };
  </script>
  
  <style>
  
  .content-img {
    display: flex;
    justify-content: center;
    align-items: flex-start; /* Aligne en haut */
    gap: 20px; /* Espace entre le formulaire et l'image */
    margin-top: 20px;
  }
  
  .form-container {
    height: auto;
    width: 400px;
    min-width: 300px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: left;
  }
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    margin-top: 30px;
    display: block;
    font-weight: bold;
  }
  
  .form-container button {
    margin-top: 20px;
    width: 100%;
  }
  
  .form-group input,
  .form-group textarea {
    background: black;
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    color: white;
    border-radius: 4px;
    font-size: 14px;
  }
  
  textarea {
    resize: vertical; /* Permet de redimensionner verticalement */
  }
  
  
  #app {
    display: flex;
      justify-content: center;
      align-items: center;
    text-align: center;
    margin: auto;
  }
  .import {
    padding: 10px 15px; /* Ajoute un peu d'espace intérieur pour un meilleur rendu */
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
    img {
    max-width: 100%; /* L'image ne dépassera pas la largeur de l'écran */
    max-height: 80vh; /* L'image occupera au maximum 80% de la hauteur de l'écran */
    object-fit: contain; /* Maintient les proportions de l'image */
    display: block; /* Évite les marges blanches autour de l'image */
    margin: 0 auto; /* Centre l'image horizontalement */
  }
  
  
  .import:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgba(180, 180, 180, 0.4);
  }
  
  </style>
  