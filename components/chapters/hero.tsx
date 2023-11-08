import Image from 'next/image';
import Link from '../navigation/link';

function HeroChapter() {
  return (
    <div className="flex flex-col justify-center p-4 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between h-[calc(100vh-5rem)] md:h-[calc(100vh-2rem)]">
      <div className="flex flex-col justify-center p-4 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <p className="mt-6 mb-2 text-lg sm:text-2xl md:text-4xl">Olá mundo!
        </p>
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold leadi">Sou
          <span className="text-2xl sm:text-4xl md:text-6xl dark:text-slate-400"> Arthur Procópio</span>
        </h1>
        <p className="mt-6 text-sm sm:text-lg md:text-xl lg:text-2xl">
          Engenheiro de Software
        </p>
        <p className="mb-6 text-sm sm:text-lg md:text-xl lg:text-2xl">
          Desenvolvedor Full Stack
        </p>
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <Link
            rel="noopener noreferrer"
            href="#"
            variant="contained"
            size="large"
          >
            Contato
          </Link>
        </div>
      </div>
      <div className="relative flex items-center justify-center flex-grow p-2 lg:p-6 mt-1 md:mt-8 lg:mt-0">
        <Image
          alt="Hero"
          src="/images/hero.png"
          fill
          className="rounded object-contain"
        />
      </div>
    </div>
  );
}

export default HeroChapter;