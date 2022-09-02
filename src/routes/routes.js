import { createWebHistory, createRouter } from "vue-router";

import MainPage from "@/components/MainPage.vue"
import PageOne from "@/components/PageOne.vue"
import PageTwo from "@/components/PageTwo.vue"
import PageThree from "@/components/PageThree.vue"

var routes = [
    {
        path:'/',
        redirect:'/page1'
    },
    {
        path:'/page1',
        component : PageOne
    },
    {
        path:'/page2',
        component : PageTwo
    },     
    {
        path:'/mainPage',
        component : MainPage,
        children : [
            {
                path:'/page3',
                component : PageThree
            }
        ]
    }  
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes
});

export default router;