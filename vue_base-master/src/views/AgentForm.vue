<template>
   <v-container>
    <v-card class="mx-auto my-12" max-width="1200" style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
    <v-container class="justify-center" pa-8>
      <v-img
        contain
        max-height="100"
        max-width="215"
        class="mx-auto py-4"
        src="https://alloxentric.com/wp-content/uploads/2020/11/alloxentric_logo-3x.png"
      >
      </v-img>
      <v-card-title class="justify-center py-7">
        <div style="flex: auto; text-align-last: center">Formulario Agente</div>
      </v-card-title>
      <v-container class="py-4">
        <v-row>
          <v-col>
            <p class="text-center font-weight-medium" style="font-size: 20px;">
              Registro de Agente
            </p>
            <v-container class="py-6 px-4">
              <v-text-field label="Nombre completo"></v-text-field>
              <v-text-field label="Correo electronico"></v-text-field>
              <v-text-field label="Teléfono celular"></v-text-field>
              <v-text-field label="RUT"></v-text-field>
              <v-text-field label="Nacionalidad"></v-text-field>
              <v-text-field label="Contraseña"></v-text-field>
            </v-container>
            <v-container class="d-flex justify-center">
              <v-btn
                depressed
                color="#06b7b2"
                class="white--text"
              >
                Crear
              </v-btn>
            </v-container>
          </v-col>
         </v-row>
        </v-container>
      </v-container>
    </v-card>     
</v-container>
</template>
<script lang="ts">
 import { Component, Vue } from 'vue-property-decorator';
 @Component({
   name: 'AgentForm',
 })
 export default class AgentForm extends Vue {
   public message = this.$t("Main.message");

 }
</script>
