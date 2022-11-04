<template>
  <div class>
    <h1>Formulario agente</h1>
 </div>
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
