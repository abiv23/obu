const Parallax = ({ img }) => {
  return (
    <div className="h-[300px] bg-[#F1F1F1]">
      <div className="relative w-screen h-[300px] overflow-hidden bg-fixed bg-center bg-no-repeat" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
        <div className="h-[300px] mx-auto px-4 flex items-start justify-center">
          <div className="flex-1 h-full flex justify-center items-end flex-col">
            <p className="text-[#91949f] uppercase text-[15px] leading-[18px] pt-1.25 pb-2.5 font-bold">OUR MISSION</p> {/* Updated color, font size, and line height */}
            <p className="text-right text-[40px] ">Marketing with a Purpose.</p>
          </div>
          <div className="flex-1 h-full flex justify-center items-start flex-col ml-16 -mt-[7px]">
            <p className="text-lg  text-[#4D5059] text-[24px]">Our mission is simple:<br /> to help lawyers <br /> help people.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parallax;