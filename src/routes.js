import Welcome from "./components/welcome";
import Impossible from "./components/impossible-list";
import Work from "./components/work";
import skills from "./components/skills";

export const routes =[
    {path:'/', component: Welcome},
    {path:'*', component: Welcome},
    {path: '/impossible', component: Impossible},
    {path: '/work', component: Work},
    {path:'/skills', component: skills}
];