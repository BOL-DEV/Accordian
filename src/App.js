import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="sub-container">
        <Header />
        <Body />
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <div className="header">
      <img src="./assets/images/icon-star.svg" alt="" />
      <h1>FAQs</h1>
    </div>
  );
};

const Body = () => {
  return (
    <div className="wrapper">
      <Lists
        question="What is Frontend Mentor, and how will it help me?"
        answer="Frontend Mentor offers realistic coding challenges to help developers
        improve their frontend coding skills with projects in HTML, CSS, and
        JavaScript. It's suitable for all levels and ideal for portfolio
        building."
      />
      <Lists
        question="Is Frontend Mentor free?"
        answer="Yes, Frontend Mentor offers both free and premium coding challenges,
            with the free option providing access to a range of projects
            suitable for all skill levels."
      />
      <Lists
        question="Can I use Frontend Mentor projects in my portfolio?"
        answer="Yes, you can use projects completed on Frontend Mentor in your
            portfolio. It's an excellent way to showcase your skills to
            potential employers!"
      />
      <Lists
        question="How can I get help if I'm stuck on a challenge?"
        answer="The best place to get help is inside Frontend Mentor's Discord
            community. There's a help channel where you can ask questions and
            seek support from other community members."
      />
    </div>
  );
};

const Lists = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isClose, setIsClose] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen); 
    // setIsOpen(isClose);
  };

  return (
    <>
      <div className="sub-wrapper" onClick={handleToggle}>
        <h3>{question}</h3>
        <img
          src={
            isOpen
              ? "./assets/images/icon-minus.svg"
              : "./assets/images/icon-plus.svg"
          }
          alt={question}
        />
      </div>

      {isOpen && <p className="text">{answer}</p>}
    </>
  );
};

export default App;
