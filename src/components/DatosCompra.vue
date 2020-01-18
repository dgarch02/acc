<template>
  <v-layout align-space-between column>
    <v-row>
      <!-- Columna de texto -->
      <v-col>
        <!-- Fila datos del cliente -->
        <v-row class="ml-n12">
          <v-col class="ml-12 pl-12"></v-col>
          <v-col md="auto">
            <h2>1. Datos del cliente</h2>
          </v-col>
          <v-col class="ml-12 pt-4" md="auto">
            <v-row>
              <v-text>Nombre: Fernando Rodríguez Rodríguez</v-text>
            </v-row>
            <v-row>
              <v-text>Correo: ferrod@gmail.com</v-text>
            </v-row>
            <v-row>
              <v-text>Teléfono: 666 555 444</v-text>
            </v-row>
          </v-col>
          <v-col></v-col>
          <v-col></v-col>
        </v-row>

        <!-- Linea divisoria -->
        <v-row>
          <v-col></v-col>
          <v-col>
            <v-divider></v-divider>
          </v-col>
          <v-col></v-col>
        </v-row>

        <!-- Fila datos de la tarjeta -->
        <v-row class="ml-n12">
          <v-col class="ml-12 pl-12"></v-col>
          <v-col md="auto">
            <h2>2. Método de pago</h2>
          </v-col>
          <v-col class="ml-12 pt-4" md="auto">
            <v-row>
              <v-text>Nombre del titular: Fernando Rodríguez Rodríguez</v-text>
            </v-row>
            <v-row>
              <p>Tarjeta:</p>
              <p class="font-weight-bold">Visa / 4B / Euro6000</p>
              <p>que termina en 1000</p>
            </v-row>
          </v-col>
          <v-col></v-col>
          <v-col></v-col>
        </v-row>
        <!-- Linea divisoria -->
        <v-row>
          <v-col></v-col>
          <v-col>
            <v-divider></v-divider>
          </v-col>
          <v-col></v-col>
        </v-row>

        <!-- Fila datos del partido -->
        <v-row class="ml-n12">
          <v-col class="ml-12 pl-12"></v-col>
          <v-col md="auto">
            <h2>3. Revisar productos</h2>
          </v-col>
          <v-col class="ml-12 pt-4" md="auto">
            <v-row>
              <v-text>Partido: Real Madrid CF vs. Sevilla FC</v-text>
            </v-row>
            <v-row>
              <v-text>Sábado, 18 de Enero de 2020</v-text>
            </v-row>
            <v-row>
              <v-text>Zona: Fondo Sur</v-text>
            </v-row>
            <v-row>
              <v-text>Número de entradas: 4</v-text>
            </v-row>
            <v-row>
              <v-text>Precio total:</v-text>
              <v-text class="font-weight-bold">200€</v-text>
            </v-row>
          </v-col>
          <v-col></v-col>
          <v-col></v-col>
        </v-row>
        <br />

        <v-row justify="center">
          <router-link to="/confirmacion">
            <v-btn color="blue darken-4" class="white--text">CONFIRMAR COMPRA</v-btn>
          </router-link>
        </v-row>
      </v-col>
      <!-- Columna de imagen -->
      <v-col>
        <v-btn color="blue darken-4" class="white--text">AAAAA COMPRA</v-btn>
      </v-col>
    </v-row>
    <br />
    <br />
    <br />
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
