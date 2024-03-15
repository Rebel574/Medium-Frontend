const Skeleton = () => {
  return (
    <div>
      <div className="animate-pulse">
        <div className="p-4 border-b border-gray-200 pb-4 w-screen max-w-screen-md cursor-pointer">
          <div className="flex items-center mb-4">
            <div className="h-8 w-120 bg-gray-300 rounded-full mr-4"></div>
            <div className="flex flex-col">
              <div className="h-3 w-132 bg-gray-300 rounded-full mb-2"></div>
              <div className="h-2 w-124 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <div className="text-xl font-semibold mb-4">
            <div className="h-4 w-148 bg-gray-300 rounded-full"></div>
          </div>
          <div className="text-sm font-thin mb-2">
            <div className="h-3 w-140 bg-gray-300 rounded-full"></div>
          </div>
          <div className="text-sm font-thin text-gray-500">
            <div className="h-3 w-156 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
