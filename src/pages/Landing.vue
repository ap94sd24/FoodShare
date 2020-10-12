<template>
  <div>
  <the-header></the-header>
  <section class="landing">
    <div class="dark-overlay">
      <div class="landing-inner">
        <h1 class="x-large">Food Share</h1>
        <p class="lead">
          Looking to share your home recipes to the community? Join us now!
        </p>
      </div>
    </div>
  </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from '../components/layouts/TheHeader.vue';
export default defineComponent({
  name: "Landing",
  components: {
    TheHeader
  }
});
</script>
<style scoped>
.landing {
  position: relative;
  background: url("../assets/landing.jpg") no-repeat center center/cover;
  height: 100vh;
}

.dark-overlay {
  background-color: rgba(0, 0, 0, 0.65);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.landing-inner {
  color: #fff;
  height: 100%;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.x-large {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.lead {
  font-size: 1.8em;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 1rem;
}

</style>