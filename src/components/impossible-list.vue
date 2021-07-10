<template>
  <div class="container-fluid px-0">
    <div class="container text-center pt-5">
      <h1>Impossible List</h1>
      <p class="descrip text-justify">{{ description }}</p>
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/6apcEae2U4w"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
      </div>
    </div>
    <div class="mt-5 container">
      <h2>Current Focuses:</h2>
      <p class="descrip text-justify">
        {{ currentFocus.description }}
      </p>
      <ul>
        <li v-for="(item, index) in currentFocus.currentList" :key="index">{{ item }}</li>
      </ul>
      <h3>Last achievements:</h3>
      <ul class="achivements">
        <li v-for="(item, index) in currentFocus.lastAchievements" :key="index">
          <a v-if="item.useLink" :href="item.link">{{ item.description }}</a>
          <span v-else>{{ item.description }}</span>
        </li>
      </ul>
    </div>
    <div class="my-5 container">
      <div class="workingOn">
        <h3>New skills</h3>
        <ul>
          <span>Read, write and speak Japanese</span>
          <ul>
            <li class="completed">Write and read Hiragana</li>
            <li>Write and read Katanas</li>
            <span>Learn kanjis</span>
            <ul>
              <li> 50 basics</li>
              <li> 100 basics</li>
            </ul>
          </ul>
          <li>Learn Boxing</li>
          <li>Learn Archery</li>
          <li>Learn how to dance merengue</li>
          <li>Learn how to dance salsa</li>
          <li>Learn a cocktails</li>
          <li>Learn how to shoot gun</li>
          <li>Learn Kendo</li>
          <li>Learn new ways types of cafe</li>
        </ul>
        <h3>Financial Goals</h3>
        <ul>
          <span>Completar reserva financiera en el tesouro selic</span>
          <ul>
            <li>3 meses <a href="https://www.youtube.com/watch?v=shfYMvEXqm4">Reserva financiera</a></li>
            <li>6 meses Reserva financiera</li>
          </ul>
          <span class="completed">Get a income of 1000$ in a month</span>
          <ul>
            <li>Get a income of 1500$ in a month</li>
          </ul>
          <span class="completed">Make 250$ in freelance work in a month</span>
          <ul>
            <li class="completed">Win a salary of 50</li>
            <li >Win a salary of 300</li>
          </ul>
          <span>Fiverr gigs</span>
          <ul>
            <li class="completed">Complete 5 Fiverr gigs</li>
            <li>Complete 25 gigs</li>
            <span class="completed">Get a custom order of 20$</span>
            <ul>
              <li>Charge a custom order for 100$</li>
            </ul>
            <li>Get first dev related order</li>
          </ul>
        </ul>
        <h3>Travels goals</h3>
        <ul>
          <li><strong> Make a solo travel to any destination</strong></li>
          <li>Make a travel to Spain</li>
          <li>Make a travel to USA</li>
          <li>Make a travel to UK</li>
          <li>Make a travel to Vieralves</li>
          <li>Make a travel to Rio de Janeiro</li>
          <li>Make a travel to Santa Catarina</li>
          <span>Make a travel to Japan</span>
          <ul>
            <span>Hokkaido</span>
            <ul>
              <li><a href="https://goo.gl/maps/XcZphY5FdztNYkL19">Higashimokotoshibazakura Park</a></li>
            </ul>
            <span>Tokyo</span>
            <ul>
              <li><a href="https://www.instagram.com/colorsol.official/">Colorsol </a></li>
              <li><a href="https://map.yahoo.co.jp/place?lat=35.708909384359&lon=139.66607585038&zoom=17&maptype=basic">
                Jojo Bar</a></li>
            </ul>
            <li>Kyoto</li>
          </ul>
          <li>Make a travel to Venezuela</li>
          <li>Make a travel to Argentina</li>
          <li>Make a travel to Canada</li>
        </ul>
        <h3>Events to assist</h3>
        <ul>
          <li>The International</li>
          <li>A Dota 2 Major</li>
          <li>Comic con</li>
          <li>Comiket</li>
        </ul>
        <h3>Programing goals</h3>
        <ul>
          <li>Create a Blog</li>
          <span class="completed">Modify my portafolio online (May 2020)</span>
          <ul>
            <li>Add testing with Jtest</li>
            <li>Modify project to use gitlab</li>
            <li class="completed">Modify server to reload correctly</li>
          </ul>
          <li>Create a mobile app</li>
          <li>Create a discord bot</li>
          <li>Create a manga tracking chrome extension</li>
          <li>Learn MYSQL Basics</li>
          <li>Learn Node.js advanced features</li>
          <li>Create a Restful API</li>
          <li>Learn Jquery Basics</li>
          <li>Learn React</li>
          <li>Learn Redis basics</li>
          <li>Learn SEO basics</li>
          <span>Learn Symfony</span>
          <ul>
            <li class="completed">First Course of Symfony completed (16/2/2020)</li>
            <li><a href="https://www.udemy.com/home/my-courses/learning/?sort=-enroll_time&p=1">
              Second Course of Symfony</a></li>
            <span>Create 5 projects with Symfony</span>
            <ul>
              <li class="completed">FTApp in production</li>
              <li>Yunyun project</li>
              <li>Lelouch project</li>
            </ul>
            <li>Write an article about the benefits and problems of Symfony</li>
          </ul>
          <span>Level up php</span>
          <ul>
            <li class="completed">Primer curso Aprende a crear tu propio correo con PHP7, MySQL, Html5 (28/7/2020)</li>
            <li>PHP learning 7.4</li>
            <li>PHP learning 8.0</li>
            <li>Update base for knowledge</li>
          </ul>
          <span>Learn Laravel</span>
          <ul>
            <li><a
                href="https://www.skillshare.com/classes/Learn-the-Basics-of-LARAVEL-and-create-your-own-BUY-AND-SELL-website/1123690265/projects?via=search-layout-grid">
              Learn the Basics of LARAVEL(09/03/2021)</a></li>
            <li>One project with Laravel (maybe Lelouch)</li>
          </ul>
          <span>Learn Doctrine</span>
          <ul>
            <li>PHP Databases with Doctrine, MySQL and SQLite</li>
          </ul>
          <span>Learn Vue.js</span>
          <ul>
            <li class="completed">First Course of Vue.js 2 Academy: Learn Vue Step by Step (22/03/2020)</li>
            <li class="completed">Second Course of Vue.js: Build a Full Stack App With Firebase, Vuex & Vue Router (June
              2020)
            </li>
            <span>Create 4 projects with it</span>
            <ul>
              <li>My portafolio</li>
              <li>Diego portafolio</li>
              <li>Mami portafolio</li>
              <li>ONG portafolio</li>
            </ul>
            <li>Write and article about its advantages and fails</li>
          </ul>
          <span>Learn Docker</span>
          <ul>
            <li>set first docker with all the repos i got</li>
            <li>Set a docker with my portfolio environment.</li>
            <li>Learn how to work with dockers with symfony</li>
            <li class="completed">Complete first course of docker (31-05-2021)</li>
          </ul>
          <span>Maintain knowledge in Bootstrap</span>
          <ul>
            <li class="completed">Beginner Bootstrap 4: Hand code beautiful responsive websites fast (20/4/2020)</li>
          </ul>
          <span>Learn Graphql</span>
          <ul>
            <li class="completed">GraphQL Apollo Server with Node.js, MongoDB - GraphQL API (June 2020)</li>
            <li>Full-Stack VUE with Graphql - the Ultimate Guide</li>
          </ul>
          <span>Google cloud Computing</span>
          <ul>
            <li class="completed">Google Cloud Platform (GCP) Fundamentals for Beginners (2021/01/09)</li>
            <li>Work in a project using GCP</li>
            <li>Course on implementation of symfony with gcp</li>
            <li>Course for extra services for gcp</li>
            <li>Course on preparation to certificate exam</li>
            <li>Maybe a certificate Certificate(?</li>
          </ul>
          <span>Gitlab</span>
          <ul>
            <li>3 projects with gitlab CI for testing</li>
            <li>1 gitlab CI project for Deployment</li>
            <li>Gitlab read on Documentation</li>
          </ul>
          <span>Learn .NET connections using the c#</span>
          <ul>
            <li>How To Use API's with Visual Studio, C#, ASP.Net</li>
            <li>Object-Oriented Programming in C#</li>
          </ul>
          <span>Aprender wordPress</span>
          <ul>
            <span class="completed">Set up a first project in hostgator</span>
            <ul class="completed">
              <li class="completed">Connection to DB</li>
              <li class="completed">Connection to cms</li>
              <li class="completed">Set up with domain</li>
            </ul>
            <li class="completed">Set project with gcp (19-05-2021)</li>
            <li class="completed">set project with theme</li>
          </ul>
        </ul>
        <h3>Health goals</h3>
        <ul>
          <li>Maintain a wight of 75~80 kg</li>
          <li>Diet completion begins of the year</li>
          <li>Maintain a weekly routine of 15 min for 2 weeks</li>
        </ul>
        <h3>QA goals</h3>
        <ul>
          <li class="completed">TSPI</li>
          <li class="completed">DTAR</li>
          <li>Winston Castillo Series for QA testing.</li>
          <li>CI for github</li>
          <li>CI for gitlab</li>
          <li>Run first automate test for any personal project.</li>
          <li>Learn more about Selenium</li>
          <li>Learn more about Jest</li>
          <li>Learn more about PHPUnit</li>
          <li>Learn more about PHPSpec</li>
          <li>Learn more about JUnit</li>
        </ul>
        <h3>UX</h3>
        <ul>
          <li>Start new <a href="https://www.sympla.com.br/skill---ux-para-alem-das-telas__1068815">course</a></li>
        </ul>
        <h3>Health</h3>
        <ul>
          <li>Lose weight 80~85 kg</li>
        </ul>
      </div>
    </div>
    <contact></contact>
  </div>

</template>

<script>
import contact from "./contact";
import {store} from "../content/main";

export default {
  name: "Impossible",
  data: function () {
    return {
      description: store.getters.getDescriptionImpossible,
      currentFocus: store.getters.getCurrentFocusImpossible
    }
  },
  components: {
    contact
  }
}
</script>

<style scoped>

.achivements {
  list-style-type: hiragana;
  font-size: 1.7rem;
}

.workingOn ul {
  list-style-type: none;
}

span, li {
  font-size: 1.5rem;
}

.completed {
  text-decoration: line-through;
}

.descrip {
  font-size: 1.5rem;
}
</style>