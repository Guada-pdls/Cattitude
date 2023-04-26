import React, { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";

const FaqQuestion = ({ask, question}) => {
  let [openQuestion, setOpenCuestion] = useState(false);
  
  return (
    <div className="faq-question">
      <button onClick={() => setOpenCuestion(!openQuestion)}>
          <AiFillCaretRight className={`question-icon ${openQuestion && "rotate"}`}/>
          <p className="ask">{ask}</p>
      </button >
      <p className={`question ${openQuestion && "open"}`}>{question}</p>
    </div>
  );
};

export default FaqQuestion;
