"use client";

import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

// Define the type for a single image object
interface SanityImage {
  _id: string; // or any other unique identifier used by your Sanity image object
  asset: {
    url: string;
    // other properties related to the image asset, if necessary
  };
  alt: string; // Alt text or description for the image
}

interface iAppProps {
  images: SanityImage[]; // Array of images
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState<SanityImage>(images[0]);

  const handleSmallImageClick = (image: SanityImage) => {
    setBigImage(image);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: SanityImage, idx: number) => (
          <div key={image._id} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt={image.alt}
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt={bigImage.alt}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />

        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  );
}
