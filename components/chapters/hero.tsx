import Image from 'next/image';
import ResponsiveImage from '../responsive-image';

function HeroChapter() {
  return (
    <>
      {/* <div className="flex text-left">
        <div>
          <h2 className="text-4xl">
            Olá mundo!
          </h2>
          <h2 className="text-5xl">
            Eu sou o <strong>Procópio</strong>, boas-vindas ao meu portifolio.
          </h2>
        </div>
        <ResponsiveImage
          src="https://placehold.co/600x400"
          alt="Hero"
        />
      </div> */}
      <div className="flex justify-between items-center mx-auto h-[calc(100vh-2rem)] flex-wrap">
        <div className="text-left md:flex-shrink-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">Olá mundo!</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-400">Sou Arthur Procópio, engenheiro de software.</p>
          <div className="mt-10 flex items-center justify-start gap-x-6">
            <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-400">Learn more <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div
          className="md:ml-8 md:flex-none md:max-w-none md:mt-0 md:mr-0 flex"
        >
          <div
            className="flex-none max-w-none"
          >
            <div className="p-4 rounded-2xl md:-m-20 shadow-md bg-[#1118270d]">
              <ResponsiveImage
                additionalClasses="rounded-md"
                alt="Hero"
                src="https://placehold.co/1200x900"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroChapter;