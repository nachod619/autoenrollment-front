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
         <div style="flex: auto; text-align-last: center">Formulario Proveedor</div>
       </v-card-title>
       <v-container class="py-4">
         <v-row>
           <v-col>
             <v-container class="py-6 px-4">
               <v-text-field label="Nombre de la empresa"></v-text-field>
               <v-text-field label="Numero de identificación"></v-text-field>
               <v-text-field label="Descripción de la empresa"></v-text-field>
               <v-text-field label="Servicio"></v-text-field>
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
    name: 'ProveedorForm',
  })
  export default class ProveedorForm extends Vue {
    public message = this.$t("Main.message");
 
  }
 </script>