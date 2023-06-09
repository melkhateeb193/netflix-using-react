import React from "react";
import Header from "../../component/navbar/navbar";
import SliderProgress from "../../component/slider/slider";
import Footer from "../../component/footer/footer";

function NewPopular() {
  return (
    <>
      <Header />
      <div className="my-5">
        <SliderProgress title="New on Netflix" />
        <SliderProgress title="Worth the Wait" />
        <SliderProgress title="Coming Next Week" />
        <SliderProgress title="Top 10 Movies in Egypt Today" />
        <SliderProgress title="Coming This Week" />
        <SliderProgress title="Top 10 Movies in Egypt Today" />
      </div>
      <Footer />
    </>
  );
}

export default NewPopular;
