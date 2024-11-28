"use client";

const VideoCardGrid = () => {
  const cards = [
    { video: "https://cdn.soutle.com/assets/demo/videos/trailer1-rv2.mp4" },
    { video: "https://cdn.soutle.com/assets/demo/videos/trailer3-rv2.mp4" },
    { video: "https://cdn.soutle.com/assets/demo/videos/trailer5-rv2.mp4" },
    { video: "https://cdn.soutle.com/assets/demo/videos/trailer1-rv2.mp4" },
    { video: "https://cdn.soutle.com/assets/demo/videos/trailer4-rv2.mp4" },
    { video: "https://cdn.soutle.com/assets/demo/videos/trailer6-rv2.mp4" },
    { video: "https://cdn.soutle.com/assets/demo/videos/trailer7-rv2.mp4" },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* Left Section (Hidden on smaller screens) */}
      <div className="hidden lg:grid grid-cols-2 lg:grid-rows-2 w-1/3 h-full place-items-center gap-4">
        <video className="mini-video" src="/media/videos/moon-trailer1.mp4" autoPlay={true} loop />
        <div className="flex items-end justify-end h-[800px]">
          <video className="mini-video" src="/media/videos/vegetable-trailer-2.mp4" autoPlay={true} loop />
        </div>
        <video className="mini-video" src="/media/videos/oldman-trailer3.mp4" autoPlay={true} loop />
      </div>

      {/* Center Section (Always Visible) */}
      <div className="w-2/3 lg:w-1/3">
        <video className="w-full h-auto p-6 rounded-[70px]" src={`${cards[3].video}`} autoPlay={true} loop />
      </div>

      {/* Right Section (Hidden on smaller screens) */}
      <div className="hidden lg:grid grid-cols-2 lg:grid-rows-2 w-1/3 h-full place-items-center gap-4">
        <video className="mini-video" src={`${cards[4].video}`} autoPlay={true} loop />
        <div className="flex items-end justify-end h-[800px]">
          <video className="mini-video" src={`${cards[5].video}`} autoPlay={true} loop />
        </div>
        <video className="mini-video" src={`${cards[6].video}`} autoPlay={true} loop />
      </div>
    </div>
  );
};

export default VideoCardGrid;
