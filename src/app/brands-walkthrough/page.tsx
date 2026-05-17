"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useLenis } from "lenis/react";
import Navbar from "@/components/Navbar";
import { CASE_STUDIES } from "./case-studies";

// Drives video.currentTime toward a target value, BUT respects the browser's
// seek lifecycle. The naive approach (set currentTime every animation frame)
// floods the browser's seek queue — most seeks get dropped, and the video
// appears frozen on fast or reverse scroll. .mov files are especially bad
// because reverse seek requires decoding from the previous keyframe.
//
// This implementation:
//  - Stores the latest desired target in a ref (so we always know where we
//    want to be, even if many updates landed during a seek)
//  - Only fires a new seek when the video reports `seeked` AND the target
//    has moved since the last seek
//  - On scroll idle, schedules one final seek to make sure the video lands
//    on the exact requested frame
function useVideoScrub(
  videoRef: React.RefObject<HTMLVideoElement | null>,
  targetTime: number,
  isReady: boolean
) {
  const targetRef = useRef(targetTime);
  const seekingRef = useRef(false);
  targetRef.current = targetTime;

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !isReady) return;

    const trySeek = () => {
      if (seekingRef.current) return; // browser still working — wait
      if (!v.duration || Number.isNaN(v.duration)) return;
      const desired = Math.max(0, Math.min(targetRef.current, v.duration));
      if (Math.abs(v.currentTime - desired) < 0.03) return; // close enough
      seekingRef.current = true;
      v.currentTime = desired;
    };

    const onSeeking = () => {
      seekingRef.current = true;
    };
    const onSeeked = () => {
      seekingRef.current = false;
      // Target may have moved while we were seeking — immediately re-check.
      trySeek();
    };

    v.addEventListener("seeking", onSeeking);
    v.addEventListener("seeked", onSeeked);

    // Kick off the first seek
    trySeek();

    return () => {
      v.removeEventListener("seeking", onSeeking);
      v.removeEventListener("seeked", onSeeked);
    };
  }, [videoRef, isReady]);

  // Whenever the targetTime prop changes, attempt a seek (no-op if a seek is
  // already in flight; the seeked handler will pick up the latest target).
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !isReady) return;
    if (seekingRef.current) return;
    if (!v.duration || Number.isNaN(v.duration)) return;
    const desired = Math.max(0, Math.min(targetTime, v.duration));
    if (Math.abs(v.currentTime - desired) < 0.03) return;
    seekingRef.current = true;
    v.currentTime = desired;
  }, [targetTime, videoRef, isReady]);
}

type Scene = {
  brand: string;
  category: string;
  tagline: string;
  description: string;
  startSec: number;
  endSec: number;
  textSide: "left" | "right"; // where the EMPTY zone is in this room
  accent: string;             // brand primary color
  textColor: string;          // accent color tweaked for legibility on the wall
  font: string;               // CSS font-family string for the brand display
};

