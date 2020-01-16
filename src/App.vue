<template>
  <v-app id="principal">
    <v-app-bar color="blue darken-4" dark dense >
    
      <v-toolbar-items>
        <v-img src="@/assets/logo1.png" height="100px" width="100px" ></v-img>
      </v-toolbar-items>

      <v-toolbar-title style="width: 30000px" >Real Madrid C.F.</v-toolbar-title>

      <v-btn :to="{name:'inicio'}"  v-on="on" icon>

          <v-icon>perm_identity</v-icon>  
      </v-btn>

    </v-app-bar>


    <br />
    <br />
    <br />

    <v-card height="150">
      <v-footer absolute class="font-weight-medium" color="blue darken-4" dark>
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Real Madrid Club de Fútbol</strong>
        </v-col>
      </v-footer>
    </v-card>  
  </v-app>
</template>

<script>
export default {
    data() {
        return {
        }
    }
};
</script>