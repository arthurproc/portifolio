import AboutChapter from '@portifolio/components/chapters/about';
import CareerChapter from '@portifolio/components/chapters/career';
import Chapter from '@portifolio/components/chapters/chapter';
import ContactChapter from '@portifolio/components/chapters/contact';
import HeroChapter from '@portifolio/components/chapters/hero';

export default function Home() {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
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
      <Chapter
        title="Contato"
        id="contact"
      >
        <ContactChapter />
      </Chapter>
    </div>
  );
}
