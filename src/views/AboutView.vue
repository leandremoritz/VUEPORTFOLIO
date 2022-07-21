<template>
  <section id="about">
    <div class="glass">
      <div class="card">
        <input type="checkbox" name="" id="" />
        <div id="aboutMe">
          <img
            src="@/assets/Leandre.png"
            alt="In-Shot-20220719-105140013-removebg-preview"
            border="0"
            class="lee"
          />
          <p class="text">
            I'm a well thought out person who enjoys solving problems. I love
            sightseeing, and travelling and will gladly welcome any adventure
            that comes my way. My passion for technology recently started when I
            started this course. Prior, I wanted to gain experience. However,
            when I started, I found the course so interesting that it's now my
            career choice.
          </p>
        </div>

        <div class="side">
          <h3>MORE ABOUT ME</h3>

          <ul>
            <li>
              <b>Name</b>
              <br />
              <span>Le-Andre Moritz </span>
            </li>
            <li>
              <b>Email</b>
              <br />
              <span>leandremoritz19@gmail.com </span>
            </li>
            <li>
              <b>Address</b> <br />
              <span> Bellville South </span>
            </li>
            <li>
              <b>Phone</b> <br />
              <span>063 504 9120 </span>
            </li>
            <li>
              <b>Date Of Birth</b><br />
              <span> 15 November 2003 </span>
            </li>
            <li>
              <b>Nationality</b> <br />
              <span> South African </span>
            </li>
            <li>
              <b>Languages</b> <br />
              <span> Afrikaans , English </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.text {
  margin: 1%;
  font-weight: bolder;
  color: white;
}
h3 {
  /* margin-top: -350px; */
  font-weight: bold;
  color: white !important;
}
ul {
  list-style-type: none;
}
b {
  font-size: 15px;
}
#about {
  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);
}
#aboutMe {
  margin-top: 8vh;
  display: flex;
  flex-direction: row;

  align-items: center;
}
/* card */
.card {
  width: 90vw;
  height: 520px;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: center;
  align-items: center;
  /* border-radius: 15px; */
}
.lee {
  background-color: inherit;
  margin-top: -250px;
}
.card .lee {
  margin-top: 1%;

  /* top: -40px;/ */
  width: 40%;

  transition: transform 0.5s, filter 0.4s;
}
.card input[type="checkbox"] {
  position: absolute;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.119);
  backdrop-filter: blur(5px);
  color: white;
  appearance: none;
  bottom: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.4s;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.238);
}
.card input[type="checkbox"]:checked {
  transform: translate(-450%);
}
.card input[type="checkbox"]::before {
  content: "\f129";
  position: absolute;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 700;
  font-size: 1em;
}
.card input[type="checkbox"]:checked ~ .lee {
  transform: scale(1.2) rotate(-20deg);
  filter: blur(10px);
}
.card input[type="checkbox"]:checked::before {
  content: "\f061";
}
.side {
  position: absolute;
  width: 85%;
  height: 85%;
  background: rgba(0, 0, 0, 0.853);
  color: white;
  z-index: 5;
  bottom: 0;
  right: 0;
  border-radius: 10px 0 0 0;
  background: rgba (29, 29, 29, 0.989);
  box-shadow: 0 0 8px rgba(255, 255, 255, 1);
  transform: translate(100%);
  transition: transform 0.4s;
}
.card input[type="checkbox"]:checked ~ .side {
  transform: translate(0%);
}
.side h3 {
  color: black;
  margin: 25px 0 10px 15px;
}
.side p {
  color: black;
  margin-left: 15px;
  font-size: 0.8em;
}
.glass {
  width: 90vw;
  height: 520px;
  box-shadow: 0 0 8px rgba(255, 255, 255, 1);

  background-position: center;
  background-size: cover;
  position: absolute;
  bottom: 50px;

  background: inherit;
}
@media screen and (max-width: 500px) {
  #aboutMe {
    flex-direction: column;
  }
  .text {
    font-size: 13px;
  }
}
</style>
