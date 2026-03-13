"use client";

import * as React from "react";
import { motion } from "framer-motion";

type GlowButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

export function GlowButton({
  className,
  children,
  ...props
}: GlowButtonProps) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  }

  const baseClasses =
    "relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-cyan-300/40 bg-slate-900/90 px-5 py-2.5 text-sm font-medium text-slate-50 shadow-lg shadow-black/60 transition-colors hover:border-cyan-200/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

  return (
    <button
      onMouseMove={handleMouseMove}
      className={`${baseClasses} ${className ?? ""}`}
      {...props}
    >
      <motion.span
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(120px circle at ${position.x}px ${position.y}px, rgba(34,211,238,0.55), transparent 60%)`,
        }}
      />
      <span className="pointer-events-none absolute inset-0 -z-20 bg-linear-to-r from-cyan-500/35 via-sky-500/0 to-cyan-400/35 opacity-70" />
      <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap">
        {children}
      </span>
    </button>
  );
}

