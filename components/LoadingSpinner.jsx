const LoadingSpinner = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="w-20 h-20 border-8 border-t-8 border-gray-300 border-t-accent rounded-full animate-spin"></div>
    </section>
  );
};

export default LoadingSpinner;
