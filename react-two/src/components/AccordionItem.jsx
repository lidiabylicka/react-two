import { useState } from "react";

const AccordionItem = () => {
  const title = "Title of Accordion Item";
  const hiddenContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eligendi quisquam itaque delectus dolorum, dignissimos consectetur aliquam! Quae, provident.Aspernatur deserunt, doloribus quibusdam delectus ut officia et veniam eius ipsam soluta.";
  const [isHidden, setHidden] = useState(true);
  const handleTitleClick = () => {
    setHidden(!isHidden);
  };
  return (
    <div className="accordion-item" onClick={handleTitleClick}>
      <h2>{title}</h2>
      <div className={`hidden-content ${isHidden ? "hidden" : "visible"}`}>
        {hiddenContent}
      </div>
    </div>
  );
};

export default AccordionItem;
