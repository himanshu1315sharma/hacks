import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  NewspaperIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Marketplace",
    path: "/sign-in",
    element: <SignIn />,
  },{
    icon: HomeIcon,
    name: "Chat with Expert",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "Community Center",
    path: "/profile",
    element: <Profile />,
  },

  {
    icon: UserPlusIcon,
    name: "Prediction Center",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    icon: NewspaperIcon,
    name: "Blogs and News",
    path: "/sign-up",
    element: <SignUp />,
  },
  

];

export default routes;
