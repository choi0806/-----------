import { motion } from "motion/react";

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <div className="size-full flex flex-col bg-white overflow-hidden relative">

      {/* Logo Area */}
      <div className="flex-1 flex items-center justify-center z-10 w-full">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[48px] font-black text-black tracking-widest italic"
        >
          aegis
        </motion.h1>
      </div>

      {/* Bottom Area (Buttons) */}
      <div className="w-full px-6 pb-[48px] z-10 flex flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <div className="w-full flex flex-col gap-3.5">
            {/* Google */}
            <button
              onClick={onLogin}
              className="w-full py-4 rounded-[16px] bg-white text-[#3c4043] flex items-center justify-center relative active:scale-[0.98] transition-transform font-medium text-[15px] h-[58px] border border-[#dadce0] shadow-sm"
            >
              <div className="absolute left-6">
                <svg width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.14 0 5.95 1.08 8.17 2.85l6.1-6.1C34.36 3.03 29.45 1 24 1 14.84 1 7.07 6.53 3.72 14.36l7.1 5.52C12.54 13.71 17.79 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.52 24.5c0-1.64-.15-3.22-.42-4.75H24v9.02h12.67c-.55 2.94-2.2 5.43-4.68 7.11l7.21 5.6C43.43 37.33 46.52 31.38 46.52 24.5z"/>
                  <path fill="#FBBC05" d="M10.82 28.12A14.6 14.6 0 0 1 9.5 24c0-1.43.25-2.82.7-4.12l-7.1-5.52A23.94 23.94 0 0 0 0 24c0 3.87.93 7.53 2.58 10.75l8.24-6.63z"/>
                  <path fill="#34A853" d="M24 47c5.45 0 10.03-1.8 13.37-4.9l-7.21-5.6c-1.8 1.2-4.1 1.9-6.16 1.9-6.21 0-11.46-4.21-13.18-9.88l-8.24 6.63C7.07 41.47 14.84 47 24 47z"/>
                </svg>
              </div>
              Google로 계속하기
            </button>

            {/* Kakao */}
            <button
              onClick={onLogin}
              className="w-full py-4 rounded-[16px] bg-[#FEE500] text-[#191919] flex items-center justify-center relative active:scale-[0.98] transition-transform font-medium text-[15px] h-[58px] shadow-sm"
            >
              <div className="absolute left-6">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 2C5.03 2 1 5.13 1 8.97c0 2.48 1.66 4.66 4.15 5.87l-1.05 3.88c-.09.34.3.61.58.42l4.6-3.04c.24.02.48.03.72.03 4.97 0 9-3.13 9-6.97S14.97 2 10 2z"
                    fill="#191919"
                  />
                </svg>
              </div>
              카카오로 계속하기
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
