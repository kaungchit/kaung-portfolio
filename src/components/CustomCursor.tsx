import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (!target) return;

      const interactiveEl = target.closest('button, a, input, textarea, select, [role="button"], .interactive-cursor');
      if (interactiveEl) {
        setIsPointer(true);
        const customText = interactiveEl.getAttribute('data-cursor');
        setCursorText(customText || '');
      } else {
        setIsPointer(false);
        setCursorText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Small center dot */}
      <div
        id="custom-cursor-dot"
        className="fixed pointer-events-none z-50 rounded-full bg-cyan-400 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '0px' : '5px',
          height: isPointer ? '0px' : '5px',
          boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)',
        }}
      />
      {/* Outer follow ring */}
      <div
        id="custom-cursor-ring"
        className="fixed pointer-events-none z-50 rounded-full border border-cyan-400/40 -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out flex items-center justify-center backdrop-blur-[1px]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? (cursorText ? '64px' : '44px') : '28px',
          height: isPointer ? (cursorText ? '64px' : '44px') : '28px',
          backgroundColor: isPointer ? 'rgba(6, 182, 212, 0.12)' : 'transparent',
          borderColor: isPointer ? 'rgba(6, 182, 212, 0.8)' : 'rgba(255, 255, 255, 0.2)',
        }}
      >
        {cursorText && (
          <span className="text-[9px] font-mono font-bold tracking-wider text-cyan-300 uppercase">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
};
