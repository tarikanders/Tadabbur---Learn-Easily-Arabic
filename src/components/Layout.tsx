import { Link, Outlet, useLocation } from "react-router-dom";
import { BookOpen, Library, Home, Play, Settings, Moon, Sun, Menu, X, BarChart3, Dumbbell } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { useAuth } from "../hooks/useAuth";

const navigation = [
  { name: 'Tableau de bord', href: '/', icon: Home },
  { name: 'Pratique', href: '/pratique', icon: Dumbbell },
  { name: 'Cours', href: '/cours', icon: BookOpen },
  { name: 'Bibliothèque', href: '/bibliotheque', icon: Library },
  { name: 'Stats', href: '/statistiques', icon: BarChart3 },
];

export default function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(() => document.documentElement.classList.contains('dark'));
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, loginWithGoogle, logout, error } = useAuth();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row transition-colors duration-200 bg-brand-cream dark:bg-slate-900 text-brand-text dark:text-cream-50">
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between px-4 sm:px-6 py-3 border-b sticky top-0 z-50 transition-colors duration-200 bg-white/80 dark:bg-slate-800/90 border-brand-cream-border dark:border-slate-700 backdrop-blur-md shadow-sm dark:shadow-none">
        <Link to="/" className="flex items-center gap-3">
          <span className="font-arabic text-2xl font-bold text-brand-emerald dark:text-emerald-400 mt-1">تدبر</span>
          <div className="h-5 w-[1px] bg-brand-cream-border dark:bg-slate-700" />
          <span className="font-serif italic text-lg text-brand-gold-dark font-medium">Tadabbur</span>
        </Link>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 -mr-1 rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:text-cream-400 dark:hover:bg-slate-600 transition-colors active:scale-95"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] md:hidden" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "w-72 border-r flex-shrink-0 flex flex-col transition-transform duration-300 fixed md:sticky top-0 h-[100dvh] z-[70] bg-brand-cream dark:bg-slate-800 border-brand-cream-border dark:border-slate-700 md:shadow-sm dark:md:shadow-none",
        isMobileMenuOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="h-16 sm:h-20 flex items-center justify-between px-6 border-b border-inherit bg-transparent shrink-0">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4">
            <span className="font-arabic text-3xl font-bold text-brand-emerald dark:text-emerald-400 mt-1">تدبر</span>
            <div className="h-6 w-[1px] bg-brand-cream-border dark:bg-slate-700" />
            <span className="font-serif italic text-xl text-brand-gold-dark">Tadabbur</span>
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="md:hidden p-2 -mr-2 rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:text-cream-400 dark:hover:bg-slate-600 transition-colors"
          >
             <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="flex-1 px-4 py-8 space-y-2 relative overflow-y-auto">
          <div className="absolute inset-0 pattern-ornament pointer-events-none -z-10 bg-transparent" />
          {navigation.map((item) => {
            const isActive = location.pathname === item.href || (location.pathname.startsWith(item.href) && item.href !== '/');
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "group flex items-center px-4 py-3.5 text-sm rounded-2xl transition-all duration-300",
                  isActive 
                    ? "bg-brand-emerald text-white dark:bg-emerald-500/20 dark:text-emerald-300 shadow-md font-bold" 
                    : "text-slate-600 hover:bg-white hover:shadow-sm font-medium hover:text-brand-emerald dark:text-cream-300/80 dark:hover:bg-slate-700 dark:hover:text-cream-50 hover:border hover:border-brand-cream-border dark:hover:border-slate-600"
                )}
              >
                <item.icon
                  className={cn(
                    "mr-3 flex-shrink-0 h-5 w-5 transition-colors",
                    isActive ? "text-white dark:text-emerald-400" : "text-brand-gold-dark group-hover:text-brand-emerald dark:text-slate-400 dark:group-hover:text-cream-300"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-inherit space-y-2">
          {error && <div className="text-[10px] text-red-500 bg-red-50 dark:bg-red-900/10 p-2 rounded-lg">{error}</div>}
          
          {user && !user.isAnonymous ? (
            <div className="flex items-center justify-between px-4 py-3 bg-cream-50 dark:bg-slate-700/30 rounded-xl border border-cream-200 dark:border-slate-700">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-8 h-8 rounded-full bg-brand-emerald text-white flex items-center justify-center font-bold flex-shrink-0">
                  {user.email?.[0].toUpperCase() || 'U'}
                </div>
                <div className="text-sm font-medium text-slate-700 dark:text-cream-300 truncate">
                  {user.email}
                </div>
              </div>
              <button onClick={logout} className="p-1 hover:text-red-500 text-slate-400 transition-colors" title="Déconnexion">
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={loginWithGoogle}
              className="w-full flex items-center justify-center px-4 py-3 text-sm font-bold rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-cream-300 dark:hover:bg-slate-700 transition-colors"
            >
               <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
              </svg>
              Connexion
            </button>
          )}

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-full flex items-center px-4 py-3 text-sm font-bold rounded-xl text-slate-600 hover:bg-cream-200 dark:text-cream-300 dark:bg-slate-700/50 dark:hover:bg-slate-700 transition-colors"
          >
            {isDarkMode ? (
              <>
                <Sun className="mr-3 h-5 w-5 text-gold-400" />
                Mode clair
              </>
            ) : (
              <>
                <Moon className="mr-3 h-5 w-5 text-slate-500" />
                Mode sombre
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 md:h-screen md:overflow-y-auto">
        <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8 pb-24 md:pb-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
