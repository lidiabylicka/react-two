import "./styles/styles.css";
import "./components/Hello.jsx";
import { useState } from "react";
import Hello from "./components/Hello.jsx";
import UserProfile from "./components/UserProfile";
import LikeButton from "./components/LikeButton";
import Todo from "./components/Todo";
import ProductList from "./components/ProductList";
import Accordion from "./components/Accordion";
// import Person from "./components/Person";

const App = () => {
  //console.log("props", props);
  const [newName, setNewName] = useState("");
  const userProfile = {
    src: "https://i.ibb.co/ZhwYCHz/prof.png",
    name: "Lidia",
    email: "lidia@email.com",
  };
  const count = 0;
  const tasks = [
    "go to the gym",
    "do React homework",
    "make dinner",
    "watch a movie",
  ];
  const products = [
    {
      name: "Lawn mower 1.0",
      price: 345,
      description: "Cuts grass",
    },
    {
      name: "Lawn mower 2.0",
      price: 545,
      description: "Cuts grass better",
    },
    {
      name: "Lawn mower 3.0",
      price: 999,
      description: "The best at cutting grass",
    },
  ];
  return (
    <>
      <Hello newName={newName} setNewName={setNewName} />
      <UserProfile profile={userProfile} />
      <hr></hr>
      <LikeButton count={count} />
      <Todo tasks={tasks} />
      <ProductList products={products} />
      <Accordion />
    </>
  );
};

export default App;
