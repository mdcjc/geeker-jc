import { createRouter,createWebHashHistory} from "vue-router";


const routes=[
    {
        path:"/",
        component:()=>import("@/views/login/index.vue")
    },{
        path:"/home/index",
        component:()=>import("@/views/home/index.vue")
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router;