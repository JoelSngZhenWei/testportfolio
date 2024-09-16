'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ZoomIn, ZoomOut, X } from 'lucide-react';

interface LightboxProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function Lightbox({ src, alt, width, height }: LightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [maxSize, setMaxSize] = useState({ maxWidth: '100%', maxHeight: '100%' });

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.1, 3));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.1, 0.5));

  // Update the maximum size dynamically based on the viewport
  useEffect(() => {
    if (isOpen) {
      const viewportWidth = window.innerWidth * 0.9; // 90% of the viewport width
      const viewportHeight = window.innerHeight * 0.9; // 90% of the viewport height

      const aspectRatio = width / height;

      if (viewportWidth / aspectRatio < viewportHeight) {
        setMaxSize({ maxWidth: `${viewportWidth}px`, maxHeight: `${viewportWidth / aspectRatio}px` });
      } else {
        setMaxSize({ maxWidth: `${viewportHeight * aspectRatio}px`, maxHeight: `${viewportHeight}px` });
      }
    }
  }, [isOpen, width, height]);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="cursor-pointer rounded-lg"
        onClick={() => setIsOpen(true)}
      />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="p-0">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute top-2 right-2 z-10 flex gap-2">
              <Button size="icon" variant="secondary" onClick={handleZoomIn}>
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" onClick={handleZoomOut}>
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="w-full h-full flex items-center justify-center overflow-auto">
              <div
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: 'center center',
                  transition: 'transform 0.2s ease-in-out',
                  maxWidth: maxSize.maxWidth,
                  maxHeight: maxSize.maxHeight,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  className="max-w-full max-h-full"
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
