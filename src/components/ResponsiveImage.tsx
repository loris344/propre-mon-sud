interface ResponsiveImageProps {
  src: string;
  mobileSrc: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fetchpriority?: 'high' | 'low' | 'auto';
  width?: number;
  height?: number;
}

export const ResponsiveImage = ({
  src,
  mobileSrc,
  alt,
  className = '',
  loading = 'lazy',
  fetchpriority = 'auto',
  width,
  height
}: ResponsiveImageProps) => {
  // Utilise des images avec CSS pour la responsivité
  // Desktop: src, Mobile: mobileSrc, Small Mobile: mobileSrc avec -small, Ultra Small: mobileSrc avec -ultra
  const smallMobileSrc = mobileSrc.replace('mobile', 'mobile-small');
  const ultraMobileSrc = mobileSrc.replace('mobile', 'mobile-ultra');
  
  return (
    <picture>
      {/* Ultra small mobile (≤320px) */}
      <source 
        media="(max-width: 320px)" 
        srcSet={ultraMobileSrc}
      />
      {/* Small mobile (≤480px) */}
      <source 
        media="(max-width: 480px)" 
        srcSet={smallMobileSrc}
      />
      {/* Mobile (≤768px) */}
      <source 
        media="(max-width: 768px)" 
        srcSet={mobileSrc}
      />
      {/* Desktop (>768px) */}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        fetchpriority={fetchpriority}
        width={width}
        height={height}
      />
    </picture>
  );
};
