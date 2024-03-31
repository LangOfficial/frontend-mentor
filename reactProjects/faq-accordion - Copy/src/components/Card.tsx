import Star from "../assets/images/icon-star.svg";
import { useState } from "react";
import QA from "./QA";

import { questionAnswers as QAData } from "../constants";

const Card = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="max-w-3xl mx-6 rounded-xl bg-primary-50 p-6 2xl:py-8 2xl:px-10">
        <div className="mb-7 flex gap-6">
          <img className="w-7 2xl:w-9" src={Star} alt="" />
          <h1 className="text-4xl font-bold 2xl:text-5xl">FAQs</h1>
        </div>
        {Object.entries(QAData).map(([question, answer], index) => (
          <QA
            key={"QA-" + index}
            question={question}
            answer={answer}
            selectIndex={index}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
