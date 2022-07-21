<template>
  <section id="Testimonials">
    <div class="glass">
      <div class="slider">
        <input type="radio" name="testimonial" id="t-1" />
        <input type="radio" name="testimonial" id="t-2" checked />
        <input type="radio" name="testimonial" id="t-3" />
        <input type="radio" name="testimonial" id="t-4" />

        <div class="testimonials">
          <label
            class="item"
            v-for="(t, i) of testimonials"
            :key="t.name"
            :for="'t-' + (i + 1)"
          >
            <img :src="t.img" alt="picture" />
            <p>{{ t.quote }}</p>
            <h2>{{ t.name }}</h2>
          </label>
        </div>
        <div class="dots">
          <label
            v-for="(t, i) of testimonials"
            :key="t.name"
            :for="'t-' + (i + 1)"
          ></label>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          img: "https://raw.githubusercontent.com/leandremoritz/leandre-wdp/main/images/jesse.png",
          quote:
            "Leandre is a perfectionist, she will never settle on designs until they meet her high standards and she is never afraid to share her opinions. Her work attitude combined with her kind personality makes her a complete pleasure to do business with.",
          name: "Jesse Spence",
        },
        {
          img: "https://raw.githubusercontent.com/leandremoritz/leandre-wdp/main/images/jason.png",
          quote:
            " Le-Andre is a very focused individual. She has shown to always put in extra time to her studies and manages herself and her work well. Le-Andre sets high expectations for herself and works hard to achieve these expectations. I wish her the best in her future as a web developer.",
          name: "Jason Wandrag",
        },
        {
          img: "https://i.ibb.co/R7xX1WQ/ash.png",
          quote:
            "Le-Andre is a very talented and intelligent individual, who is willing to go the extra mile and loves to add her own persontouch to things. She isn't afraid to ask questions and likes learning new things, she has great potential.",
          name: "Ashton Abrahams",
        },
        {
          img: "https://raw.githubusercontent.com/leandremoritz/leandre-wdp/main/images/1.jpg",
          quote:
            "A gentle soul through and through her strengths are no arcane nor outshone by her mannerisms, trustworthy is the Le-Andre I know.",
          name: "Abdool Zaid Toorabally",
        },
      ],
    };
  },
};
</script>

<style scoped>
.glass {
  width: 90vw;
  height: 520px;
  box-shadow: 0 0 8px rgba(255, 255, 255, 1);
  backdrop-filter: blur(5px);
  background-position: center;
  background-size: cover;
  position: absolute;
  bottom: 50px;
}
#Testimonials {
  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
}
.slider {
  width: 100%;
}
.slider input {
  display: none;
}
.testimonials {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 350px;
  perspective: 1000px;
  overflow: hidden;
}
.testimonials .item {
  top: 0;
  position: absolute;
  box-sizing: border-box;
  backdrop-filter: blur(20px);
  /* background-color: white; */
  background-color: rgba(0, 0, 0, 0.909);
  backdrop-filter: blur(5px);
  padding: 20px;
  width: 350px;
  text-align: center;
  transition: transform 0.4s;
  transform-style: preserve-3d;
  box-shadow: 0 0 8px rgba(255, 255, 255, 1);
  user-select: none;
  cursor: pointer;
}
.testimonials .item img {
  width: 100px;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(255, 255, 255, 1);
}
.testimonials .item p {
  color: white;
  font-size: bolder;
}

.testimonials .item h2 {
  color: #fff;

  font-family: Verdana, Geneva, Tahoma, sans-serif;

  /* opacity: 0.6; */
  font-weight: bolder;
  background: linear-gradient(#000, #fff, #000, #fff, #000);
  /* background-image: linear-gradient(45deg, #000, #fff, #000, #fff, #000); */
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  font-size: 20px;
}
.dots {
  display: flex;
  justify-content: center;
  align-items: center;
}
.dots label {
  display: block;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #413b52;
  margin: 7px;
  transition: transform 0.2s, color 0.2s;
}

/* First */
#t-1:checked ~ .dots label[for="t-1"] {
  transform: scale(2);
  background-color: #fff;
}
#t-1:checked ~ .dots label[for="t-2"] {
  transform: scale(1.5);
}
#t-1:checked ~ .testimonials label[for="t-1"] {
  z-index: 4;
}
#t-1:checked ~ .testimonials label[for="t-2"] {
  transform: translateX(300px) translateZ(-90px) rotateY(-15deg);
  z-index: 3;
}
#t-1:checked ~ .testimonials label[for="t-3"] {
  transform: translateX(600px) translateZ(-180px) rotateY(-25deg);
  z-index: 2;
}
#t-1:checked ~ .testimonials label[for="t-4"] {
  transform: translateX(900px) translateZ(-270px) rotateY(-35deg);
  z-index: 1;
}
#t-1:checked ~ .testimonials label[for="t-5"] {
  transform: translateX(1200px) translateZ(-360px) rotateY(-45deg);
}

