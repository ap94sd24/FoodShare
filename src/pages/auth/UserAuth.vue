<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title text-center">Welcome Back!</h4>
              <p class="text-center">New to Food Share? <router-link class="link" to="/user/register">Sign Up</router-link> </p>
              <form>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input class="form-control" type="email" id="email"/>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input class="form-control" type="password" id="password" />
                </div>
                <button type="submit" class="btn btn-primary custom" >Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserAuth"
});
</script>

<style scoped>
a {
  color: var(--dark-color) !important;
  font-weight: 800;
  cursor: pointer;
}

.card {
  top: 50%;
  border-radius: 12px;
}

.card-title {
  font-weight: 800;
}

.card {
  width: 80% !important;
  left: 10%;
}

.formInput {
  width: 100%;
}

.link {
  text-decoration: none !important;
}

.link:hover {
  color: rgb(151, 116, 2) !important;
}

button, .custom {
  width: 100%;
  border-radius: 15px;
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

button:hover, button:active, button:visited, .custom {
  background-color:  #e99d06 !important
}
</style>