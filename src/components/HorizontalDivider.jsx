const HorizontalDivider = ({ 
  width = 'auto', 
  height = 'h-px', 
  color = 'bg-gray-300', 
  // position = 'left-0 bottom-0',
  margin = "my-20 mx-20"
}) => {
  return (
    <div className={`${width} ${height} ${color} ${margin}`}></div>
  );
};

export default HorizontalDivider;