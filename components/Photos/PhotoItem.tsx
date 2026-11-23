"use client";
import React from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  eager?: boolean;
  onOpen: () => void;
};

const PhotoItem = ({ src, alt, eager = false, onOpen }: Props) => {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open photo: ${alt}`}
      className="relative block w-full aspect-3/4 overflow-hidden rounded-xl bg-gray-900 group cursor-zoom-in
        focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-500"
    >
      <Image
        src={src}
        alt={alt}
        fill
        loading={eager ? "eager" : "lazy"}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </button>
  );
};

export default PhotoItem;
