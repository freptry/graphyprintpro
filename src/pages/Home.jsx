import React from "react";
import TypingEffect from "../components/typingEffect";
import CarouselWithDots from '../components/Carousel';

function Home() {
  const sentences = ["This is a typing effect", "And this is another sentence"];

  return (
    <div id="home">
      <TypingEffect sentences={sentences} />
      <CarouselWithDots />
    </div>
  );
}

export default Home;