/* Second */
#t-2:checked ~ .dots label[for="t-1"] {
  transform: scale(1.5);
}
#t-2:checked ~ .dots label[for="t-2"] {
  transform: scale(2);
  background-color: #fff;
}
#t-2:checked ~ .dots label[for="t-3"] {
  transform: scale(1.5);
}
#t-2:checked ~ .testimonials label[for="t-1"] {
  transform: translateX(-300px) translateZ(-90px) rotateY(15deg);
}
#t-2:checked ~ .testimonials label[for="t-2"] {
  z-index: 3;
}
#t-2:checked ~ .testimonials label[for="t-3"] {
  transform: translateX(300px) translateZ(-90px) rotateY(-15deg);
  z-index: 2;
}
#t-2:checked ~ .testimonials label[for="t-4"] {
  transform: translateX(600px) translateZ(-180px) rotateY(-25deg);
  z-index: 1;
}
#t-2:checked ~ .testimonials label[for="t-5"] {
  transform: translateX(900px) translateZ(-270px) rotateY(-35deg);
}

/* Third */
#t-3:checked ~ .dots label[for="t-2"] {
  transform: scale(1.5);
}
#t-3:checked ~ .dots label[for="t-3"] {
  transform: scale(2);
  background-color: #fff;
}
#t-3:checked ~ .dots label[for="t-4"] {
  transform: scale(1.5);
}
#t-3:checked ~ .testimonials label[for="t-1"] {
  transform: translateX(-600px) translateZ(-180px) rotateY(25deg);
}
#t-3:checked ~ .testimonials label[for="t-2"] {
  transform: translateX(-300px) translateZ(-90px) rotateY(15deg);
}
#t-3:checked ~ .testimonials label[for="t-3"] {
  z-index: 3;
}
#t-3:checked ~ .testimonials label[for="t-4"] {
  transform: translateX(300px) translateZ(-90px) rotateY(-15deg);
  z-index: 2;
}
#t-3:checked ~ .testimonials label[for="t-5"] {
  transform: translateX(600px) translateZ(-180px) rotateY(-25deg);
}

/* Fourth */
#t-4:checked ~ .dots label[for="t-3"] {
  transform: scale(1.5);
}
#t-4:checked ~ .dots label[for="t-4"] {
  transform: scale(2);
  background-color: #fff;
}
#t-4:checked ~ .dots label[for="t-5"] {
  transform: scale(1.5);
}
#t-4:checked ~ .testimonials label[for="t-1"] {
  transform: translateX(-900px) translateZ(-270px) rotateY(35deg);
}
#t-4:checked ~ .testimonials label[for="t-2"] {
  transform: translateX(-600px) translateZ(-180px) rotateY(25deg);
}
#t-4:checked ~ .testimonials label[for="t-3"] {
  transform: translateX(-300px) translateZ(-90px) rotateY(15deg);
  z-index: 2;
}
#t-4:checked ~ .testimonials label[for="t-4"] {
  z-index: 3;
}
#t-4:checked ~ .testimonials label[for="t-5"] {
  transform: translateX(300px) translateZ(-90px) rotateY(-15deg);
}

/* Fifth */
#t-5:checked ~ .dots label[for="t-4"] {
  transform: scale(1.5);
}
#t-5:checked ~ .dots label[for="t-5"] {
  transform: scale(2);
  background-color: #fff;
}
#t-5:checked ~ .testimonials label[for="t-1"] {
  transform: translateX(-1200px) translateZ(-360px) rotateY(45deg);
}
#t-5:checked ~ .testimonials label[for="t-2"] {
  transform: translateX(-900px) translateZ(-270px) rotateY(35deg);
  z-index: 1;
}
#t-5:checked ~ .testimonials label[for="t-3"] {
  transform: translateX(-600px) translateZ(-180px) rotateY(25deg);
  z-index: 2;
}
#t-5:checked ~ .testimonials label[for="t-4"] {
  transform: translateX(-300px) translateZ(-90px) rotateY(15deg);
  z-index: 3;
}
#t-5:checked ~ .testimonials label[for="t-5"] {
  z-index: 4;
}
</style>
