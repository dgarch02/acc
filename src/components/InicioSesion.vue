<template>
  <v-layout align-space-between column>
    <v-card>
      <v-col>
        <template>
          <v-layout align-space-between column>
            <v-row align-content="center" justify="center">
              <h2>DATOS DEL CLIENTE</h2>
            </v-row>
            <v-row>
              <v-img src="@/assets/fondo.jpg" height="100px" width="100px"></v-img>
            </v-row>

            <v-row align-content="center" justify="center" >
              <v-spacer></v-spacer>
              <v-text-field v-model="nombre" label="Nombre" color="blue darken-4" :rules="obligatoryRule" required></v-text-field>
              <v-spacer></v-spacer>
            </v-row>
            <v-row align-content="center" justify="center">
              <v-spacer></v-spacer>
              <v-text-field v-model="apellidos" label="Apellidos" color="blue darken-4" :rules="obligatoryRule"></v-text-field>
              <v-spacer></v-spacer>
            </v-row>
            <v-row align-content="center" justify="center">
              <v-spacer></v-spacer>
              <v-text-field v-model="correo" label="Correo electronico" color="blue darken-4" :rules="obligatoryRule"></v-text-field>
              <v-spacer></v-spacer>
            </v-row>

            <v-row align-content="center" justify="center">
              <v-spacer></v-spacer>
              <v-text-field v-model="correo" label="Repetir Correo electronico" color="blue darken-4" :rules="obligatoryRule"></v-text-field>
              <v-spacer></v-spacer>
            </v-row>
            <v-row align-content="center" justify="center">
              <v-spacer></v-spacer>
              <v-text-field v-model="correo" label="Teléfono" color="blue darken-4" :rules="numberRule"></v-text-field>
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
    numberRule: [
       v => !!v || 'Campo obligatorio',
       v => /^\d+$/.test(v) || 'Solo números',
     ],
     obligatoryRule: [
       v => !!v || 'Campo obligatorio',
     ],
    show1: false,
    show2: false,
    show3: false
  })
};
</script>
