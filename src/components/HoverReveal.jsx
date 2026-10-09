import React, { useRef, useState } from 'react';

/**
 * Foto profil dengan efek "reveal": saat kursor (atau jari) ada di atas foto,
 * gambar kedua muncul di dalam lingkaran lembut yang mengikuti kursor.
 *
 *   public/foto-1.png -> foto utama
 *   public/foto-2.png -> gambar yang muncul saat hover
 */
export default function HoverReveal({
  base,
  reveal,
  alt = '',
  radius = 130,        // ukuran lingkaran (px)
  revealScale = 0.9,   // skala gambar hover
  children,
}) {
  const box = useRef(null);
  const [active, setActive] = useState(false);

  const move = (e) => {
    const r = box.current.getBoundingClientRect();
    box.current.style.setProperty('--mx', `${e.clientX - r.left}px`);
    box.current.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  const inside = `radial-gradient(circle ${radius}px at var(--mx) var(--my), #000 45%, transparent 100%)`;
  const outside = `radial-gradient(circle ${radius}px at var(--mx) var(--my), transparent 45%, #000 100%)`;

  return (
    <div
      ref={box}
      style={{ '--mx': '50%', '--my': '50%' }}
      className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#0e1a40] to-[#040816] cursor-crosshair touch-pan-y"
      onPointerEnter={(e) => { move(e); setActive(true); }}
      onPointerMove={(e) => { move(e); setActive(true); }}
      onPointerDown={(e) => { move(e); setActive(true); }}
      onPointerLeave={() => setActive(false)}
      onPointerUp={(e) => { if (e.pointerType !== 'mouse') setActive(false); }}
    >
      <img
        src={base}
        alt={alt}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover object-top"
        style={active ? { WebkitMaskImage: outside, maskImage: outside } : undefined}
      />
      <img
        src={reveal}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-150"
        style={{
          opacity: active ? 1 : 0,
          WebkitMaskImage: inside,
          maskImage: inside,
          transform: `scale(${revealScale})`,
          transformOrigin: '50% 0%',
        }}
      />
      {children}
    </div>
  );
}
