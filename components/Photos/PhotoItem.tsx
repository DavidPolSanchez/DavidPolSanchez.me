"use client";
import React from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  eager?: boolean;
};

const PhotoItem = ({ src, alt, eager = false }: Props) => {
  return (
    <div className="relative aspect-3/4 overflow-hidden rounded-xl bg-gray-900 group">
      <Image
        src={src}
        alt={alt}
        fill
        loading={eager ? "eager" : "lazy"}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
};

export default PhotoItem;
