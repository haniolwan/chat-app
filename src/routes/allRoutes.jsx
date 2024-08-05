import Home from "../pages/home/home";
import Login from "../pages/login";

const authProtectedRoutes = [
    {
        path: "/",
        exact: true,
        component: <Home />
    },
];

const unAuthProtectedRoutes = [
    { path: "/login", component: <Login /> },
];

const publicRoutes = [
    { path: "/error-401", component: <></> }, // not authorized
    { path: "/error-403", component: <></> }, // permission
    { path: "/error-404", component: <></> }, // path
    { path: "/error-500", component: <></> }, // production
    { path: "/maintenance", component: <></> },
    { path: "/loading", component: <></> },
];

export { authProtectedRoutes, unAuthProtectedRoutes, publicRoutes };