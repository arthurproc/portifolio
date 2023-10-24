import ResponsiveImage from '../responsive-image';

function HeroChapter() {
  return (
    <main className="flex text-left">
      <div>
        <h2 className="text-xl">
          Olá mundo!
        </h2>
        <h2 className="text-2xl">
          Eu sou o <strong>Procópio</strong>, boas-vindas ao meu portifolio.
        </h2>
      </div>
      <ResponsiveImage
        src="https://placehold.co/600x400"
        alt="Hero"
      />
    </main>
  );
}

export default HeroChapter;