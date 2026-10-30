import React, { useEffect, useRef, useState, useCallback } from 'react';

interface Splatter {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  decay: number;
}

interface WaveRing {
  delay: number; // in ms
  speed: number; // in px/ms
  maxRadius: number;
  initialAlpha: number;
}

interface Tendril {
  angle: number;
  lengthMax: number;
  swirlSpeed: number;
  radius: number;
}

interface InkDrop {
  id: number;
  x: number;
  y: number;
  colorType: 'charcoal' | 'crimson';
  birth: number;
  duration: number; // in ms
  initialCoreRadius: number;
  finalCloudRadius: number;
  boundaryFactors: number[];
  tendrils: Tendril[];
  rings: WaveRing[];
  splatters: Splatter[];
  driftVx: number;
  driftVy: number;
}

export const InkWaterDropCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dropsRef = useRef<InkDrop[]>([]);
  const animFrameId = useRef<number | null>(null);
  const nextAmbientDropRef = useRef<number>(0);
  const lastMouseMoveRef = useRef<{ x: number; y: number; time: number }>({ x: 0, y: 0, time: 0 });
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [clickHintVisible, setClickHintVisible] = useState<boolean>(true);

  // Spawns a new ink water drop at (x, y)
  const spawnDrop = useCallback(
    (x: number, y: number, forcedType?: 'charcoal' | 'crimson') => {
      // 28% chance of crimson accent ink, 72% deep charcoal Sumi-e ink
      const colorType: 'charcoal' | 'crimson' =
        forcedType || (Math.random() < 0.28 ? 'crimson' : 'charcoal');

      const numPoints = 20;
      const boundaryFactors: number[] = [];
      for (let i = 0; i < numPoints; i++) {
        boundaryFactors.push(0.72 + Math.random() * 0.56);
      }

      // Organic tendril filaments curling through water
      const numTendrils = 5 + Math.floor(Math.random() * 4);
      const tendrils: Tendril[] = [];
      for (let i = 0; i < numTendrils; i++) {
        tendrils.push({
          angle: (i / numTendrils) * Math.PI * 2 + (Math.random() - 0.5) * 0.4,
          lengthMax: 35 + Math.random() * 55,
          swirlSpeed: (Math.random() - 0.5) * 0.0012,
          radius: 2.5 + Math.random() * 4.5,
        });
      }

      // Calm liquid surface ripples
      const rings: WaveRing[] = [
        { delay: 0, speed: 0.09, maxRadius: 210 + Math.random() * 70, initialAlpha: 0.38 },
        { delay: 200, speed: 0.08, maxRadius: 170 + Math.random() * 50, initialAlpha: 0.28 },
        { delay: 450, speed: 0.07, maxRadius: 130 + Math.random() * 40, initialAlpha: 0.20 },
        { delay: 750, speed: 0.06, maxRadius: 95 + Math.random() * 30, initialAlpha: 0.12 },
      ];

      // Subtle satellite micro-droplets
      const numSplatters = 4 + Math.floor(Math.random() * 5);
      const splatters: Splatter[] = [];
      for (let i = 0; i < numSplatters; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.7 + Math.random() * 2.2;
        splatters.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 1.0 + Math.random() * 1.8,
          alpha: 0.5 + Math.random() * 0.3,
          decay: 0.94 + Math.random() * 0.03,
        });
      }

      const drop: InkDrop = {
        id: Math.random(),
        x,
        y,
        colorType,
        birth: performance.now(),
        duration: 5400 + Math.random() * 1200, // 5.4s to 6.6s long majestic diffusion
        initialCoreRadius: 7 + Math.random() * 5,
        finalCloudRadius: 75 + Math.random() * 45,
        boundaryFactors,
        tendrils,
        rings,
        splatters,
        driftVx: (Math.random() - 0.5) * 0.01,
        driftVy: (Math.random() - 0.5) * 0.01 + 0.004,
      };

      dropsRef.current.push(drop);
      setClickHintVisible(false);
    },
    []
  );

  // Global user interaction
  useEffect(() => {
    const handlePointerDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('button[data-ink-control]')) {
        return;
      }
      spawnDrop(e.clientX, e.clientY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      const last = lastMouseMoveRef.current;
      const dx = e.clientX - last.x;
      const dy = e.clientY - last.y;
      const dist = Math.hypot(dx, dy);
      const dt = now - last.time;

      if (dist > 160 && dt > 140 && dt < 450 && Math.random() < 0.3) {
        spawnDrop(e.clientX, e.clientY);
        lastMouseMoveRef.current = { x: e.clientX, y: e.clientY, time: now };
      } else if (dist > 50) {
        lastMouseMoveRef.current = { x: e.clientX, y: e.clientY, time: now };
      }
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [spawnDrop]);

  // Main canvas animation and rendering loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Initial ambient drops on first load for immediate visual delight
    spawnDrop(width * 0.22, height * 0.26, 'charcoal');
    setTimeout(() => {
      spawnDrop(width * 0.80, height * 0.38, 'crimson');
    }, 500);
    setTimeout(() => {
      spawnDrop(width * 0.50, height * 0.70, 'charcoal');
    }, 1400);

    nextAmbientDropRef.current = performance.now() + 3800;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = mediaQuery.matches;
    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    const render = (now: number) => {
      if (!isPaused && !prefersReducedMotion) {
        if (now >= nextAmbientDropRef.current) {
          const rx = width * (0.12 + Math.random() * 0.76);
          const ry = height * (0.15 + Math.random() * 0.7);
          spawnDrop(rx, ry);
          nextAmbientDropRef.current = now + 3800 + Math.random() * 2400;
        }
      }

      ctx.clearRect(0, 0, width, height);

      const activeDrops: InkDrop[] = [];

      for (let i = 0; i < dropsRef.current.length; i++) {
        const drop = dropsRef.current[i];
        const age = now - drop.birth;

        if (age < 0) {
          activeDrops.push(drop);
          continue;
        }

        if (age < drop.duration) {
          activeDrops.push(drop);

          const progress = Math.max(0, Math.min(1, age / drop.duration));
          const curX = drop.x + drop.driftVx * age;
          const curY = drop.y + drop.driftVy * age;

          const isCrimson = drop.colorType === 'crimson';
          const rgb = isCrimson ? '232, 0, 0' : '26, 30, 36';
          const rgbRipple = isCrimson ? '220, 25, 25' : '45, 52, 62';

          // ==========================================
          // 1. CONCENTRIC WATER SURFACE RIPPLES
          // ==========================================
          for (let r = 0; r < drop.rings.length; r++) {
            const ring = drop.rings[r];
            const ringAge = age - ring.delay;

            if (ringAge > 0) {
              const ringRadius = ringAge * ring.speed;

              if (ringRadius < ring.maxRadius) {
                const ringProgress = Math.max(0, Math.min(1, ringRadius / ring.maxRadius));
                const alpha = ring.initialAlpha * Math.pow(1 - ringProgress, 1.5);

                if (alpha > 0.005) {
                  ctx.save();
                  ctx.beginPath();
                  const segments = 40;
                  const pts: { x: number; y: number }[] = [];

                  for (let s = 0; s < segments; s++) {
                    const theta = (s / segments) * Math.PI * 2;
                    const wobble =
                      Math.sin(theta * 5 + age * 0.0025) * 1.0 +
                      Math.cos(theta * 3 + age * 0.0018) * 0.6;
                    const rWob = Math.max(0.5, ringRadius + wobble);
                    pts.push({
                      x: curX + Math.cos(theta) * rWob,
                      y: curY + Math.sin(theta) * rWob,
                    });
                  }

                  // Smooth closed curve through points
                  if (pts.length > 2) {
                    ctx.moveTo((pts[0].x + pts[pts.length - 1].x) / 2, (pts[0].y + pts[pts.length - 1].y) / 2);
                    for (let p = 0; p < pts.length; p++) {
                      const next = pts[(p + 1) % pts.length];
                      const xc = (pts[p].x + next.x) / 2;
                      const yc = (pts[p].y + next.y) / 2;
                      ctx.quadraticCurveTo(pts[p].x, pts[p].y, xc, yc);
                    }
                  }
                  ctx.closePath();

                  ctx.lineWidth = 1.0 + ringProgress * 1.6;
                  ctx.strokeStyle = `rgba(${rgbRipple}, ${alpha.toFixed(3)})`;
                  ctx.stroke();

                  ctx.restore();
                }
              }
            }
          }

          // ==========================================
          // 2. INK DIFFUSION BLOOM (Sumi-e / Watercolor)
          // ==========================================
          const expansion = Math.pow(progress, 0.45);
          const currentRadius = Math.max(
            1,
            drop.initialCoreRadius + (drop.finalCloudRadius - drop.initialCoreRadius) * expansion
          );
          const pigmentAlpha =
            (isCrimson ? 0.32 : 0.26) * Math.pow(1 - progress, 0.75);

          if (pigmentAlpha > 0.005) {
            ctx.save();

            // Set soft edge blur for authentic watercolor dilution
            if (ctx.filter !== undefined) {
              ctx.filter = 'blur(3px)';
            }

            // 2A. Main Organic Feathered Ink Body
            const mainGrad = ctx.createRadialGradient(
              curX,
              curY,
              0,
              curX,
              curY,
              Math.max(1, currentRadius * 1.1)
            );
            mainGrad.addColorStop(0, `rgba(${rgb}, ${(pigmentAlpha * 1.2).toFixed(3)})`);
            mainGrad.addColorStop(0.35, `rgba(${rgb}, ${(pigmentAlpha * 0.7).toFixed(3)})`);
            mainGrad.addColorStop(0.7, `rgba(${rgb}, ${(pigmentAlpha * 0.25).toFixed(3)})`);
            mainGrad.addColorStop(1, `rgba(${rgb}, 0)`);

            const numPts = drop.boundaryFactors.length;
            const bPts: { x: number; y: number }[] = [];
            for (let p = 0; p < numPts; p++) {
              const angle = (p / numPts) * Math.PI * 2;
              const amp =
                drop.boundaryFactors[p] +
                Math.sin(angle * 4 + age * 0.001) * 0.06 +
                Math.cos(angle * 6 + age * 0.0015) * 0.05;
              const rDist = Math.max(0.5, currentRadius * amp);
              bPts.push({
                x: curX + Math.cos(angle) * rDist,
                y: curY + Math.sin(angle) * rDist,
              });
            }

            ctx.beginPath();
            if (bPts.length > 2) {
              ctx.moveTo((bPts[0].x + bPts[bPts.length - 1].x) / 2, (bPts[0].y + bPts[bPts.length - 1].y) / 2);
              for (let p = 0; p < bPts.length; p++) {
                const next = bPts[(p + 1) % bPts.length];
                const xc = (bPts[p].x + next.x) / 2;
                const yc = (bPts[p].y + next.y) / 2;
                ctx.quadraticCurveTo(bPts[p].x, bPts[p].y, xc, yc);
              }
            }
            ctx.closePath();
            ctx.fillStyle = mainGrad;
            ctx.fill();

            // 2B. Swirling Tendril Plumes
            for (let t = 0; t < drop.tendrils.length; t++) {
              const tendril = drop.tendrils[t];
              const tDist = tendril.lengthMax * expansion;
              const curAngle = tendril.angle + tendril.swirlSpeed * age;
              const tx = curX + Math.cos(curAngle) * tDist;
              const ty = curY + Math.sin(curAngle) * tDist;
              const tRadius = Math.max(0.5, tendril.radius * (1 - progress * 0.45));

              const tendrilGrad = ctx.createRadialGradient(tx, ty, 0, tx, ty, tRadius * 2);
              tendrilGrad.addColorStop(0, `rgba(${rgb}, ${(pigmentAlpha * 0.8).toFixed(3)})`);
              tendrilGrad.addColorStop(1, `rgba(${rgb}, 0)`);

              ctx.beginPath();
              ctx.arc(tx, ty, tRadius * 2, 0, Math.PI * 2);
              ctx.fillStyle = tendrilGrad;
              ctx.fill();
            }

            // Reset blur filter for clean core & splatters
            if (ctx.filter !== undefined) {
              ctx.filter = 'none';
            }

            // 2C. Dense Inner Nucleus
            const coreRadius = Math.max(0.5, drop.initialCoreRadius * (1 + expansion * 0.5));
            const coreGrad = ctx.createRadialGradient(curX, curY, 0, curX, curY, coreRadius);
            coreGrad.addColorStop(0, `rgba(${rgb}, ${(pigmentAlpha * 1.4).toFixed(3)})`);
            coreGrad.addColorStop(0.45, `rgba(${rgb}, ${(pigmentAlpha * 0.6).toFixed(3)})`);
            coreGrad.addColorStop(1, `rgba(${rgb}, 0)`);

            ctx.beginPath();
            ctx.arc(curX, curY, coreRadius, 0, Math.PI * 2);
            ctx.fillStyle = coreGrad;
            ctx.fill();

            // 2D. Splatter Micro-Droplets
            for (let s = 0; s < drop.splatters.length; s++) {
              const sp = drop.splatters[s];
              sp.x += sp.vx;
              sp.y += sp.vy;
              sp.vx *= sp.decay;
              sp.vy *= sp.decay;

              const spAlpha = sp.alpha * (1 - progress) * 0.6;
              if (spAlpha > 0.01) {
                ctx.beginPath();
                ctx.arc(sp.x, sp.y, Math.max(0.2, sp.radius * (1 - progress * 0.3)), 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${rgb}, ${spAlpha.toFixed(3)})`;
                ctx.fill();
              }
            }

            ctx.restore();
          }
        }
      }

      dropsRef.current = activeDrops;
      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      } else {
        animFrameId.current = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      window.removeEventListener('resize', resize);
      mediaQuery.removeEventListener('change', handleMotionChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPaused, spawnDrop]);

  return (
    <>
      {/* High-performance full-screen background canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      />

      {/* Discrete bottom corner interactive pill & hint */}
      <div className="fixed bottom-3 right-4 z-40 flex items-center gap-2 pointer-events-auto select-none opacity-85 hover:opacity-100 transition-opacity">
        {clickHintVisible && (
          <span className="hidden sm:inline-block text-[10px] font-mono tracking-wider text-neutral-400 bg-white/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-black/5 shadow-sm animate-pulse">
            ✦ Click anywhere for ink drops
          </span>
        )}

        <button
          data-ink-control="true"
          onClick={() => setIsPaused((prev) => !prev)}
          className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 hover:text-black bg-white/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-black/5 shadow-sm transition-colors"
          title={isPaused ? 'Resume ink animation' : 'Pause ink animation'}
          aria-label={isPaused ? 'Resume ink animation' : 'Pause ink animation'}
        >
          {isPaused ? '▶ Ink: Off' : '✦ Ink: Live'}
        </button>
      </div>
    </>
  );
};

export default InkWaterDropCanvas;
