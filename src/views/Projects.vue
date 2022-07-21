<template>
  <div class="glass">
    <div class="body">
      <section
        class="card-bg vertical dark"
        v-for="project in projects"
        :key="project"
      >
        <article>
          <div class="description">
            <img :src="project.image" alt="" />

            <h2>{{ project.title }}</h2>
          </div>
          <hr />

          <section class="actions">
            <div class="circle">
              <li>
                <a
                  href="https://github.com/leandremoritz/calculator"
                  class="fa-brands text-none fa-github"
                  style="color: black"
                ></a>
              </li>
            </div>
            <div class="circle">
              <li>
                <a
                  href="https://sunny-pony-3cd535.netlify.app"
                  class="fa-solid text-none fa-globe"
                  style="color: black"
                ></a>
              </li>
            </div>
          </section>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          image: "https://i.ibb.co/pQXK2RW/amol-tyagi-UZFCQPNc4bs-unsplash.jpg",
          title: "Calculator",
        },
        {
          image:
            "https://i.ibb.co/yWnrzQb/mike-swigunski-ue-Bmz9-K8z-Tg-unsplash.jpg",
          title: "Holiday Destination",
        },
        {
          image:
            "https://i.ibb.co/XCScJw7/jason-leung-po-I7-Del-Fi-VA-unsplash.jpg",
          title: "Restuarant",
        },
        {
          image: "https://i.ibb.co/5sKybWn/andy-li-Rnd-RFJ1v1kk-unsplash.jpg",
          title: "Bakery",
        },
      ],
    };
  },
};
</script>

<style scoped>
h2 {
  color: black;
  font-weight: bold;
}
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100vh;
}

* {
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
.body {
  margin: 0;
  margin-top: 0;
  margin-left: -41.5%;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transform: scale(0.5);
  align-items: center;
}
section {
  margin-top: 0;
}
html {
  scroll-behavior: smooth;
}
img {
  width: 100%;
  aspect-ratio: 1;
}
@media only screen and (max-width: 768px) {
  body {
    display: grid;
    row-gap: 20px;
  }
}
.description {
  /* transform: scale(0.3); */
}
/* color settings */
.dark {
  background-color: transparent;
}
.dark img {
  box-shadow: 1px 1px 5px rgb(58, 58, 58), -1px -1px 5px rgb(15, 15, 15);
}
.dark .description {
  background-color: white;
}
.dark .description h4 {
  color: #eee;
}
.dark .description p {
  color: rgb(141, 141, 141);
}
.dark .actions {
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 5px rgb(58, 58, 58), -2px -2px 5px rgb(15, 15, 15);
}
.dark .actions .circle {
  background-color: white;
}
.dark .actions .circle i {
  color: #666;
}

.light {
  background-image: linear-gradient(#eee 50%, #666);
}
.light img {
  box-shadow: 2px 2px 5px rgb(255, 255, 255), -2px -2px 5px rgb(163, 163, 163);
}
.light .description {
  background-color: #eee;
}
.light .description h4 {
  color: #333;
}
.light .description p {
  color: rgb(141, 141, 141);
}
.light .actions {
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 5px rgb(255, 255, 255), -2px -2px 5px rgb(163, 163, 163);
}
.light .actions .circle {
  background-color: #333;
}
.light .actions .circle i {
  color: rgb(184, 184, 184);
}
/* color settings END */

/* orientation settings */
.vertical {
  width: 80vh;
  display: grid;
}
/* orientation settings END*/

.card-bg {
  padding: 5px;
  border-radius: 25px;
  margin: 20px;
  box-shadow: 3px 2px 5px white;
}
.card-bg img {
  transition: 0.2s;
  width: 100%;
  border-radius: 8px;
}
.card-bg img:hover {
  transition: 0.2s;
  opacity: 0.8;
  transform: scale(1.02);
}
.card-bg .actions {
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-radius: 25px;
}
.card-bg .actions .circle {
  transition: 0.2s;
  box-shadow: 2px 2px 5px grey;
  padding: 8px;
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 10px 0 0;
  cursor: pointer;
}
.card-bg .actions .circle:hover {
  transition: 0.2s;
  background-color: #666;
}
.card-bg .actions .circle:hover i {
  transition: 0.2s;
  color: #eee;
}
.card-bg .actions .circle i {
  font-size: 16pt;
  margin: auto;
}
.card-bg .description {
  padding: 25px;
  border-radius: 25px;
  box-shadow: inset 1px 1px 1px rgb(143, 143, 143), inset -1px -1px 1px #666;
}
.card-bg hr {
  opacity: 0.2;
}
.card-bg .description h4 {
  font-weight: bolder;
}
.card-bg .description p {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: lighter;
}

@media only screen and (max-width: 768px) {
  .horizontal {
    width: 100%;
  }
  .vertical {
    width: 100%;
    display: grid;
  }
  .card-bg {
    margin: 0;
  }
}
@media screen and (max-width: 1300px) {
  .glass {
    height: fit-content;
    padding: 0;
    margin: 0;
  }
  .body {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
