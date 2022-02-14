<template>
  <router-link to="/"><img id="logo" src="./assets/aluxion-logo.png" alt=""></router-link>
  <div id="metro"><div id="metro-text">metro</div></div>
  <div id="cercanias"><div id="cercanias-text">cercanías</div></div>
  <div id="carsharing"><div id="carsharing-text">carsharing</div></div>

  <router-view />
</template>

<style>
@font-face {
  font-family: "SF-Pro-Display-Medium";
  src: local("SF-Pro-Display"),
    url(./fonts/SF-Pro-Display/SFProDisplay-Medium.ttf) format("truetype");
}

@font-face {
  font-family: "SF-Pro-Display";
  src: local("SF-Pro-Display"),
    url(./fonts/SF-Pro-Display/SFProDisplay-Regular.ttf) format("truetype");
  font-style: regular;
}

@font-face {
  font-family: "SF-Pro-Display";
  src: local("SF-Pro-Display"),
    url(./fonts/SF-Pro-Display/SFProDisplay-Bold.ttf) format("truetype");
  font-style: bold;
}

body {
  background: #091e42;
}

#app {
  font-family: "SF-Pro-Display";
  position: relative;
  width: 1440px;
  height: 1183px;
}

#logo {
  position: absolute;
  left: 5.56%;
  right: 87.22%;
  top: 5.75%;
  bottom: 92.9%;
  animation: carga 400ms ease-out forwards;
}

@keyframes carga {
  0% {
    transform: scale(0.2);
    opacity: 0;
  }
  80% {
    transform: scale(1.05);
  }
  90% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}

#metro {
  position: absolute;
  width: 120px;
  height: 34px;
  left: calc(50% - 120px / 2 + 287px);
  top: calc(50% - 34px / 2 - 514.5px);
}

#metro-text {
  position: absolute;
  width: 40px;
  height: 17px;
  left: calc(50% - 40px / 2);
  top: calc(50% - 17px / 2 + 0.5px);

  font-size: 14px;
  line-height: 17px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: lowercase;

  color: #ffffff;
}

#cercanias {
  position: absolute;
  width: 120px;
  height: 34px;
  left: 1096px;
  top: 60px;
}

#cercanias-text {
  position: absolute;
  width: 66px;
  height: 17px;
  left: calc(50% - 66px / 2);
  top: calc(50% - 17px / 2 + 0.5px);

  font-size: 14px;
  line-height: 17px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: lowercase;

  color: #ffffff;
}

#carsharing {
  position: absolute;
  width: 120px;
  height: 34px;
  left: 1243px;
  top: 60px;
}

#carsharing-text {
  position: absolute;
  width: 73px;
  height: 17px;
  left: calc(50% - 73px / 2 + 0.5px);
  top: calc(50% - 17px / 2 + 0.5px);

  font-size: 14px;
  line-height: 17px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: lowercase;

  color: #ffffff;
}
</style>
