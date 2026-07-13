"use client";
import { useEffect } from "react";

/** Atualiza --sx/--sy dos elementos .spot conforme o mouse se move (delegação global). */
export default function FxProvider() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return; // sem spotlight no touch
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        document.querySelectorAll<HTMLElement>(".spot").forEach((el) => {
          const r = el.getBoundingClientRect();
          if (
            e.clientX >= r.left - 80 && e.clientX <= r.right + 80 &&
            e.clientY >= r.top - 80 && e.clientY <= r.bottom + 80
          ) {
            el.style.setProperty("--sx", `${e.clientX - r.left}px`);
            el.style.setProperty("--sy", `${e.clientY - r.top}px`);
          }
        });
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);
  return null;
}
