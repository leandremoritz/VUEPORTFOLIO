<template>
  <nav id="nav" class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <div class="brand">
        <!-- <a href="./index.html"
          ><img
            style="background: black"
            id="navlogo"
            src="https://iili.io/wkecAv.md.png"
        /></a> -->
      </div>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-chevron-double-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
          <path
            fill-rule="evenodd"
            d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll p-3 mb-5 rounded me-5 ms-5"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <router-link class="nav-link active" to="/">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">ABOUT</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/resume">RESUME</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/skills">SKILLS</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projects">PROJECTS</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/testimonials"
              >TESTIMONIALS</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Contact">CONTACT</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
/*Navbar*/
.navbar {
  z-index: 1000;
  height: 80px;
  width: 100vw;
  position: absolute;
  top: 30px;
}
svg {
  color: white;
}

.container-fluid {
  box-shadow: 0 0 8px rgba(255, 255, 255, 1);
  backdrop-filter: blur(5px);
}
@media screen and (max-width: 990px) {
  .container-fluid {
    box-shadow: 0 0 0;
  }
}

.nav-link {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bolder;
  color: white;

  transition: transform 0.2s;
}

.nav-link:hover {
  text-decoration: none;
  text-shadow: 0 0 8px rgba(255, 255, 255, 1);
  transform: scale(1.5);
  filter: blur(5px);
  color: grey !important;
}

#navlogo {
  color: black;
  margin-bottom: 15px;
  height: 50px;
  width: 55px;
}
.navbar-toggler {
  color: white;
}

#navbrand {
  margin-top: -30px;
}

#bar {
  width: 20rem;
}
a {
  text-decoration: none;
}
</style>
