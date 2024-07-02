import { useState } from "react";
import "./FlashCard.css";

type FlashCardProps = {
  question: string;
  answer: string;
  setCurrentCard: Function;
};

function FlashCard({ question, answer, setCurrentCard }: FlashCardProps) {
  const [currentText, setCurrentText] = useState(question);
  const [isHidden, setIsHidden] = useState(true);

  return (
    <li
      className={`list--item${!isHidden ? " opened" : ""}`}
      onClick={() => {
        setIsHidden((hidden) => !hidden);
        setTimeout(
          () =>
            setCurrentText((currText: string) =>
              currText === question ? answer : question
            ),
          500
        );
      }}
    >
      <h3
        className="current-text"
        style={{ transform: currentText === answer ? "rotateY(-180deg)" : "" }}
      >
        {currentText}
      </h3>
    </li>
  );
}

export default FlashCard;
