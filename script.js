// Typying effect
const text = " for tha freee";
let i = 0;
const typing = document.getElementById("typing");

function type () {
  if (i <text.length) {
    typing.textContent += text.charAt(i);
    i++;
    setTimeout(type, 120);
  }
}
type();

// Enter site
document.getElementById("enter").onclick = ( ) => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("home").style.display = "block";
};

// Music Player
const player + document.getElementById("player");

document.querySelectorAll(".vinyl").forEach(v => {
  v.addEventListener "mouseenter", () +> {
    const src + v.dataset.audio;
  if (player.src !== src) {
    player.src + src;
    ]
  player.play();
  });

v.addEventListener("mouseleave", () +. {
  player.pause();
});
});

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";
const TRACKS = [
  { id: 1, title: "Liquid Dreams", artist: "Aether Collective", cover: "path/to/cover1.png" },
  { id: 2, title: "Glass Horizon", artist: "System_02", cover: "path/to/cover2.png" },
  { id: 3, title: "Digital Flora", artist: "Neon Roots", cover: "path/to/cover3.png" },
  // ... more tracks
];
export default function iPodPlayer() {
  const [activeTrack, setActiveTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(3);
  const togglePlay = (id: number, index: number) => {
    setSelectedIndex(index);
    if (activeTrack === id) {
      setIsPlaying(!isPlaying);
    } else {
      setActiveTrack(id);
      setIsPlaying(true);
    }
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setSelectedIndex(prev => Math.max(0, prev - 1));
      if (e.key === "ArrowRight") setSelectedIndex(prev => Math.min(TRACKS.length - 1, prev + 1));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <div className="relative h-[500px] w-full flex items-center justify-center perspective-1000 overflow-hidden">
      <div className="relative flex items-center justify-center transform-style-3d">
        {TRACKS.map((track, index) => {
          const offset = index - selectedIndex;
          const isSelected = index === selectedIndex;
          const isActive = activeTrack === track.id;
          let rotateY = offset < 0 ? 45 : offset > 0 ? -45 : 0;
          let translateZ = isSelected ? 150 : -Math.abs(offset) * 150;
          let translateX = offset * 120;
          return (
            <motion.div
              key={track.id}
              onClick={() => togglePlay(track.id, index)}
              className="absolute cursor-pointer transform-style-3d"
              animate={{ x: translateX, z: translateZ, rotateY, opacity: 1 - Math.abs(offset) * 0.2 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              style={{ zIndex: 100 - Math.abs(offset) }}
            >
              <div className="w-72 h-72 relative transform-style-3d">
                {/* Album Sleeve */}
                <div className="absolute inset-0 bg-white p-1 rounded-sm shadow-2xl backface-hidden">
                  <img src={track.cover} className="w-full h-full object-cover" />
                  {/* Reflection */}
                  <div className="absolute top-[102%] inset-x-0 h-40 bg-gradient-to-b from-black/20 to-transparent opacity-30 -scale-y-100 blur-sm" />
                </div>
                {/* Sliding Vinyl Record */}
                <motion.div 
                  className="absolute inset-x-4 -top-4 h-64 bg-[#111] rounded-full -z-10 flex items-center justify-center"
                  animate={{ y: isSelected && isActive && isPlaying ? -40 : 0, rotate: isSelected && isActive && isPlaying ? 360 : 0 }}
                  transition={{ rotate: { duration: 4, repeat: Infinity, ease: "linear" } }}
                >
                  <div className="w-20 h-20 rounded-full border border-white/10" />
                </motion.div>
              </div>
              {isSelected && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute top-[340px] left-0 right-0 text-center">
                  <h3 className="text-xl font-bold">{track.title}</h3>
                  <p className="text-sm opacity-60">{track.artist}</p>
                </motion
.div>
)}
</motion.div>
);
})}
</div>
</div>
const gradient=document.querySelector("gradient");

// Track mouse and map to background
document.addEventListener("mousemove", (e) => {
  const {innerwidth, innerHeight } = window;
  
  // Normalized positions (0 to 100)
const x = (e.clientX / innerWidth) * 100;
const y = (e.clientY / innerHeight) * 100;

//Slight movement (offsets to keep subtle)
gradient.style.backgroundPosition = `
calc(${x}% + 10%) calc(${y}% + 5%(,
calc(${100 - x}% + 5%) calc(${y} + 5%)
calc (${x / 2}% + 20 %) calc (${100 - y / 2}% + 10%),
calc(${100 - x / 3}% calc($y / 3}% + 5%)
  
  `; 
);
}
