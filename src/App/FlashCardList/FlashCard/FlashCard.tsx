import { useEffect, useRef, useState } from "react";
import "./FlashCard.css";

type FlashCardProps = {
  question: string;
  answer: string;
  setCurrentCardId: Function;
  id: number;
  currentCardId: number;
};

function FlashCard({
  question,
  answer,
  id,
  setCurrentCardId,
  currentCardId,
}: FlashCardProps) {
  const [currentText, setCurrentText] = useState(question);
  const [isHidden, setIsHidden] = useState(true);

  if (!isHidden && currentCardId !== id && currentCardId !== -1) {
    setIsHidden(true);
    setTimeout(() => {
      setCurrentText(question);
    }, 500);
  }
  return (
    <li
      className={`list--item${!isHidden ? " opened" : ""}`}
      onClick={() => {
        setIsHidden((hidden) => !hidden);
        setTimeout(() => {
          setCurrentText((currText: string) =>
            currText === question ? answer : question
          );
        }, 500);
        setCurrentCardId(!isHidden ? -1 : id);
      }}
    >
      <h3
        className="current-text"
        style={{
          transform: currentText === answer ? "rotateY(-180deg)" : "",
        }}
      >
        {currentText}
      </h3>
    </li>
  );
}

export default FlashCard;
