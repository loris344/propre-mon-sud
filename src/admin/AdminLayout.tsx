import { NavLink, Outlet, useNavigate, Navigate } from "react-router-dom";
import { useAdminAuth } from "./AdminAuthContext";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, FileText, Star, Image as ImageIcon, FileEdit, LogOut, Loader2 } from "lucide-react";

export default function AdminLayout() {
  const { user, isAdmin, loading, signOut } = useAdminAuth();
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-muted/30">
      <div className="flex">
        <aside className="w-60 min-h-screen bg-card border-r border-border p-4 flex flex-col">
          <div className="mb-6">
            <h2 className="text-lg font-bold">CMS Admin</h2>
            <p className="text-xs text-muted-foreground truncate">{user.email}</p>
          </div>
          <nav className="space-y-1 flex-1">
            <NavLink to="/admin" end className={linkClass}><LayoutDashboard className="w-4 h-4" /> Tableau de bord</NavLink>
            <NavLink to="/admin/articles" className={linkClass}><FileText className="w-4 h-4" /> Articles</NavLink>
            <NavLink to="/admin/reviews" className={linkClass}><Star className="w-4 h-4" /> Avis clients</NavLink>
            <NavLink to="/admin/gallery" className={linkClass}><ImageIcon className="w-4 h-4" /> Galerie</NavLink>
            <NavLink to="/admin/pages" className={linkClass}><FileEdit className="w-4 h-4" /> Pages</NavLink>
          </nav>
          <Button variant="outline" size="sm" onClick={async () => { await signOut(); navigate("/admin/login"); }}>
            <LogOut className="w-4 h-4 mr-2" /> Déconnexion
          </Button>
        </aside>
        <main className="flex-1 p-6 max-w-5xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
}