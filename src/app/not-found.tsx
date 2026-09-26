import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 text-center">
      <div>
        <h1 className="text-6xl font-black text-[#ccff00]">
          404
        </h1>

        <h2 className="mt-5 text-3xl font-bold">
          PAGE NOT FOUND
        </h2>

        <p className="mt-3 text-white/60">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="btn mt-6 bg-[#ccff00] text-black"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;