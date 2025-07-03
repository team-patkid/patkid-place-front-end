import Button from "@components/Button";
import { answerTextStyle } from "./Answer.css";

type AnswerProps = {
  text: string;
  onClick: () => void;
};

const Answer = ({ text, onClick }: AnswerProps) => {
  return (
    <Button
      onClick={onClick}
      buttonImage="/answer.webp"
      clickedButtonImage="/visit_click.webp"
      text={<span className={answerTextStyle}>{text}</span>}
    />
  );
};

export default Answer;
