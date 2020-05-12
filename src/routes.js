import Welcome from "./components/welcome";
import Impossible from "./components/impossible-list";
import Work from "./components/work";

export const routes =[
    {path:'/', component: Welcome},
    {path: '/impossible', component: Impossible},
    {path: '/work', component: Work}
];