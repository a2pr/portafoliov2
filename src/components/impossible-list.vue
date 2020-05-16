<template>
    <div class="container-fluid">
        <div class="container text-center pt-5">
            <h1>Impossible List</h1>
            <p class="descrip text-justify">
                This was an idea that i take from Thomas Frank. Probably you know the term of a bucket list, a list of things you wanted to do before you die. A list that could contain a journey you have postpone
                for different reasons, lost some weight or to read 15 books a year. But this list probably hasn´t been part of an active role in your life. An impossible list makes you want to pursuit this goals, dreams or objectives
                in an active way, keeping you accountable and remind you of the the things you set for yourself.
                I recommend this video about it, for more explanation about the concept.
            </p>
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item"  src="https://www.youtube.com/embed/6apcEae2U4w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>

        </div>
        <div class="mt-5 container">
                <h2>Current Focuses:</h2>
                <p class="descrip text-justify">
                    Right now my main focus is in the couple of projects for my personal interest. That will help in not only programming proficiency, but also
                    in project management.
                </p>

                <h3>Last achievements:</h3>
                <ul class="achivements">
                    <li>Complete Symfony Course (February 2020)</li>
                    <li>Complete Vue.js 2 Academy: Learn Vue Step by Step course (22/03/2020)</li>
                    <li>Complete Beginner Bootstrap 4: Hand code beautiful responsive websites fast Course(20/4/2020)</li>
                </ul>
        </div>

        <div class="my-5 container">
            <div class="workingOn">
                <h3>New skills</h3>
                <ul>
                    <li>Read, write and speak Japanese (on hold) </li>
                    <li>Learn Boxing </li>
                    <li>Learn Archery </li>
                    <li>Learn how to dance merengue</li>
                    <li>Learn how to dance salsa </li>
                    <li> Learn a cocktail</li>
                    <li>Learn how to shoot gun</li>
                    <li>Learn Kendo</li>
                </ul>
                <h3>Financial Goals</h3>
                <ul>
                    <li>Make a income of $900 in a month</li>
                    <li>Save at least $900</li>
                    <li>Make 250$ in freelance work in a month</li>
                </ul>
                <h3>Trips</h3>
                <ul>
                    <li><strong> Make a solo trip to any destination</strong></li>
                    <li>Make a trip to Spain</li>
                    <li>Make a trip to USA</li>
                    <li>Make a trip to UK</li>
                    <li>Make a trip to Vieralves</li>
                    <li>Make a trip to Rio de Janeiro</li>
                    <span>Make a trip to Japon</span>
                    <ul>
                        <li>Hokkaido</li>
                        <li>Tokyo</li>
                        <li>Kyoto</li>
                    </ul>
                    <li>Make a trip to Venezuela</li>
                </ul>
                <h3>Events to assist</h3>
                <ul>
                    <li>The international</li>
                    <li>Dota 2 Major</li>
                    <li>Comic con</li>
                    <li>Comiket</li>
                </ul>
                <h3>Programing goals</h3>
                <ul>
                    <li>Create a Blog</li>
                    <li>Modify my portafolio online</li>
                    <li>Create a mobile app</li>
                    <li>Create a discord bot</li>
                    <li>Create a manga tracking chrome extension</li>
                    <li>Learn MYSQL Basics</li>
                    <li>Learn Node.js advanced features</li>
                    <li>Create a Restful API</li>
                    <li>Learn Jquery Basics</li>
                    <li>Learn React</li>
                    <li>Learn Redis basics</li>
                    <span>Learn Symfony</span>
                    <ul>
                        <li class="completed">First Course of Symfony completed (16/2/2020)</li>
                        <li>Second Course of Symfony</li>
                        <li>Create 5 projects with Symfony</li>
                        <li>Write an article about the benefits and problems of Symfony</li>
                    </ul>
                    <li>Learn Doctrine</li>
                    <span>Learn Vue.js</span>
                    <ul>
                        <li class="completed">First Course of Vue.js 2 Academy: Learn Vue Step by Step (22/03/2020)</li>
                        <li>Second Course of Vue.js: Build a Full Stack App With Firebase, Vuex & Vue Router</li>
                    </ul>
                    <li>Learn Docker</li>
                    <span>Maintain knowledge in Bootstrap</span>
                    <ul>
                        <li class="completed">Beginner Bootstrap 4: Hand code beautiful responsive websites fast (20/4/2020)</li>
                    </ul>
                </ul>
                <h3>Physical goals</h3>
                <ul>
                    <li>Maintain a wight of 75~80 kg</li>
                    <li>Maintain  a weekly routine of 15 min for 2 weeks</li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Impossible"
    }
</script>

<style scoped>

    .achivements{
        list-style-type: hiragana;
        font-size: 1.7rem ;
    }

    .workingOn ul{
       list-style-type: none;
    }
    span, li{
        font-size: 1.5rem;
    }
    .completed{
        text-decoration: line-through;
    }
    .descrip{
        font-size: 1.5rem;
    }
</style>