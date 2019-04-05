<template>
  <div id="loader" class="preloader">
    <div class="preloader__loader"></div>
  </div>
</template>

<script>
document.onload = function() {
  const preloader = document.getElementById("loader");

  setTimeout(function() {
    if (!preloader.classList.contains("load")) {
      preloader.classList.toggle("load");
    }
  }, 2000);
};
</script>

<style  lang="scss">
.preloader {
  height: 100vh;
  width: 100vw;
  opacity: 1;
  visibility: visible;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  &__loader {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 5px solid rgb(243, 115, 115);
    border-top-color: green;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  &.load {
    opacity: 0;
    visibility: hidden;
  }
}
</style>