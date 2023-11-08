"use client";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import ArticleRow from '../article-row';

function CareerChapter() {
  return (
    <Splide aria-label="My Favorite Images">
      <SplideSlide>
        <ArticleRow
          image="https://placehold.co/600x400"
          textRight
          text="Mussum Ipsum, cacilds vidis litro abertis.  Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Si num tem leite então bota uma pinga aí cumpadi! Sapien in monti palavris qui num significa nadis i pareci latim. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum."
        />
      </SplideSlide>
      <SplideSlide>
        <ArticleRow
          image="https://placehold.co/600x400"
          text="Mussum Ipsum, cacilds vidis litro abertis.  Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Si num tem leite então bota uma pinga aí cumpadi! Sapien in monti palavris qui num significa nadis i pareci latim. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum."
        />
      </SplideSlide>
    </Splide>
  );
}

export default CareerChapter;