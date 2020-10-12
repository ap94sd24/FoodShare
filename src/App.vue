<template>
  <router-view v-slot="slotProps"> 
    <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
});
</script>

<style>
/**Global styles */
:root {
  --primary-color: #f5a70c;
  --dark-color: #5c4300;
  --light-color: #ffd92eef;
  --danger-color: #cc0418;
  --success-color: #2fac09;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  padding: 0;
  font-size: 1rem;
  line-height: 1.6;
  background-color: rgb(226, 223, 207);
}
</style>
