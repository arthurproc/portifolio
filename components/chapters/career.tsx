"use client";

import { useEffect } from "react";
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm';
import Image from "next/image";

function CareerChapter() {
  useEffect(() => {
    const slider = new Glide('.glide').mount({ Controls, Breakpoints });

    return () => slider.destroy();
  }, []);

   return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <Image
              src="https://placehold.co/600x400"
              alt="Hero"
              height={400}
              width={600}
            />
          </li>
          <li className="glide__slide">
            <Image
              src="https://placehold.co/300x400"
              alt="Hero"
              height={400}
              width={600}
            />
          </li>
          <li className="glide__slide">
            <Image
              src="https://placehold.co/400x600"
              alt="Hero"
              height={400}
              width={600}
            />
          </li>
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
      </div>
    </div>
  );
}

export default CareerChapter;