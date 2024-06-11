'use client';
import { useState, useEffect } from "react";

export default function MastheadSlider() {
  const [sliderData, setSliderData] = useState([
    {
      imageName: 'placeholder 123',
      imageAlt: 'placeholder 1',
      imageURL: 'placeholder 1',
      slideHeading: 'Lorim Impsum placeholder 1',
      id: 1
    },
    {
      imageName: 'placeholder 2',
      imageAlt: 'placeholder 2',
      imageURL: 'placeholder 2',
      slideHeading: 'Lorim Impsum placeholder 2',
      id: 2
    },
    {
      imageName: 'placeholder 3444',
      imageAlt: 'placeholder 3',
      imageURL: 'placeholder 3',
      slideHeading: 'Lorim Impsum placeholder 3',
      id: 3
    },
  ]);

  const [displaySlide, setDisplaySlide] = useState(sliderData[0]);
  // Just a rough test -- will move this to it's own component and re-do to
  // be more performant

  useEffect(() => {
    const slideInterval = setInterval(displayContent, 2500);

    function displayContent() {
      if (displaySlide === sliderData[0]) {
        setDisplaySlide(sliderData[1]);
      };
      if (displaySlide === sliderData[1]) {
        setDisplaySlide(sliderData[2]);
      };
      if (displaySlide === sliderData[2]) {
        setDisplaySlide(sliderData[0]);
      };
    }
  })

  const displaySliderData = sliderData.map(data => {
    return (
      <h2 key={data.id}>{data.imageName}</h2>
    )
  })

  return (
    <div className="mastheadSlider flex gap-16 w-full max-w-screen-lg">
      <div className="left-col flex flex-col gap-4 w-8/12">
        <h1 className="font-bold text-6xl">This is the fixed header</h1>
        <h2 className="font-semibold text-3xl">This is where the dynamic content will populate</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi esse harum laudantium alias quos amet quae nesciunt, illo, aspernatur doloribus ratione! Quos ab cum et magnam sed facilis soluta distinctio?</p>
        <div className="flex justify-between w-1/3">
          <button type="button" className="py-2 px-4 bg-blue-400 border-teal-400">Button 1</button>
          <button type="button" className="py-2 px-4 bg-blue-400 border-teal-400">Button 2</button>
        </div>
        { displaySlide.imageAlt }
      </div>
      <div className="right-col">
        { displaySliderData }
      </div>
    </div>
  )
}