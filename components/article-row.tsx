import ResponsiveImage from './responsive-image';

type ArticleRowProps = {
  textRight?: boolean;
  image: string | null;
  text: string;
};

function ArticleRow(
  {
    textRight = false,
    image = null,
    text,
  }: ArticleRowProps
) {

  const imageEl = image ? (
    <ResponsiveImage
      src={image}
      alt="Hero"
    />
  ) : null;

  return (
    <article className="flex text-left gap-4">
      {!textRight ? (
        <>
          <p>
            {text}
          </p>
          {imageEl}
        </>
      ) : (
        <>
          {imageEl}
          <p>
            {text}
          </p>
        </>
      )}
    </article>
  );
}

export default ArticleRow;