// Times in seconds inside arta-brands.mov (12 clips × 5s = 60s).
// textSide reflects the ACTUAL empty zone of each generated room image.
// Video timeline (12 clips × 5s = 60s):
//   0–5:   ARTA HQ → corridor          (Arta room visible at START)
//   5–10:  corridor → AYRSMELL         (room visible at END)
//   10–15: AYRSMELL → corridor         (room visible at START)
//   15–20: corridor → Bharat Yug       (room visible at END)
//   20–25: Bharat Yug → corridor       (room visible at START)
//   25–30: corridor → AYANALIFE        (room visible at END)
//   30–35: AYANALIFE → corridor        (room visible at START)
//   35–40: corridor → She Heals        (room visible at END)
//   40–45: She Heals → corridor        (room visible at START)
//   45–50: corridor → Bodhi Life       (room visible at END)
//   50–55: Bodhi Life → corridor       (room visible at START)
//   55–60: corridor → Kissomatcha      (room visible at END)
//
// Each brand text window = last ~3s of the "corridor→room" clip
// (when the room first comes into clear view) + first ~3s of the
// "room→corridor" clip (when we're still inside the room).
const SCENES: Scene[] = [
  {
    brand: "Arta",
    category: "The studio",
    tagline: "Where brands are born.",
    description:
      "Every brand you're about to meet was built inside one ecosystem — design, supply chain, growth, AI, all under one roof.",
    startSec: 0.0,
    endSec: 3.5,
    textSide: "left",
    accent: "#A66CFF",
    textColor: "#3F2275",
    font: "'Parkinsans', 'Inter', sans-serif",
  },
  {
    brand: "AYRSMELL",
    category: "Modern lifestyle fragrance",
    tagline: "Smell the moment.",
    description:
      "Modern oud-amber-musk for India's twenties. Daily-wearable, never traditional.",
    startSec: 8.0,
    endSec: 13.0,
    textSide: "right",
    accent: "#072621",
    textColor: "#072621",
    font: "'Cinzel', 'Playfair Display', serif",
  },
  {
    brand: "Bharat Yug",
    category: "Divine & spiritual jewellery",
    tagline: "Rooted in dharma, living modern.",
    description:
      "Premium devotional jewellery you can actually wear every day — rudraksha, ॐ, Shiv. ₹399 to ₹2,999.",
    startSec: 18.0,
    endSec: 23.0,
    textSide: "right",
    accent: "#C83E37",
    textColor: "#8C1F1B",
    font: "'Playfair Display', serif",
  },
  {
    brand: "AYANALIFE",
    category: "Faith-inspired jewellery",
    tagline: "Faith, made wearable.",
    description:
      "Minimal jewellery for the modern Muslim — premium, intentional, gifting-friendly. Never preachy.",
    startSec: 28.0,
    endSec: 33.0,
    textSide: "left",
    accent: "#0F2F2B",
    textColor: "#0F2F2B",
    font: "'Cormorant Garamond', serif",
  },
  {
    brand: "She Heals",
    category: "Women's hormonal wellness",
    tagline: "Science-backed. Quietly powerful.",
    description:
      "Science-backed hormonal wellness that fits the schedule a working woman already has. No drastic lifestyle changes.",
    startSec: 38.0,
    endSec: 43.0,
    textSide: "right",
    accent: "#A77868",
    textColor: "#6B3F33",
    font: "'Playfair Display', serif",
  },
  {
    brand: "Bodhi Life",
    category: "Senior living, reimagined",
    tagline: "Your new chapter awaits.",
    description:
      "Senior living for active over-60s — community first, wellness second, care third. Never institutional.",
    startSec: 48.0,
    endSec: 53.0,
    textSide: "left",
    accent: "#D88B47",
    textColor: "#1E683F",
    font: "'Noto Sans', sans-serif",
  },
  {
    brand: "Kissomatcha",
    category: "Gen-Z matcha",
    tagline: "Calm success, not burnout.",
    description:
      "Ceremonial-grade matcha for the iced-coffee generation. As easy to order as a coffee.",
    startSec: 58.0,
    endSec: 60.0,
    textSide: "right",
    accent: "#3A432F",
    textColor: "#3A432F",
    font: "'Poppins', sans-serif",
  },
];

const VIDEO_DURATION = 60;
const PIN_VIEWPORT_MULTIPLIER = 8;

