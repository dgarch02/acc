<template>
<v-parallax
    height="600"
    src="https://autonomico.elconfidencialdigital.com/asset/zoomcrop%252C1366%252C800%252Ccenter%252Ccenter//media/elconfidencialautonomico/images/2017/02/24/ECDIMA20170224_0013_1.jpg"
  >
  <br>
<v-layout align-space-between column>
     <v-card
    class="mx-auto"
    max-width="500"
    height='400'
    outlined
  >
    <v-list-item five-line>
      <v-list-item-content>
        <div class="overline mb-4">Entradas Real Madrid C.F.</div>
        <v-list-item-title class="headline mb-1">Confirmación de compra</v-list-item-title>
        <v-list-item-subtitle>La operación se ha realizado con éxito</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="white"
      >
      <img
        src="https://image.flaticon.com/icons/png/512/14/14060.png"
        alt="John"
      ></v-list-item-avatar>
    </v-list-item>

    <br>
    <br>
    <v-toolbar light>
         <p>Se ha enviado el ticket de compra a la siguiente dirección de correo electrónico:</p>
        </v-toolbar>
        <br>
        <v-toolbar light>
          <v-expansion-panels>
           <v-expansion-panel>
      <v-expansion-panel-header>Correo Electrónico</v-expansion-panel-header>
      <v-expansion-panel-content>
        12345@estudiantes.unileon.es
      </v-expansion-panel-content>
      </v-expansion-panel>
      </v-expansion-panels>
        </v-toolbar>
        <br>
        <v-card-actions>
          <v-spacer></v-spacer>
      <router-link to="/">
      <v-btn align="center" color="blue darken-4"  class="white--text">Aceptar</v-btn>
    </router-link>
      
    </v-card-actions>
    <br>
    <v-expansion-panels >
           <v-expansion-panel>
      <v-expansion-panel-header color="blue darken-4"  class="white--text">Tu opinión nos importa</v-expansion-panel-header>
      <v-expansion-panel-content>
        <br>
        <p align="center">
      <a href="https://www.survio.com/survey/d/C6D2A9P0L8O5B0W9Q">
        <v-btn color="blue darken-4"  class="white--text">Contestar encuesta</v-btn>
      </a>
      </p>
      </v-expansion-panel-content>
      </v-expansion-panel>
      </v-expansion-panels>
  </v-card>

    
     
  </v-layout>
  </v-parallax>
</template>