import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Eye, Zap, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const slides = [
  {
    icon: Shield,
    title: "AI로부터\n사진을 보호하세요",
    description: "사진에 눈에 보이지 않는 보호막을 씌워\nAI가 학습하지 못하게 합니다",
    color: "#7C6CF0",
    bgColor: "#EDE9FE",
    image: "https://images.unsplash.com/photo-1565124608772-6906e85401fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBvcnRyYWl0JTIwd29tYW4lMjBmYXNoaW9ufGVufDF8fHx8MTc3Mzc1ODUwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Eye,
    title: "원본 품질은\n그대로 유지",
    description: "사람 눈에는 차이가 없지만\nAI에게는 전혀 다른 사진으로 인식됩니다",
    color: "#10B981",
    bgColor: "#D1FAE5",
    image: "https://images.unsplash.com/photo-1662695089339-a2c24231a3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc2VsZmllJTIwYnJpZ2h0JTIwY2hlZXJmdWx8ZW58MXx8fHwxNzczNzU4NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Zap,
    title: "서버 전송 없이\n기기에서 바로 처리",
    description: "온디바이스 AI로 원본 사진이\n절대 외부로 나가지 않습니다",
    color: "#F59E0B",
    bgColor: "#FEF3C7",
    image: "https://images.unsplash.com/photo-1639503547276-90230c4a4198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2VjdXJpdHklMjBzaGllbGQlMjBhYnN0cmFjdCUyMGRhcmt8ZW58MXx8fHwxNzczNzU4MDI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
    <div className="size-full flex flex-col bg-white relative overflow-hidden">
      {/* Skip */}
      <div className="flex justify-end px-6 pt-5 relative z-20">
        <button onClick={onComplete} className="text-muted-foreground" style={{ fontSize: "14px" }}>
          건너뛰기
        </button>
      </div>

      {/* Image area */}
      <div className="relative flex-1 max-h-[55%]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <div className="mx-6 mt-2 h-full rounded-3xl overflow-hidden" style={{ backgroundColor: slide.bgColor }}>
              <ImageWithFallback
                src={slide.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="px-8 pt-8 pb-4 flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
              style={{ backgroundColor: slide.bgColor }}
            >
              <slide.icon className="w-6 h-6" style={{ color: slide.color }} />
            </div>
            <h1 className="text-foreground whitespace-pre-line mb-3" style={{ lineHeight: 1.3 }}>
              {slide.title}
            </h1>
            <p className="text-muted-foreground whitespace-pre-line" style={{ fontSize: "15px", lineHeight: 1.6 }}>
              {slide.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom controls */}
      <div className="px-8 pb-10 flex items-center justify-between">
        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === current ? 28 : 8,
                backgroundColor: i === current ? slide.color : "#E0E0E0",
              }}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={next}
          className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg active:scale-95 transition-transform"
          style={{ backgroundColor: slide.color }}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