export default function BrandsWalkthroughPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const videoTime = useTransform(scrollYProgress, [0, 1], [0, VIDEO_DURATION]);

  // Track latest target time and active scene for overlay rendering
  const [currentTime, setCurrentTime] = useState(0);
  useMotionValueEvent(videoTime, "change", (latest) => setCurrentTime(latest));

  // Wait until the browser has actually loaded the video metadata before scrubbing.
  // Without this, the first few setCurrentTime calls are silently ignored.
  const [isVideoReady, setIsVideoReady] = useState(false);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onReady = () => setIsVideoReady(true);
    if (v.readyState >= 1) {
      onReady();
    } else {
      v.addEventListener("loadedmetadata", onReady, { once: true });
    }
    v.pause();
    return () => v.removeEventListener("loadedmetadata", onReady);
  }, []);

  // rAF-driven scrub — guarantees forward AND reverse scroll always lands a seek
  useVideoScrub(videoRef, currentTime, isVideoReady);

  // Case-study modal state
  const [openCaseStudy, setOpenCaseStudy] = useState<string | null>(null);
  const activeCase = openCaseStudy ? CASE_STUDIES[openCaseStudy] : null;

  // Pause Lenis while the modal is open. Lenis intercepts wheel events
  // globally; without pausing it, the modal's own overflow:auto never gets
  // the wheel events (Lenis swallows them) and the page below is fought
  // by Lenis trying to scroll the document.
  const lenis = useLenis();
  useEffect(() => {
    if (!openCaseStudy || !lenis) return;
    lenis.stop();
    return () => {
      lenis.start();
    };
  }, [openCaseStudy, lenis]);

  // Close modal on Escape
  useEffect(() => {
    if (!openCaseStudy) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenCaseStudy(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openCaseStudy]);

  return (
    <main
      className="relative"
      style={{
        backgroundImage: "url('/footer-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Site navbar — non-sticky here. Navbar is hardcoded `fixed top-0`,
          so we wrap it in a relative container with `[&>nav]:!relative` to
          override the fixed positioning. Scrolls away with the page. */}
      <div className="relative [&>nav]:!relative [&>nav]:!top-auto [&>nav]:!inset-x-auto">
        <Navbar />
      </div>

      {/* INTRO */}
      <section className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
            A walk through the studio
          </p>
          <h1
            className="mt-6 text-5xl sm:text-7xl md:text-8xl tracking-tight text-stone-900 leading-[0.95] whitespace-nowrap"
            style={{ fontFamily: "'Parkinsans', sans-serif", fontWeight: 700 }}
          >
            Brands We{" "}
            <span
              style={{
                fontFamily: "'Instrument Serif', 'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              Build
            </span>
          </h1>
          <p className="mt-8 text-lg text-stone-600 max-w-md mx-auto">
            Arta builds the operating system behind modern brands.
            Scroll to walk through seven of them.
          </p>
          <p className="mt-16 text-xs uppercase tracking-[0.4em] text-stone-400">
            ↓ scroll to enter
          </p>
        </div>
      </section>

      {/* PINNED WALKTHROUGH */}
      <section
        ref={sectionRef}
        className="relative"
        style={{ height: `${PIN_VIEWPORT_MULTIPLIER * 100}vh` }}
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center px-4 sm:px-8 lg:px-12 py-4 sm:py-6">
          <div className="relative h-full w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-stone-100 shadow-2xl ring-1 ring-black/5">
          <video
            ref={videoRef}
            src="/arta-brands-office.mp4"
            muted
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dim layer — reduces video intensity by ~20% while a brand text
              overlay is showing, so the text reads more clearly. Tracks the
              MAX opacity of all current scenes (so it fades in/out with them). */}
          {(() => {
            const sceneOpacities = SCENES.map((s) => {
              const fadeIn = 0.6;
              const fadeOut = 0.6;
              const inFull = s.startSec + fadeIn;
              const outStart = s.endSec - fadeOut;
              let op = 0;
              if (currentTime >= s.startSec && currentTime <= s.endSec) {
                if (currentTime < inFull) op = (currentTime - s.startSec) / fadeIn;
                else if (currentTime > outStart) op = (s.endSec - currentTime) / fadeOut;
                else op = 1;
              }
              return Math.max(0, Math.min(1, op));
            });
            const dim = Math.max(...sceneOpacities) * 0.2; // up to 20% dim
            return (
              <div
                className="pointer-events-none absolute inset-0 bg-black"
                style={{ opacity: dim }}
                aria-hidden
              />
            );
          })()}

          {/* Per-scene overlays */}
          {SCENES.map((scene, i) => {
            const fadeIn = 0.6;
            const fadeOut = 0.6;
            const inFull = scene.startSec + fadeIn;
            const outStart = scene.endSec - fadeOut;

            let opacity = 0;
            if (currentTime >= scene.startSec && currentTime <= scene.endSec) {
              if (currentTime < inFull) {
                opacity = (currentTime - scene.startSec) / fadeIn;
              } else if (currentTime > outStart) {
                opacity = (scene.endSec - currentTime) / fadeOut;
              } else {
                opacity = 1;
              }
            }
            opacity = Math.max(0, Math.min(1, opacity));

            const isLeft = scene.textSide === "left";

            // Subtle gradient over the text zone for guaranteed contrast,
            // tinted with the brand color so it feels intentional.
            const gradient =
              isLeft
                ? `linear-gradient(to right, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.45) 40%, rgba(255,255,255,0) 70%)`
                : `linear-gradient(to left, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.45) 40%, rgba(255,255,255,0) 70%)`;

            return (
              <div
                key={scene.brand}
                className="pointer-events-none absolute inset-0"
                style={{ opacity }}
                aria-hidden={opacity < 0.5}
              >
                {/* Contrast wash on the text side only */}
                <div
                  className="absolute inset-y-0 w-3/5 transition-opacity"
                  style={{
                    [isLeft ? "left" : "right"]: 0,
                    background: gradient,
                  }}
                />

                {/* Content panel */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 max-w-md sm:max-w-lg px-8 sm:px-12 flex flex-col gap-5 ${
                    isLeft
                      ? "left-0 sm:left-8 items-start text-left"
                      : "right-0 sm:right-8 items-end text-right"
                  }`}
                  style={{ color: scene.textColor }}
                >
                  {/* Category eyebrow */}
                  <div className="text-xs uppercase tracking-[0.25em] opacity-80">
                    {scene.category}
                  </div>

                  {/* Brand name in brand display font */}
                  <h2
                    className="text-5xl sm:text-7xl leading-[0.95] tracking-tight"
                    style={{ fontFamily: scene.font, fontWeight: 400 }}
                  >
                    {scene.brand}
                  </h2>

                  {/* Tagline */}
                  <p
                    className="text-xl sm:text-2xl leading-snug"
                    style={{
                      fontFamily: scene.font,
                      fontStyle: "italic",
                      opacity: 0.85,
                    }}
                  >
                    {scene.tagline}
                  </p>

                  {/* Description */}
                  <p
                    className="text-sm sm:text-base leading-relaxed max-w-sm sm:max-w-md opacity-80"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {scene.description}
                  </p>

                  {/* Read case study button (only if a case study exists for this brand) */}
                  {CASE_STUDIES[scene.brand] && (
                    <button
                      type="button"
                      onClick={() => setOpenCaseStudy(scene.brand)}
                      className="pointer-events-auto mt-1 inline-flex items-center gap-2 rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition hover:scale-[1.02] active:scale-[0.98]"
                      style={{
                        borderColor: scene.accent,
                        color: scene.textColor,
                        backgroundColor: "rgba(255,255,255,0.65)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      Read case study
                      <span aria-hidden style={{ color: scene.accent }}>→</span>
                    </button>
                  )}

                  {/* Count + thin rule */}
                  <div className="mt-3 flex items-center gap-3 text-xs uppercase tracking-[0.25em] opacity-60">
                    <span>{String(i + 1).padStart(2, "0")} / {String(SCENES.length).padStart(2, "0")}</span>
                    <span className="h-px w-12" style={{ backgroundColor: scene.accent, opacity: 0.6 }} />
                  </div>
                </div>
              </div>
            );
          })}

          </div>
        </div>
      </section>

      {/* OUTRO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
            And many more on the way
          </p>
          <h2
            className="mt-6 text-5xl sm:text-7xl tracking-tight text-stone-900 leading-[0.95] whitespace-nowrap"
            style={{ fontFamily: "'Parkinsans', sans-serif", fontWeight: 700 }}
          >
            Build with{" "}
            <span
              style={{
                fontFamily: "'Instrument Serif', 'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              Arta.
            </span>
          </h2>
          <p className="mt-8 text-stone-600 max-w-md mx-auto">
            From idea to scalable brand — Arta is the infrastructure layer
            behind modern entrepreneurship.
          </p>
        </div>
      </section>

      {/* ─── CASE STUDY MODAL ─────────────────────────────────────── */}
      <AnimatePresence>
        {activeCase && (() => {
          const scene = SCENES.find((s) => s.brand === activeCase.brand);
          const accent = scene?.accent ?? "#111";
          const textColor = scene?.textColor ?? "#111";
          const brandFont = scene?.font ?? "'Parkinsans', sans-serif";

          return (
            <motion.div
              key="case-study-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 lg:p-10"
              onClick={() => setOpenCaseStudy(null)}
              aria-modal="true"
              role="dialog"
            >
              <motion.article
                key="case-study-panel"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="case-study-modal relative w-full max-w-6xl max-h-full bg-stone-50 text-stone-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-y-auto overscroll-contain"
                onClick={(e) => e.stopPropagation()}
                onWheel={(e) => {
                  // Lenis swallows wheel events globally. Manually scroll the
                  // modal here so mouse-wheel works.
                  e.currentTarget.scrollTop += e.deltaY;
                }}
              >
                {/* Close — floats above hero */}
                <button
                  type="button"
                  onClick={() => setOpenCaseStudy(null)}
                  aria-label="Close case study"
                  className="absolute top-4 right-4 z-20 rounded-full p-2.5 bg-white/85 backdrop-blur-md hover:bg-white transition shadow-md"
                >
                  <X size={18} className="text-stone-800" />
                </button>

                {/* HERO image band */}
                <div className="relative h-[42vh] sm:h-[48vh] lg:h-[55vh] w-full overflow-hidden bg-stone-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activeCase.heroImage}
                    alt={`${activeCase.brand} brand room`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  {/* Bottom gradient so the eyebrow & brand name read on top */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-2/3"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 100%)",
                    }}
                  />
                  {/* Eyebrow + brand name overlaid */}
                  <div className="absolute inset-x-0 bottom-0 px-6 sm:px-10 lg:px-14 pb-6 sm:pb-8">
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/85">
                      Case study · {activeCase.category}
                    </p>
                    <h1
                      className="mt-3 text-4xl sm:text-6xl lg:text-7xl leading-[0.9] tracking-tight text-white"
                      style={{ fontFamily: brandFont, fontWeight: 500 }}
                    >
                      {activeCase.brand}
                    </h1>
                  </div>
                </div>

                {/* TWO-COLUMN BODY */}
                <div className="px-6 sm:px-10 lg:px-14 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-16">
                  {/* SIDEBAR — sticky on desktop */}
                  <aside className="space-y-8">
                    {/* Promise */}
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400">
                        The promise
                      </p>
                      <p
                        className="mt-3 text-xl sm:text-2xl italic leading-snug"
                        style={{ fontFamily: brandFont, color: textColor }}
                      >
                        &ldquo;{activeCase.promise}&rdquo;
                      </p>
                    </div>

                    {/* Accent line */}
                    <div
                      className="h-px w-12"
                      style={{ backgroundColor: accent }}
                    />

                    {/* Factsheet */}
                    <dl className="space-y-5">
                      {activeCase.factsheet.map((f) => (
                        <div key={f.label}>
                          <dt className="text-[10px] uppercase tracking-[0.3em] text-stone-400">
                            {f.label}
                          </dt>
                          <dd className="mt-1 text-sm sm:text-base text-stone-800">
                            {f.value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    {/* CTA */}
                    <a
                      href="/apply"
                      className="inline-flex items-center gap-2 mt-2 rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-white transition hover:opacity-90"
                      style={{ backgroundColor: accent }}
                    >
                      Build a brand like this
                      <span aria-hidden>→</span>
                    </a>
                  </aside>

                  {/* PROSE COLUMN */}
                  <div className="max-w-prose">
                    {activeCase.paragraphs.map((p, idx) => {
                      if (p.type === "lead") {
                        return (
                          <p
                            key={idx}
                            className="text-lg sm:text-xl leading-[1.6] text-stone-800 first-letter:font-serif first-letter:text-6xl sm:first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:font-medium"
                            style={{
                              fontFamily: "'Inter', sans-serif",
                            }}
                          >
                            {p.text}
                          </p>
                        );
                      }
                      if (p.type === "heading") {
                        return (
                          <h3
                            key={idx}
                            className="mt-12 mb-4 text-[11px] uppercase tracking-[0.35em] flex items-center gap-3"
                            style={{ color: textColor }}
                          >
                            <span
                              className="inline-block h-1.5 w-1.5 rounded-full"
                              style={{ backgroundColor: accent }}
                            />
                            {p.text}
                          </h3>
                        );
                      }
                      if (p.type === "pullquote") {
                        return (
                          <blockquote
                            key={idx}
                            className="my-12 text-center px-2"
                          >
                            <p
                              className="text-2xl sm:text-3xl lg:text-4xl leading-[1.15] italic"
                              style={{
                                fontFamily: brandFont,
                                color: textColor,
                              }}
                            >
                              &ldquo;{p.text}&rdquo;
                            </p>
                            <span
                              className="inline-block mt-6 h-px w-12"
                              style={{ backgroundColor: accent }}
                            />
                          </blockquote>
                        );
                      }
                      return (
                        <p
                          key={idx}
                          className="mt-5 text-base sm:text-lg leading-[1.65] text-stone-700"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {p.text}
                        </p>
                      );
                    })}

                    {/* Footer CTA */}
                    <div className="mt-16 pt-10 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
                      <p
                        className="text-sm italic text-stone-500"
                        style={{ fontFamily: brandFont }}
                      >
                        Built inside the Arta ecosystem.
                      </p>
                      <button
                        type="button"
                        onClick={() => setOpenCaseStudy(null)}
                        className="text-xs uppercase tracking-[0.25em] text-stone-600 hover:text-stone-900 transition"
                      >
                        Close ←
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </main>
  );
}
