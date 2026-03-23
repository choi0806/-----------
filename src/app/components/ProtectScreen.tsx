import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  Shield,
  ShieldCheck,
  Check,
  Sparkles,
  Crown,
  Download,
  Share2,
  Home,
  ImagePlus,
  X,
} from "lucide-react";
import { useNavigate } from "react-router";
import { Switch } from "./ui/switch";
import { Slider } from "./ui/slider";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Flow: select photos → choose plan → apply filter → export

const allPhotos = [
  { id: 1, url: "https://images.unsplash.com/photo-1565124608772-6906e85401fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBvcnRyYWl0JTIwd29tYW4lMjBmYXNoaW9ufGVufDF8fHx8MTc3Mzc1ODUwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", bg: "#FEF3C7" },
  { id: 2, url: "https://images.unsplash.com/photo-1732494569693-937db5acbd14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHN0cmVldHdlYXIlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzM3NTg1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", bg: "#DBEAFE" },
  { id: 3, url: "https://images.unsplash.com/photo-1662695089339-a2c24231a3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc2VsZmllJTIwYnJpZ2h0JTIwY2hlZXJmdWx8ZW58MXx8fHwxNzczNzU4NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", bg: "#FCE7F3" },
  { id: 4, url: "https://images.unsplash.com/photo-1764698192198-4cfb7188c6d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwY29sb3JmdWwlMjBiYWNrZ3JvdW5kJTIwZmFzaGlvbiUyMGVkaXRvcmlhbHxlbnwxfHx8fDE3NzM3NTg1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", bg: "#EDE9FE" },
  { id: 5, url: "https://images.unsplash.com/photo-1629382346161-fbdcaa2e3f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjdWxlbnQlMjBwbGFudCUyMG1pbmltYWwlMjBwYXN0ZWx8ZW58MXx8fHwxNzczNzU4NTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", bg: "#D1FAE5" },
  { id: 6, url: "https://images.unsplash.com/photo-1687988809201-ea68da0233ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3R0b24lMjBjYW5keSUyMHBpbmslMjBhZXN0aGV0aWMlMjBmb29kfGVufDF8fHx8MTc3Mzc1ODUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", bg: "#FDE6D5" },
  { id: 7, url: "https://images.unsplash.com/photo-1521202850558-0110494d0457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBnZW9tZXRyaWMlMjBhcmNoaXRlY3R1cmUlMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzM3NTg1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", bg: "#FED7AA" },
  { id: 8, url: "https://images.unsplash.com/photo-1652553276399-7a97a855f38d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIweWVsbG93JTIwYWJzdHJhY3QlMjBvYmplY3QlMjBtaW5pbWFsfGVufDF8fHx8MTc3Mzc1ODUwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", bg: "#DBEAFE" },
  { id: 9, url: "https://images.unsplash.com/photo-1773608940070-b44b0ded5d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMGVxdWlwbWVudCUyMGNvbG9yZnVsfGVufDF8fHx8MTc3Mzc1ODUxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", bg: "#E0E7FF" },
];

type Step = "select" | "plan" | "processing" | "export";

