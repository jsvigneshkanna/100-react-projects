import React from "react";
const BirthdayList = ({ birthdays }) => {
  return (
    <div className="birthday_container">
      {birthdays.map((birthday) => {
        const { name, age, img } = birthday;
        return (
          <>
            <div className="main__container">
              <div className="image__container">
                <img src={img} alt="face" />
              </div>

              <div className="detail__container">
                <p>{name}</p>
                <p>
                  <span>Age:</span> {age}
                </p>
              </div>
              <div className="share__container">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-whatsapp"></i>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default BirthdayList;
