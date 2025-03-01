import Link from 'next/link';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge'; // Optional for Tailwind-specific merging

const Button = ({ children, href, onClick, className = '' }) => {
  const classes = twMerge(clsx(
    'bg-customGreen text-white font-semibold py-3 px-8 rounded-full hover:bg-[#8CA63F] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-colors mt-3.5',
    className
  ));

  return (
    <Link href={href || '#'} passHref>
      <button
        className={classes}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;