export function ProtectScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("select");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<"basic" | "premium">("basic");
  const [noiseIntensity, setNoiseIntensity] = useState([50]);
  const [progress, setProgress] = useState(0);
  const [advancedOptions, setAdvancedOptions] = useState({ removeExif: true, addWatermark: false, strongNoise: false });
  const [showShareSheet, setShowShareSheet] = useState(false);

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const startFilter = () => {
    setStep("processing");
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setStep("export"), 400);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
  };

  return (
    <div className="size-full flex flex-col bg-background relative overflow-hidden">
      <AnimatePresence mode="wait">
        {/* STEP 1: 사진 불러오기 (Photo Gallery Selection) */}
        {step === "select" && (
          <motion.div
            key="select"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -40 }}
            className="size-full flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#f8f9fa] flex items-center justify-between px-5 pt-6 pb-4">
              <button
                onClick={() => navigate(-1)}
                className="w-10 h-10 rounded-xl bg-[#f8f9fa] flex items-center justify-center"
              >
                <ArrowLeft className="w-5 h-5 text-foreground" />
              </button>
              <h2 className="text-foreground tracking-tight">사진 불러오기</h2>
              <div className="w-10" />
            </div>

            {/* Photo Grid */}
            <div className="flex-1 overflow-y-auto px-3 pt-2 pb-28 scrollbar-hide">
              <div className="grid grid-cols-3 gap-2">
                {allPhotos.map((photo) => {
                  const isSelected = selectedIds.includes(photo.id);
                  return (
                    <button
                      key={photo.id}
                      onClick={() => toggleSelect(photo.id)}
                      className="relative aspect-square rounded-2xl overflow-hidden active:scale-95 transition-transform"
                      style={{ backgroundColor: photo.bg }}
                    >
                      <ImageWithFallback
                        src={photo.url}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                      {/* Selection overlay */}
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 bg-[#7C6CF0]/30 flex items-center justify-center"
                        >
                          <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#7C6CF0] flex items-center justify-center shadow-md">
                            <Check className="w-3.5 h-3.5 text-white" />
                          </div>
                        </motion.div>
                      )}
                      {!isSelected && (
                        <div className="absolute top-2 right-2 w-6 h-6 rounded-full border-2 border-white/80 bg-black/10" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom bar */}
            {selectedIds.length > 0 && (
              <motion.div
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                className="absolute bottom-6 left-5 right-5"
              >
                <button
                  onClick={() => setStep("plan")}
                  className="w-full py-4 rounded-2xl bg-[#7C6CF0] text-white flex items-center justify-center gap-2 shadow-xl shadow-[#7C6CF0]/30 active:scale-[0.98] transition-transform"
                >
                  <ImagePlus className="w-5 h-5" />
                  {selectedIds.length}장 선택 · 보호 설정
                </button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* STEP 2: 플랜 선택 (Basic / Premium) */}
        {step === "plan" && (
          <motion.div
            key="plan"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            className="size-full flex flex-col bg-[#fdfdfd]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-10 pb-4 bg-[#fdfdfd] z-10 relative">
              <button onClick={() => setStep("select")} className="text-black active:opacity-50">
                <ArrowLeft className="w-6 h-6" strokeWidth={2.5} />
              </button>
              <h2 className="text-[18px] font-bold text-black tracking-tight absolute left-1/2 -translate-x-1/2">보호 설정</h2>
              <div className="w-6" />
            </div>

            <div className="flex-1 overflow-y-auto px-5 pb-36 scrollbar-hide pt-2">
              
              {/* Top Segmented Tabs */}
              <div className="flex bg-[#f2f3f5] p-1.5 rounded-[18px] mb-8 relative">
                <button
                  onClick={() => setSelectedPlan("basic")}
                  className={`flex-1 py-3 text-[15px] font-bold rounded-[14px] transition-all duration-300 z-10 ${selectedPlan === 'basic' ? 'bg-white text-black shadow-[0_2px_10px_rgba(0,0,0,0.06)]' : 'text-[#8b94a0]'}`}
                >
                  Basic
                </button>
                <button
                  onClick={() => setSelectedPlan("premium")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-[15px] font-bold rounded-[14px] transition-all duration-300 z-10 ${selectedPlan === 'premium' ? 'bg-[#18181b] text-white shadow-xl' : 'text-[#8b94a0]'}`}
                >
                  <Crown className={`w-[18px] h-[18px] ${selectedPlan === 'premium' ? 'text-[#f59e0b]' : 'text-[#8b94a0]'}`} strokeWidth={2.5} />
                  Premium
                </button>
              </div>

              {/* Photo Preview Section */}
              <div className="flex justify-between items-end mb-3 px-1">
                 <h3 className="text-[17px] font-bold text-gray-900 tracking-tight">강도 미리보기</h3>
                 <span className="text-[13px] text-gray-400 font-bold bg-gray-100 px-2 py-0.5 rounded-md">{selectedIds.length}장 선택됨</span>
              </div>
              
              <div className="mb-8 relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-gray-200 border-2 border-gray-100 shadow-sm transition-all duration-300">
                {selectedIds.length > 0 && (
                   <ImageWithFallback 
                      src={allPhotos.find((x) => x.id === selectedIds[0])?.url || ""} 
                      alt="" 
                      className="w-full h-full object-cover" 
                   />
                )}
                
                {/* Visual Noise Overlay matching intensity */}
                {selectedPlan === 'premium' && (
                  <div 
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                    style={{
                       backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                       opacity: (noiseIntensity[0] / 100),
                       mixBlendMode: 'overlay'
                    }}
                  />
                )}
                
                {selectedPlan === 'premium' && (
                   <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/10">
                     <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" /> 
                     <span className="text-white text-[12px] font-bold tracking-tight px-0.5">강도 {noiseIntensity[0]}% 적용 중</span>
                   </div>
                )}
              </div>

              <div className="h-[1px] w-full bg-gray-100 mb-6"></div>

              {/* Premium Settings Container with Grayscale Effect */}
              <div className="mb-3 px-1">
                <h3 className="text-[17px] font-bold text-gray-900 tracking-tight flex items-center gap-1.5">
                  세부 보호 옵션 <Crown className="w-4 h-4 text-[#f59e0b]" />
                </h3>
              </div>
              
              <div className={`transition-all duration-500 relative bg-white border border-gray-100 p-5 rounded-[24px] mb-8 shadow-sm ${selectedPlan === 'basic' ? 'grayscale opacity-[0.25] pointer-events-none blur-[0.5px]' : ''}`}>
                 {selectedPlan === 'basic' && (
                   <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                     <div className="bg-black/85 backdrop-blur-sm text-white px-5 py-3 rounded-full text-[14px] font-bold flex items-center gap-2 shadow-2xl">
                       <LockIcon /> Premium 전용 설정
                     </div>
                   </div>
                 )}

                 {/* Intensity Slider */}
                 <div className="mb-6">
                   <div className="flex justify-between items-center mb-5">
                     <span className="font-bold text-[15px] text-gray-800">보호 필터 강도</span>
                     <span className="text-[16px] font-black text-black">{noiseIntensity[0]}%</span>
                   </div>
                   <Slider 
                     value={noiseIntensity} 
                     onValueChange={setNoiseIntensity} 
                     max={100} 
                     step={1} 
                     className="w-full cursor-pointer"
                   />
                   <div className="flex justify-between mt-3 px-1">
                     <span className="text-gray-400 text-[12px] font-bold">자연스러움</span>
                     <span className="text-gray-400 text-[12px] font-bold">강력 보호</span>
                   </div>
                 </div>
                 
                 <div className="w-full h-[1px] bg-gray-100 my-5" />

                 <div className="flex items-center justify-between">
                   <div>
                     <h4 className="text-[15px] font-bold text-gray-900">비가시성 워터마크</h4>
                     <p className="text-[13px] font-medium text-gray-500 mt-1">눈에 보이지 않는 저작권 서명 추가</p>
                   </div>
                   <Switch 
                     checked={advancedOptions.addWatermark} 
                     onCheckedChange={(val) => setAdvancedOptions({...advancedOptions, addWatermark: val})} 
                     className="data-[state=checked]:bg-black"
                   />
                 </div>
              </div>

              {/* Basic Settings Container */}
              <div className="mb-3 px-1">
                <h3 className="text-[17px] font-bold text-gray-900 tracking-tight">공통 설정</h3>
              </div>
              <div className="bg-white border border-gray-100 p-5 rounded-[24px] shadow-sm mb-4">
                 <div className="flex items-center justify-between">
                   <div>
                     <h4 className="text-[15px] font-bold text-gray-900">메타데이터(EXIF) 삭제</h4>
                     <p className="text-[13px] font-medium text-gray-500 mt-1">촬영 위치, 시간 등 민감 정보 차단</p>
                   </div>
                   <Switch 
                     checked={advancedOptions.removeExif} 
                     onCheckedChange={(val) => setAdvancedOptions({...advancedOptions, removeExif: val})} 
                     className="data-[state=checked]:bg-black"
                   />
                 </div>
              </div>
            </div>

            {/* Bottom Button Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#fdfdfd] via-[#fdfdfd] to-transparent pt-12 pb-6 px-5">
               <button
                onClick={startFilter}
                className="w-full py-4.5 rounded-[20px] text-white flex items-center justify-center gap-2 font-bold text-[17px] active:scale-[0.98] transition-all bg-[#1a1a1a] shadow-lg shadow-black/15 h-[56px]"
              >
                {selectedPlan === "basic" ? "Basic 필터로 보호하기" : "Premium 옵션 적용하기"}
              </button>
            </div>
          </motion.div>
        )}
        
        {/* STEP 3: 필터 적용 중 (Processing) */}
        {step === "processing" && (
          <motion.div
            key="processing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="size-full flex flex-col items-center justify-center px-8 bg-background"
          >
            {/* Circular progress */}
            <div className="relative w-40 h-40 mb-8">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                <circle cx="80" cy="80" r="70" fill="none" stroke="#EDE9FE" strokeWidth="6" />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="#7C6CF0"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={`${progress * 4.4} 440`}
                  className="transition-all duration-100"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-foreground" style={{ fontSize: "36px" }}>{progress}%</span>
              </div>
            </div>

            <h2 className="text-foreground mb-2">
              {selectedPlan === "basic" ? "Basic" : "Premium"} 필터 적용 중
            </h2>
            <p className="text-muted-foreground text-center" style={{ fontSize: "14px", lineHeight: 1.6 }}>
              {selectedIds.length}장의 사진에 AI 방어 노이즈를 적용하고 있습니다
            </p>

            <div className="mt-10 w-full space-y-3">
              {[
                { label: "얼굴 영역 감지", threshold: 20 },
                { label: "노이즈 패턴 생성", threshold: 45 },
                { label: "품질 최적화", threshold: 70 },
                { label: "보호 완료", threshold: 95 },
              ].map((item) => {
                const done = progress > item.threshold;
                return (
                  <div key={item.label} className="flex items-center gap-3 px-2">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                        done ? "bg-[#10B981]" : "bg-muted"
                      }`}
                    >
                      {done && <Check className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <span
                      className={`transition-colors ${done ? "text-foreground" : "text-muted-foreground"}`}
                      style={{ fontSize: "14px" }}
                    >
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* STEP 4: 사진 내보내기 (Export - Save / Share) */}
        {step === "export" && (
          <motion.div
            key="export"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="size-full flex flex-col bg-white relative"
          >
            {/* Header */}
            <div className="flex items-center justify-end px-5 pt-12 pb-2">
              <button
                onClick={() => navigate("/")}
                className="w-9 h-9 flex items-center justify-center active:opacity-50"
              >
                <X className="w-7 h-7 text-black" strokeWidth={2.5} />
              </button>
            </div>

            {/* Title Area */}
            <div className="px-6 pt-2 pb-6">
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[26px] font-black tracking-[-0.04em] text-black leading-[1.35] mb-3"
              >
                축하합니다.<br />
                보호가 완료됐어요. 👏
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[15px] font-medium text-[#8b94a0] leading-relaxed tracking-tight"
              >
                안전하게 노이즈 처리가 완료되었습니다.<br />
                이제 안심하고 사진을 공유할 수 있어요.
              </motion.p>
            </div>

            {/* Center Animation Area - Matches the reference image style */}
            <div className="flex-1 flex items-center justify-center relative w-full overflow-hidden">
              
              {/* Phone Shape */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative w-[130px] h-[270px] bg-[#4254f5] rounded-[24px] shadow-xl flex items-center justify-center z-10 border-[3px] border-[#e2e8f0]"
              >
                {/* Phone screen notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/40 rounded-full" />
                
                {/* Logo inside phone */}
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                   <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M10 20C10 14.4772 14.4772 10 20 10V14C16.6863 14 14 16.6863 14 20H10Z" fill="#4254f5"/>
                     <path d="M20 10C25.5228 10 30 14.4772 30 20H26C26 16.6863 23.3137 14 20 14V10Z" fill="#4254f5"/>
                     <path d="M10 20C10 25.5228 14.4772 30 20 30V26C16.6863 26 14 23.3137 14 20H10Z" fill="#4254f5"/>
                     <circle cx="20" cy="20" r="4" fill="#4254f5"/>
                     <rect x="18" y="2" width="4" height="12" fill="#4254f5"/>
                   </svg>
                </div>
              </motion.div>

              {/* Floating Elements (similar to reference) */}
              
              {/* Right Floating Card */}
              <motion.div 
                animate={{ y: [0, -8, 0], rotate: [20, 20, 20] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[12%] bottom-[35%] w-[70px] h-[100px] bg-[#3b82f6] rounded-[10px] shadow-lg flex items-center justify-center z-0 border-[2px] border-[#e2e8f0]"
              >
                 <ImagePlus className="w-6 h-6 text-white" />
              </motion.div>

              {/* Left Floating Badge (Black Pill) */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: -15, y: [-4, 4, -4] }}
                transition={{ 
                  scale: { type: "spring", delay: 0.4 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
                className="absolute left-[8%] top-[50%] bg-black text-white px-4 py-2.5 rounded-[12px] font-black text-[13px] tracking-wide shadow-xl z-20"
              >
                PROTECTED
              </motion.div>

              {/* Stars & shapes */}
              <motion.div 
                animate={{ rotate: 180 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute left-[20%] top-[25%]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#4254f5"/>
                </svg>
              </motion.div>

              <motion.div 
                animate={{ rotate: -180, scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute right-[25%] top-[20%]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#e2e8f0"/>
                </svg>
              </motion.div>

              <motion.div 
                animate={{ rotate: 90 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute right-[20%] bottom-[20%]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#e2e8f0"/>
                </svg>
              </motion.div>
              
              <motion.div 
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute left-[25%] bottom-[30%]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#4254f5"/>
                </svg>
              </motion.div>
            </div>

            {/* Bottom Actions Container */}
            <div className="px-5 pb-10 pt-4 flex flex-col gap-3">
              <button 
                className="w-full py-4.5 rounded-[16px] bg-white border border-[#e2e8f0] text-black font-bold text-[17px] active:scale-[0.98] transition-all h-[56px] shadow-sm flex items-center justify-center"
              >
                갤러리에 저장
              </button>
              <button 
                onClick={() => setShowShareSheet(true)}
                className="w-full py-4.5 rounded-[16px] bg-black text-white font-bold text-[17px] active:scale-[0.98] transition-all h-[56px] shadow-lg shadow-black/10 flex items-center justify-center"
              >
                SNS 공유
              </button>
            </div>

            {/* SNS Share Sheet */}
            <AnimatePresence>
              {showShareSheet && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/30 z-40"
                    onClick={() => setShowShareSheet(false)}
                  />
                  <motion.div
                    initial={{ y: 300 }}
                    animate={{ y: 0 }}
                    exit={{ y: 300 }}
                    transition={{ type: "spring", damping: 25 }}
                    className="absolute bottom-0 left-0 right-0 bg-card rounded-t-3xl z-50 p-6 pb-10"
                  >
                    <div className="w-10 h-1 bg-muted rounded-full mx-auto mb-5" />
                    <h3 className="text-foreground text-center mb-5">공유하기</h3>
                    <div className="flex justify-center gap-6 mb-6">
                      {/* Instagram */}
                      <button className="flex flex-col items-center gap-2 active:scale-95 transition-transform">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center shadow-md">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                          </svg>
                        </div>
                        <span className="text-foreground" style={{ fontSize: "11px" }}>Instagram</span>
                      </button>

                      {/* TikTok */}
                      <button className="flex flex-col items-center gap-2 active:scale-95 transition-transform">
                        <div className="w-14 h-14 rounded-2xl bg-[#010101] flex items-center justify-center shadow-md">
                          <svg width="20" height="22" viewBox="0 0 20 22" fill="white">
                            <path d="M18.5 6.5a4.5 4.5 0 01-4.5-4.5h-3v13a3 3 0 11-2.12-2.87V9a6 6 0 105.12 5.94V9.6A7.47 7.47 0 0018.5 11V8a4.49 4.49 0 010-1.5z" />
                          </svg>
                        </div>
                        <span className="text-foreground" style={{ fontSize: "11px" }}>TikTok</span>
                      </button>

                      {/* Twitter/X */}
                      <button className="flex flex-col items-center gap-2 active:scale-95 transition-transform">
                        <div className="w-14 h-14 rounded-2xl bg-[#1DA1F2] flex items-center justify-center shadow-md">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </div>
                        <span className="text-foreground" style={{ fontSize: "11px" }}>X</span>
                      </button>

                      {/* More */}
                      <button className="flex flex-col items-center gap-2 active:scale-95 transition-transform">
                        <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                          <Share2 className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <span className="text-foreground" style={{ fontSize: "11px" }}>더보기</span>
                      </button>
                    </div>
                    <button
                      onClick={() => setShowShareSheet(false)}
                      className="w-full py-3 rounded-xl bg-background text-muted-foreground"
                    >
                      닫기
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);
