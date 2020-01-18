<template>
  <v-layout>
    <v-col>
      <v-img src="../assets/estadio.jpg"></v-img>
    </v-col>
    <v-col align="center">
      <v-row>
        <v-toolbar color="blue darken-4" dark>
          <v-spacer></v-spacer>
          <v-toolbar-title class="font-weight-bold">SELECCIONA LA ZONA</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-row>
      <br />
      <br />
      <v-row>
        <v-toolbar light>
          <v-col>
            <v-toolbar-title>Fondo Sur</v-toolbar-title>
          </v-col>
          <v-col>
            <v-toolbar-title class="ml-6">50€</v-toolbar-title>
          </v-col>
          <v-col>
            <v-select :items="items" class="mt-5" color="blue darken-4" value="1"></v-select>
          </v-col>
          <v-col>
            <v-btn icon to="/inicio">
              <v-icon>mdi-basket-outline</v-icon>
            </v-btn>
          </v-col>
        </v-toolbar>
      </v-row>
      <br />
      <br />

      <v-row>
        <v-toolbar light>
          <v-col>
          <v-toolbar-title>Lateral Oeste</v-toolbar-title>
          </v-col>
          <v-col>
          <v-toolbar-title>100€</v-toolbar-title>
          </v-col>
          <v-col>
          <v-select :items="items" class="mt-5" color="blue darken-4" value="1"></v-select>
          </v-col>
          <v-col>
          <v-btn icon to="/inicio">
            <v-icon>mdi-basket-outline</v-icon>
          </v-btn>
          </v-col>
        </v-toolbar>
      </v-row>
      <br />
      <br />
      <v-row>
        <v-toolbar light>
          <v-col>
          <v-toolbar-title>Fondo Norte</v-toolbar-title>
          </v-col>
          <v-col>
          <v-toolbar-title>50€</v-toolbar-title>
          </v-col>
          <v-col>
          <v-select :items="items" class="mt-5" color="blue darken-4" value="1"></v-select>
          </v-col>
          <v-col>
          <v-btn icon to="/inicio">
            <v-icon>mdi-basket-outline</v-icon>
          </v-btn>
          </v-col>
        </v-toolbar>
      </v-row>
      <br />
      <br />
      <v-row>
        <v-toolbar light>
          <v-col>
          <v-toolbar-title>Lateral Este</v-toolbar-title>
          </v-col>
          <v-col>
          <v-toolbar-title class="ml-3">200€</v-toolbar-title>
          </v-col>
          <v-col>
          <v-select :items="items" class="mt-5" color="blue darken-4" value="1"></v-select>
          </v-col>
          <v-col>
          <v-btn icon to="/inicio">
            <v-icon>mdi-basket-outline</v-icon>
          </v-btn>
          </v-col>
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