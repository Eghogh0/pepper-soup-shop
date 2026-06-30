export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <img
          src="/logo/logo.png"
          alt="Pepper Soup Shop"
          className="w-28 h-28 md:w-32 md:h-32 animate-pulse"
        />
        <p className="mt-4 text-pepper-orange text-lg font-bold animate-pulse">
          Bringing the heat...
        </p>
      </div>
    </div>
  );
}