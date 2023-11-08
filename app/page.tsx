import AboutChapter from '@portifolio/components/sections/about';
import CareerChapter from '@portifolio/components/sections/career';
import SectionRoot from '@portifolio/components/sections/section-root';
import ContactChapter from '@portifolio/components/sections/contact';
import HeroChapter from '@portifolio/components/sections/hero';

export default function Home() {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
      <SectionRoot
        id="home"
      >
        <HeroChapter />
      </SectionRoot>
      <SectionRoot
        title="Sobre"
        id="about"
      >
        <AboutChapter />
      </SectionRoot>
      <SectionRoot
        title="Carreira"
        id="career"
      >
        <CareerChapter />
      </SectionRoot>
      <SectionRoot
        title="Contato"
        id="contact"
      >
        <ContactChapter />
      </SectionRoot>
    </div>
  );
}
