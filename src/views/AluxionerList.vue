<template>
  <div class="aluxioner-list-title">
    <h5>Team</h5>
    <h2>Aluxioners</h2>
  </div>

  <div class="aluxioner-list">
    <AluxionerCard
      v-for="aluxioner in aluxioners"
      :key="aluxioner.id"
      :aluxioner="aluxioner"
    ></AluxionerCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AluxionerInterface } from "../types";

import AluxionerCard from "./AluxionerCard.vue";
import AluxionerService from "../services/AluxionerService";

export default defineComponent({
  name: "AluxionerList",
  components: {
    AluxionerCard,
  },
  data() {
    return {
      aluxioners: [] as AluxionerInterface[],
    };
  },
  created() {
    AluxionerService.getAluxioners()
      .then((response) => {
        console.log(response);
        this.aluxioners = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
</script>

<style scoped>
h5 {
  position: absolute;
  left: 0%;
  right: 75.6%;
  top: 0%;
  bottom: 69.7%;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #42526e;
}

h2 {
  position: absolute;
  left: 0%;
  right: 0%;
  top: 39.39%;
  bottom: 0%;
  font-size: 33px;
  line-height: 39px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.9);
}
.aluxioner-list-title {
  position: absolute;
  width: 168px;
  height: 66px;
  left: 80px;
  top: 747px;
}
.aluxioner-list {
  display: grid;
  grid-template-columns: [first] auto [line2] auto [line3] auto [col4-start] auto [five]auto [end];
  grid-template-rows: [row1-start] auto [row1-end] auto [third-line] auto [last-line];
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  margin-top: 20px;
  position: absolute;
  width: 1280px;
  height: 277px;
  left: 80px;
  top: 853px;
}
</style>
