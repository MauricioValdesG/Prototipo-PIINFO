import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isActive: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isActive,
  onToggle,
}) => {
  return (
    <div className="card">
      <div
        className="card-header"
        onClick={onToggle}
        style={{ cursor: "pointer" }}
      >
        <h5 className="mb-0">
          <button
            className="btn btn-link"
            type="button"
            style={{
              textDecoration: "none",
              width: "100%",
              textAlign: "left",
              padding: 0,
            }}
            aria-expanded={isActive}
          >
            {title}
          </button>
        </h5>
      </div>
      <div className={`collapse ${isActive ? "show" : ""}`}>
        <div className="card-body">{content}</div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: {
    title: string;
    content: React.ReactNode;
  }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={activeIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
