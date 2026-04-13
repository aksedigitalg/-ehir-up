import { motion } from "motion/react";
import { 
  Search, 
  MapPin, 
  Cloud, 
  Calendar, 
  Compass, 
  Heart, 
  Navigation, 
  Menu,
  Bell,
  Star,
  Clock,
  ArrowRight,
  Coffee,
  Music,
  Camera
} from "lucide-react";

const CATEGORIES = [
  { name: "Restaurants", icon: <Coffee className="w-5 h-5" />, color: "bg-orange-100 text-orange-600" },
  { name: "Events", icon: <Music className="w-5 h-5" />, color: "bg-purple-100 text-purple-600" },
  { name: "Sightseeing", icon: <Camera className="w-5 h-5" />, color: "bg-blue-100 text-blue-600" },
  { name: "Hidden Gems", icon: <Compass className="w-5 h-5" />, color: "bg-emerald-100 text-emerald-600" },
];

const TRENDING_PLACES = [
  {
    id: 1,
    name: "The Sky Garden",
    category: "Sightseeing",
    rating: 4.9,
    reviews: 1240,
    image: "https://picsum.photos/seed/skygarden/600/400",
    price: "$$$"
  },
  {
    id: 2,
    name: "Artisanal Brews",
    category: "Coffee Shop",
    rating: 4.8,
    reviews: 850,
    image: "https://picsum.photos/seed/coffee/600/400",
    price: "$$"
  },
  {
    id: 3,
    name: "Neon District",
    category: "Nightlife",
    rating: 4.7,
    reviews: 2100,
    image: "https://picsum.photos/seed/neon/600/400",
    price: "$$$"
  }
];

const UPCOMING_EVENTS = [
  {
    id: 1,
    title: "Summer Jazz Festival",
    date: "Aug 15, 2024",
    location: "Central Park",
    image: "https://picsum.photos/seed/jazz/400/300"
  },
  {
    id: 2,
    title: "Tech Summit 2024",
    date: "Sep 02, 2024",
    location: "Convention Center",
    image: "https://picsum.photos/seed/tech/400/300"
  }
];

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

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-12">
        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden bg-slate-900 h-[400px] flex items-center px-8 md:px-16">
          <img 
            src="https://picsum.photos/seed/cityhero/1920/1080" 
            alt="City Hero" 
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10 max-w-2xl space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
            >
              Discover the <span className="text-indigo-400">Heart</span> of Your City
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-300 font-medium"
            >
              Explore hidden gems, trending spots, and local events happening right now.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative max-w-md"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search for places, events..."
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </motion.div>
          </div>
        </section>

        {/* Quick Stats & Weather */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
              <Cloud className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Weather</p>
              <p className="text-2xl font-extrabold text-slate-900">24°C, Sunny</p>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Location</p>
              <p className="text-2xl font-extrabold text-slate-900">Downtown</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Today</p>
              <p className="text-2xl font-extrabold text-slate-900">12 Events</p>
            </div>
          </motion.div>
        </section>

        {/* Categories */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-slate-900">Explore Categories</h2>
            <button className="text-indigo-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.map((cat, idx) => (
              <motion.button
                key={cat.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-6 rounded-3xl ${cat.color} flex flex-col items-center gap-3 font-bold transition-all shadow-sm`}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Trending Places */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-slate-900">Trending Places</h2>
            <button className="text-indigo-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              See More <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRENDING_PLACES.map((place, idx) => (
              <motion.div
                key={place.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={place.image} 
                    alt={place.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <button className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white hover:bg-white hover:text-red-500 transition-all">
                    <Heart className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-xs font-bold text-slate-900">
                    {place.category}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">{place.name}</h3>
                    <span className="text-indigo-600 font-bold">{place.price}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm font-bold text-slate-500">
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{place.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>Open Now</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {UPCOMING_EVENTS.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col sm:flex-row bg-white p-4 rounded-[32px] shadow-sm border border-slate-100 gap-6 items-center"
              >
                <div className="w-full sm:w-32 h-32 rounded-2xl overflow-hidden shrink-0">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 space-y-2 text-center sm:text-left">
                  <p className="text-indigo-600 font-bold text-sm">{event.date}</p>
                  <h3 className="text-lg font-extrabold text-slate-900">{event.title}</h3>
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-slate-500 text-sm font-semibold">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <button className="p-4 bg-slate-50 rounded-2xl text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all">
                  <ArrowRight className="w-6 h-6" />
                </button>
              </motion.div>
            ))}
          </div>
        </section>
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
