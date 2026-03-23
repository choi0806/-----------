import { motion } from "motion/react";
import { Shield } from "lucide-react";

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <div className="size-full flex flex-col bg-white relative overflow-hidden">
      {/* Top gradient shape */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#EDE9FE] opacity-60" />
      <div className="absolute top-32 -left-16 w-40 h-40 rounded-full bg-[#FEF3C7] opacity-50" />

      <div className="flex-1 flex flex-col items-center justify-center px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="w-20 h-20 rounded-3xl bg-[#7C6CF0] flex items-center justify-center mb-5 shadow-lg shadow-[#7C6CF0]/25">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-foreground tracking-tight">AEGIS</h1>
          <p className="text-muted-foreground mt-1" style={{ fontSize: "15px" }}>
            당신의 사진, 당신이 지킵니다
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full space-y-3"
        >
          {/* Kakao */}
          <button
            onClick={onLogin}
            className="w-full py-4 rounded-2xl bg-[#FEE500] text-[#191919] flex items-center justify-center gap-3 active:scale-[0.98] transition-transform shadow-sm"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2C5.03 2 1 5.13 1 8.97c0 2.48 1.66 4.66 4.15 5.87l-1.05 3.88c-.09.34.3.61.58.42l4.6-3.04c.24.02.48.03.72.03 4.97 0 9-3.13 9-6.97S14.97 2 10 2z"
                fill="#191919"
              />
            </svg>
            카카오로 시작하기
          </button>

          {/* Google */}
          <button
            onClick={onLogin}
            className="w-full py-4 rounded-2xl bg-white text-[#333] flex items-center justify-center gap-3 active:scale-[0.98] transition-transform border border-gray-200 shadow-sm"
          >
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path d="M19.6 10.23c0-.68-.06-1.36-.17-2H10v3.79h5.4a4.62 4.62 0 01-2 3.03v2.52h3.24c1.89-1.74 2.98-4.31 2.98-7.34z" fill="#4285F4" />
              <path d="M10 20c2.7 0 4.96-.9 6.62-2.42l-3.24-2.52c-.89.6-2.04.96-3.38.96-2.6 0-4.8-1.76-5.59-4.12H1.07v2.6A9.99 9.99 0 0010 20z" fill="#34A853" />
              <path d="M4.41 11.9a6 6 0 010-3.8V5.5H1.07a9.99 9.99 0 000 9l3.34-2.6z" fill="#FBBC05" />
              <path d="M10 3.98c1.47 0 2.78.5 3.82 1.5l2.86-2.87C14.96 1 12.7 0 10 0A9.99 9.99 0 001.07 5.5l3.34 2.6C5.2 5.74 7.4 3.98 10 3.98z" fill="#EA4335" />
            </svg>
            Google로 시작하기
          </button>

          {/* Apple */}
          <button
            onClick={onLogin}
            className="w-full py-4 rounded-2xl bg-[#1A1A2E] text-white flex items-center justify-center gap-3 active:scale-[0.98] transition-transform shadow-sm"
          >
            <svg width="18" height="22" viewBox="0 0 18 22" fill="white">
              <path d="M17.05 7.55c-.1.08-1.88 1.08-1.88 3.31 0 2.59 2.27 3.5 2.34 3.53-.01.07-.36 1.25-1.2 2.47-.74 1.07-1.51 2.14-2.68 2.14s-1.48-.68-2.83-.68c-1.32 0-1.79.7-2.86.7s-1.8-1-2.67-2.21C3.87 14.85 3 12.13 3 9.55c0-4.11 2.67-6.29 5.3-6.29 1.4 0 2.56.92 3.44.92.84 0 2.15-.97 3.73-.97.6 0 2.77.05 4.2 2.1l-2.62 1.24zM12.15.37c.56-.67.96-1.6.96-2.53 0-.13-.01-.26-.03-.37-.91.03-1.99.61-2.65 1.36-.52.59-1 1.52-1 2.46 0 .14.02.28.03.33.06.01.15.02.24.02.82 0 1.85-.55 2.45-1.27z" />
            </svg>
            Apple로 시작하기
          </button>
        </motion.div>
      </div>

      <div className="pb-8 px-8 text-center relative z-10">
        <p className="text-muted-foreground/60" style={{ fontSize: "12px", lineHeight: 1.5 }}>
          계속 진행하면 <span className="underline">이용약관</span> 및{" "}
          <span className="underline">개인정보처리방침</span>에 동의하게 됩니다.
        </p>
      </div>
    </div>
  );
}
