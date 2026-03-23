import { motion, AnimatePresence } from "motion/react";
import { Camera, Image, X } from "lucide-react";

interface PermissionModalProps {
  isOpen: boolean;
  onAllow: () => void;
  onDeny: () => void;
}

export function PermissionModal({ isOpen, onAllow, onDeny }: PermissionModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
            onClick={onDeny}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-sm bg-card rounded-3xl p-6 z-50 shadow-2xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="flex gap-3 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-[#EDE9FE] flex items-center justify-center">
                  <Image className="w-7 h-7 text-[#7C6CF0]" />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-[#DBEAFE] flex items-center justify-center">
                  <Camera className="w-7 h-7 text-[#3B82F6]" />
                </div>
              </div>
              <h3 className="text-foreground mb-2">권한 요청</h3>
              <p className="text-muted-foreground mb-6" style={{ fontSize: "14px", lineHeight: 1.6 }}>
                사진을 보호하기 위해 갤러리와 카메라 접근 권한이 필요합니다. 모든 처리는 기기 내부에서 이루어집니다.
              </p>
              <button
                onClick={onAllow}
                className="w-full py-3.5 rounded-2xl bg-[#7C6CF0] text-white mb-2 active:scale-[0.98] transition-transform"
              >
                허용하기
              </button>
              <button
                onClick={onDeny}
                className="w-full py-3 text-muted-foreground"
                style={{ fontSize: "14px" }}
              >
                나중에
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
