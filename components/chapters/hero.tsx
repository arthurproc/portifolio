import Image from 'next/image';
import Link from '../navigation/link';

function HeroChapter() {
  return (
    <div className="flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between h-[calc(100vh-5rem)]">
      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <p className="mt-6 mb-2 text-3xl">Olá mundo!
        </p>
        <h1 className="text-5xl font-bold leadi">Sou
          <span className="text-7xl dark:text-slate-400"> Arthur Procópio</span>
        </h1>
        <p className="mt-6 text-3xl">
          Engenheiro de Software
        </p>
        <p className="mb-6 text-3xl">
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
      <div className="relative flex items-center justify-center flex-grow p-6 mt-8 lg:mt-0">
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