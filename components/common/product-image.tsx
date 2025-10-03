"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Loading } from "./loading";
import { ImagePlaceholder } from "./image-placeholder";

interface IProductImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function ProductImage({
  src,
  alt,
  className = "",
  width = 300,
  height = 300,
  priority = false,
}: IProductImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Check if URL is valid and set appropriate initial state
  useEffect(() => {
    // If URL is clearly invalid, show placeholder immediately
    if (!src || src.includes("invalid-url") || src.includes("placeholder")) {
      setIsLoading(false);
      setHasError(true);
      return;
    }

    // Timeout for loading state - if image doesn't load in 3 seconds, show placeholder
    const timer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
        setHasError(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [src, isLoading]);

  function handleLoad() {
    setIsLoading(false);
    setHasError(false);
  }

  function handleError() {
    setIsLoading(false);
    setHasError(true);
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full"
          >
            <Loading className="w-full h-full" />
          </motion.div>
        )}

        {hasError && !isLoading && (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full flex items-center justify-center"
          >
            <ImagePlaceholder className="size-20" />
          </motion.div>
        )}

        {!hasError &&
          !isLoading &&
          src &&
          !src.includes("invalid-url") &&
          !src.includes("placeholder") && (
            <motion.div
              key="image"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority={priority}
                className="w-full h-full object-cover"
                onLoad={handleLoad}
                onError={handleError}
              />
            </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
}
