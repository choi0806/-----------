import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Bookmark } from 'lucide-react';

const TABS = ['전체', '개인용', '업무용', '폴더 1', '폴더 2', '폴더 3'];

export function HomeScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  // 사진을 터치했을 때 보호(Protect) 화면으로 이동하는 함수
  const handleProtect = () => {
    navigate('/protect');
  };

  return (
    <div className="flex flex-col h-full bg-white relative pb-28">
      {/* Header */}
      <div className="pt-12 px-5 pb-4 flex items-center gap-2">
        <div className="flex items-center">
          <span className="text-[28px] font-black tracking-[-0.04em] text-black">aegis</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-5 pb-6 flex gap-2 overflow-x-auto scrollbar-hide">
        {TABS.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`flex items-center justify-center text-center px-5 py-2.5 rounded-full text-[14.5px] font-semibold whitespace-nowrap transition-colors ${
              activeTab === idx 
                ? 'bg-black text-white' 
                : 'bg-white text-gray-500 border border-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Static 2-Column Grid */}
      <div className="px-5 flex gap-4 overflow-hidden h-full">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Card 1 */}
          <div className="flex flex-col cursor-pointer active:scale-95 transition-transform" onClick={handleProtect}>
            <div className="relative w-full h-[180px] rounded-2xl bg-[#eff1f5] overflow-hidden mb-3 shadow-sm">
              <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=400&h=400" alt="Dog" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent z-10" />
              <div className="absolute top-3 left-3 text-white text-[13px] font-semibold z-20 shadow-sm tracking-tight">
                일상 사진
              </div>
              <Bookmark className="absolute top-3 right-3 text-white w-5 h-5 drop-shadow-md z-20" />
            </div>
            <h3 className="text-[16px] font-bold text-gray-900 tracking-tight">보호된 사진</h3>
            <p className="text-[14px] text-gray-500 font-medium mt-0.5 tracking-tight">강아지와의 산책</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col cursor-pointer active:scale-95 transition-transform" onClick={handleProtect}>
            <div className="relative w-full h-[220px] rounded-2xl bg-[#eff1f5] overflow-hidden mb-3 shadow-sm">
              <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=400&h=500" alt="Nature" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent z-10" />
              <div className="absolute top-3 left-3 text-white text-[13px] font-semibold z-20 shadow-sm tracking-tight">
                여행
              </div>
              <Bookmark className="absolute top-3 right-3 text-white w-5 h-5 drop-shadow-md z-20" />
            </div>
            <h3 className="text-[16px] font-bold text-gray-900 tracking-tight">보호된 사진</h3>
            <p className="text-[14px] text-gray-500 font-medium mt-0.5 tracking-tight">자연 풍경</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Card 2 */}
          <div className="flex flex-col cursor-pointer active:scale-95 transition-transform" onClick={handleProtect}>
            <div className="relative w-full h-[130px] rounded-2xl bg-[#eff1f5] overflow-hidden mb-3 shadow-sm">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400&h=300" alt="Camera" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent z-10" />
              <div className="absolute top-3 left-3 text-white text-[13px] font-semibold z-20 shadow-sm tracking-tight">
                업무용
              </div>
              <Bookmark className="absolute top-3 right-3 text-white w-5 h-5 drop-shadow-md z-20" />
            </div>
            <h3 className="text-[16px] font-bold text-gray-900 tracking-tight">보호된 사진</h3>
            <p className="text-[14px] text-gray-500 font-medium mt-0.5 tracking-tight">회의 기록</p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col cursor-pointer active:scale-95 transition-transform" onClick={handleProtect}>
            <div className="relative w-full h-[150px] rounded-2xl bg-[#eff1f5] overflow-hidden mb-3 shadow-sm">
              <img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=400&h=350" alt="Money" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent z-10" />
              <div className="absolute top-3 left-3 text-white text-[13px] font-semibold z-20 shadow-sm tracking-tight">
                영수증
              </div>
              <Bookmark className="absolute top-3 right-3 text-white w-5 h-5 drop-shadow-md z-20" />
            </div>
            <h3 className="text-[16px] font-bold text-gray-900 tracking-tight">보호된 사진</h3>
            <p className="text-[14px] text-gray-500 font-medium mt-0.5 tracking-tight">결제 내역</p>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Banner */}
      <div className="absolute bottom-6 left-4 right-4 z-40">
        <div className="bg-[#898e98] rounded-[22px] px-6 py-5 flex items-center justify-between shadow-sm">
          <div className="flex-1 leading-[1.3]">
            <p className="font-semibold text-white text-[17px] tracking-tight">
              사진을 보호하세요.
            </p>
            <p className="text-[#dadcde] text-[14px] font-medium mt-0.5 tracking-tight">
              설명은 필요할 때만 써요.
            </p>
          </div>
          <button 
             onClick={() => navigate('/protect')}
             className="text-white font-bold text-[16px] active:scale-95 transition-transform"
          >
            시작
          </button>
        </div>
      </div>
    </div>
  );
}
