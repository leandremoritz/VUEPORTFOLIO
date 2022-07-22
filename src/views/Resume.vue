<template>
  <section id="Resume">
    <div class="glass">
      <div class="container">
        <!-- <h1 style="margin: 0 !important">Resume</h1> -->
        <div class="timeline">
          <div class="timeline__item" v-for="job in resume" :key="job">
            <h2>{{ job.year }}</h2>
            <h3>{{ job.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      resume: [
        {
          year: "2017-2021",
          title:
            " Graduated High School at  Kasselvlei Comprehensive High School.",
        },
        {
          year: "2022 (Present)",
          title: "Studying Full Stack Development at Life Choice Academy.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.glass {
  height: fit-content;
}
#Resume {
  height: 100vh;
  background-color: transparent;

  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
}
.col-1 {
  height: 80px;
  color: #0af10a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  border-radius: 90%;
  box-shadow: 10px 20px 60px #41464b;
  position: relative;
}

.col-1::before {
  content: "";
  background-color: black;
  height: 100px;
  width: 3px;
  position: absolute;
  bottom: 0;
  top: 100%;
}

h1 {
  text-align: center;
  font-family: "Raleway", sans-serif;
}

.timeline {
  position: relative;
  padding: 1rem;
  margin: 0 auto;
}
.timeline:before {
  content: "";
  position: absolute;
  height: 100%;
  border: 1px solid white;
  right: 40px;
  top: 0;
}
.timeline:after {
  content: "";
  display: table;
  clear: both;
}
@media screen and (min-width: 700px) {
  .timeline {
    padding: 2rem;
  }
  .timeline:before {
    left: calc(50% - 1px);
    right: auto;
  }
}
@keyframes time {
  0% {
    transform: translateZ(100px);
  }
  50% {
    transform: translateZ(40px);
  }
}

.timeline__item {
  padding: 1rem;
  border: 2px solid white;
  border-image: linear-gradient(to right, white, white);
  border-image-slice: 1;
  position: relative;
  margin: 1rem 3rem 1rem 1rem;
  clear: both;
  animation: time 4s infinite;
}
.timeline__item :hover {
  background-color: #01142499;
}
.timeline__item:after,
.timeline__item:before {
  content: "";
  position: absolute;
}
.timeline__item:before {
  right: -10px;
  top: calc(50% - 5px);
  border-style: solid;
  border-color: grey;
  border-width: 10px;
  transform: rotate(45deg);
}
@media screen and (min-width: 700px) {
  .timeline__item {
    width: 44%;
    margin: 1rem;
  }
  .timeline__item:nth-of-type(2n) {
    float: right;
    margin: 1rem;
    border-image: linear-gradient(to right, white 0%, white);
    border-image-slice: 1;
  }
  .timeline__item:nth-of-type(2n):before {
    right: auto;
    left: -10px;
    border-color: grey;
  }
}

.timeline__item--year {
  text-align: center;
  max-width: 150px;
  margin: 0 48px 0 auto;
  font-size: 1.8rem;
  background-color: black;
  line-height: 1;
  border-image: none;
  padding: 0.5rem 1rem 1rem;
}
.timeline__item--year:before {
  display: none;
}
@media screen and (min-width: 700px) {
  .timeline__item--year {
    text-align: center;
    margin: 0 auto;
  }
  .timeline__item--year:nth-of-type(2n) {
    float: none;
    margin: 0 auto;
    border-image: none;
  }
  .timeline__item--year:nth-of-type(2n):before {
    display: none;
  }
}

.timeline__title {
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-size: 1.5em;
}

.timeline__blurb {
  line-height: 1.5;
  font-size: 1rem;
  margin: 0.5rem 0 0;
}
@media screen and (width: 1400px) {
  .glass {
    height: fit-content;
  }
}
</style>
