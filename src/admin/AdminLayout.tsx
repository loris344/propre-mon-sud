import { NavLink, Outlet, useNavigate, Navigate, useLocation } from "react-router-dom";
import { useAdminAuth } from "./AdminAuthContext";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, FileText, Star, Image as ImageIcon, FileEdit, LogOut, Loader2, ExternalLink } from "lucide-react";

export default function AdminLayout() {
  const { user, isAdmin, loading, signOut } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) return <Navigate to="/admin/login" replace />;
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <div className="max-w-md text-center space-y-4">
          <h1 className="text-2xl font-bold">Accès refusé</h1>
          <p className="text-muted-foreground">
            Ton compte ({user.email}) n'a pas le rôle <code className="px-1 bg-muted rounded">admin</code>.
            Ajoute-le dans la table <code className="px-1 bg-muted rounded">user_roles</code> de Supabase.
          </p>
          <Button onClick={async () => { await signOut(); navigate("/admin/login"); }}>Se déconnecter</Button>
        </div>
      </div>
    );
  }

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
      isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
    }`;

  return (
    <div className="min-h-screen bg-muted/30 pt-20 lg:pt-24">
      <div className="flex min-h-[calc(100vh-6rem)] flex-col lg:flex-row">
        <aside className="border-b border-border bg-card p-4 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:w-64 lg:flex-shrink-0 lg:border-b-0 lg:border-r lg:flex lg:flex-col">
          <div className="mb-6">
            <h2 className="text-lg font-bold">CMS Admin</h2>
            <p className="text-xs text-muted-foreground truncate">{user.email}</p>
          </div>
          <nav className="grid grid-cols-2 gap-2 lg:block lg:flex-1 lg:space-y-1">
            <NavLink to="/admin" end className={linkClass}><LayoutDashboard className="w-4 h-4" /> Tableau de bord</NavLink>
            <NavLink to="/admin/articles" className={linkClass}><FileText className="w-4 h-4" /> Articles</NavLink>
            <NavLink to="/admin/reviews" className={linkClass}><Star className="w-4 h-4" /> Avis clients</NavLink>
            <NavLink to="/admin/gallery" className={linkClass}><ImageIcon className="w-4 h-4" /> Galerie</NavLink>
            <NavLink to="/admin/pages" className={linkClass}><FileEdit className="w-4 h-4" /> Pages & cocon</NavLink>
          </nav>
          <div className="mt-4 grid grid-cols-2 gap-2 lg:block lg:space-y-2">
            <Button variant="outline" size="sm" asChild>
              <a href={location.pathname.startsWith("/admin") ? "/" : location.pathname} target="_blank" rel="noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" /> Voir le site
              </a>
            </Button>
            <Button variant="outline" size="sm" onClick={async () => { await signOut(); navigate("/admin/login"); }}>
              <LogOut className="w-4 h-4 mr-2" /> Déconnexion
            </Button>
          </div>
        </aside>
        <main className="w-full flex-1 p-4 sm:p-6 lg:max-w-none lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}