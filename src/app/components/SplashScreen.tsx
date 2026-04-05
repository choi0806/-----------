import { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Shield, Loader2 } from "lucide-react";

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    // 애니메이션 총 재생 시간(0.8 + 1.0 + 0.4 = 2.2초)
    const totalAnimationTime = 2200;

    const timer = setTimeout(() => {
      // Firebase Auth 기반의 토큰 유무 확인 (비동기 초기화 로직 구현부)
      // 현재는 로컬스토리지를 이용해 목(Mock) 구조를 구현합니다.
      const hasToken = localStorage.getItem("token");
      const isNewUser = !localStorage.getItem("hasVisited");

      if (hasToken) {
        // 이미 가입/로그인된 경우 토큰이 있음
        navigate("/home", { replace: true });
      } else {
        if (isNewUser) {
          // 한번도 방문한 적 없는 완전 최초 진입 시
          localStorage.setItem("hasVisited", "true");
          navigate("/onboarding", { replace: true });
        } else {
          // 토큰은 만료되었으나 기존 사용자인 경우
          navigate("/login", { replace: true });
        }
      }
    }, totalAnimationTime);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="size-full flex flex-col items-center justify-center bg-gradient-to-b from-[#1A1A2E] to-[#16213E] relative overflow-hidden">
      
      {/* 화면 중앙에 배치 컨트롤 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ 
          duration: 2.2, 
          // 페이드인(0.8s) -> 대기(1.0s) -> 페이드아웃(0.4s) 구간 비율
          times: [0, 0.36, 0.82, 1],
          ease: "easeInOut"
        }}
        className="flex flex-col items-center justify-center"
      >
        {/* 로고 영역: 화면 너비의 40% (최대 160dp) 반응형 */}
        <div className="w-[40vw] max-w-[160px] flex flex-col items-center justify-center">
          <Shield className="w-full h-auto text-white" strokeWidth={1.2} />
          <h1 className="text-white text-[32px] font-black tracking-widest mt-2 mb-0">
            Aegis
          </h1>
        </div>

        {/* 슬로건: 로고 하단 24dp 띄움, 16sp, 흰색, 투명도 80% */}
        <p className="mt-[24px] text-white/80 text-[16px] font-medium tracking-tight whitespace-nowrap">
          AI로부터 당신의 사진을 지킵니다
        </p>
      </motion.div>

      {/* 하단 중앙 로딩 인디케이터 (CircularProgressIndicator, 24dp) */}
      <div className="absolute bottom-12 flex items-center justify-center">
        <Loader2 className="w-[24px] h-[24px] text-white animate-spin opacity-90" />
      </div>
    </div>
  );
}