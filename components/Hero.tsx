"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const layers = [
  ["06", "Suporte", true],
  ["05", "Relacionamento", false],
  ["04", "Conversão", false],
  ["03", "Inteligência", false],
  ["02", "Segurança", false],
  ["01", "Infraestrutura", false],
] as const;

const proof = [
  ["0%", "de comissão sobre vendas"],
  ["1", "fornecedor para tudo"],
  ["+20", "módulos proprietários"],
];

const parent = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };
const child = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const rotZ = useTransform(sx, [-1, 1], [-45, -39]);
  const rotX = useTransform(sy, [-1, 1], [57, 53]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  }

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-24 pt-[150px]"
      style={{
        background:
          "radial-gradient(900px 500px at 85% 10%, rgba(10,76,130,.35), transparent 60%), radial-gradient(700px 420px at 0% 100%, rgba(5,58,102,.5), transparent 65%), #021627",
      }}
    >
      <div className="wrap grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div variants={parent} initial="hidden" animate="show">
          <motion.span variants={child} className="eyebrow">
            Plataforma proprietária · núcleo open-source
          </motion.span>
          <motion.h1
            variants={child}
            className="mb-6 font-display text-[clamp(34px,4.6vw,58px)] font-extrabold leading-[1.06] tracking-[-0.025em]"
          >
            Sua loja roda WooCommerce.
            <br />
            Sua operação roda <span className="text-amber">Pixel&nbsp;Commerce</span>.
          </motion.h1>
          <motion.p variants={child} className="mb-9 max-w-[520px] text-[17.5px] text-dim">
            A camada de segurança, inteligência e automação que a Pixel Partners construiu — e opera —
            em cima do núcleo de e-commerce mais usado do mundo. Sem colcha de retalhos. Sem lock-in.
          </motion.p>
          <motion.div variants={child} className="flex flex-wrap gap-3.5">
            <a href="#contato" className="btn-amber">Quero minha loja em Pixel Commerce</a>
            <a href="#numeros" className="btn-ghost">Ver os números</a>
          </motion.div>
          <motion.ul variants={child} className="mt-8 flex flex-wrap gap-7 border-t border-line pt-6">
            {proof.map(([n, l]) => (
              <li key={l} className="text-[13px] text-dim">
                <strong className="block font-display text-xl font-extrabold tracking-tight text-amber">{n}</strong>
                {l}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <div className="flex flex-col items-center" onMouseMove={onMove}>
          <div style={{ perspective: 1300 }}>
            <motion.div
              className="w-[320px] max-[420px]:scale-[.82]"
              style={{ rotateX: rotX, rotateZ: rotZ, transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              {layers.map(([num, name, top], i) => (
                <motion.button
                  key={num}
                  type="button"
                  onClick={() => document.querySelector("#plataforma")?.scrollIntoView({ behavior: "smooth" })}
                  className={`relative flex h-[78px] w-[320px] cursor-pointer items-center justify-between rounded-[14px] border px-5 shadow-[0_18px_40px_rgba(0,0,0,.35)] transition-[border-color,box-shadow] ${
                    top
                      ? "border-white/35 bg-gradient-to-br from-amber to-amber-deep"
                      : "border-white/15 bg-gradient-to-br from-navy-800 to-navy-900 hover:border-amber"
                  } ${i > 0 ? "mt-[-26px]" : ""}`}
                  whileHover={{ z: 30, transition: { duration: 0.25 } }}
                  style={{ zIndex: layers.length - i }}
                >
                  <span
                    className={`origin-left whitespace-nowrap font-display text-sm font-bold tracking-tight ${top ? "text-navy-950" : ""}`}
                    style={{ transform: "rotateZ(42deg) rotateX(-20deg)" }}
                  >
                    {name}
                  </span>
                  <span
                    className={`font-mono text-[11px] ${top ? "text-navy-950" : "text-amber"}`}
                    style={{ transform: "rotateZ(42deg) rotateX(-20deg)" }}
                  >
                    {num}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </div>
          <p className="mt-14 text-center font-mono text-[11.5px] tracking-[0.06em] text-dim">
            seis camadas · um único fornecedor · um único padrão de código
          </p>
        </div>
      </div>
    </section>
  );
}
