<template>
  <v-layout>
    <v-col align="center">
    <v-row>
        <v-toolbar light color="blue darken-4" dark>
          <v-col>
          <v-toolbar-title class="font-weight-bold">PARTIDOS DISPONIBLES</v-toolbar-title>
          </v-col>
        </v-toolbar>
      </v-row>
      <br />
      <v-row>
        <v-toolbar light color="blue darken-4" dark>
          <v-col>
          <v-btn icon disabled></v-btn>
          <v-btn icon disabled></v-btn>
          </v-col>
          <v-col>
          <v-toolbar-title>Rival</v-toolbar-title>
          </v-col>
          <v-col>
          <v-toolbar-title>Día</v-toolbar-title>
          </v-col>
          <v-col>
          <v-toolbar-title>Hora</v-toolbar-title>
          </v-col>
          <v-col>
          <v-toolbar-title>Competición</v-toolbar-title>
          </v-col>
          <v-col>
          <v-btn icon disabled></v-btn>
          </v-col>
        </v-toolbar>
      </v-row>
      <br />
      <v-row>
        <v-toolbar light>
          <v-col>
          <img  height="50" width="50" src="@/assets/logo1.png" alt="John" />
          <img  height="50" width="38" src="@/assets/atleti.png" alt="John" />
          </v-col>
          <v-col>
          <v-toolbar-title>Atlético de Madrid</v-toolbar-title>
          </v-col>
          <v-col>
          <v-toolbar-title>01-02-2020</v-toolbar-title>
          </v-col>
          <v-col>
          <v-toolbar-title>16:00</v-toolbar-title>
          </v-col>
          <v-col>
          <img  height="50" width="50" src="@/assets/LaLiga_Santander.png" alt="John" />
          </v-col>
          <v-col>
            <v-btn color="blue darken-4" icon to="/butacas"  class="mr-12 font-weight-bold" dark>
              Comprar Entradas 
            </v-btn>
          </v-col>
        </v-toolbar>
      </v-row>
      <br />
      <v-row>
        <v-toolbar light>
          <v-col>
          <img  height="50" width="50" src="@/assets/logo1.png" alt="John" />
          <img  height="50" width="50" src="@/assets/celta.png" alt="John" />
          </v-col>
          <v-col>
          <v-toolbar-title>Celta de Vigo</v-toolbar-title>
          </v-col>
          <v-col>
          <v-toolbar-title>16-02-2020</v-toolbar-title>
          </v-col>
          <v-col>
          <v-toolbar-title>16:00</v-toolbar-title>
          </v-col>
          <v-col>
          <img  height="50" width="50" src="@/assets/LaLiga_Santander.png" alt="John" />
          </v-col>
          <v-col>
            <v-btn color="blue darken-4" icon to="/butacas"  class="mr-12 font-weight-bold" dark>
              Comprar Entradas 
            </v-btn>
          </v-col>
        </v-toolbar>
      </v-row>
      <br />
      <v-row>
        <v-toolbar light>
          <v-col>
          <img  height="50" width="50" src="@/assets/logo1.png" alt="John" />
          <img  height="50" width="50" src="@/assets/Manchester_City.png" alt="John" />
          </v-col>
          <v-col>
          <v-toolbar-title>Manchester City</v-toolbar-title>
          </v-col>
          <v-col>
          <v-toolbar-title>26-02-2020</v-toolbar-title>
          </v-col>
          <v-col>
          <v-toolbar-title>21:00</v-toolbar-title>
          </v-col>
          <v-col>
          <img  height="50" width="50" src="@/assets/champions.png" alt="John" />
          </v-col>
          <v-col>
            <v-btn color="blue darken-4" icon to="/butacas"  class="mr-12 font-weight-bold" dark>
              Comprar Entradas
            </v-btn>
          </v-col>
        </v-toolbar>
      </v-row>
      <br />
      <v-row>
       <v-toolbar light>
          <v-col>
          <img  height="50" width="50" src="@/assets/logo1.png" alt="John" />
          <img  height="50" width="50" src="@/assets/barsa.png" alt="John" />
          </v-col>
          <v-col>
          <v-toolbar-title>Barcelona</v-toolbar-title>
          </v-col>
          <v-col>
          <v-toolbar-title>01-03-2020</v-toolbar-title>
          </v-col>
          <v-col>
          <v-toolbar-title>16:00</v-toolbar-title>
          </v-col>
          <v-col>
          <img  height="50" width="50" src="@/assets/LaLiga_Santander.png" alt="John" />
          </v-col>
          <v-col >
            <v-btn color="blue darken-4" icon to="/butacas"  class="mr-12 font-weight-bold" dark> Comprar Entradas
            </v-btn>
          </v-col>
        </v-toolbar>
      </v-row>
    </v-col>
  </v-layout>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      //Para inicio sesion
      show1: false,
    };
  }
};
</script>