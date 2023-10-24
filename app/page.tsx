import AboutChapter from '@portifolio/components/chapters/about';
import CareerChapter from '@portifolio/components/chapters/career';
import Chapter from '@portifolio/components/chapters/chapter';
import HeroChapter from '@portifolio/components/chapters/hero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Chapter
        id="home"
      >
        <HeroChapter />
      </Chapter>
      <Chapter
        title="Sobre"
        id="about"
      >
        <AboutChapter />
      </Chapter>
      <Chapter
        title="Carreira"
        id="career"
      >
        <CareerChapter />
      </Chapter>
    </main>
  );
}
