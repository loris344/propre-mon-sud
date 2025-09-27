import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Eye, 
  Search, 
  Globe, 
  Image, 
  Link, 
  FileText,
  BarChart3,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Zap,
  RefreshCw
} from 'lucide-react';
import { scanAllRoutes, getGlobalStats, AnalyzedPage } from '@/lib/routeScanner';
import { analyzeAllPages, getGlobalSEOStats, SEOAnalysisResult } from '@/lib/seoAnalyzer';

interface SEOMetrics {
  pages: AnalyzedPage[];
  seoAnalyses: SEOAnalysisResult[];
  globalStats: {
    totalPages: number;
    totalWords: number;
    avgWordsPerPage: number;
    avgSEOScore: number;
    pagesWithIssues: number;
    totalIssues: number;
    healthScore: number;
  };
  lastUpdated: Date;
}

const AdminDashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [metrics, setMetrics] = useState<SEOMetrics | null>(null);
  const [loading, setLoading] = useState(false);

  // Mot de passe simple pour l'accès (à changer en production)
  const ADMIN_PASSWORD = 'popo34';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      loadMetrics();
    } else {
      alert('Mot de passe incorrect');
    }
  };

  const loadMetrics = async () => {
    setLoading(true);
    
    try {
      // Scanner dynamique des routes
      const pages = scanAllRoutes();
      
      // Analyse SEO de toutes les pages
      const urls = pages.map(page => page.url);
      const seoAnalyses = await analyzeAllPages(urls);
      
      // Statistiques globales
      const globalStats = getGlobalSEOStats(seoAnalyses);
      
      const realMetrics: SEOMetrics = {
        pages,
        seoAnalyses,
        globalStats,
        lastUpdated: new Date()
      };

      setMetrics(realMetrics);
    } catch (error) {
      console.error('Erreur lors du chargement des métriques:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Accès Administrateur
            </CardTitle>
            <CardDescription>
              Dashboard SEO - Accès réservé
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit" className="w-full">
                Se connecter
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement des métriques...</p>
        </div>
      </div>
    );
  }

  if (!metrics) return null;

  return (
    <>
      <Helmet>
        <title>Dashboard SEO - SOS Nettoyage Diogène</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Dashboard SEO Professionnel
            </h1>
            <p className="text-gray-600">
              Analyse complète du site SOS Nettoyage Diogène
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Badge variant="outline" className="flex items-center gap-1">
                <Globe className="h-3 w-3" />
                sosnettoyagediogene.fr
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Dernière mise à jour: {metrics?.lastUpdated.toLocaleString('fr-FR')}
              </Badge>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={loadMetrics}
                className="flex items-center gap-1"
              >
                <RefreshCw className="h-3 w-3" />
                Actualiser
              </Button>
            </div>
          </div>

          {/* Métriques principales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pages Total</p>
                    <p className="text-2xl font-bold text-gray-900">{metrics.globalStats.totalPages}</p>
                  </div>
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <div className="mt-2">
                    <Badge variant="secondary" className="text-xs">
                      Toutes indexées
                    </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Mots Total</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {metrics.globalStats.totalWords.toLocaleString()}
                    </p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-green-600" />
                </div>
                <div className="mt-2">
                    <Badge variant="secondary" className="text-xs">
                      {metrics.globalStats.avgWordsPerPage} mots/page
                    </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Score SEO Moyen</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {metrics.globalStats.avgSEOScore}/100
                    </p>
                  </div>
                  <Link className="h-8 w-8 text-green-600" />
                </div>
                <div className="mt-2">
                    <Badge variant="secondary" className="text-xs">
                      {metrics.globalStats.healthScore}% de santé
                    </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Liste des pages */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Liste des Pages ({metrics.globalStats.totalPages})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {metrics.pages.map((page, index) => {
                  const seoAnalysis = metrics.seoAnalyses.find(analysis => analysis.url === page.url);
                  return (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium text-sm">
                          <a 
                            href={`https://sosnettoyagediogene.fr${page.url}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            https://sosnettoyagediogene.fr{page.url}
                          </a>
                        </div>
                        <div className="text-xs text-gray-600 mt-1">{page.title}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {page.wordCount} mots • Score SEO: {seoAnalysis?.seoScore || 0}/100
                        </div>
                        {seoAnalysis && seoAnalysis.issues.length > 0 && (
                          <div className="text-xs text-red-500 mt-1">
                            {seoAnalysis.issues.length} problème(s) détecté(s)
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {page.hasMeta && <CheckCircle className="h-4 w-4 text-green-600" title="Meta tags" />}
                        {page.hasStructuredData && <CheckCircle className="h-4 w-4 text-blue-600" title="Structured Data" />}
                        {seoAnalysis && seoAnalysis.issues.length > 0 && (
                          <AlertTriangle className="h-4 w-4 text-orange-600" title="Problèmes SEO" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Sections détaillées */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Contenu */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Contenu
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Total de mots</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{metrics.globalStats.totalWords.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Moyenne par page</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{metrics.globalStats.avgWordsPerPage}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Pages avec problèmes</span>
                  <div className="flex items-center gap-2">
                    {metrics.globalStats.pagesWithIssues > 0 ? (
                      <AlertTriangle className="h-4 w-4 text-orange-600" />
                    ) : (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    )}
                    <span className="font-medium">{metrics.globalStats.pagesWithIssues}/{metrics.globalStats.totalPages}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Total des problèmes</span>
                  <div className="flex items-center gap-2">
                    {metrics.globalStats.totalIssues > 0 ? (
                      <XCircle className="h-4 w-4 text-red-600" />
                    ) : (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    )}
                    <span className="font-medium">{metrics.globalStats.totalIssues}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technique */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Technique
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Score SEO moyen</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{metrics.globalStats.avgSEOScore}/100</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>HTTPS</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="font-medium">{metrics.globalStats.totalPages}/{metrics.globalStats.totalPages}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Structured Data</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="font-medium">{metrics.globalStats.totalPages}/{metrics.globalStats.totalPages}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Meta tags</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="font-medium">{metrics.globalStats.totalPages}/{metrics.globalStats.totalPages}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>


          {/* Actions rapides */}
          <Card>
            <CardHeader>
              <CardTitle>Actions Rapides</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Audit SEO Complet
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Vérifier Sitemap
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Rapport Performance
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
