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
    <img
      src={mobileSrc}
      srcSet={`${ultraMobileSrc} 320w, ${smallMobileSrc} 480w, ${mobileSrc} 768w, ${src} 1200w`}
      sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 768px) 768px, 1200px"
      alt={alt}
      className={className}
      loading={loading}
      fetchpriority={fetchpriority}
      width={width}
      height={height}
    />
  );
};
