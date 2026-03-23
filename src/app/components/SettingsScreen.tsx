import {
  ArrowLeft,
  ChevronRight,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { PremiumBottomSheet } from "./PremiumBottomSheet";
import { motion } from "motion/react";

const menuGroups = [
  {
    title: "계정",
    items: [
      { label: "프로필 설정", badge: null },
      { label: "구독 관리", badge: "Basic" },
      { label: "알림 설정", badge: null },
    ],
  },
  {
    title: "보호 설정",
    items: [
      { label: "기본 보호 수준", badge: "강화" },
      { label: "자동 보호 설정", badge: null },
      { label: "보호 통계", badge: null },
    ],
  },
  {
    title: "기타",
    items: [
      { label: "도움말 및 FAQ", badge: null },
      { label: "이용약관", badge: null },
      { label: "개인정보처리방침", badge: null },
    ],
  },
];

export function SettingsScreen() {
  const navigate = useNavigate();
  const [showPremium, setShowPremium] = useState(false);

  return (
    <div className="size-full flex flex-col bg-[#f8f9fa] overflow-y-auto pb-28 scrollbar-hide">
      {/* Header */}
      <div className="bg-[#f8f9fa] flex items-center gap-3 px-5 pt-6 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-xl bg-[#f8f9fa] flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h2 className="text-foreground tracking-tight">설정</h2>
      </div>

      {/* Profile Card */}
      <div className="bg-card px-5 pb-5">
        <div className="bg-background rounded-2xl p-4 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 ring-2 ring-[#7C6CF0]/20 ring-offset-2">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1662695089339-a2c24231a3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc2VsZmllJTIwYnJpZ2h0JTIwY2hlZXJmdWx8ZW58MXx8fHwxNzczNzU4NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-foreground truncate">김서연</p>
            <p className="text-muted-foreground truncate" style={{ fontSize: "13px" }}>
              seoyeon.kim@email.com
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
        </div>
      </div>

      {/* Stats Row */}
      <div className="px-5 mt-4 mb-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: "24", label: "이번 달", color: "#7C6CF0" },
            { value: "142", label: "누적 보호", color: "#10B981" },
            { value: "99.5%", label: "평균 화질", color: "#F59E0B" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card rounded-2xl p-3.5 text-center shadow-sm">
              <p style={{ fontSize: "20px", color: stat.color }}>{stat.value}</p>
              <p className="text-muted-foreground" style={{ fontSize: "11px" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Card - gradient style */}
      <div className="px-5 mb-4">
        <div className="rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg, #7C6CF0 0%, #A78BFA 50%, #C4B5FD 100%)" }}>
          <div className="p-5">
            {/* Title row */}
            <div className="flex items-center justify-between mb-5">
              <p className="text-white" style={{ fontSize: "16px" }}>
                AEGIS Basic Plan
              </p>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white" style={{ fontSize: "12px" }}>
                이용 중
              </span>
            </div>

            {/* Info rows */}
            <div className="space-y-2 mb-5">
              <div className="flex items-center gap-4">
                <span className="text-white/60 shrink-0" style={{ fontSize: "13px", minWidth: "60px" }}>이용기간</span>
                <span className="text-white" style={{ fontSize: "13px" }}>2026.04.17 23:59:59 까지</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-white/60 shrink-0" style={{ fontSize: "13px", minWidth: "60px" }}>플랜</span>
                <span className="text-white" style={{ fontSize: "13px" }}>Basic (무료)</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-white/60 shrink-0" style={{ fontSize: "13px", minWidth: "60px" }}>결제설정</span>
                <span className="text-white" style={{ fontSize: "13px" }}>30일권</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2.5 rounded-full overflow-hidden mb-2.5" style={{ background: "rgba(255,255,255,0.15)" }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #F9A8D4 0%, #93C5FD 50%, #FDE68A 100%)" }}
              />
            </div>

            {/* Remaining count */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-white/70" />
                <span className="text-white/80" style={{ fontSize: "13px" }}>잔여횟수 총 30장</span>
              </div>
              <span className="text-white" style={{ fontSize: "20px" }}>6</span>
            </div>
          </div>

          {/* Note */}
          <div className="px-5 pb-4">
            <p className="text-white/50" style={{ fontSize: "11px" }}>
              해당 플랜은 매월 자동 갱신되며, 설정에서 변경할 수 있습니다.
            </p>
          </div>
        </div>

        {/* Upgrade button */}
        <button
          onClick={() => setShowPremium(true)}
          className="w-full mt-3 py-3.5 rounded-2xl bg-card border border-border text-foreground active:scale-[0.98] transition-transform shadow-sm"
          style={{ fontSize: "14px" }}
        >
          프리미엄으로 업그레이드
        </button>
      </div>

      {/* Menu Groups */}
      {menuGroups.map((group) => (
        <div key={group.title} className="px-5 mb-4">
          <p className="text-muted-foreground mb-2 px-1" style={{ fontSize: "12px" }}>
            {group.title}
          </p>
          <div className="bg-card rounded-2xl overflow-hidden shadow-sm">
            {group.items.map((item, i) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3.5 ${
                  i < group.items.length - 1 ? "border-b border-border" : ""
                } active:bg-background transition-colors`}
              >
                <span className="flex-1 text-left text-foreground" style={{ fontSize: "14px" }}>
                  {item.label}
                </span>
                {item.badge && (
                  <span
                    className="text-muted-foreground px-2.5 py-0.5 bg-background rounded-lg"
                    style={{ fontSize: "12px" }}
                  >
                    {item.badge}
                  </span>
                )}
                <ChevronRight className="w-4 h-4 text-muted-foreground/50 shrink-0" />
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Logout */}
      <div className="px-5 mb-8">
        <button className="w-full flex items-center justify-center gap-2 py-3 text-destructive rounded-2xl bg-card shadow-sm">
          <span style={{ fontSize: "14px" }}>로그아웃</span>
        </button>
        <p className="text-center text-muted-foreground mt-3" style={{ fontSize: "11px" }}>
          AEGIS v1.0.0
        </p>
      </div>

      {/* Premium Bottom Sheet */}
      <PremiumBottomSheet isOpen={showPremium} onClose={() => setShowPremium(false)} />
    </div>
  );
}