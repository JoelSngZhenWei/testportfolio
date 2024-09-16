import { Button } from "@/components/ui/button"

export default function Empty() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center space-y-8 p-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 max-w-3xl mx-auto">
          Ready to start achieving your financial goals?
        </h1>
        <Button 
          className="bg-[#e11a27] hover:bg-[#c0151f] text-white text-4xl py-10 px-16 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Begin
        </Button>
      </div>
    </div>
  )
}