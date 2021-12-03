import Home from '../page/Home'
import YouTube from '../page/YouTube'
import Alumnie from '../page/Alumnie'
import Courses from '../page/Courses'
import Login from '../page/Login'
import Team from '../page/Team'

export const Navbarpath = [
    {
        id: 1,
        path: "/",
        title: "Home",
        Component: Home,
    },
    {
        id: 2,
        path: "/team",
        title: "Team",
        Component: Team,
    },
    {
        id: 3,
        path: "/alumnie",
        title: "Alumnie",
        Component: Alumnie,
    },
    {
        id: 4,
        path: "/courses",
        title: "Courses",
        Component: Courses,
    },
    {
        id: 5,
        path: "/youTube",
        title: "YouTube",
        Component: YouTube,
    },
    // {
    //     id: 6,
    //     path: "/logIn",
    //     title: "LogIn",
    //     Component: Login,
    // }
]