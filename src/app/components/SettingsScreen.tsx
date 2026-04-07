import { ArrowLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";

export function SettingsScreen() {
  const navigate = useNavigate();

  return (
    <div className="size-full flex flex-col bg-white overflow-y-auto pb-24 scrollbar-hide text-black">
      {/* Top Nav */}
      <div className="flex items-center justify-between px-3 pt-6 pb-2">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-xl bg-[#f8f9fa] flex items-center justify-center">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <div className="w-10" />
      </div>

      {/* Page Title */}
      <div className="px-6 pb-8">
        <h1 className="text-[22px] font-extrabold text-black tracking-tight">설정</h1>
      </div>

      {/* Setting Groups */}
      <div className="px-6 pb-12">

        {/* 로그인/회원정보 */}
        <div className="mb-10">
          <h2 className="text-[14px] font-bold text-black border-b border-black pb-3 mb-1">
            로그인/회원정보
          </h2>

          <button className="w-full flex items-center justify-between py-4 border-b border-gray-100">
            <span className="text-[15px] font-medium text-[#111]">프로필 설정</span>
            <ChevronRight className="w-4 h-4 text-gray-300" strokeWidth={2.5} />
          </button>

          <button onClick={() => navigate('/subscription')} className="w-full flex items-center justify-between py-4 border-b border-gray-100">
            <span className="text-[15px] font-medium text-[#111]">구독 플랜 관리</span>
            <div className="flex items-center gap-2">
              <span className="text-[#5438d1] font-bold text-[13px]">Basic</span>
              <ChevronRight className="w-4 h-4 text-gray-300" strokeWidth={2.5} />
            </div>
          </button>

          <button className="w-full flex items-center justify-between py-4">
            <span className="text-[15px] font-medium text-[#111]">로그아웃</span>
            <ChevronRight className="w-4 h-4 text-gray-300" strokeWidth={2.5} />
          </button>
        </div>

        {/* 앱 정보 */}
        <div>
          <h2 className="text-[14px] font-bold text-black border-b border-black pb-3 mb-1">
            앱 정보
          </h2>

          <button className="w-full flex items-center justify-between py-4 border-b border-gray-100">
            <span className="text-[15px] font-medium text-[#111]">도움말 및 FAQ</span>
            <ChevronRight className="w-4 h-4 text-gray-300" strokeWidth={2.5} />
          </button>

          <button className="w-full flex items-center justify-between py-4 border-b border-gray-100">
            <span className="text-[15px] font-medium text-[#111]">이용약관 및 정책</span>
            <ChevronRight className="w-4 h-4 text-gray-300" strokeWidth={2.5} />
          </button>

          <div className="w-full flex items-center justify-between py-4">
            <span className="text-[15px] font-medium text-[#111]">버전 정보</span>
            <span className="text-[14px] text-[#5438d1] font-bold">1.0.0</span>
          </div>
        </div>

      </div>
    </div>
  );
}