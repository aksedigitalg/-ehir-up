import { 
  Search, 
  Compass, 
  Heart, 
  Navigation, 
  Menu,
  Bell
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
              <Navigation className="w-6 h-6" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">CityExplorer</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6 text-sm font-semibold text-slate-600">
              <a href="#" className="text-indigo-600">Home</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Discover</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Events</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Saved</a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
                <img src="https://picsum.photos/seed/user/100/100" alt="Avatar" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
          
          <button className="md:hidden p-2 text-slate-600">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Orta içerik tamamen temizlendi */}
      </main>

      {/* Bottom Navigation (Mobile) */}
      <nav className="md:hidden fixed bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-xl rounded-[32px] p-4 flex items-center justify-around shadow-2xl border border-white/10">
        <button className="p-3 text-white bg-indigo-600 rounded-2xl">
          <Compass className="w-6 h-6" />
        </button>
        <button className="p-3 text-slate-400 hover:text-white transition-colors">
          <Search className="w-6 h-6" />
        </button>
        <button className="p-3 text-slate-400 hover:text-white transition-colors">
          <Heart className="w-6 h-6" />
        </button>
        <button className="p-3 text-slate-400 hover:text-white transition-colors">
          <Bell className="w-6 h-6" />
        </button>
      </nav>
    </div>
  );
}
