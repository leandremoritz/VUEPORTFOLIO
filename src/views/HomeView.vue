<template>
  <section id="landing">
    <!-- <div class="LM">
      <h1 id="logo1">Le-Andre Moritz</h1>
    </div> -->
    <div id="title">Le-Andre Moritz</div>
    <div id="subtitle">
      <span> Aspiring </span>
      <span> Web</span>
      <span> Developer </span>
    </div>
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
#title {
  position: absolute;
  font-weight: 250;
  top: 36%;
  left: 0;
  right: 0;
  margin-top: -80px;
  font-size: 100px;
  text-align: center;

  padding-left: 20px;

  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  animation-name: animGravity;
  background: -webkit-linear-gradient(#fff, #9f9d9d, #fff, #9f9d9d, #fff);
  /* background-image: linear-gradient(45deg, #000, #fff, #000, #fff, #000); */
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 8px rgba(255, 255, 255, 1);
}
#subtitle {
  position: absolute;
  font-weight: 300;
  top: 70%;
  left: 0;
  right: 0;
  font-size: 25px;
  text-align: center;
  letter-spacing: 6px;
}
#subtitle span {
  color: #d8d8d8;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
}
#subtitle span:nth-child(1) {
  animation-name: animDont;
}
#subtitle span:nth-child(2) {
  animation-name: animLet;
}
#subtitle span:nth-child(3) {
  animation-name: animGo;
}
@keyframes animDont {
  0%,
  15% {
    transform: translateY(-26px);
    opacity: 0;
  }
  35%,
  80% {
    transform: translateY(0px);
    opacity: 1;
  }
  92%,
  100% {
    transform: translateY(-4px);
    opacity: 0;
  }
}
@keyframes animLet {
  0%,
  25% {
    transform: translateY(-26px);
    opacity: 0;
  }
  45%,
  80% {
    transform: translateY(0px);
    opacity: 1;
  }
  92%,
  100% {
    transform: translateY(-4px);
    opacity: 0;
  }
}
@keyframes animGo {
  0%,
  35% {
    transform: translateY(-26px);
    opacity: 0;
  }
  55%,
  80% {
    transform: translateY(0px);
    opacity: 1;
  }
  92%,
  100% {
    transform: translateY(-4px);
    opacity: 0;
  }
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
@media screen and (max-width: 1100px) {
  #title {
    font-size: 60px;
    animation-iteration-count: initial;
  }
}
</style>
