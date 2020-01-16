<template>
     <v-card>
    <v-card-title>
      <v-spacer></v-spacer>Lista de partidos
      <v-spacer></v-spacer>
    </v-card-title>
      <v-data-table
      :headers="headers"
      :items="matchs"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      :search="search"
      item-key="name"
      show-expand
      class="elevation-1"
    >
    <template v-slot:top>
      <v-toolbar  color="blue darken-4">
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
    <template v-slot:expanded-item >
      <v-toolbar color="green" dark align='center'>
        <v-spacer></v-spacer>
            <button align-center color="white">Comprar Entradas</button>
      </v-toolbar>
      
    </template>
    <br>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
    data() {
        return {
          //Para inicio sesion
          show1:false,

          //Para la pagina pricnipal
          expanded: [],
          sortable: false,
          singleExpand: false,
          search: '',
            headers: [
                { text: "Rival", align: "center", sortable: false, value: "name" },
                { text: "Dia", align: "center", sortable: false,value: "day" },
                { text: "Hora", align: "center",sortable: false, value: "time" },
                { text: "Competición", align: "center",sortable: false, value: "competition" },
                { text: "", value: "data-table-expand" }
            ],
            matchs: [{
                    name: "Atletico de Madrid",
                    day: "01-02-2020",
                    time: "13:00",
                    competition: "Liga"
                },
                {
                    name: "Celta de Vigo",
                    day: "16-02-2020",
                    time: "16:00",
                    competition: "Liga"
                },
                {
                    name: "Manchester City",
                    day: "26-02-2020",
                    time: "21:00",
                    competition: "Liga de Campeones"
                },
                {
                    name: "Barcelona",
                    day: "01-03-2020",
                    time: "19:00",
                    competition: "Liga"
                }
            ]
        };
    }
};
</script>