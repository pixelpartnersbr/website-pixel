"use client";
import { useEffect, useRef, useState } from "react";

/** Loop de vídeo ambiente com fallback para imagem estática (poster).
 *  Respeita prefers-reduced-motion e conexões que bloqueiam autoplay. */
export default function AmbientVideo({
  src, poster, className = "",
}: { src: string; poster: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [canPlay, setCanPlay] = useState(true);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setCanPlay(false); return; }
    ref.current?.play().catch(() => setCanPlay(false));
  }, []);
  if (!canPlay) {
    return (
      <div aria-hidden className={`trails-drift absolute inset-0 bg-cover bg-bottom ${className}`}
        style={{ backgroundImage: `url(${poster})` }} />
    );
  }
  return (
    <video
      ref={ref}
      aria-hidden
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
      src={src}
      poster={poster}
      autoPlay muted loop playsInline preload="metadata"
    />
  );
}
