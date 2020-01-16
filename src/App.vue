<template>
  <v-app id="principal">
    <v-app-bar color="blue darken-4" dark dense >
    
      <v-toolbar-items>
        <v-img src="@/assets/logo1.png" height="100px" width="100px" ></v-img>
      </v-toolbar-items>

      <v-toolbar-title style="width: 30000px" >Real Madrid C.F.</v-toolbar-title>

      <router-link to="/inicio"><v-btn v-on="on" icon>

          <v-icon>perm_identity</v-icon>  
      </v-btn>
      </router-link>
    </v-app-bar>


    <br />
    <br />
    <br />
    <template>
    <component :is="layout"></component>
    </template>
    <v-card>
      <v-footer  fixed absolute class="font-weight-medium" color="blue darken-4" dark>
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Real Madrid Club de Fútbol</strong>
        </v-col>
      </v-footer>
    </v-card>  
  </v-app>
</template>

<script>
  import PrincipalLayout from './components/layouts/Principal'
  import {mapState} from 'vuex'
export default {
    
    
    components: { PrincipalLayout},
    data() {
        return {
          layout: 'principal-layout'
        }
    }
};
</script>