<template>
  <v-layout align-space-between column>
    <v-card>
      <br />
      <br />
      <br />

      <v-row align-content="center" justify="center">
        <h2>DATOS DE LA TARJETA</h2>
      </v-row>
      <v-row align-content="center" justify="center">
        <v-spacer></v-spacer>
        <v-text-field v-model="tarjeta" label="Numero tarjeta"></v-text-field>
        <v-spacer></v-spacer>
      </v-row>

      <v-row align-content="center" justify="center">
        <v-spacer></v-spacer>
        <v-text-field v-model="tarjeta" label="Titular de la tarjeta"></v-text-field>
        <v-spacer></v-spacer>
      </v-row>

      <v-row align-content="center" justify="center">
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <v-text-field label="CVV"></v-text-field>

        <v-spacer></v-spacer>

        <v-text-field label="Fecha de valided"></v-text-field>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-row>

      <br />
      <br />
      <v-row align-content="center" justify="center">
        <router-link to="/">
          <v-btn color="blue darken-4" class="white--text">CONTINUAR</v-btn>
        </router-link>
      </v-row>
      <br />
      <br />
    </v-card>
  </v-layout>
</template>