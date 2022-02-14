<template>
  <div class="aluxioner-card">
    <span id="aluxioner-image"></span>
    <span id="aluxioner-name">{{ aluxioner.name }}</span>
    <span id="aluxioner-description">{{ aluxioner.description }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { AluxionerInterface } from "../types";

export default defineComponent({
  name: "AluxionerCard",
  props: {
    aluxioner: {
      type: Object as PropType<AluxionerInterface>,
      required: true,
    },
  },
});
</script>

<style scoped>
.aluxioner-card {
  position: static;
  width: 197px;
  height: 277px;  
}

.aluxioner-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

#aluxioner-name {
  position: relative;
  left: 0%;
  right: 0%;
  top: 73.03%;
  bottom: 8.3%;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;

  letter-spacing: 0.02em;

  color: rgba(255, 255, 255, 0.9);
}

#aluxioner-description {
  position: relative;
  left: 0%;
  right: 0%;
  top: 83.86%;
  bottom: 0%;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;

  letter-spacing: 0.02em;

  color: #8993a4;
}
</style>
