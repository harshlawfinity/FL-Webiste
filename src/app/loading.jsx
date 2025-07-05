export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-white  ">
      <div className="text-center space-y-4">
         <div className="flex justify-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
        </div>

      </div>
    </div>
  );
}
