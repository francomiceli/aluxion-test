<template>
  <h1>Don’t be late, aluxioner</h1>
  <div id="search-component">
    <Search></Search>    
  </div>
  <div>
    <AluxionerList></AluxionerList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Search from "./Search.vue";
import AluxionerList from "./AluxionerList.vue";

export default defineComponent({
  name: "Home",
  components: {
    Search,
    AluxionerList,
  },
});
</script>

<style scoped>
@font-face {
  font-family: "SF-Pro-Display";
  src: local("SF-Pro-Display"),
    url(../fonts/SF-Pro-Display/SFProDisplay-Heavy.ttf) format("truetype");
}

h1 {
  position: relative;
  width: 738px;
  height: 211px;
  left: 80px;
  top: 391px;
  font-family: "SF-Pro-Display";
  font-size: 92px;
  line-height: 105px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.9);
  animation: carga 500ms ease-in-out backwards;
}

@keyframes carga {
  0% {    
    opacity: 0;
    top: 2091px;
  }
  50% {
    top: 461px;
    opacity: 0
  }
  90% {
    
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 375px) {
  h1 {
    position: absolute;
    width: 284px;
    height: 97px;
    left: 16px;
    top: 321px;
    font-size: 42px;
    line-height: 48px;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.9);
  }
}
</style>
