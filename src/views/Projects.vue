<template>
  <div class="glass">
    <div class="body">
      <section
        class="card-bg vertical dark"
        v-for="project in projects"
        :key="project"
      >
        <div class="container">
          <div class="hello">
            <img
              data-bs-toggle="modal"
              data-bs-target="#PROJECTS1"
              class="img-responsive"
              :src="project.image"
            />
            <div class="mask">
              <h2>{{ project.title }}</h2>
              <ul class="social-links">
                <li>
                  <a
                    :href="project.github"
                    class="fa-brands text-none fa-github"
                    target="_blank"
                  ></a>
                </li>
                <li>
                  <a
                    :href="project.netlify"
                    class="fa-solid text-none fa-globe"
                    target="_blank"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
          github: "https://github.com/leandremoritz/calculator",
          netlify: "https://sunny-pony-3cd535.netlify.app",
        },
        {
          image:
            "https://i.ibb.co/yWnrzQb/mike-swigunski-ue-Bmz9-K8z-Tg-unsplash.jpg",
          title: "Holiday Destination",
          github: "https://github.com/leandremoritz/branchestask",
          netlify: "https://sensational-semifreddo-4c9548.netlify.app",
        },
        {
          image:
            "https://i.ibb.co/XCScJw7/jason-leung-po-I7-Del-Fi-VA-unsplash.jpg",
          title: "Restuarant",
          github: "https://github.com/leandremoritz/Delicious",
          netlify: "https://deft-flan-4645a3.netlify.app",
        },
        {
          image: "https://i.ibb.co/5sKybWn/andy-li-Rnd-RFJ1v1kk-unsplash.jpg",
          title: "Bakery",
          github: "https://github.com/Carlaamylawrence/Company_portfolio",
          netlify: "https://sweetheavenconfectionery.netlify.app",
        },
        {
          image:
            "https://i.ibb.co/WDprLRV/jakub-sisulak-L1-AEdl-i-LL4-unsplash.jpg",
          title: "LJMA GAMES",
          github: "https://github.com/JesseSpence/ljmaUpdated",
          netlify: "https://ljma-games-online-store.netlify.app/",
        },
        {
          image: "https://i.ibb.co/z2khVTf/BMI.jpg",
          title: "BMI Calculator",
          github: "https://github.com/leandremoritz/Bmi_Calculator",
          netlify: "https://celadon-praline-4eec9f.netlify.app/",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* project */

img {
  width: 250px;
  height: 250px;
  animation: hello 2s infinite;
  box-shadow: 2px 2px 12px rgb(200, 191, 191) !important;
}

@keyframes hello {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1);
  }
}
.glass {
  height: fit-content;

  display: flex;
  flex-wrap: wrap;
  padding-left: 60px;
  padding-top: 60px;
  margin-left: 80px;
}
@media screen and (max-width: 1200px) {
  .glass {
    padding-left: 0;
    width: fit-content;
    margin-right: 2%;
    margin-left: 2%;
  }
  body {
    display: flex;
    justify-content: center;
  }
  .body {
    display: flex;
    justify-content: center;
  }
}
ul {
  list-style: none;
}
.body {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
}

.fa-solid {
  color: white;
}
.fa-brands {
  color: white;
}
.fa-globe :hover {
  transform: scale(1.2);
  box-shadow: 2px 2px 12px rgb(200, 191, 191);
}
.fa-brands:hover {
  transform: scale(1.2);
  box-shadow: 2px 2px 12px rgb(200, 191, 191);
}
#Projects img {
  width: 150px;
  height: 150px;
}
.project-card {
  position: relative;
  margin-top: 100px;
  overflow: hidden;

  margin-bottom: 15px;
}
.project-card .project-img {
  overflow: hidden;
}
.project-card .project-img img {
  width: 100%;
  height: auto;
  transition: all 1s ease;
}
.project-card:hover .project-img img {
  transform: scale(1.3);
}

@media screen and (max-width: 990px) {
  .projects-container {
    margin-top: 150px;
  }
}
@media screen and (max-width: 768px) {
  .projects-container {
    margin-top: 350px;
  }
}
@media screen and (max-width: 700px) {
  .projects-container {
    margin-top: 200px;
  }
}
@media screen and (max-width: 405px) {
  .words {
    font-size: 20px;
  }
}
@media screen and (max-width: 420px) {
  .testimonials .item {
    width: 350px;
  }
}

.project-card .profile-content::before {
  content: "";
  position: absolute;
  transition: all 0.5s linear;
}
.project-card .profile-content::before {
  top: 0;
  left: 0;
  width: 50%;
  height: 40%;
  border-right: transparent;
  border-bottom: transparent;
}

.project-card:hover .profile-content::before {
  top: 20px;
  left: 20px;
}

.project-card .profile-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 50% 4%;
  text-align: center;
  transition: all 0.3s ease;
}
.project-card .profile-content:hover {
  padding-bottom: 200px;
  background-color: rgba(37, 245, 14, 0.8);
}
.project-card .profile-content .btn {
  color: white;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0;
  transform: translateY(-100px);
  transition: all 900ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s;
}
.project-card .profile-content .btn > span {
  display: block;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 5px 0;
  font-weight: 600;
}
.project-card:hover .profile-content .btn {
  opacity: 1;
  transform: translateY(0);
}

.project-card .profile-content .social-links {
  list-style: none;
  padding: 0;
  margin: 10px 0;
  opacity: 0;
  transform: translateY(-100px);
  transition: all 900ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.2s;
}
.project-card:hover .profile-content .social-links {
  opacity: 1;
  transform: translateY(0);
}
.project-card .profile-content .social-links li {
  display: inline-block;
  margin: 0px 5px;
}
.project-card .profile-content .social-links li a {
  color: rgb(14, 13, 13);
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  text-align: center;
}
.social-links {
  font-size: 30px;
}
h2 {
  color: #fff;

  font-family: Verdana, Geneva, Tahoma, sans-serif;

  /* opacity: 0.6; */
  font-weight: bolder;
  background: -webkit-linear-gradient(#9f9d9d, #fff, #9f9d9d, #fff, #9f9d9d);
  /* background-image: linear-gradient(45deg, #000, #fff, #000, #fff, #000); */
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  font-size: 30px;
  padding-top: 1%;
}
.glass {
    background: #09213ebd !important;
}
</style>
