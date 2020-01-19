<template>
  <v-layout align-space-between column>
    <v-row>
      <!-- Columna de texto -->
      <v-col>
        <!-- Fila datos del cliente -->
        <v-row class="ml-n12">
          <v-col class="ml-9 pl-12"></v-col>
          <v-col md="auto">
            <h2>1. Datos del cliente</h2>
          </v-col>
          <v-col class="ml-12 pt-4 pl-6" md="auto">
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
        <v-row class="ml-12 pl-4 mr-12">
          <v-col class="ml-12 pl-12 mr-12 pr-12">
            <v-divider></v-divider>
          </v-col>
        </v-row>

        <!-- Fila datos de la tarjeta -->
        <v-row>
          <v-col class="ml-9 pl-12"></v-col>
          <v-col md="auto">
            <h2>2. Método de pago</h2>
          </v-col>
          <v-col class="ml-12 pt-4 pl-7" md="auto">
            <v-row>
              <v-text>Nombre del titular: Fernando Rodríguez Rodríguez</v-text>
            </v-row>
            <v-row>
              <p>Tarjeta:</p>
              <p class="font-weight-bold ml-1">Visa / 4B / Euro6000</p>
              <p class="ml-1">que termina en 1000</p>
            </v-row>
          </v-col>
          <v-col></v-col>
          <v-col></v-col>
        </v-row>

        <!-- Linea divisoria -->
        <v-row class="ml-12 pl-4 mr-12">
          <v-col class="ml-12 pl-12 mr-12 pr-12">
            <v-divider></v-divider>
          </v-col>
        </v-row>

        <!-- Fila datos del partido -->
        <v-row class="ml-n12">
          <v-col class="ml-12 pl-12"></v-col>
          <v-col md="auto">
            <h2>3. Revisar productos</h2>
          </v-col>
          <v-col class="ml-12 pt-4" md="auto">
            <v-row>
              <v-text>Partido: Real Madrid vs. Atlético de Madrid</v-text>
            </v-row>
            <v-row>
              <v-text>Sábado, 1 de Febrero de 2020, 16:00</v-text>
            </v-row>
            <v-row>
              <v-text>Zona: Fondo Sur</v-text>
            </v-row>
            <v-row>
              <v-text>Número de entradas: 4</v-text>
            </v-row>
            <v-row>
              <v-text>Precio total:</v-text>
              <v-text class="font-weight-bold ml-1">200€</v-text>
            </v-row>
          </v-col>
          <v-col></v-col>
          <v-col></v-col>
        </v-row>
        <br />

        <v-row justify="center">
            <v-btn color="blue darken-4" class="white--text" to="/confirmacion">CONFIRMAR COMPRA</v-btn>
        </v-row>
      </v-col>
      <!-- Columna de imagen -->
      <v-col md="auto" class="ml-n12 mr-12 mt-4 pr-12">
        <v-img src="@/assets/derbi.jpg" height="300px" width="500px"></v-img>
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
