import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, Crown, Check } from "lucide-react";

interface PremiumBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const plans = [
  {
    id: "1month",
    duration: "1개월",
    monthlyPrice: "5,900",
    badge: null,
    free: false,
  },
  {
    id: "3month",
    duration: "3개월",
    monthlyPrice: "4,900",
    badge: "인기",
    free: true,
  },
  {
    id: "6month",
    duration: "6개월",
    monthlyPrice: "4,500",
    badge: null,
    free: true,
  },
  {
    id: "12month",
    duration: "12개월",
    monthlyPrice: "4,100",
    badge: null,
    free: true,
  },
];

const paymentInfo: Record<string, { total: string; recurring: string }> = {
  "1month": { total: "5,900원", recurring: "매월 5,900원씩 자동 결제" },
  "3month": { total: "9,800원", recurring: "3개월 마다 14,700원씩 자동 결제" },
  "6month": { total: "22,500원", recurring: "6개월 마다 27,000원씩 자동 결제" },
  "12month": { total: "41,000원", recurring: "12개월 마다 49,200원씩 자동 결제" },
};

export function PremiumBottomSheet({ isOpen, onClose }: PremiumBottomSheetProps) {
  const [selected, setSelected] = useState("3month");
  const [agreed, setAgreed] = useState(false);

  const info = paymentInfo[selected];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50"
            onClick={onClose}
          />

          {/* Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 max-w-md mx-auto"
          >
            <div className="bg-white rounded-t-3xl max-h-[90vh] flex flex-col">
              {/* Handle + Header */}
              <div className="pt-3 pb-4 px-5 shrink-0 bg-white rounded-t-3xl z-10 sticky top-0 border-b border-gray-100">
                <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-5" />
                <div className="flex items-center justify-between">
                  <h2 className="text-[17px] font-bold text-gray-900 tracking-tight">이용 기간 선택</h2>
                  <button
                    onClick={onClose}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto scrollbar-hide pb-safe">
                
                {/* Plan options */}
                <div className="px-5 space-y-2.5 mb-6 mt-6">
                  {plans.map((plan) => {
                    const isSelected = selected === plan.id;
                    return (
                      <button
                        key={plan.id}
                        onClick={() => setSelected(plan.id)}
                        className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl border-2 transition-all ${
                          isSelected
                            ? "border-[#7C6CF0] bg-[#FAFAFF]"
                            : "border-gray-100 bg-white"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-foreground font-bold" style={{ fontSize: "15px" }}>
                            {plan.duration}
                          </span>
                          {plan.badge && (
                            <span
                              className="px-2.5 py-0.5 rounded-full bg-[#EF4444] text-white font-bold"
                              style={{ fontSize: "11px" }}
                            >
                              {plan.badge}
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="text-foreground font-bold" style={{ fontSize: "15px" }}>
                            월 {plan.monthlyPrice}원
                          </p>
                          {plan.free && (
                            <p className="text-[#3B82F6] font-bold" style={{ fontSize: "12px", marginTop: "2px" }}>
                              첫 1개월 무료
                            </p>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Payment summary */}
                <div className="px-5 mb-5">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 font-medium" style={{ fontSize: "14px" }}>
                      결제 금액
                    </span>
                    <div className="text-right">
                      <div className="flex items-center gap-2 justify-end">
                        {info.total === "5,900원" ? null : (
                          <span className="text-[#3B82F6] font-medium" style={{ fontSize: "13px" }}>
                            첫 1개월 무료 적용
                          </span>
                        )}
                        <span className="text-gray-900 font-bold" style={{ fontSize: "20px" }}>
                          {info.total}
                        </span>
                      </div>
                      <p className="text-gray-400 font-medium mt-1" style={{ fontSize: "13px" }}>
                        {info.recurring}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100 mx-5" />

                {/* Agreement */}
                <div className="px-5 py-5 pb-8">
                  <button
                    onClick={() => setAgreed(!agreed)}
                    className="flex items-center gap-3 mb-2"
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                        agreed ? "text-[#7C6CF0]" : "text-gray-300"
                      }`}
                    >
                      <CheckCircle2 className={`w-6 h-6 ${agreed ? "fill-[#7C6CF0] text-white" : ""}`} strokeWidth={agreed ? 1.5 : 2} />
                    </div>
                    <span className="text-gray-800 font-medium" style={{ fontSize: "14.5px" }}>
                      AEGIS 프리미엄 이용약관에 동의합니다.
                    </span>
                  </button>
                  <button className="ml-9 text-gray-400 underline underline-offset-2" style={{ fontSize: "13px" }}>
                    이용약관 보기
                  </button>
                </div>
              </div>

              {/* Bottom CTA Fixed */}
              <div className="px-5 pt-3 pb-[max(1.5rem,env(safe-area-inset-bottom))] shrink-0 bg-white border-t border-gray-100 relative z-10">
                <button
                  disabled={!agreed}
                  onClick={() => {
                    // Start premium logic here
                    alert("결제가 완료되었습니다!");
                    onClose();
                  }}
                  className={`w-full py-4 rounded-2xl flex items-center justify-center font-bold text-[16px] transition-all duration-200 ${
                    agreed
                      ? "bg-gray-900 text-white active:scale-[0.98] shadow-lg hover:bg-gray-800"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {info.total} 결제하기
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
