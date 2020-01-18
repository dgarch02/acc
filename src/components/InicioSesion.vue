<template>
  <v-layout align-space-between column>
    <v-card>
      <v-col>
        <template>
          <v-layout align-space-between column>
            <v-row align-content="center" justify="center">
              <h2>DATOS DEL CLIENTE</h2>
            </v-row>

            <v-row align-content="center" justify="center">
              <v-spacer></v-spacer>
              <v-text-field v-model="nombre" label="Nombre"></v-text-field>
              <v-spacer></v-spacer>
            </v-row>
            <v-row align-content="center" justify="center">
              <v-spacer></v-spacer>
              <v-text-field v-model="apellidos" label="Apellidos"></v-text-field>
              <v-spacer></v-spacer>
            </v-row>
            <v-row align-content="center" justify="center">
              <v-spacer></v-spacer>
              <v-text-field v-model="correo" label="Correo electronico"></v-text-field>
              <v-spacer></v-spacer>
            </v-row>

            <v-row align-content="center" justify="center">
              <v-spacer></v-spacer>
              <v-text-field v-model="correo" label="Repetir Correo electronico"></v-text-field>
              <v-spacer></v-spacer>
            </v-row>
            <v-row align-content="center" justify="center">
              <v-spacer></v-spacer>
              <v-text-field v-model="correo" label="Telefono"></v-text-field>
              <v-spacer></v-spacer>
            </v-row>

            <v-row align-content="center" justify="center">
                <v-btn color="blue darken-4" class="white--text" to="/tarjeta">CONTINUAR</v-btn>
            </v-row>
          </v-layout>
          <br />
        </template>
      </v-col>
    </v-card>
  </v-layout>
</template>




<script>
export default {
  data: () => ({
    show1: false,
    show2: false,
    show3: false
  })
};
</script>
