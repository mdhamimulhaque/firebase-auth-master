import { createBrowserRouter } from "react-router-dom"
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import LogIn from "../components/LogIn/LogIn";
import UserWelcome from "../components/UserWelcome/UserWelcome";
import Main from "../layout/Main";
import SignUp from "../SignUp/SignUp";

const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/home",
            element: <Home />
        },
        {
            path: "/log-in",
            element: <LogIn />
        },
        {
            path: "/sign-up",
            element: <SignUp />
        }
        ,
        {
            path: "/welcome-user",
            element: <UserWelcome />
        }
    ]
}]);


export default router;