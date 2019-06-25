import HomePage from "./modules/home";
import LoginPage from "./modules/login";
import PageNotFound from "./modules/errors/PageNotFound";
import RegisterPage from "./modules/register";

const routes: (any) = [
    {
        path : "/",
        component : HomePage,
        exact : true
    },
    {
        path : "/login",
        component : LoginPage,
        exact : true
    },
    {
        path : "/register",
        component : RegisterPage,
        exact : true
    },
    {
        path : "/customer",
        component : HomePage,
        routes : [
            {
                path : "/customer/cards",
                component : LoginPage,
                exact: true
            },
            {
                path : "",
                component : LoginPage,
                exact: true
            },
        ]
    },
    {
        path: "*",
        component: PageNotFound
    }
];
export default routes;