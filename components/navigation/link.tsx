import NextLink from 'next/link';

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

function Link({
  href,
  children,
  className
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className={`${className ? className : 'hover:text-sky-500 dark:hover:text-sky-400'}`}
    >
      {children}
    </NextLink>
  );
}
export default Link;