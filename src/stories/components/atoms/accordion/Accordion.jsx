import React from "react";
import PropTypes from "prop-types";
import AccordionItem from "./accordion-item/AccordionItem";

const Accordion = ({ items }) => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
          />
        );
      })}
    </>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default Accordion;
