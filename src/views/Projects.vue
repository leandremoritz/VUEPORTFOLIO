<template>
  <div class="glass">
    <div class="body">
      <section
        class="card-bg vertical dark"
        v-for="project in projects"
        :key="project"
      >
        <div class="container">
          <div class="view view-tenth">
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
                    href="https://github.com/Carlaamylawrence/Company_portfolio"
                    class="fa-brands text-none fa-github"
                    style="color: black"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://sweetheavenconfectionery.netlify.app"
                    class="fa-solid text-none fa-globe"
                    style="color: black"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- <article>
          <div class="description">
            <img :src="project.image" alt="" />

            <h2>{{ project.title }}</h2>
          </div>
          <hr /> -->

        <!-- <section class="actions">
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
          </section> -->
        <!-- </article> -->
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
/* project */
img {
  width: 250px;
  height: 250px;
}
.body {
  display: flex;
  color: white;
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
</style>
