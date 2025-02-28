import Link from 'next/link'; // For navigation (optional, if you want the button to link somewhere)

const Button = ({ children, href, onClick, className = '' }) => {
  return (
    <Link href={href || '#'} passHref>
      <button
        className={`bg-customGreen text-white font-semibold py-3 px-8 rounded-full hover:bg-[#8CA63F] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-colors ${className} mt-3.5`}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;