const HorizontalDivider = ({ height = 'h-64', width = 'w-px', color = 'bg-gray-300', position = 'right-0 top-0' }) => {
  return (
    <div className={`${width} ${height} ${color} absolute ${position}`}></div>
  );
};

export default HorizontalDivider;