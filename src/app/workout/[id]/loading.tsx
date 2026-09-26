const Loading = () => {
  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <span className="loading loading-spinner loading-lg text-[#ccff00]"></span>

        <h2 className="mt-5 text-2xl font-bold">
          Loading workout...
        </h2>
      </div>
    </main>
  );
};

export default Loading;