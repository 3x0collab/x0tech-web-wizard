import { useState } from 'react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}

const ImageOptimizer = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  loading = 'lazy' 
}: ImageOptimizerProps) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleError = () => {
    // Fallback to original if WebP fails
    if (imageSrc.includes('.webp')) {
      setImageSrc(src);
    }
  };

  const handleLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={`relative ${className || ''}`}>
      {!imageLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded" />
      )}
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        onError={handleError}
        onLoad={handleLoad}
        className={`${className || ''} ${!imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        decoding="async"
      />
    </div>
  );
};

export default ImageOptimizer;