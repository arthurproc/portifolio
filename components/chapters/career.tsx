"use client";

import { useEffect, useState } from "react";
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm';

function CareerChapter() {
  const element = 'glide';
  const [slider] = useState(new Glide(`.${element}`));
  useEffect(() => {
    console.log('teste');
    slider.mount();

    return () => slider.destroy();
  }, []);

   return (
    <div className={element}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">0</li>
          <li className="glide__slide">1</li>
          <li className="glide__slide">2</li>
        </ul>
      </div>
    </div>
  );
}

export default CareerChapter;