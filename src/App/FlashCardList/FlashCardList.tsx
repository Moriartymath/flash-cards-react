import "./FlashCardList.css";
import FlashCard from "./FlashCard/FlashCard.tsx";
import { useState } from "react";
type Question = {
  id: number;
  question: string;
  answer: string;
};

type FlashCardListProps = {
  questions: Array<Question>;
};

function FlashCardList({ questions }: FlashCardListProps) {
  const [currentCard, setCurrentCard] = useState(null);

  return (
    <ul className="flash-card--list">
      {questions.map(({ question, answer, id }) => (
        <FlashCard
          question={question}
          answer={answer}
          key={id}
          setCurrentCard={setCurrentCard}
        />
      ))}
    </ul>
  );
}

export default FlashCardList;
