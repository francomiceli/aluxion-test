<template>
  <div class="results">
    <img src="..\assets\flecha-atras.svg" id="flecha-atras" alt="" />
    <h5>Autobuses cercanos</h5>
    <h2>316, {{ stops }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Results",
  props: {
    stop: {
      
    }
  },
  computed: {
    stops() {
      return this.stop
    }
  }
})
</script>

<style scoped>
@font-face {
  font-family: "SF-Pro-Display-Semibold";
  src: local("SF-Pro-Display"),
    url(../fonts/SF-Pro-Display/SFProDisplay-Semibold.ttf) format("truetype");
}
@font-face {
  font-family: "SF-Pro-Display-Bold";
  src: local("SF-Pro-Display"),
    url(../fonts/SF-Pro-Display/SFProDisplay-Bold.ttf) format("truetype");
}

h5 {
  position: absolute;
  width: 151px;
  height: 20px;
  left: 80px;
  top: 194px;
  font-family: "SF-Pro-Display-Semibold";
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #42526e;
}

h2 {
  position: absolute;
  width: 266px;
  height: 40px;
  left: 80px;
  top: 220px;
  font-family: "SF-Pro-Display-Bold";
  font-size: 33px;
  line-height: 39px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.9);
}

#flecha-atras {
  position: absolute;
  width: 32px;
  height: 32px;
  left: 73px;
  top: 154px;
  background: #42526e;
  transform: rotate(-180deg);
}
</style>
