import { motion } from "motion/react";
import {
  ArrowLeft,
  Check,
  Crown,
  Shield,
  Zap,
  Image,
  Infinity,
  X,
} from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";

const plans = [
  { id: "monthly", name: "월간", price: "4,900", period: "월", popular: false },
  { id: "yearly", name: "연간", price: "39,000", period: "년", popular: true, save: "33%" },
];

const features = [
  { icon: Infinity, text: "무제한 사진 보호", free: "30장/월", color: "#7C6CF0", bg: "#EDE9FE" },
  { icon: Shield, text: "딥페이크 방어 포함", free: "기본 보호만", color: "#EF4444", bg: "#FEE2E2" },
  { icon: Image, text: "고해상도 원본 처리", free: "압축 처리", color: "#10B981", bg: "#D1FAE5" },
  { icon: Zap, text: "우선 처리 속도", free: "일반 속도", color: "#F59E0B", bg: "#FEF3C7" },
];

export function PremiumScreen() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("yearly");

  return (
    <div className="size-full flex flex-col bg-card overflow-y-auto scrollbar-hide">
      {/* Close */}
      <div className="flex items-center justify-between px-5 pt-6 pb-2">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-xl bg-background flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <div className="w-10" />
      </div>

      {/* Hero */}
      <div className="px-5 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-[#FEF3C7] via-[#FDE68A] to-[#FBBF24]/40 rounded-3xl p-7 text-center relative overflow-hidden"
        >
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#FBBF24]/20" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/20" />
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Crown className="w-8 h-8 text-[#D97706]" />
            </div>
            <h1 className="text-[#92400E] mb-1">AEGIS Premium</h1>
            <p className="text-[#B45309]" style={{ fontSize: "14px" }}>
              완벽한 보호, 무제한으로 경험하세요
            </p>
          </div>
        </motion.div>
      </div>

      {/* Plan Selection */}
      <div className="px-5 mb-6">
        <div className="grid grid-cols-2 gap-3">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`relative p-4 rounded-2xl border-2 transition-all ${
                selectedPlan === plan.id
                  ? "border-[#F59E0B] bg-[#FEF3C7]/40 shadow-md shadow-[#F59E0B]/10"
                  : "border-transparent bg-background"
              }`}
            >
              {plan.popular && (
                <span
                  className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#F59E0B] text-white rounded-full shadow-sm"
                  style={{ fontSize: "10px" }}
                >
                  인기
                </span>
              )}
              <p className="text-muted-foreground mb-1" style={{ fontSize: "13px" }}>{plan.name}</p>
              <div className="flex items-baseline gap-0.5">
                <span className="text-foreground" style={{ fontSize: "22px" }}>{plan.price}</span>
                <span className="text-muted-foreground" style={{ fontSize: "12px" }}>원/{plan.period}</span>
              </div>
              {plan.save && (
                <span className="text-[#059669]" style={{ fontSize: "12px" }}>{plan.save} 할인</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="px-5 mb-8">
        <h3 className="text-foreground mb-4">Premium 혜택</h3>
        <div className="space-y-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="flex items-center gap-4 p-4 bg-background rounded-2xl"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: feature.bg }}
              >
                <feature.icon className="w-5 h-5" style={{ color: feature.color }} />
              </div>
              <div className="flex-1">
                <p className="text-foreground" style={{ fontSize: "14px" }}>{feature.text}</p>
                <p className="text-muted-foreground" style={{ fontSize: "12px" }}>
                  무료: {feature.free}
                </p>
              </div>
              <Check className="w-5 h-5 text-[#10B981] shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pb-10 mt-auto">
        <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white flex items-center justify-center gap-2 shadow-lg shadow-[#F59E0B]/25 active:scale-[0.98] transition-transform">
          <Crown className="w-5 h-5" />
          Premium 시작하기
        </button>
        <p className="text-center text-muted-foreground mt-3" style={{ fontSize: "12px" }}>
          7일 무료 체험 · 언제든 취소 가능
        </p>
      </div>
    </div>
  );
}