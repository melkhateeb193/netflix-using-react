import React, { useEffect, useState } from "react";
import "./homepage.scss";
import { useDispatch, useSelector } from "react-redux";
import getAllMovies from "../../store/actions/firestore";
import Header from "../../component/navbar/navbar";
import HereSection from "../../component/heroSection/heroSection";
import SliderProgress from "../../component/slider/slider";
import Footer from "../../component/footer/footer";

function Homepage(type) {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  const [sliders, setSliders] = useState([
    { title: "New published" },
    { title: "New release" },
    { title: "top 10" },
  ]);

  useEffect(() => {
    // console.log(movies);
    // movies.forEach(movie => {
    //   console.log(movie.data());
    // });
  }, [movies]);

  useEffect(() => {
    dispatch(getAllMovies("NetflixClone"));
  }, []);

  return (
    <>
      <Header />
      <HereSection />
      <div className="slider-progress">
        {sliders.map((slider, index) => (
          <div key={index}>
            <SliderProgress title={slider.title} />
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Homepage;
