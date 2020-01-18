<template>
  <v-layout>
    <v-col>
      <v-img src="../assets/estadio.jpg"></v-img>
    </v-col>
    <v-col align="center">
      <v-row>
        <v-toolbar color="blue darken-4" dark>
          <v-spacer></v-spacer>
          <v-toolbar-title>SELECCIONA LA ZONA</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-row>
      <br />
      <br />
      <v-row>
        <v-toolbar light>
          <v-toolbar-title>Fondo Sur</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-title>50€</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-combobox color="dark-blue 4" :items="items" dont-fill-mask-blanks></v-combobox>
          <v-spacer></v-spacer>
          <router-link color="white" to="/inicio">
            <v-btn icon>
              <v-icon>mdi-basket-outline</v-icon>
            </v-btn>
          </router-link>
        </v-toolbar>
      </v-row>
      <br />
      <br />

      <v-row>
        <v-toolbar light>
          <v-toolbar-title>Lateral Oeste</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-title>100€</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-combobox color="dark-blue 4" :items="items"></v-combobox>
          <v-spacer></v-spacer>
          <router-link color="white" to="/inicio">
            <v-btn icon>
              <v-icon>mdi-basket-outline</v-icon>
            </v-btn>
          </router-link>
        </v-toolbar>
      </v-row>
      <br />
      <br />
      <v-row>
        <v-toolbar light>
          <v-toolbar-title>Fondo Norte</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-title>50€</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-combobox color="dark-blue 4" :items="items"></v-combobox>
          <v-spacer></v-spacer>
          <router-link color="white" to="/inicio">
            <v-btn icon>
              <v-icon>mdi-basket-outline</v-icon>
            </v-btn>
          </router-link>
        </v-toolbar>
      </v-row>
      <br />
      <br />
      <v-row>
        <v-toolbar light>
          <v-toolbar-title>Lateral Este</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-title>200€</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-combobox color="dark-blue 4" :items="items"></v-combobox>
          <v-spacer></v-spacer>
          <router-link color="white" to="/inicio">
            <v-btn icon>
              <v-icon>mdi-basket-outline</v-icon>
            </v-btn>
          </router-link>
        </v-toolbar>
      </v-row>
    </v-col>
  </v-layout>
</template>


<script>
export default {
  data() {
    return {
      items: ["1", "2", "3", "4"]
    };
  }
};
</script>