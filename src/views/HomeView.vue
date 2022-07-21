<template>
  <section id="landing">
    <!-- <div class="LM">
      <h1 id="logo1">Le-Andre Moritz</h1>
    </div> -->
    <div class="world">
      <!-- <img src="" alt="" /> -->

      <div class="icons">
        <ul>
          <li>
            <a style="text-decoration: none" href=""><i></i></a>
          </li>
          <li>
            <a style="text-decoration: none" href=""><i class=""></i></a>
          </li>
        </ul>
      </div>
    </div>
    <!-- </div> -->
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#landing {
  /* background: #000000; */

  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* .glass {
  width: 930px;
  height: 520px;
  box-shadow: 0 0 8px rgba(255, 255, 255, 1);

  background-position: center;
  background-size: cover;
  position: absolute;
  bottom: 50px;
} */

img {
  width: 300px;
  height: 300px;
  padding: 20px;
  transition: 0.1s ease;
}
img:hover {
  border: 2px solid #fff;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(255, 255, 255, 1);
}

h3 {
  color: #fff;

  font-weight: bolder;
  font-size: 25px;
  letter-spacing: 1px;
}

h2 {
  color: #fff;
  margin: 0 110px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 120px;
  letter-spacing: 10px;
  opacity: 0.6;
  font-weight: bolder;
  background: -webkit-linear-gradient(#000, #fff, #000, #fff, #000);
  /* background-image: linear-gradient(45deg, #000, #fff, #000, #fff, #000); */
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
}

.icons i {
  color: #fff;
}

.icons {
  display: flex;
  margin-top: 80px;
  margin-right: 50px;
}
.icons ul {
  flex: 1;
  text-align: right;
}
.icons ul li {
  list-style: none;
  display: inline-block;
  margin: 15px;
  padding: 10px;
}
.icons ul li i {
  text-decoration: none;
  font-size: 20px;
  cursor: pointer;
  transition: 0.1s all;
}
.icons ul li i:hover {
  color: aqua;
}

#logo1 {
  background: -webkit-linear-gradient(#000, #fff, #000, #fff, #000);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: serif;
  display: flex;
  justify-content: center;
  font-size: 100px;
  padding-bottom: 150px;
  padding-left: 60px;
  text-shadow: 2px 10px 80px;
  z-index: 100;
  animation: logofloat 4s infinite;
}

.LG {
  transform: scale(0.5);
}

@keyframes logofloat {
  0% {
    font-size: 100px;
  }
  50% {
    font-size: 130px;
  }
}
.world {
  height: 50vh;
}
</style>
