"use client";
import React from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { HiChevronLeft, HiChevronRight, HiXMark } from "react-icons/hi2";

export type Photo = {
  src: string;
  alt: string;
};

type Props = {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

const SWIPE_THRESHOLD_PX = 50;

const Lightbox = ({ photos, index, onClose, onNavigate }: Props) => {
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const touchStartX = React.useRef<number | null>(null);

  const photo = photos[index];
  const showPrev = () => onNavigate((index - 1 + photos.length) % photos.length);
  const showNext = () => onNavigate((index + 1) % photos.length);

  // Lock page scroll and move focus into the dialog; give focus back to the
  // photo that opened it when the dialog closes.
  React.useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  React.useEffect(() => {
    const count = photos.length;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      else if (event.key === "ArrowLeft") onNavigate((index - 1 + count) % count);
      else if (event.key === "ArrowRight") onNavigate((index + 1) % count);
      else if (event.key === "Tab") {
        // Keep keyboard focus inside the dialog.
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>("button");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, photos.length, onClose, onNavigate]);

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (deltaX > SWIPE_THRESHOLD_PX) showPrev();
    else if (deltaX < -SWIPE_THRESHOLD_PX) showNext();
  };

  const navButton =
    "absolute top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 text-white hover:bg-green-700 transition-colors cursor-pointer";

  // Portal to <body> so the dialog sits above the fixed navbar instead of
  // inside the photos page's stacking context.
  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${photo.alt} (${index + 1} of ${photos.length})`}
      className="fixed inset-0 z-20000 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative w-[min(90vw,80vh)] aspect-square">
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          loading="eager"
          sizes="(max-width: 768px) 90vw, 80vh"
          className="object-contain rounded-xl"
        />
      </div>

      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-gray-300">
        {index + 1} / {photos.length}
      </p>

      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-green-700 transition-colors cursor-pointer"
      >
        <HiXMark className="w-7 h-7" />
      </button>
      <button type="button" onClick={showPrev} aria-label="Previous photo" className={`${navButton} left-2 sm:left-6`}>
        <HiChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
      <button type="button" onClick={showNext} aria-label="Next photo" className={`${navButton} right-2 sm:right-6`}>
        <HiChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
    </div>,
    document.body
  );
};

export default Lightbox;
