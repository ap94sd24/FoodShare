<template>
  <header>
    <nav class="bg-dark">
      <h1>
        Food Share
      </h1>
      <ul>
        <li>
          <router-link to="/auth"> 
            <button class="btn btn-primary signIn"> 
              Sign In
            </button>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TheHeader"
});
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: absolute;
  z-index: 1;
  width: 100%;
  top: 0;
  border-bottom: solid 1px rgb(49, 39, 12);
  opacity: 0.8;
}

.navbar ul {
  display: flex;
}

ul {
  list-style: none;
}

.bg-dark {
  background-color: rgb(68, 68, 67) !important;
  color: #fff;
}

h1 {
  margin-bottom: 1rem;
}

.signIn {
  background-color: white;
  color: black;
  font-weight: 600;
  border-radius: 12px;
  border: 1px solid transparent;
}

.signIn:active {
  background-color: rgb(214, 213, 213) !important;
  border: 1px solid gray !important;
  color: black !important;
}

</style>