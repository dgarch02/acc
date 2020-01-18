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
        <v-text-field v-model="tarjeta" maxlength="16" label="Numero tarjeta" color="blue darken-4"></v-text-field>
        <v-spacer></v-spacer>
      </v-row>

      <v-row align-content="center" justify="center">
        <v-spacer></v-spacer>
        <v-text-field v-model="tarjeta" label="Titular de la tarjeta" color="blue darken-4"></v-text-field>
        <v-spacer></v-spacer>
      </v-row>

      <v-row align-content="center" justify="center">
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <v-text-field label="CVV" maxlength="3" color="blue darken-4"></v-text-field>

        <v-spacer></v-spacer>

        <!-- <v-text-field label="Fecha de valided"></v-text-field> -->
        <v-text-field label="Fecha de caducidad (MM-YY)" maxlength="5" color="blue darken-4"></v-text-field>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-row>

      <br />
      <br />
      <v-row align-content="center" justify="center">
        <v-btn color="blue darken-4" class="white--text" to="/datosDeLaCompra">CONTINUAR</v-btn>
      </v-row>
      <br />
      <br />
    </v-card>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false
  })
};
</script>