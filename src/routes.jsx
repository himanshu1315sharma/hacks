import { Home, Profile, SignIn, SignUp,Prediction,Community,Marketplace,Chat } from "@/pages";
//import {News} from "@/news"
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  NewspaperIcon,
  SignalIcon,
  SignalSlashIcon,
  HomeModernIcon,
  ChatBubbleLeftIcon,
  UserGroupIcon
  
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Marketplace",
    path: "/marketplace",
    element: <Marketplace />,
  },{
    icon: HomeIcon,
    name: "Home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: NewspaperIcon,
    name: "Blogs and News",
    path: "/profile",
    element: <Profile />,
  },
  {
    icon: SignalIcon,
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    icon: SignalSlashIcon,
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
  
  {
    icon: UserPlusIcon,
    name: "Prediction Center",
    path: "/prediction",
    element: <Prediction />,
  },
  {
    icon: ChatBubbleLeftIcon,
    name: "Chat with Expert",
    path: "/chat",
    element: < Chat/>,
  },
  {
    icon: UserGroupIcon,
    name: "Community Center",
    path: "/community",
    element: < Community/>,
  },
  

];

export default routes;
