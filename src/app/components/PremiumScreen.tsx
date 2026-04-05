import { useState } from "react";
import { useNavigate } from "react-router";
import { PremiumBottomSheet } from "./PremiumBottomSheet";

export function PremiumScreen() {
  const navigate = useNavigate();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [tab, setTab] = useState<"basic" | "premium">("premium");

  return (
    <div className="size-full flex flex-col bg-[#fcfcfc] text-gray-900 relative overflow-hidden font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-12 pb-4 shrink-0">
        <button onClick={() => navigate(-1)} className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase active:opacity-50">
          BACK
        </button>
        <span className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
          PLAN
        </span>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-6 pb-32">
        {/* Segmented Control */}
        <div className="bg-gray-100/70 p-1 rounded-xl flex mb-12 mt-2">
          <button
            onClick={() => setTab("basic")}
            className={`flex-1 py-2.5 text-[13px] font-medium rounded-lg transition-all ${
              tab === "basic" ? "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-gray-900" : "text-gray-400"
            }`}
          >
            Basic
          </button>
          <button
            onClick={() => setTab("premium")}
            className={`flex-1 py-2.5 text-[13px] font-medium rounded-lg transition-all ${
              tab === "premium" ? "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-gray-900" : "text-gray-400"
            }`}
          >
            Premium
          </button>
        </div>

        {/* Title & Price */}
        <div className="mb-10">
          <h1 className="text-[26px] font-normal tracking-tight mb-3 text-gray-800">
            AEGIS Plan
          </h1>
          <p className="text-[44px] font-light tracking-tighter text-gray-900">
            {tab === "basic" ? "₩0" : "₩4,900"}
          </p>
        </div>

        {/* Details List */}
        <div className="space-y-[18px] mb-8">
          <div className="flex justify-between items-center text-[11px] text-gray-400 mb-4 tracking-wider">
            <span className="uppercase font-semibold tracking-widest">Features</span>
            <span className="uppercase font-semibold tracking-widest">Details</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[13px] text-gray-500">일일 보호 한도</span>
            <span className="text-[13px] font-medium text-gray-800 text-right">{tab === "basic" ? "5장 / 일" : "무제한"}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[13px] text-gray-500">노이즈 강도</span>
            <span className="text-[13px] font-medium text-gray-800 text-right">{tab === "basic" ? "Low 단일 지원" : "Low, Mid, High 전부"}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[13px] text-gray-500">워터마크</span>
            <span className="text-[13px] font-medium text-gray-800 text-right">{tab === "basic" ? "AEGIS 워터마크 포함" : "완벽 제거"}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[13px] text-gray-500">화질 유지</span>
            <span className="text-[13px] font-medium text-gray-800 text-right">{tab === "basic" ? "일반 화질" : "SR 고해상도 지원"}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[13px] text-gray-500">메타데이터 (EXIF)</span>
            <span className="text-[13px] font-medium text-gray-800 text-right">{tab === "basic" ? "그대로 유지" : "영구 삭제"}</span>
          </div>
        </div>

        <div className="h-px bg-gray-100/80 w-full mb-6" />

        {/* Total */}
        <div className="flex justify-between items-center">
          <span className="text-[13px] font-medium text-gray-800">Total (KRW)</span>
          <span className="text-[15px] font-medium text-gray-900">{tab === "basic" ? "₩0" : "₩4,900/월"}</span>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#fcfcfc] via-[#fcfcfc] to-transparent flex gap-3 z-10 items-end pb-8">
        <button 
          onClick={() => alert("구매 내역 복원 기능")}
          className="flex-1 py-4 rounded-2xl bg-gray-100/80 text-gray-700 font-medium text-[14px] active:scale-95 transition-transform"
        >
          Restore
        </button>
        <button
          onClick={() => {
            if (tab === "premium") {
              setIsSheetOpen(true);
            } else {
              navigate(-1);
            }
          }}
          className="flex-[1.6] py-4 rounded-2xl bg-[#0a0a0a] text-white font-medium text-[14px] active:scale-95 transition-transform shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
        >
          {tab === "basic" ? "계속하기" : "결제하기"}
        </button>
      </div>

      {/* Premium Bottom Sheet */}
      <PremiumBottomSheet 
        isOpen={isSheetOpen} 
        onClose={() => setIsSheetOpen(false)} 
      />
    </div>
  );
}