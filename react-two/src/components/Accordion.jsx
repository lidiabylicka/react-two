import AccordionItem from "./AccordionItem";
const arrayAccordion = [
  {
    title: "1",
    content: "a",
  },
  {
    title: "2",
    content: "b",
  },
  {
    title: "3",
    content: "c",
  },
];
const Accordion = () => {
  return (
    <>
      <div className="accordion-items">
        {arrayAccordion.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </>
  );
};

export default Accordion;
