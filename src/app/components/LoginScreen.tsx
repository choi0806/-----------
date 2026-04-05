import { motion } from "motion/react";
import { Mail } from "lucide-react";

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <div className="size-full flex flex-col bg-[#F3EFEA] overflow-hidden relative">
      {/* Subtle Background Gradients to match the image */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[50%] bg-[#E8D5C4] blur-[100px] rounded-full pointer-events-none opacity-60" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[50%] bg-[#E8D5C4] blur-[100px] rounded-full pointer-events-none opacity-60" />

      {/* Logo Area */}
      <div className="flex-1 flex items-center justify-center z-10 w-full">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[48px] font-black text-[#2B52F6] tracking-widest italic"
        >
          AEGIS
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
            {/* Google (styled like the Apple button in the design image: Black) */}
            <button
              onClick={onLogin}
              className="w-full py-4 rounded-[16px] bg-[#1c1c1e] text-white flex items-center justify-center relative active:scale-[0.98] transition-transform font-medium text-[15px] h-[58px] shadow-sm"
            >
              <div className="absolute left-6">
                <svg width="22" height="22" viewBox="0 0 20 20">
                  <path d="M19.6 10.23c0-.68-.06-1.36-.17-2H10v3.79h5.4a4.62 4.62 0 01-2 3.03v2.52h3.24c1.89-1.74 2.98-4.31 2.98-7.34z" fill="#ffffff" />
                  <path d="M10 20c2.7 0 4.96-.9 6.62-2.42l-3.24-2.52c-.89.6-2.04.96-3.38.96-2.6 0-4.8-1.76-5.59-4.12H1.07v2.6A9.99 9.99 0 0010 20z" fill="#ffffff" />
                  <path d="M4.41 11.9a6 6 0 010-3.8V5.5H1.07a9.99 9.99 0 000 9l3.34-2.6z" fill="#ffffff" />
                  <path d="M10 3.98c1.47 0 2.78.5 3.82 1.5l2.86-2.87C14.96 1 12.7 0 10 0A9.99 9.99 0 001.07 5.5l3.34 2.6C5.2 5.74 7.4 3.98 10 3.98z" fill="#ffffff" />
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

            {/* Facebook */}
            <button
              onClick={onLogin}
              className="w-full py-4 rounded-[16px] bg-[#1877F2] text-white flex items-center justify-center relative active:scale-[0.98] transition-transform font-medium text-[15px] h-[58px] shadow-sm"
            >
              <div className="absolute left-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              페이스북으로 계속하기
            </button>

            {/* Email */}
            <button
              onClick={onLogin}
              className="w-full py-4 rounded-[16px] bg-white text-black flex items-center justify-center relative active:scale-[0.98] transition-transform font-medium text-[15px] h-[58px] shadow-sm"
            >
              <div className="absolute left-6 text-gray-300">
                <Mail className="w-5 h-5" strokeWidth={2} />
              </div>
              이메일로 계속하기
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
