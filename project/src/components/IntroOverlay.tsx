import React, { useState, useEffect, useCallback, useRef } from 'react';

const STORAGE_KEY = 'introShown';
const FULLSCREEN_DURATION_MS = 800;
const ANIMATION_DURATION_MS = 1200;
const LOGO_SELECTOR = '#navbar-logo';
const INTRO_IMAGE_URL = 'https://i.imgur.com/Nd4zBTN.png';

function getShouldShowIntro(): boolean {
  if (typeof window === 'undefined') return false;
  return !sessionStorage.getItem(STORAGE_KEY);
}

function markIntroShown(): void {
  sessionStorage.setItem(STORAGE_KEY, 'true');
}

export const IntroOverlay: React.FC = () => {
  const [visible, setVisible] = useState(getShouldShowIntro);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const [phase, setPhase] = useState<'fullscreen' | 'animating'>('fullscreen');

  const finishedRef = useRef(false);
  const finishIntro = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    markIntroShown();
    setVisible(false);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    if (!visible) return;

    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      const logo = document.querySelector(LOGO_SELECTOR);
      if (!logo) {
        finishIntro();
        return;
      }
      const rect = logo.getBoundingClientRect();
      setTargetRect(rect);
      setPhase('animating');
    }, FULLSCREEN_DURATION_MS);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [visible, finishIntro]);

  const handleTransitionEnd = useCallback(
    (e: React.TransitionEvent) => {
      if (e.propertyName !== 'width' && e.propertyName !== 'height') return;
      if (phase === 'animating') finishIntro();
    },
    [phase, finishIntro]
  );

  if (!visible) return null;

  const isAnimating = phase === 'animating' && targetRect !== null;

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-auto"
      aria-hidden
    >
      {/* Fundo embaçado atrás da logo durante a animação */}
      <div
        className="absolute inset-0 backdrop-blur-md bg-white/20"
        aria-hidden
      />
      <div
        className="absolute overflow-hidden bg-transparent"
        style={{
          left: isAnimating ? targetRect!.left : 0,
          top: isAnimating ? targetRect!.top : 0,
          width: isAnimating ? targetRect!.width : '100vw',
          height: isAnimating ? targetRect!.height : '100vh',
          transition: `left ${ANIMATION_DURATION_MS}ms cubic-bezier(0.33, 1, 0.68, 1),
                      top ${ANIMATION_DURATION_MS}ms cubic-bezier(0.33, 1, 0.68, 1),
                      width ${ANIMATION_DURATION_MS}ms cubic-bezier(0.33, 1, 0.68, 1),
                      height ${ANIMATION_DURATION_MS}ms cubic-bezier(0.33, 1, 0.68, 1)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        <img
          src={INTRO_IMAGE_URL}
          alt=""
          className="w-full h-full object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default IntroOverlay;
