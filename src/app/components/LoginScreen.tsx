import { motion } from "motion/react";
import { Shield } from "lucide-react";

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <div className="size-full flex flex-col bg-[#fdfdfd] overflow-hidden px-8">
      <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
        {/* Title Area */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h1 className="text-[32px] font-extrabold text-black tracking-tight mb-2">Sign in</h1>
          <p className="text-[14px] font-semibold text-black">
            New user? <span className="text-gray-500 font-medium">Create an account automatically</span>
          </p>
        </motion.div>

        {/* Social Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="w-full flex flex-col gap-3.5"
        >
          {/* Kakao */}
          <button
            onClick={onLogin}
            className="w-full py-4 rounded-[18px] bg-[#FEE500] text-[#191919] flex items-center justify-center gap-3 active:scale-[0.98] transition-transform font-bold text-[15px] h-[56px] shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2C5.03 2 1 5.13 1 8.97c0 2.48 1.66 4.66 4.15 5.87l-1.05 3.88c-.09.34.3.61.58.42l4.6-3.04c.24.02.48.03.72.03 4.97 0 9-3.13 9-6.97S14.97 2 10 2z"
                fill="#191919"
              />
            </svg>
            Continue with Kakao
          </button>

          {/* Google */}
          <button
            onClick={onLogin}
            className="w-full py-4 rounded-[18px] bg-white text-black flex items-center justify-center gap-3 active:scale-[0.98] transition-transform border border-gray-200 font-bold text-[15px] h-[56px] shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
          >
            <svg width="18" height="18" viewBox="0 0 20 20">
              <path d="M19.6 10.23c0-.68-.06-1.36-.17-2H10v3.79h5.4a4.62 4.62 0 01-2 3.03v2.52h3.24c1.89-1.74 2.98-4.31 2.98-7.34z" fill="#4285F4" />
              <path d="M10 20c2.7 0 4.96-.9 6.62-2.42l-3.24-2.52c-.89.6-2.04.96-3.38.96-2.6 0-4.8-1.76-5.59-4.12H1.07v2.6A9.99 9.99 0 0010 20z" fill="#34A853" />
              <path d="M4.41 11.9a6 6 0 010-3.8V5.5H1.07a9.99 9.99 0 000 9l3.34-2.6z" fill="#FBBC05" />
              <path d="M10 3.98c1.47 0 2.78.5 3.82 1.5l2.86-2.87C14.96 1 12.7 0 10 0A9.99 9.99 0 001.07 5.5l3.34 2.6C5.2 5.74 7.4 3.98 10 3.98z" fill="#EA4335" />
            </svg>
            Continue with Google
          </button>

          {/* Apple */}
          <button
            onClick={onLogin}
            className="w-full py-4 rounded-[18px] bg-white text-black flex items-center justify-center gap-3 active:scale-[0.98] transition-transform border border-gray-200 font-bold text-[15px] h-[56px] shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
          >
            <svg width="16" height="20" viewBox="0 0 18 22" fill="black">
              <path d="M17.05 7.55c-.1.08-1.88 1.08-1.88 3.31 0 2.59 2.27 3.5 2.34 3.53-.01.07-.36 1.25-1.2 2.47-.74 1.07-1.51 2.14-2.68 2.14s-1.48-.68-2.83-.68c-1.32 0-1.79.7-2.86.7s-1.8-1-2.67-2.21C3.87 14.85 3 12.13 3 9.55c0-4.11 2.67-6.29 5.3-6.29 1.4 0 2.56.92 3.44.92.84 0 2.15-.97 3.73-.97.6 0 2.77.05 4.2 2.1l-2.62 1.24zM12.15.37c.56-.67.96-1.6.96-2.53 0-.13-.01-.26-.03-.37-.91.03-1.99.61-2.65 1.36-.52.59-1 1.52-1 2.46 0 .14.02.28.03.33.06.01.15.02.24.02.82 0 1.85-.55 2.45-1.27z" />
            </svg>
            Continue with Apple
          </button>
        </motion.div>
      </div>

      {/* Footer Area */}
      <div className="pb-12 text-center text-gray-500">
        <p className="text-[12px] font-medium leading-[1.6] tracking-tight">
          By signing in with an account, you agree to AEGIS's<br/>
          <span className="font-bold underline underline-offset-2 text-black cursor-pointer">Terms of Service</span> and <span className="font-bold underline underline-offset-2 text-black cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}
