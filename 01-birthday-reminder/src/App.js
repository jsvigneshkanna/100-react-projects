import { useState, useEffect } from "react";
import "./App.css";
import BirthdayList from "./component/BirthdayList";
import { birthdays, date } from "./birthdays.js";
function App() {
  const [Birthdays, setBirthdays] = useState([]);

  useEffect(() => {
    setBirthdays(birthdays);
  }, [birthdays]);

  const clearBirthdays = () => {
    setBirthdays([]);
  };
  return (
    <div className="App">
      <div className="header__container">
        <h2>Birthday Reminder 🍰</h2>
      </div>
      <div className="container">
        <div className="date_counts">
          <h3>
            {date} - {birthdays.length} Birthdays
          </h3>
        </div>
        <BirthdayList birthdays={Birthdays} />
        <button onClick={clearBirthdays}>Clear All Birthdays</button>
      </div>
      <div className="madeby__container">
        <p>Made with 💓 by Vignesh Kanna on Jan - 2022</p>
      </div>
    </div>
  );
}

export default App;
