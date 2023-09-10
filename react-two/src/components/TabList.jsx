import Tab from "./Tab";
import { useState } from "react";
import UserProfile from "./UserProfile";
import LikeButton from "./LikeButton";
import Todo from "./Todo";
import ProductList from "./ProductList";
import CommentList from "./CommentList";
import Accordion from "./Accordion";

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

//Component:

const TabList = () => {
  const [selectedTab, setTab] = useState(0);

  const tabs = [
    {
      label: "Profile",
      content: <UserProfile profile={userProfile} />,
    },
    {
      label: "Likes Count",
      content: <LikeButton count={count} />,
    },
    {
      label: "Todo List",
      content: <Todo tasks={tasks} />,
    },
    {
      label: "Products List",
      content: <ProductList products={products} />,
    },
    {
      label: "Hidden Content",
      content: <Accordion />,
    },
    {
      label: "Comments",
      content: <CommentList />,
    },
  ];
  const handleTabClick = (index) => {
    setTab(index);
  };
  return (
    <>
      {/* <div className="tab-list"> */}
      <div className="all-tabs">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            isActive={selectedTab === index}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <div className="tab-content">{tabs[selectedTab].content}</div>
      {/* </div> */}
    </>
  );
};

export default TabList;
