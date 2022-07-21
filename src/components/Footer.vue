<template>
  <footer id="footer">
    <div class="social-links">
      <a
        style="text-decoration: none !important; color: white"
        href="https://www.instagram.com/leandre_moritz/"
      >
        <i class="fa-brands fa-instagram"> </i>
      </a>
      <a
        style="text-decoration: none !important; color: white"
        href="https://www.linkedin.com/in/leandre-moritz-32120823a"
      >
        <i class="fa-brands fa-linkedin"></i>
        <a
          style="text-decoration: none !important; color: white"
          href="https://github.com/leandremoritz"
          ><i class="fa-brands fa-github"></i
        ></a>
      </a>
    </div>
    <div class="copyright">©2022. Designed by Le-Andre Moritz</div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  background: transparent;
  backdrop-filter: blur(5px);
  color: white;
  font-size: 20px;
  text-align: center;
  padding: 30px 0;
  text-decoration: none !important;
  position: relative;
  z-index: 100;
}
.fa-brands {
  padding-right: 1%;
  font-size: 20px;
}
</style>
