import React from "react";
import "./heroSection.css";

function HereSection() {
  return (
    <>
      <div className="parent">
        <div class="title row">
          {/* changeable background  and data*/}

          <img
            class="title__image"
            src="./images/interstellar.webp"
            alt="background"
          />

          <div class="title__space col-1"></div>
          <div class="title__body col-7">
            {/* this is for the logo */}

            <img
              class="title__body--logo"
              src="./images/Interstellar-logo.png"
            />

            <div class="title__body--description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              tenetur error magni! Distinctio facere inventore iusto maxime,
              repudiandae ipsa molestiae aspernatur mollitia?
            </div>

            {/* discription from api */}

            <button class="title__body--button btn1">
              <img
                class="title__body--button__element"
                src="./icons/play.svg"
              />
              <span class="title__body--button__element btn1__text">Play</span>
            </button>
            <button class="title__body--button btn2">
              <img
                class="title__body--button__element"
                src="./icons/info.svg"
              />
              <span class="title__body--button__element">More Info</span>
            </button>
          </div>
          <div class="title__aside col">
            <button class="title__aside--btn">
              <img
                className="title__aside--btn__icon"
                src="./icons/restart.svg"
              />
            </button>
            <span class="title__aside--maturityRating">13+</span>
          </div>
        </div>
      </div>
      <div className="t"></div>
    </>
  );
}

export default HereSection;
