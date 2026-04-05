import { ChevronLeft, ChevronRight, Menu, Info } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Switch } from "./ui/switch";

export function SettingsScreen() {
  const navigate = useNavigate();
  const [autoLogin, setAutoLogin] = useState(true);
  const [bioAuth, setBioAuth] = useState(false);
  const [autoProtect, setAutoProtect] = useState(true);
  const [adPush, setAdPush] = useState(false);

  return (
    <div className="size-full flex flex-col bg-white overflow-y-auto pb-24 scrollbar-hide text-black">
      {/* Top Nav */}
      <div className="flex items-center justify-between px-3 pt-6 pb-2">
        <button onClick={() => navigate(-1)} className="p-3 text-black">
          <ChevronLeft className="w-6 h-6" strokeWidth={2} />
        </button>
        <button className="p-3 text-black">
          <Menu className="w-6 h-6" strokeWidth={2} />
        </button>
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
          
          <div className="flex items-center justify-between py-4 border-b border-gray-100">
            <span className="text-[15px] font-medium text-[#111]">자동 로그인</span>
            <Switch checked={autoLogin} onCheckedChange={setAutoLogin} className="data-[state=checked]:bg-[#5438d1] scale-125 origin-right" />
          </div>

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

          <button className="w-full flex items-center justify-between py-4 border-b border-gray-100">
            <span className="text-[15px] font-medium text-[#111]">개인정보 변경</span>
            <ChevronRight className="w-4 h-4 text-gray-300" strokeWidth={2.5} />
          </button>

          <div className="py-4 border-b border-gray-100 flex items-start justify-between">
            <div className="flex flex-col items-start pr-4">
               <span className="text-[15px] font-medium text-gray-400">생체 인증 설정</span>
               <span className="text-[12px] text-gray-400 mt-1 break-keep text-left">생체인증이 등록된 기기에서만 사용 가능합니다.</span>
            </div>
            <div className="pt-1">
              <Switch disabled checked={bioAuth} onCheckedChange={setBioAuth} className="scale-125 origin-right" />
            </div>
          </div>

          <button className="w-full flex items-center justify-between py-4">
            <span className="text-[15px] font-medium text-[#111]">로그아웃</span>
            <ChevronRight className="w-4 h-4 text-gray-300" strokeWidth={2.5} />
          </button>
        </div>

        {/* 보호 설정 */}
        <div className="mb-10">
          <h2 className="text-[14px] font-bold text-black border-b border-black pb-3 mb-1">
            보호 설정
          </h2>
          
          <div className="py-4 border-b border-gray-100 flex items-start justify-between">
            <div className="flex flex-col items-start text-left pr-4">
               <span className="text-[15px] font-medium text-[#111]">자동 보호 모드</span>
               <span className="text-[12px] text-gray-400 mt-1 break-keep text-left">갤러리에 추가된 새 사진을 자동으로 보호 처리합니다.</span>
            </div>
            <div className="pt-1">
              <Switch checked={autoProtect} onCheckedChange={setAutoProtect} className="data-[state=checked]:bg-[#5438d1] scale-125 origin-right" />
            </div>
          </div>

          <button className="w-full flex items-center justify-between py-4 border-b border-gray-100">
            <span className="text-[15px] font-medium text-[#111]">기본 보호 수준 변경</span>
            <ChevronRight className="w-4 h-4 text-gray-300" strokeWidth={2.5} />
          </button>

          <button className="w-full flex items-center justify-between py-4 border-b border-gray-100">
            <span className="text-[15px] font-medium text-[#111]">보호 통계 보고서</span>
            <ChevronRight className="w-4 h-4 text-gray-300" strokeWidth={2.5} />
          </button>
        </div>

        {/* 알림 */}
        <div className="mb-10">
          <h2 className="text-[14px] font-bold text-black border-b border-black pb-3 mb-1">
            알림
          </h2>

          <button className="w-full flex items-start justify-between py-4 border-b border-gray-100">
            <div className="flex flex-col items-start text-left pr-4">
               <span className="text-[15px] font-medium text-[#111]">
                 PUSH 알림 <span className="text-gray-300 font-normal text-[14px] ml-1">[OFF]</span>
               </span>
               <span className="text-[12px] text-gray-400 mt-1 break-keep text-left">보호 완료 및 중요 알림을 받으실 수 있습니다.</span>
            </div>
            <div className="pt-1">
              <ChevronRight className="w-4 h-4 text-gray-300" strokeWidth={2.5} />
            </div>
          </button>

          <div className="py-4 flex items-start justify-between">
            <div className="flex flex-col items-start text-left pr-4">
               <div className="flex items-center gap-1">
                 <span className="text-[15px] font-medium text-[#111]">광고성 서비스 PUSH 설정</span>
                 <Info className="w-[14px] h-[14px] text-[#5438d1] mb-0.5" />
               </div>
               <span className="text-[12px] text-gray-400 mt-1 break-keep text-left">이벤트, 쿠폰 등 혜택 정보를 받으실 수 있습니다.</span>
            </div>
            <div className="pt-1">
              <Switch checked={adPush} onCheckedChange={setAdPush} className="data-[state=checked]:bg-[#5438d1] scale-125 origin-right" />
            </div>
          </div>
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

        {/* 개발자 메뉴 (테스트용) */}
        <div className="mt-10 mb-10 p-4 bg-gray-50 rounded-2xl">
          <h2 className="text-[14px] font-bold text-gray-500 mb-3">
            개발자 메뉴 (Debug Navigation)
          </h2>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => navigate('/onboarding')} className="py-2.5 bg-white border border-gray-200 rounded-xl text-[13px] font-semibold text-gray-700 active:scale-95 transition-transform">
              온보딩 화면
            </button>
            <button onClick={() => navigate('/login')} className="py-2.5 bg-white border border-gray-200 rounded-xl text-[13px] font-semibold text-gray-700 active:scale-95 transition-transform">
              로그인 화면
            </button>
            <button onClick={() => navigate('/photo-select')} className="py-2.5 bg-white border border-gray-200 rounded-xl text-[13px] font-semibold text-gray-700 active:scale-95 transition-transform">
              보호 진행 화면
            </button>
            <button onClick={() => navigate('/subscription')} className="py-2.5 bg-white border border-gray-200 rounded-xl text-[13px] font-semibold text-gray-700 active:scale-95 transition-transform">
              프리미엄 화면
            </button>
            <button onClick={() => navigate('/album')} className="py-2.5 bg-white border border-gray-200 rounded-xl text-[13px] font-semibold text-gray-700 active:scale-95 transition-transform">
              갤러리 화면
            </button>
          </div>
        </div>

      </div>
      
    </div>
  );
}