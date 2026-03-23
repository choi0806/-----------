import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ShieldCheck, SlidersHorizontal, Shield } from "lucide-react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const albums = [
  {
    id: "protected",
    name: "보호된 사진",
    region: "AI 방어 적용됨",
    count: 24,
    photos: [
      { id: 1, url: "https://images.unsplash.com/photo-1565124608772-6906e85401fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBvcnRyYWl0JTIwd29tYW4lMjBmYXNoaW9ufGVufDF8fHx8MTc3Mzc1ODUwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", bg: "#FEF3C7" },
      { id: 2, url: "https://images.unsplash.com/photo-1732494569693-937db5acbd14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHN0cmVldHdlYXIlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzM3NTg1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", bg: "#DBEAFE" },
    ],
    color: "#7C6CF0",
    bgColor: "#EDE9FE",
  },
  {
    id: "portraits",
    name: "인물 사진",
    region: "셀카 & 포트레이트",
    count: 18,
    photos: [
      { id: 3, url: "https://images.unsplash.com/photo-1662695089339-a2c24231a3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc2VsZmllJTIwYnJpZ2h0JTIwY2hlZXJmdWx8ZW58MXx8fHwxNzczNzU4NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", bg: "#FCE7F3" },
      { id: 4, url: "https://images.unsplash.com/photo-1764698192198-4cfb7188c6d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwY29sb3JmdWwlMjBiYWNrZ3JvdW5kJTIwZmFzaGlvbiUyMGVkaXRvcmlhbHxlbnwxfHx8fDE3NzM3NTg1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", bg: "#EDE9FE" },
    ],
    color: "#EC4899",
    bgColor: "#FCE7F3",
  },
  {
    id: "creative",
    name: "크리에이티브",
    region: "아트 & 디자인",
    count: 12,
    photos: [
      { id: 5, url: "https://images.unsplash.com/photo-1652553276399-7a97a855f38d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIweWVsbG93JTIwYWJzdHJhY3QlMjBvYmplY3QlMjBtaW5pbWFsfGVufDF8fHx8MTc3Mzc1ODUwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", bg: "#DBEAFE" },
      { id: 6, url: "https://images.unsplash.com/photo-1521202850558-0110494d0457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBnZW9tZXRyaWMlMjBhcmNoaXRlY3R1cmUlMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzM3NTg1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", bg: "#FED7AA" },
    ],
    color: "#3B82F6",
    bgColor: "#DBEAFE",
  },
  {
    id: "nature",
    name: "풍경 & 자연",
    region: "여행 사진",
    count: 8,
    photos: [
      { id: 7, url: "https://images.unsplash.com/photo-1629382346161-fbdcaa2e3f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjdWxlbnQlMjBwbGFudCUyMG1pbmltYWwlMjBwYXN0ZWx8ZW58MXx8fHwxNzczNzU4NTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", bg: "#D1FAE5" },
      { id: 8, url: "https://images.unsplash.com/photo-1575569155389-185cf2e79f29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjBibHVlJTIwdGV4dHVyZSUyMGNsb3NldXAlMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzM3NTg1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", bg: "#E0E7FF" },
    ],
    color: "#10B981",
    bgColor: "#D1FAE5",
  },
];

export function GalleryScreen() {
  const navigate = useNavigate();

  return (
    <div className="size-full flex flex-col bg-[#f8f9fa] overflow-y-auto pb-28 scrollbar-hide">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-6 pb-4 bg-[#f8f9fa]">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-xl bg-[#f8f9fa] flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h2 className="text-foreground tracking-tight">내 사진 앨범</h2>
        <button className="w-10 h-10 rounded-xl bg-[#f8f9fa] flex items-center justify-center">
          <SlidersHorizontal className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Albums Grid */}
      <div className="px-5 pt-2">
        <div className="grid grid-cols-2 gap-4">
          {albums.map((album, index) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="flex flex-col"
            >
              {/* Album cover */}
              <div
                className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm mb-2.5"
                style={{ backgroundColor: album.bgColor }}
              >
                <ImageWithFallback
                  src={album.photos[0].url}
                  alt={album.name}
                  className="w-full h-full object-cover"
                />
                {/* Count badge */}
                <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 bg-black/50 backdrop-blur-sm rounded-lg">
                  <span className="text-white" style={{ fontSize: "11px" }}>{album.count}</span>
                </div>
                {album.id === "protected" && (
                  <div className="absolute top-2.5 left-2.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-[#7C6CF0]" />
                  </div>
                )}
              </div>
              <h4 className="text-foreground" style={{ fontSize: "14px" }}>{album.name}</h4>
              <p className="text-muted-foreground" style={{ fontSize: "12px" }}>{album.region}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}