import { useEffect } from "react";

// Interface pour les Core Web Vitals
interface WebVitalMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
}

const WebVitalsMonitor = () => {
  useEffect(() => {
    // Fonction pour envoyer les métriques à Google Analytics
    const sendToAnalytics = (metric: WebVitalMetric) => {
      // Vérifier si gtag est disponible
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }

      // Log pour le développement
      console.log(`Web Vital: ${metric.name} = ${metric.value}`);
    };

    // Charger la librairie web-vitals si disponible
    const loadWebVitals = async () => {
      try {
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
        
        getCLS(sendToAnalytics);
        getFID(sendToAnalytics);
        getFCP(sendToAnalytics);
        getLCP(sendToAnalytics);
        getTTFB(sendToAnalytics);
      } catch (error) {
        console.log('Web Vitals library not available');
      }
    };

    loadWebVitals();

    // Monitoring basique des performances
    const measurePerformance = () => {
      if ('performance' in window) {
        // Mesurer le temps de chargement de la page
        window.addEventListener('load', () => {
          const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
          console.log(`Page Load Time: ${loadTime}ms`);
          
          if (loadTime > 3000) {
            console.warn('Page load time is slow (>3s)');
          }
        });

        // Mesurer le First Contentful Paint
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              console.log(`FCP: ${entry.startTime}ms`);
            }
          }
        });

        observer.observe({ entryTypes: ['paint'] });
      }
    };

    measurePerformance();
  }, []);

  return null;
};

export default WebVitalsMonitor;
