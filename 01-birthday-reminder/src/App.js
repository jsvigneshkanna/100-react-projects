import "./App.css";
import BirthdayList from "./component/BirthdayList";
import { birthdays, date } from "./birthdays.js";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="date_counts">
          <h3>
            {date} - {birthdays.length} Birthdays
          </h3>
        </div>
        <BirthdayList birthdays={birthdays} />
      </div>
    </div>
  );
}

export default App;
