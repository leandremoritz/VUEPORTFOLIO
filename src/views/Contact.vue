<template>
  <section id="Contacts" class="shadow-lg">
    <div class="glass">
      <div class="container">
        <form class="cf" action="https://formspree.io/f/xayvabjg" method="POST">
          <div class="half left cf">
            <input type="text" id="input-name" placeholder="Name" />

            <input type="email" id="input-email" placeholder="Email address" />

            <input type="text" id="input-subject" placeholder="Subject" />
          </div>

          <div class="half right cf">
            <textarea
              name="message"
              type="text"
              id="input-message"
              placeholder="Message"
            ></textarea>
          </div>

          <input type="submit" value="Submit" id="input-submit" class="mb-5" />
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#Contacts {
  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);
}
form {
  max-width: 600px;
  text-align: center;
  margin: 20px auto;
}
form input,
form textarea {
  border: 0;
  outline: 0;
  padding: 1em;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  border-radius: 8px;
  display: block;
  width: 100%;
  margin-top: 1em;
  font-family: "Merriweather", sans-serif;
  /* -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1); */
  resize: none;
  background-color: white;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 8px rgba(255, 255, 255, 1);
}

form input:focus,
form textarea:focus {
  -moz-box-shadow: 0 0px 2px rgb(249, 253, 248) !important;
  -webkit-box-shadow: 0 0px 2px rgb(253, 253, 253) !important;
  box-shadow: 0 0px 2px rgb(240, 242, 239) !important;
}
form #input-submit {
  color: black;

  font-family: Verdana, Geneva, Tahoma, sans-serif;

  /* opacity: 0.6; */
  font-weight: bolder;
  background: -webkit-linear-gradient(#fff, #9f9d9d, #fff, #9f9d9d, #fff);
  /* background-image: linear-gradient(45deg, #000, #fff, #000, #fff, #000); */
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;

  cursor: pointer;
  background-color: white;
  backdrop-filter: blur(5px);
}
form #input-submit:hover {
  -moz-box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.6);
  -webkit-box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.6);
  box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.6);
}
form textarea {
  height: 126px;
}

.half {
  float: left;
  width: 48%;
  margin-bottom: 1em;
}

.right {
  width: 50%;
}

.left {
  margin-right: 2%;
}

@media (max-width: 480px) {
  .half {
    width: 100%;
    float: none;
    margin-bottom: 0;
  }
}
/* Clearfix */
.cf:before,
.cf:after {
  content: " ";
  /* 1 */
  display: table;
  /* 2 */
}

.cf:after {
  clear: both;
}
@media screen and (max-width: 1300px) {
  .glass {
    height: fit-content;
  }
}
</style>
