import NextLink from 'next/link';

type LinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'tertiary';
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  rel?: string;
};

function Link({
  href,
  children,
  rel,
  variant = 'text',
  color = 'primary',
  size = 'medium',
}: LinkProps) {

  const colors = {
    primary: {
      text: `${variant === 'contained' ? 'text-white' : 'text-sky-500 dark:text-sky-400'} hover:text-sky-600 hover:dark:text-sky-500`,
      background: 'bg-sky-500 dark:bg-sky-400',
      border: 'border border-sky-500 dark:border-sky-400',
    },
    secondary: {
      text: `${variant === 'contained' ? 'text-white' : 'text-sky-500 dark:text-sky-400'} hover:text-sky-600 hover:dark:text-sky-500`,
      background: 'bg-sky-500 dark:bg-sky-400',
      border: 'boder border-sky-500 dark:border-sky-400',
    },
    tertiary: {
      text: `${variant === 'contained' ? 'text-white' : 'text-sky-500 dark:text-sky-400'} hover:text-sky-600 hover:dark:text-sky-500`,
      background: 'bg-sky-500 dark:bg-sky-400',
      border: 'border border-sky-500 dark:border-sky-400',
    },
  };

  const sizes = {
    xsmall: 'px-1 py-0.5 text-sm font-semibold',
    small: 'px-2 py-1 text-sm font-semibold',
    medium: 'px-4 py-2 text-md font-semibold',
    large: 'px-8 py-3 text-lg font-semibold',
  };

  const classesPerVariant = {
    text: `${sizes[size]} font-semibold rounded ${colors[color].text}`,
    outlined: `${sizes[size]} font-semibold rounded ${colors[color].border} ${colors[color].text}`,
    contained: `${sizes[size]} font-semibold rounded ${colors[color].background} ${colors[color].text}`,
  };

  return (
    <NextLink
      rel={rel}
      href={href}
      className={ classesPerVariant[variant] }
    >
      {children}
    </NextLink>
  );
}
export default Link;