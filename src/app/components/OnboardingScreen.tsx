import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    image: "/assets/온보딩1.png",
    title: "사진을 안전하게\n보호하세요",
    description: "매년 급증하는 딥페이크 피해.\n우리의 기술로 당신의 소중한 얼굴을\n안전하게 보호해 드립니다.",
  },
  {
    image: "/assets/온보딩2.png",
    title: "AI는 속고\n사람은 모릅니다",
    description: "사람의 눈에는 원본과 똑같아 보이지만,\nAI의 악의적 합성 인식률은 0%로 무력화됩니다.",
  },
  {
    image: "/assets/온보딩3.png",
    title: "인터넷 없이도\n작동합니다",
    description: "Zero-Server 원칙을 준수합니다.\n모든 처리는 기기 안에서만 이루어지며,\n어떤 사진도 외부로 전송되지 않습니다.",
  },
];

interface OnboardingScreenProps {
  onComplete: () => void;
}

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      onComplete();
    }
  };

  const slide = slides[current];

  return (
    <div className="size-full flex flex-col bg-white overflow-hidden pb-12">
      {/* Visual Area (Top Layout) */}
      <div className="flex-1 max-h-[55%] flex flex-col items-center justify-center pt-8 px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full h-full flex flex-col items-center justify-center p-4"
          >
            <div className="w-full max-w-[280px] aspect-square flex items-center justify-center relative select-none pointer-events-none">
              <img 
                src={slide.image} 
                alt="온보딩 일러스트" 
                className="w-full h-full object-contain"
                draggable={false}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="px-8 mt-2 flex flex-col items-center text-center pb-8 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col items-center w-full"
          >
            <h1 
              className="whitespace-pre-line mb-4 text-[24px] font-extrabold tracking-tight text-[#1a1a1a]" 
              style={{ lineHeight: 1.35 }}
            >
              {slide.title}
            </h1>
            <p className="whitespace-pre-line text-[#737373] font-medium" style={{ fontSize: "14px", lineHeight: 1.6 }}>
              {slide.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom controls */}
      <div className="px-8 flex flex-col items-center w-full">
        {/* Dots */}
        <div className="flex gap-2 mb-10">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-6 h-1.5 bg-[#4F46E5] opacity-100' : 'w-1.5 h-1.5 bg-[#E5E7EB]'
              }`}
            />
          ))}
        </div>

        {/* Action Buttons Area */}
        <div className="w-full flex flex-col items-center gap-6">
          <button
            onClick={next}
            className="w-full max-w-[260px] h-[58px] rounded-full bg-[#111111] flex items-center justify-center gap-3 text-white font-semibold text-[15px] active:scale-[0.98] transition-transform"
          >
            {current === slides.length - 1 ? '시작하기' : '다음'}
            <ArrowRight className="w-4 h-4 text-white" strokeWidth={2.5} />
          </button>

          <button
            onClick={onComplete}
            className="text-[#999999] font-medium text-[13px] active:text-[#111111] transition-colors"
          >
            건너뛰고 로그인하기
          </button>
        </div>
      </div>
    </div>
  );
}
