import Close from "../assets/images/icon-plus.svg";
import Open from "../assets/images/icon-minus.svg";

import { questionAnswers as QAData } from "../constants";

import { useState } from "react";

interface Props {
  question: string;
  answer: string;
  selectIndex: number;
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

const instancesCount = Object.keys(QAData).length;

const QA = ({
  question,
  answer,
  selectIndex,
  selectedIndex,
  setSelectedIndex,
}: Props) => {
  const handleClick = () => {
    console.log(selectIndex, selectedIndex);
    setSelectedIndex(selectIndex !== selectedIndex ? selectIndex : -1);
  };

  return (
    <>
      <div className="mb-7 flex items-center">
        <h2 className="mr-auto text-lg font-bold min-w-[22ch] xs-constraint">{question}</h2>
        <button onClick={handleClick} className="ml-6 flex-shrink-0">
          <img
            className=""
            src={selectIndex === selectedIndex ? Open : Close}
            alt=""
          />
        </button>
      </div>
      <p
        className={
          " text-primary-600 max-w-[49ch] " +
          (selectIndex === selectedIndex ? "" : "hidden")
        }
      >
        {answer}
      </p>
      {selectIndex < instancesCount - 1 ? <hr className="my-5" /> : ""}
    </>
  );
};

export default QA;
