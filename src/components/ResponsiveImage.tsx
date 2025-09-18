import { useMediaQuery } from '../hooks/useMediaQuery';

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
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <img
      src={isMobile ? mobileSrc : src}
      alt={alt}
      className={className}
      loading={loading}
      fetchpriority={fetchpriority}
      width={width}
      height={height}
    />
  );
};
