'use client';
import { useState } from "react";

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

  const displaySliderData = sliderData.map(data => {
    return (
      <h2 key={data.id}>{data.imageName}</h2>
    )
  })

  return (
    <div className="mastheadSlider flex">
      { displaySliderData }
    </div>
  )
}