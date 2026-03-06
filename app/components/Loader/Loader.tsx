const Loader = () => {
  return (
    <div className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center bg-black/50 backdrop-blur-lg z-50">
      <div className="w-16 h-16 border-4 border-pink-300 border-t-ag-magent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
