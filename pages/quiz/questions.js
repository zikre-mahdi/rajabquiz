import { useState } from "react";

export default function quesions({ data }) {
  console.log(data);
  const [answers, setAnswers] = useState(
    data.map((item) => ({ ...item, checkedOption: "none" }))
  );
  const updateAnswer = (event, selectedItem) => {
    console.log(event.currentTarget.value);
    const updatedAnswers = answers.map((item) => {
      if (item.question === selectedItem.question) {
        return { ...item, checkedOption: event.currentTarget.value };
      } else {
        return { ...item };
      }
    });
    setAnswers(updatedAnswers);
  };

  return (
    <>
      <h1>Rajab 13 &raquo; Questions</h1>
      <ul>
        {answers &&
          answers.map((item) => (
            <li key={item.question}>
              <div>
                Sawaal:
                <strong> {item.question}</strong>
              </div>
              <ul>
                <li
                  className={
                    item.optA === item.checkedOption &&
                    item.checkedOption === item.ans &&
                    item.checkedOption !== "none"
                      ? "correct"
                      : item.optA === item.checkedOption &&
                        item.optA !== item.ans &&
                        item.checkedOption !== "none"
                      ? "incorrect"
                      : ""
                  }
                >
                  <input
                    type="radio"
                    name={`${item.question}`}
                    value={item.optA}
                    checked={
                      item.checkedOption === item.optA ? "checked" : null
                    }
                    onChange={(e) => updateAnswer(e, item)}
                  />
                  {item.optA}
                </li>
                <li
                  className={
                    item.optB === item.checkedOption &&
                    item.checkedOption === item.ans &&
                    item.checkedOption !== "none"
                      ? "correct"
                      : item.optB === item.checkedOption &&
                        item.optB !== item.ans &&
                        item.checkedOption !== "none"
                      ? "incorrect"
                      : ""
                  }
                >
                  <input
                    type="radio"
                    name={`${item.question}`}
                    value={item.optB}
                    checked={
                      item.checkedOption === item.optB ? "checked" : null
                    }
                    onChange={(e) => updateAnswer(e, item)}
                  />
                  {item.optB}
                </li>
                <li
                  className={
                    item.optC === item.checkedOption &&
                    item.checkedOption === item.ans &&
                    item.checkedOption !== "none"
                      ? "correct"
                      : item.optC === item.checkedOption &&
                        item.optC !== item.ans &&
                        item.checkedOption !== "none"
                      ? "incorrect"
                      : ""
                  }
                >
                  <input
                    type="radio"
                    name={`${item.question}`}
                    value={item.optC}
                    checked={
                      item.checkedOption === item.optC ? "checked" : null
                    }
                    onChange={(e) => updateAnswer(e, item)}
                  />
                  {item.optC}
                </li>
                <li
                  className={
                    item.optD === item.checkedOption &&
                    item.checkedOption === item.ans &&
                    item.checkedOption !== "none"
                      ? "correct"
                      : item.optD === item.checkedOption &&
                        item.optD !== item.ans &&
                        item.checkedOption !== "none"
                      ? "incorrect"
                      : ""
                  }
                >
                  <input
                    type="radio"
                    name={`${item.question}`}
                    value={item.optD}
                    checked={
                      item.checkedOption === item.optD ? "checked" : null
                    }
                    onChange={(e) => updateAnswer(e, item)}
                  />
                  {item.optD}
                </li>
              </ul>
            </li>
          ))}
      </ul>
    </>
  );
}

export async function getServerSideProps(context) {
  const result = await fetch("http://localhost:3000/api/quizquestions");
  const data = await result.json();
  console.log(data);

  return {
    props: {
      ...data,
    },
  };
}
