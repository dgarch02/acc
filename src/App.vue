<template>
  <v-app id="principal">
    <v-app-bar color="blue darken-4" dark dense height="80">
      <v-toolbar-items>
        <router-link to="/">
        <v-img src="@/assets/logo1.png" height="100px" width="100px"></v-img>
        </router-link>
      </v-toolbar-items>
      <v-col>
      <v-toolbar-title  fixed style="width: 1300px"><v-btn x-large text="true" to="/" block class="display-2 font-weight-black">Real Madrid C.F.</v-btn></v-toolbar-title>
      </v-col>
    </v-app-bar>
    <br>
    <br>
   
    <template>
      <component :is="layout"></component>
    </template>
    <v-card>
      <v-footer fixed absolute class="font-weight-medium" color="blue darken-4" dark>
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Real Madrid Club de Fútbol</strong>
        </v-col>
      </v-footer>
    </v-card>
  </v-app>
</template>

<script>
import PrincipalLayout from "./components/layouts/Principal";
import { mapState } from "vuex";
export default {
  components: { PrincipalLayout },
  data() {
    return {
      layout: "principal-layout"
    };
  }
};
</script>