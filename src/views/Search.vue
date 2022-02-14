<template>
  <div>
    <form action="submit" @submit.prevent="searchHandler" class="search-form">
      <input
        type="tel"
        placeholder="¿Cuál es tu parada?"
        v-model="searchQuery"
        class="search-input"
      />
      
      <button type="submit" class="search-button">
        <router-link to="/results"><img src="../assets/buscar-svg.svg" alt="" /></router-link>
        
        <router-view />
      </button>
      <img id="rectangle-bar" src="../assets/rectangle-bar.svg" alt="">
    </form>
  </div>
</template>

<script lang="ts">
import { reactive, ref, defineComponent } from "vue";
import { StopList } from "../types";

export default defineComponent({
  setup() {
    const stops = reactive([]) as StopList;
    const searchQuery = ref();
    const searchHandler = async () => {
      try {
        const headers = {
          accessToken: "178ea269-c6ae-46a9-9392-204ffb0c7c58",
        };
        const stopsSnap = await fetch(
          "https://openapi.emtmadrid.es/v1/transport/busemtmad/stops/" +
            searchQuery.value +
            "/detail/",
          {
            headers,
          }
        )
          .then((response) => response.json())
          .then((responseObject) => {
            return responseObject.data;
          });
        stops.push(stopsSnap[0].stops[0].name);
        console.log(stopsSnap[0].stops[0].name);
      } catch (e) {
        console.log("Error Loading Products");
      }
    };
    return { stops, searchQuery, searchHandler };
  },
});
</script>
<style scoped>
@font-face {
  font-family: "SF-Pro-Display-Semibold";
  src: local("SF-Pro-Display"),
    url(../fonts/SF-Pro-Display/SFProDisplay-Semibold.ttf) format("truetype");
}
.search-form {
  position: absolute;
  width: 414px;
  height: 46px;
  left: 946px;
  top: 539px;
}
.search-input {
  position: absolute;
  width: 400px;
  height: 20px;
  left: calc(50% - 138px / 2 - 138px);
  bottom: 9px;
  background: transparent;
  border: none;

  font-family: "SF-Pro-Display-Semibold";
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;

  color: #8993a4;
}
.search-button {
  position: absolute;
  left: 92.51%;
  right: 3.14%;
  top: 34.78%;
  bottom: 26.09%;
  background: transparent;
  border: none;
}

#rectangle-bar {
  position: absolute;
height: 1px;
left: 0%;
right: 0%;
bottom: 0.53px;

background: #8993A4;
border-radius: 4px;
}
</style>
