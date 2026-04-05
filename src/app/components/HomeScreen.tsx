import { useNavigate } from 'react-router';
import { Menu, Image as ImageIcon } from 'lucide-react';

export function HomeScreen() {
  const navigate = useNavigate();

  // 사진을 터치했을 때 보호(Protect) 화면으로 이동하는 함수
  const handleProtect = () => {
    navigate('/photo-select');
  };

  return (
    <div className="flex flex-col h-full bg-white relative pb-32">
      {/* Header */}
      <div className="pt-12 px-6 pb-6 flex items-center justify-between">
        <span className="text-[26px] font-bold tracking-tight text-black">aegis</span>
        <button className="p-1 active:opacity-50">
          <Menu className="w-6 h-6 text-gray-800" strokeWidth={2.5} />
        </button>
      </div>

      {/* Static 2-Column Masonry Grid */}
      <div className="px-5 flex gap-3 h-full items-start">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-3">
          {/* Item 1 - Pink abstract */}
          <div 
            className="w-full aspect-[4/5] rounded-[20px] bg-gray-100 overflow-hidden cursor-pointer active:scale-[0.98] transition-transform" 
            onClick={handleProtect}
          >
            <img 
              src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=400&h=500" 
              alt="Pink abstract" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Item 2 - Snow */}
          <div 
            className="w-full aspect-[2/3] rounded-[20px] bg-gray-100 overflow-hidden cursor-pointer active:scale-[0.98] transition-transform" 
            onClick={handleProtect}
          >
            <img 
              src="https://images.unsplash.com/photo-1542360663-8f40838b8d7a?auto=format&fit=crop&q=80&w=400&h=600" 
              alt="Snow walk" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-3">
          {/* Item 3 - Dog in kayak (Tall) */}
          <div 
            className="w-full aspect-[2/3] rounded-[20px] bg-gray-100 overflow-hidden cursor-pointer active:scale-[0.98] transition-transform" 
            onClick={handleProtect}
          >
            <img 
              src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=400&h=600" 
              alt="Dog in kayak" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Item 4 - Placeholder */}
          <div 
            className="w-full aspect-[4/5] rounded-[20px] bg-[#f8f9fc] flex items-center justify-center cursor-pointer active:scale-[0.98] transition-transform" 
            onClick={handleProtect}
          >
            <ImageIcon className="w-14 h-14 text-gray-200" strokeWidth={1} />
          </div>
        </div>
      </div>

      {/* Floating Black Card (Bottom) */}
      <div className="absolute bottom-6 left-6 right-6 z-40">
        <div className="relative">
          {/* Ambient Glow */}
          <div className="absolute -inset-2 bg-[#6e63f5]/20 blur-xl rounded-full opacity-70"></div>
          
          <div className="relative bg-[#0a0a0a] rounded-[20px] px-8 py-5 flex items-center shadow-2xl">
            {/* Progress Circle Ring */}
            <div className="relative w-14 h-14 mr-6 shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background Ring */}
                <circle 
                  cx="50" cy="50" r="40" 
                  fill="none" stroke="#252535" strokeWidth="8"
                />
                {/* Foreground Ring (Progress: e.g. 60%) */}
                <circle 
                  cx="50" cy="50" r="40" 
                  fill="none" stroke="#ffffff" strokeWidth="8" strokeLinecap="round"
                  strokeDasharray="251.2" strokeDashoffset="100.48"
                />
              </svg>
            </div>
            
            {/* Text Stats */}
            <div className="flex flex-col">
              <span className="text-white text-[24px] font-bold leading-none mb-1">
                3/5
              </span>
              <span className="text-gray-400 text-[13px] font-medium tracking-tight">
                무료 사용 횟수
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
