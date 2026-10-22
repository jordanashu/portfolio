import { useState, useEffect, useRef } from 'react';

export function LazyImage({
  src,
  alt = '',
  className = '',
  wrapperClassName = '',
  placeholderClassName = '',
  loading = 'lazy',
  decoding = 'async',
  onLoad,
  onError,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Handle cases where the image is already completed/cached before event attachment
    if (imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
      const raf = requestAnimationFrame(() => {
        setIsLoaded(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [src]);

  const handleLoad = (e) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    setHasError(true);
    if (onError) onError(e);
  };

  return (
    <div className={`relative ${wrapperClassName || 'w-full h-full flex items-end justify-center'}`}>
      {/* Loading Skeleton / Spinner Placeholder */}
      {!isLoaded && !hasError && (
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none ${placeholderClassName}`}
          aria-hidden="true"
        >
          <div className="w-9 h-9 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin opacity-80" />
        </div>
      )}

      {/* Lazy-Loaded Image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        onLoad={handleLoad}
        onError={handleError}
        className={`${className} transition-opacity duration-700 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
}

export default LazyImage;
