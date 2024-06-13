'use client';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function MastheadSlider() {
  const [sliderData, setSliderData] = useState([
    {
      imageName: 'placeholder 123',
      imageAlt: 'placeholder 1',
      imageURL: '/masthead-test-1.webp',
      slideHeading: 'Lorim Impsum placeholder 1',
      id: 0
    },
    {
      imageName: 'placeholder 2',
      imageAlt: 'placeholder 2',
      imageURL: '/masthead-test-2.jpg',
      slideHeading: 'Lorim Impsum placeholder 2',
      id: 1
    },
    {
      imageName: 'placeholder 3444',
      imageAlt: 'placeholder 3',
      imageURL: '/masthead-test-3.webp',
      slideHeading: 'Lorim Impsum placeholder 3',
      id: 2
    },
  ]);

  const [displaySlide, setDisplaySlide] = useState(sliderData[0]);
  const [index, setIndex] = useState<number>(sliderData[0].id);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    function updateIndex() {
      setIndex(prevIndex => (prevIndex + 1) % sliderData.length);
    }

    timeoutRef.current = setInterval(updateIndex, 2500);
    setDisplaySlide(sliderData[index]);
    return () => {
      resetTimeout();
    }  
  }, [sliderData, index])

  // const displaySliderData = sliderData.map(data => {
  //   return (
  //     <h2 key={data.id}>{data.imageName}</h2>
  //   )
  // })

  return (
    <div className="mastheadSlider flex gap-16 w-full max-w-screen-lg">
      <div className="left-col flex flex-col gap-4 w-8/12">
        <h1 className="font-bold text-6xl">This is the fixed header</h1>
        <h2 className="font-semibold text-3xl">This is where the dynamic content will populate</h2>
        <h2 className="font-semibold text-3xl">{displaySlide.imageAlt}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi esse harum laudantium alias quos amet quae nesciunt, illo, aspernatur doloribus ratione! Quos ab cum et magnam sed facilis soluta distinctio?</p>
        <div className="flex justify-between w-1/3">
          <button type="button" className="py-2 px-4 bg-blue-400 border-teal-400">Button 1</button>
          <button type="button" className="py-2 px-4 bg-blue-400 border-teal-400">Button 2</button>
        </div>
      </div>
      <div className="right-col">
        <h2>DisplaySlide object output here</h2>
        {displaySlide.imageName}
        <div>
          <Image 
            src={displaySlide.imageURL}
            alt={displaySlide.imageAlt}
            width={500}
            height={500}
            priority
          />
        {displaySlide.id}
        </div>
      </div>
    </div>
  )
}