import "./styles/styles.css";
import "./components/Hello.jsx";
import { useState } from "react";
import Hello from "./components/Hello.jsx";
import TabList from "./components/TabList";

const App = () => {
  const [newName, setNewName] = useState("");

  return (
    <>
      <Hello newName={newName} setNewName={setNewName} />
      <TabList />
    </>
  );
};

export default App;
