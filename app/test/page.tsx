'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export default function Home() {
  const container = useRef<HTMLElement | any>();
  const tl = useRef<GSAPTimeline | any>();

  const toggleTimeline = () => {
    tl.current.reversed(!tl.current.reversed());
  };

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.box');
      tl.current = gsap
        .timeline()
        .to(boxes[0], { x: 120, rotation: 360 })
        .to(boxes[1], { x: -120, rotation: -360 }, '<')
        .to(boxes[2], { y: -166 })
        .reverse();
    },
    { scope: container }
  );

  return (
    <main>
      <section className="boxes-container" ref={container}>
        <h2>Use the button to toggle a Timeline</h2>
        <div>
          <button onClick={toggleTimeline}>Toggle Timeline</button>
        </div>
        <div className="box gradient-blue">Box 1</div>
        <div className="box gradient-blue">Box 2</div>
        <div className="box gradient-blue">Box 3</div>
      </section>
    </main>
  );
}


// 'use client';

// import React, { useLayoutEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export default function TestPage() {
//   const main = useRef();

//   useLayoutEffect(() => {
//     const boxes = gsap.utils.toArray('.box');
//     boxes.forEach((box) => {
//       gsap.to(box, {
//         x: 150,
//         scrollTrigger: {
//           trigger: box,
//           start: 'bottom bottom',
//           end: 'top 20%',
//           scrub: true,
//           // markers: true,
//         },
//       });
//     });
//   }, []);

//   return (
//     <div>
//       <section className="section flex-center column">
//         <h2>Basic ScrollTrigger with React</h2>
//         <p>Scroll down to see the magic happen!!</p>
//       </section>
//       <div className="section flex-center column" ref={main}>
//         <div className="box gradient-blue">box</div>
//         <div className="box gradient-blue">box</div>
//         <div className="box gradient-blue">box</div>
//       </div>
//       <section className="section"></section>
//     </div>
//   );
// }
