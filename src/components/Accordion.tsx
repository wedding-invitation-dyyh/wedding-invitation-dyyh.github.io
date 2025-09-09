import { ReactNode, useState } from "react";
import styled from "styled-components";
import ExpandMore from "@/assets/icons/expand_more.svg?react";
import rawData from "data.json"
import { IData } from "@/types/data";

interface IAccordionProps {
  id:string;
  title: string;
  children: ReactNode;
}
const Accordion = ({ id, title, children }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const db: Record<string, IData> = rawData;
  const subColor = db[id]?.subColor || "rgba(255,199,125,0.88)";


  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper color={subColor}>
      <AccordionHeader color={subColor} isactive={isOpen} onClick={toggleAccordion}>
        <p>{title}</p>

        <span>
          <ExpandMore fill="#656565" />
        </span>
      </AccordionHeader>

      {isOpen && <AccordionContent>{children}</AccordionContent>}
    </AccordionWrapper>
  );
};

export default Accordion;
const AccordionWrapper = styled.div<{color: string}>`
  border: 1px solid ${(props) => props.color};
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const AccordionHeader = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isactive"
})<{ isactive: boolean, color: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.color};
  padding: 0 15px;
  cursor: pointer;
  height: 40px;
  & > p {
    color: #000;
  }
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    transition: all 0.3s ease;
    transform: ${(props) => (props.isactive ? "rotate(180deg)" : undefined)};
  }
`;

const AccordionContent = styled.div`
  font-size: 14px;
  text-align: justify;
  padding: 10px 20px;
  background-color: #ffffff;
  color
`;
