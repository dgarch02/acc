<template>
  
    <v-layout  >
      <v-col  >
        <template>
          <v-layout align-space-between column>
            <v-row align-content="center" justify="center">
              <h2>REGISTRAR USUARIO</h2>
            </v-row>

            <v-row align-content="center" justify="center">
              <v-spacer></v-spacer>
              <v-text-field v-model="nombre" label="Nombre"></v-text-field>
              <v-spacer></v-spacer>
            </v-row>
            <v-row align-content="center" justify="center">
              <v-spacer></v-spacer>
              <v-text-field v-model="apellidos" label="Apellidos"></v-text-field>
              <v-spacer></v-spacer>
            </v-row>
             <v-row align-content="center" justify="center"> 
                <table>
            <tr>
              <td nowrap class="formatoTexto">Fecha nacimiento:</td>
              <td>
                <input id="textoFechaNacimiento" type="date">
              </td>
            </tr>
            <br>
            <tr>
              <td class="formatoTexto">Sexo:</td>
              <td>
                <form action>
                  <input
                    id="radioHombre"
                    type="radio"
                    name="gender"
                    value="male"
                    class="formatoTexto"
                  > Hombre
                  <br>
                  <input
                    id="radioMujer"
                    type="radio"
                    name="gender"
                    value="female"
                    class="formatoTexto"
                  > Mujer
                  <br>
                </form>
              </td>
            </tr>
          </table>
            </v-row>
            <v-row align-content="center" justify="center">
              <v-spacer></v-spacer>
              <v-text-field v-model="correo" label="Correo electronico"></v-text-field>
              <v-spacer></v-spacer>
            </v-row>
            <v-row align-content="center" justify="center">
              <v-spacer></v-spacer>
              <v-text-field v-model="nickName" label="Nombre de usuario"></v-text-field>
              <v-spacer></v-spacer>
            </v-row>

             <v-row align-content="center" justify="center">
              <v-spacer></v-spacer>
              <v-text-field
              v-model="password"
              :append-icon="show1 ? 'visibility' : 'visibility_off'"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Contraseña"
              @click:append="show1 = !show1"
              ></v-text-field>
              <v-spacer></v-spacer>
            </v-row>

            <v-row align-content="center" justify="center">
              <v-spacer></v-spacer>
               <v-text-field
              v-model="confirmarcontrasenia"
              :append-icon="show2 ? 'visibility' : 'visibility_off'"
              :type="show2 ? 'text' : 'password'"
              name="input-10-1"
              label="Confirmar contraseña"
              @click:append="show2 = !show2"
              ></v-text-field>
              <v-spacer></v-spacer>
            </v-row>

            <v-row align-content="center" justify="center">
              <v-spacer></v-spacer>
              <v-text-field v-model="nickName" label="Nombre de usuario"></v-text-field>
              <v-spacer></v-spacer>
            </v-row>
         
            <v-row align-content="center" justify="center"> 
              <v-btn color="blue darken-4"  class="white--text">REGISTRARSE</v-btn>  
            </v-row>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
          </v-layout>
        </template>
      </v-col>


      <v-divider dark vertical>
      </v-divider>


      <v-col  >
        <template>
  <v-layout align-space-between column>
    <v-row align-content="center" justify="center">
        <h2 >INICIAR SESIÓN</h2>    
    </v-row>

    <v-row align-content="center" justify="center">
        <v-spacer></v-spacer>
        <v-text-field v-model="nickName" label="NickName"></v-text-field>
        <v-spacer></v-spacer>

    </v-row>

    <v-row align-content="center" justify="center">
        <v-spacer></v-spacer>

        <v-text-field
          v-model="password1"
          :append-icon="show3 ? 'visibility' : 'visibility_off'"
          :type="show3 ? 'text' : 'password'"
          name="input-10-1"
          label="Contraseña"
          @click:append="show3 = !show3"
        ></v-text-field>    
        <v-spacer></v-spacer>

    </v-row>

    <v-row align-content="center" justify="center"> 
      <v-btn color="blue darken-4" class="white--text" >ENTRAR</v-btn>  
    </v-row>
     
  </v-layout>
</template>
      </v-col>
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
