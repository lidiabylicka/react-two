import Tab from "./Tab";
import { useState } from "react";
import UserProfile from "./UserProfile";
import LikeButton from "./LikeButton";
import Todo from "./Todo";
import ProductList from "./ProductList";
import CommentList from "./CommentList";
import Accordion from "./Accordion";

const TabList = () => {
  const [selectedTab, setTab] = useState(0);
  const tabs = [
    {
      label: "Profile",
      content: <UserProfile />,
    },
    {
      label: "Likes Count",
      content: <LikeButton />,
    },
    {
      label: "Todo List",
      content: <Todo />,
    },
    {
      label: "Products List",
      content: <ProductList />,
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

  return (
    <>
      <div className="tab-list">
        <div className="all-tabs">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              selected={selectedTab === index}
              onClick={() => setTab(index)}
            />
          ))}
        </div>
        {/* <div className="tab-content">{tabs[selectedTab].content}</div> */}
      </div>
    </>
  );
};

export default TabList;
