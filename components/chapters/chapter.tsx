type ChapterProps = {
  children: React.ReactNode;
  title?: string;
  id: string;
}

function Chapter(
  { children, title, id }: ChapterProps
) {
  return (
    <section className="text-center my-5 w-full" id={id}>
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