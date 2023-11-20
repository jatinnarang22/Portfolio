import Login from "./Images/Instgram_img/Login.png";
import Signup from "./Images/Instgram_img/Signup.png";
import Error from "./Images/Instgram_img/error.png";
import Home from "./Images/Instgram_img/Home.png";
import Addpost from "./Images/Instgram_img/Addpost.png";
import Server from "./Images/Instgram_img/Server.png";

//taj kaa safar
import Home_taj from "./Images/Tajkasafar_img/Home.png";
import Shopping from "./Images/Tajkasafar_img/shopping.png";
import Mumtaz from "./Images/Tajkasafar_img/mumtaz.png";

//realtime chat app

import Loading from "./Images/realtime_img/loading.png";
import Login_realchat from "./Images/realtime_img/login_realchat.png";
import Profile from "./Images/realtime_img/profile.png";
import register_realtime from "./Images/realtime_img/register_realtime.png";

const ProductInfo = [
  {
    _id: 1,
    name: "InstaReplica",
    image: Login,
    description:
      "Welcome to InstaReplica – Your Social Media Playground!  InstaReplica is your go-to destination for capturing and sharing moments with a touch of personal flair. Designed as a homage to the iconic Instagram, our platform offers a familiar yet refreshing experience. Here's what you can expect:",
    stackCategory: "Full Stack",
    infoImage1: Error,
    infoImage2: Signup,
    infoImage3: Addpost,
    features:
      "Clean Design, login, register, user dashboard, Like , Comment,Add post etc.",
    technology: "React.js, React Router,Express.js, MongoDB, etc.",
    detailsPoint1: "It's a clone of instgram with some sort of modification.",
    detailsPoint2: "User can like and comment on post",
    detailsPoint3: "user can add post",
    detailsPoint4: "i used authantication system for login and register",
    detailsPoint5: "we can see the totle number of post and followers",
  },
  {
    _id: 2,
    name: "Chat Varse",
    image: Login_realchat,
    description:
      "Welcome to Chat Varse - Your Gateway to Real-Time Connection! ChatSphere is not just another chat application; it's your virtual space for instant and meaningful conversations. Here's a glimpse of what makes ChatSphere the go-to platform for real-time chat",
    stackCategory: "Full Stack",
    infoImage1: Profile,
    infoImage2: Loading,
    infoImage3: register_realtime,
    features: "Beautiful Home Page, login, register, profilepic etc.",
    technology:
      "React.js, React Router, React hooks form, Express.js, MongoDB, etc.",
    detailsPoint1:
      "It's a realtime chat app where user can chat with each other.",
    detailsPoint2: "User can see the online and offline status of other user",
    detailsPoint3: "User can change the profile picture",
    detailsPoint4: "Here we can group chat with each other",
    detailsPoint5: "I used authantication system for login and register",
  },
  {
    _id: 3,
    name: "Taj kaa safar",
    image: Home_taj,
    description:
      "This is an independent service provider's website. Here is the web site of a service provider such as the person who does wild life photography. Here a person can hire him but he has to login to that website. After logging in, you can book the photographer on the website. Below are the names, pictures and ratings of the photographer's instrument.",
    stackCategory: "Frontend",
    infoImage1: Shopping,
    infoImage2: Mumtaz,
    features: "Simple design, login, booking system.",
    technology: "Html, css js",
    detailsPoint1:
      "This website is for taj mahal tour. User can book from website, shop items realated to taj mahal, and user can see the details of taj mahal.",
    detailsPoint2: "User can book from website",
    detailsPoint3: "The website is responsive for mobile and PC",
    detailsPoint4: "See the history of taj mahal",
    detailsPoint5: "Can buy the products related to taj mahal",
  },
];

export default ProductInfo;
