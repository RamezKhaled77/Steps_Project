import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Learn Node.js 🚀",
  "Become a Full-Stack Developer 🌐",
  "Contribute to Open Source 👐",
  "Build Amazing Projects 🏗️",
  "Stay Updated with Tech News 📰",
];

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && <Steps step={step} setStep={setStep} />}
    </>
  );
}

function Steps({ step, setStep }) {
  const style = {
    backgroundColor: "#7950f2",
    color: "#fff",
  };
  const msgArrLen = messages.length;

  function handleNext() {
    if (step < msgArrLen && step > 0) setStep(step + 1);
  }
  function handlePrevious() {
    if (step <= msgArrLen && step > 1) setStep(step - 1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        {messages.map((_, index) => (
          <div className={step >= index + 1 ? "active" : ""} key={index}>
            {index + 1}
          </div>
        ))}
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button style={style} onClick={handlePrevious}>
          Previous
        </button>
        <button style={style} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
