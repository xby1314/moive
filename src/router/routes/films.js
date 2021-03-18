export default {
    path: '/films',
    component: () => import('@/views/films/films'),
    redirect:'/films/nowPlaying',
    children: [
        {
            path: "nowplaying",
            component: () => import("@/views/films/nowPlaying"),
        },
        {
            path: "comingSoon",
            component: () => import("@/views/films/comingSoon"),
        },
    ]
}