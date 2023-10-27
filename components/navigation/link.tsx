import NextLink from 'next/link';

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

function Link({
  href,
  children,
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className="hover:text-sky-500 dark:hover:text-sky-400"
    >
      {children}
    </NextLink>
  );
}
export default Link;