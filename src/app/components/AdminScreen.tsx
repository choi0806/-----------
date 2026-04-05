import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  BarChart3,
  Cpu,
  ShieldAlert,
  Search,
  Download,
  Filter,
  MoreVertical,
  Activity,
  AlertTriangle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const MENU_ITEMS = [
  { id: "dashboard", label: "대시보드 (홈)", icon: LayoutDashboard, collection: "adminStats/{date}" },
  { id: "users", label: "사용자 관리", icon: Users, collection: "users" },
  { id: "subscriptions", label: "구독 관리", icon: CreditCard, collection: "subscriptions" },
  { id: "reports", label: "통계 리포트", icon: BarChart3, collection: "adminStats 집계" },
  { id: "ai_models", label: "AI 모델 관리", icon: Cpu, collection: "modelVersions" },
  { id: "anomalies", label: "이상 로그 모니터링", icon: ShieldAlert, collection: "protectionLogs 집계" },
];

export function AdminScreen() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const ActiveIcon = MENU_ITEMS.find((m) => m.id === activeTab)?.icon || LayoutDashboard;
  const activeLabel = MENU_ITEMS.find((m) => m.id === activeTab)?.label || "";

  return (
    <div className="flex h-screen w-full bg-[#f8f9fa] overflow-hidden text-gray-800 font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <ShieldAlert className="w-6 h-6 text-[#4254f5] mr-2" strokeWidth={2.5} />
          <span className="text-[18px] font-black text-gray-900 tracking-tight">AEGIS Admin</span>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {MENU_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${
                  isActive ? "bg-[#4254f5]/10 text-[#4254f5]" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={`w-5 h-5 ${isActive ? "text-[#4254f5]" : "text-gray-400"}`} strokeWidth={isActive ? 2.5 : 2} />
                  <span className={`text-[14px] ${isActive ? "font-bold" : "font-medium"}`}>
                    {item.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
        
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-[12px] font-bold text-gray-500">AD</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-gray-900">Admin User</span>
              <span className="text-[11px] text-gray-500">Super Administrator</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#f4f5f7]">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-2">
            <ActiveIcon className="w-5 h-5 text-gray-500" />
            <h1 className="text-[18px] font-bold text-gray-800">{activeLabel}</h1>
            <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded text-[11px] font-bold ml-2">
              {MENU_ITEMS.find((m) => m.id === activeTab)?.collection}
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-9 pr-4 py-1.5 bg-gray-100 border-none rounded-lg text-[13px] outline-none focus:ring-2 focus:ring-[#4254f5]/50 w-64"
              />
            </div>
            <button className="relative p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors">
              <AlertTriangle className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
            </button>
          </div>
        </header>

        {/* Dynamic View Area */}
        <main className="flex-1 overflow-auto p-8 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="max-w-6xl mx-auto h-full"
            >
              {activeTab === "dashboard" && <DashboardView />}
              {activeTab === "users" && <UsersView />}
              {activeTab === "subscriptions" && <SubscriptionsView />}
              {activeTab === "reports" && <ReportsView />}
              {activeTab === "ai_models" && <AiModelsView />}
              {activeTab === "anomalies" && <AnomaliesView />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

function DashboardView() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "DAU (일간 활성 사용자)", val: "12,402", diff: "+12%" },
          { label: "MAU (월간 활성 사용자)", val: "142,390", diff: "+5.4%" },
          { label: "총 처리 건수", val: "849,203", diff: "+24%" },
          { label: "에러 발생율", val: "0.04%", diff: "-1.2%" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-[13px] font-semibold text-gray-500 mb-1">{stat.label}</p>
            <div className="flex items-end gap-2">
              <span className="text-[24px] font-black text-gray-900 leading-none">{stat.val}</span>
              <span className={`text-[12px] font-bold ${stat.diff.startsWith('+') ? 'text-green-500' : 'text-blue-500'}`}>
                {stat.diff}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-3 gap-6 h-80">
        <div className="col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col">
          <h3 className="text-[15px] font-bold text-gray-800 mb-4">DAU / MAU 트렌드 차트</h3>
          <div className="flex-1 bg-gray-50 rounded-lg flex items-center justify-center border border-dashed border-gray-200">
            <Activity className="w-8 h-8 text-gray-300 mb-2" />
            <span className="text-gray-400 text-[13px] font-medium ml-2">차트 영역 (adminStats/&#123;date&#125;)</span>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col">
          <h3 className="text-[15px] font-bold text-gray-800 mb-4">플랜 분포</h3>
          <div className="flex-1 bg-gray-50 rounded-lg flex items-center justify-center border border-dashed border-gray-200">
            <span className="text-gray-400 text-[13px] font-medium">도넛 차트 영역</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function UsersView() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col h-full">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50 rounded-t-xl">
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-[13px] font-bold text-gray-600 hover:bg-gray-50">
            <Filter className="w-4 h-4" /> 필터
          </button>
        </div>
        <span className="text-[13px] text-gray-500 font-medium">총 142,390 명</span>
      </div>
      
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-[12px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">
              <th className="p-4 py-3">UID</th>
              <th className="p-4 py-3">이메일</th>
              <th className="p-4 py-3">가입일</th>
              <th className="p-4 py-3">플랜</th>
              <th className="p-4 py-3">상태</th>
              <th className="p-4 py-3 text-right">관리</th>
            </tr>
          </thead>
          <tbody className="text-[13px]">
            {[1, 2, 3, 4, 5, 6, 7].map((row) => (
              <tr key={row} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="p-4 text-gray-500 font-mono">user_x8f{row}3k...</td>
                <td className="p-4 font-medium text-gray-900">test{row}@example.com</td>
                <td className="p-4 text-gray-500">2025-10-1{row}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-[11px] font-bold ${row % 3 === 0 ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600'}`}>
                    {row % 3 === 0 ? 'Premium' : 'Basic'}
                  </span>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-[11px] font-bold flex items-center w-fit gap-1 ${row === 4 ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${row === 4 ? 'bg-red-500' : 'bg-green-500'}`} />
                    {row === 4 ? '비활성' : '활성'}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="p-1 hover:bg-gray-200 rounded text-gray-400 transition-colors">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SubscriptionsView() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col h-full">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50 rounded-t-xl">
        <h3 className="font-bold text-[15px] text-gray-800">구독 결제 내역</h3>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-[#4254f5] text-white rounded-md text-[13px] font-bold hover:bg-[#3244d5] transition-colors shadow-sm">
          <Download className="w-4 h-4" /> CSV 내보내기
        </button>
      </div>
      
      <div className="flex-1 overflow-auto p-4">
        <div className="border border-dashed border-gray-200 rounded-xl h-full flex flex-col items-center justify-center text-gray-400">
          <CreditCard className="w-10 h-10 mb-3 opacity-50" />
          <p className="font-medium text-[14px]">구독 목록 및 결제 이력 리스트 (강제 해지 기능 포함)</p>
          <p className="text-[12px] mt-1">Firestore: subscriptions</p>
        </div>
      </div>
    </div>
  );
}

function ReportsView() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col h-full p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-[18px] text-gray-800">통계 리포트</h3>
        <div className="flex gap-2">
          <select className="bg-gray-50 border border-gray-200 text-sm rounded-lg px-3 py-1.5 font-medium outline-none">
            <option>최근 7일</option>
            <option>최근 30일</option>
            <option>올해 전체</option>
          </select>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 border border-gray-200 rounded-md text-[13px] font-bold hover:bg-gray-200 transition-colors">
            <Download className="w-4 h-4" /> CSV 내보내기
          </button>
        </div>
      </div>
      <div className="flex-1 border border-dashed border-gray-200 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
        <p className="font-medium">기간별 상세 리포트 및 그래프 렌더링 영역</p>
      </div>
    </div>
  );
}

function AiModelsView() {
  return (
    <div className="grid grid-cols-2 gap-6 h-full">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h3 className="font-bold text-[18px] text-gray-800 mb-2">배포 버전 조회</h3>
        <p className="text-[13px] text-gray-500 mb-6">현재 프로덕션에 적용된 AI 모델 (modelVersions)</p>
        
        <div className="space-y-4">
          <div className="p-4 border border-green-200 bg-green-50 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-green-500 text-white text-[10px] font-bold rounded-bl-lg">LIVE</div>
            <h4 className="font-black text-[16px] text-green-900 mb-1">v2.1.0-stable</h4>
            <p className="text-[12px] text-green-700 mb-3">배포일: 2025. 11. 10 | 성능 지표: FID 개선 +14%</p>
            <p className="text-[13px] text-gray-800 font-medium">안면 인식 정확도 및 보호 모자이크 속도 최적화 버전.</p>
          </div>
          
          <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl">
            <h4 className="font-bold text-[15px] text-gray-700 mb-1">v2.0.5-legacy</h4>
            <p className="text-[12px] text-gray-500">배포일: 2025. 09. 21 | 롤백 대기용</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col">
        <h3 className="font-bold text-[16px] text-gray-800 mb-4">업데이트 공지 발송</h3>
        <input placeholder="버전 명 (예: v2.2.0)" className="mb-3 p-3 border border-gray-200 rounded-lg text-[13px] outline-none focus:border-[#4254f5]" />
        <textarea 
          placeholder="공지 내용을 입력하세요..." 
          className="flex-1 mb-3 p-3 border border-gray-200 rounded-lg text-[13px] outline-none focus:border-[#4254f5] resize-none"
        ></textarea>
        <button className="w-full py-3 bg-[#18181b] text-white rounded-lg font-bold text-[14px]">
          사용자에게 공지 배포
        </button>
      </div>
    </div>
  );
}

function AnomaliesView() {
  return (
    <div className="bg-white rounded-xl border border-red-200 shadow-sm flex flex-col h-full overflow-hidden">
      <div className="bg-red-50 p-5 border-b border-red-100 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-[16px] text-red-900 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            이상 로그 모니터링
          </h3>
          <p className="text-[12px] text-red-700 mt-1">비정상 패턴 탐지 및 의심 계정 제재 (protectionLogs)</p>
        </div>
        <div className="px-3 py-1.5 bg-white border border-red-200 rounded-md text-red-600 text-[13px] font-bold shadow-sm">
          탐지된 위협: 3건
        </div>
      </div>
      
      <div className="flex-1 p-5 overflow-auto">
        <div className="space-y-3">
          {[1, 2, 3].map((row) => (
            <div key={row} className="p-4 border border-gray-200 rounded-xl flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 bg-red-100 text-red-700 text-[10px] font-bold rounded">어뷰징 의심</span>
                  <span className="font-mono text-[13px] font-bold text-gray-800">user_z9x{row}...</span>
                  <span className="text-[12px] text-gray-400">10분 전</span>
                </div>
                <p className="text-[13px] text-gray-600">짧은 시간 내 대량의 사진 처리 요청 (API Rate Limit 초과)</p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 rounded text-[12px] font-bold hover:bg-gray-100">로그 확인</button>
                <button className="px-3 py-1.5 bg-red-600 text-white rounded text-[12px] font-bold hover:bg-red-700 shadow-sm">계정 정지</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}