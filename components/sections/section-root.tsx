type ChapterProps = {
  children: React.ReactNode;
  title?: string;
  id: string;
}

function SectionRoot(
  { children, title, id }: ChapterProps
) {
  return (
    <section className="text-center my-8 w-full" id={id}>
      {
        title? (
          <h1 className="text-5xl mb-3">
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

export default SectionRoot;