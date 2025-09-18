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
  const isSmallMobile = useMediaQuery('(max-width: 480px)');
  
  // Utilise la version la plus optimisée selon la taille d'écran
  const getImageSrc = () => {
    if (isSmallMobile && mobileSrc.includes('mobile')) {
      // Remplace 'mobile' par 'mobile-small' pour les très petits écrans
      return mobileSrc.replace('mobile', 'mobile-small');
    }
    return isMobile ? mobileSrc : src;
  };
  
  return (
    <img
      src={getImageSrc()}
      alt={alt}
      className={className}
      loading={loading}
      fetchpriority={fetchpriority}
      width={width}
      height={height}
    />
  );
};
