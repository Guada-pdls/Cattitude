import React, { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";

const FaqQuestion = ({ask, question}) => {
  let [openQuestion, setOpenCuestion] = useState(false);
  
  return (
    <div className="faq-question">
      <button onClick={() => setOpenCuestion(!openQuestion)}>
          <AiFillCaretRight className={openQuestion ? "question-icon rotate" : "question-icon"}/>
          <p className="ask">{ask}</p>
      </button >
      <p className={openQuestion ? "question open" : "question"}>{question}</p>
    </div>
  );
};

export default FaqQuestion;
