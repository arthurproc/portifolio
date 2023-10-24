type ChapterProps = {
  children: React.ReactNode;
  title?: string;
  id: string;
}

function Chapter(
  { children, title, id }: ChapterProps
) {
  return (
    <section className="flex flex-col text-center my-5" style={ { minWidth:"0" } } id={id}>
      {
        title? (
          <h1 className="text-2xl mb-5">
            {title}
          </h1>
        ) : null
      }
      {
        children
      }
    </section>
  );
}

export default Chapter;