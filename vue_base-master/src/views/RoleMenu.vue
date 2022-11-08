<template>
  <v-toolbar app>
    <v-toolbar-title>Alloxecentric</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu
      open-on-hover
      bottom
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Username
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
<script lang="ts">
 import { Component, Vue } from 'vue-property-decorator';
 @Component({
   name: 'RoleMenu',
 })
 export default class RoleMenu extends Vue {
  data: () => ({
      items: [
        { title: 'Configuracion' },
        { title: 'Cerrar Sesion' },
      ],
    })
 }
</script>
