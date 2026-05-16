"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.closest("a, button, [role='button']") !== null
      );
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      animate={{ x: pos.x - 10, y: pos.y - 10 }}
      transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.3 }}
    >
      <motion.div
        className="w-5 h-5 border border-ink/60 rounded-full"
        animate={{ scale: isHovering ? 1.8 : 1, borderColor: isHovering ? "#B18093" : "#1a1416" }}
        transition={{ duration: 0.15 }}
      />
    </motion.div>
  );
}
