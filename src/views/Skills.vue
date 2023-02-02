<template>
  <div class="glass">
    <ul>
      <li>
        <h2>Frontend</h2>

        <!-- HTML5 -->
        <p style="width: 97%" data-value="97">HTML</p>
        <progress max="100" value="97" class="html5">
          <!-- Browsers that support HTML5 progress element will ignore the html inside `progress` element. Whereas older browsers will ignore the `progress` element and instead render the html inside it. -->
          <div class="progress-bar">
            <span style="width: 97%"></span>
          </div>
        </progress>

        <!-- CSS3 -->
        <p style="width: 95%" data-value="95">CSS</p>
        <progress max="100" value="95" class="css3">
          <div class="progress-bar">
            <span style="width: 95%"></span>
          </div>
        </progress>

        <!-- jQuery -->
        <p style="width: 50%" data-value="50">JavaScripts</p>
        <progress max="100" value="50" class="jquery">
          <div class="progress-bar">
            <span style="width: 50%"></span>
          </div>
        </progress>
      </li>
      <li>
        <h2>Soft Skills</h2>

        <p style="width: 90%" data-value="75">Time Management</p>
        <progress max="100" value="90" class="python">
          <!-- Browsers that support HTML5 progress element will ignore the html inside `progress` element. Whereas older browsers will ignore the `progress` element and instead render the html inside it. -->
          <div class="progress-bar">
            <span style="width: 90%"></span>
          </div>
        </progress>

        <p style="width: 99%" data-value="99">Communication</p>
        <progress max="100" value="99" class="php">
          <div class="progress-bar">
            <span style="width: 99%"></span>
          </div>
        </progress>

        <p style="width: 85%" data-value="85">Problem Solving</p>
        <progress max="100" value="85" class="node-js">
          <div class="progress-bar">
            <span style="width: 85%"></span>
          </div>
        </progress>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
p {
  color: white;
  font-size: 20px;
  font-weight: bold;
}
ul {
  margin-left: 20px;
}
.glass {
  margin-top: 20vh;
  margin-left: 4vw;
  height: 78vh;
}

body {
  margin: 50px auto 0;
  max-width: 800px;

  font-family: "Expletus Sans", sans-serif;
}

li {
  width: 50%;
  float: left;
  list-style-type: none;

  padding-right: 5.3333333%;
}

li:nth-child(even) {
  margin-bottom: 5em;
}

h2 {
  margin: 0 0 1.5em;
  border-bottom: 1px solid white;
  font-weight: bolder;
  color: white;
  padding: 0 0 0.25em;
}

/* Styling an indeterminate progress bar */

/* Styling the determinate progress element */

progress[value] {
  appearance: none;

  border: none;

  /* Add dimensions */
  width: 100%;
  height: 20px;

  background-color: whiteSmoke;
  border-radius: 3px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5) inset;

  color: royalblue;

  position: relative;
  margin: 0 0 1.5em;
}

progress[value]::-webkit-progress-bar {
  background-color: whiteSmoke;
  border-radius: 3px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5) inset;
}

progress[value]::-webkit-progress-value {
  position: relative;

  background-size: 35px 20px, 100% 100%, 100% 100%;
  border-radius: 3px;

  /* Let's animate this */
  animation: animate-stripes 5s linear infinite;
}

@keyframes animate-stripes {
  100% {
    background-position: -100px 0;
  }
}

progress[value]::-webkit-progress-value:after {
  content: "";
  position: absolute;

  width: 5px;
  height: 5px;
  top: 7px;
  right: 7px;

  background-color: white;
  border-radius: 100%;
}

progress[value]::-moz-progress-bar {
  /* Gradient background with Stripes */
  background-image: -moz-linear-gradient(
      135deg,
      transparent,
      transparent 33%,
      rgba(0, 0, 0, 0.1) 33%,
      rgba(0, 0, 0, 0.1) 66%,
      transparent 66%
    ),
    -moz-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(108, 97, 97, 0.2)),
    -moz-linear-gradient(left, grey, grey);

  background-size: 35px 20px, 100% 100%, 100% 100%;
  border-radius: 3px;
}

/* Fallback technique styles */
.progress-bar {
  background-color: whiteSmoke;
  border-radius: 3px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5) inset;

  /* Dimensions should be similar to the parent progress element. */
  width: 100%;
  height: 20px;
}

.progress-bar span {
  background-color: royalblue;
  border-radius: 3px;

  display: block;
  text-indent: -9999px;
}

p[data-value] {
  position: relative;
}

p[data-value]:after {
  position: absolute;
  right: 0;
}

.html5::-webkit-progress-value,
.python::-webkit-progress-value {
  /* Gradient background with Stripes */
  background-image: -webkit-linear-gradient(
      135deg,
      transparent,
      transparent 33%,
      rgba(0, 0, 0, 0.1) 33%,
      rgba(0, 0, 0, 0.1) 66%,
      transparent 66%
    ),
    -webkit-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.2)),
    -webkit-linear-gradient(left, grey, grey);
}

.css3::-webkit-progress-value,
.php::-webkit-progress-value {
  /* Gradient background with Stripes */
  background-image: -webkit-linear-gradient(
      135deg,
      transparent,
      transparent 33%,
      rgba(0, 0, 0, 0.1) 33%,
      rgba(0, 0, 0, 0.1) 66%,
      transparent 66%
    ),
    -webkit-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.2)),
    -webkit-linear-gradient(left, grey, grey);
}

.jquery::-webkit-progress-value,
.node-js::-webkit-progress-value {
  /* Gradient background with Stripes */
  background-image: -webkit-linear-gradient(
      135deg,
      transparent,
      transparent 33%,
      rgba(0, 0, 0, 0.1) 33%,
      rgba(0, 0, 0, 0.1) 66%,
      transparent 66%
    ),
    -webkit-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.2)),
    -webkit-linear-gradient(left, grey, grey);
}

.html5::-moz-progress-bar,
.php::-moz-progress-bar {
  /* Gradient background with Stripes */
  background-image: -moz-linear-gradient(
      135deg,
      transparent,
      transparent 33%,
      rgba(0, 0, 0, 0.1) 33%,
      rgba(0, 0, 0, 0.1) 66%,
      transparent 66%
    ),
    -moz-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.2)),
    -moz-linear-gradient(left, grey, grey);
}

.css3::-moz-progress-bar,
.php::-moz-progress-bar {
  /* Gradient background with Stripes */
  background-image: -moz-linear-gradient(
      135deg,
      transparent,
      transparent 33%,
      rgba(0, 0, 0, 0.1) 33%,
      rgba(0, 0, 0, 0.1) 66,
      transparent 66%
    ),
    -moz-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.2)),
    -moz-linear-gradient(left, grey, grey);
}

.jquery::-moz-progress-bar,
.node-js::-moz-progress-bar {
  /* Gradient background with Stripes */
  background-image: -moz-linear-gradient(
      135deg,
      transparent,
      transparent 33%,
      rgba(0, 0, 0, 0.1) 33%,
      rgba(0, 0, 0, 0.1) 66%,
      transparent 66%
    ),
    -moz-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.2)),
    -moz-linear-gradient(left, grey, grey);
}
@media screen and (max-width: 550px) {
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  progress[value] {
    width: 40vh;
  }
}
.glass {
    background: #09213ebd !important;
}

</style>
