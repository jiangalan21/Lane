import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router';
import { useState } from 'react';
import { Home, User, PlusCircle, Menu } from 'lucide-react';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import CreatePostPage from './components/CreatePostPage';
import PostDetailPage from './components/PostDetailPage';

function Navigation() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1a] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1
            className="text-2xl font-bold cursor-pointer"
            onClick={() => navigate('/')}
          >
            Lane
          </h1>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Slide-out Menu */}
      {showMenu && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setShowMenu(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-64 bg-[#222] shadow-lg z-50 p-6">
            <button
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              ✕
            </button>
            <nav className="mt-12 space-y-4">
              <button
                onClick={() => {
                  navigate('/');
                  setShowMenu(false);
                }}
                className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigate('/profile');
                  setShowMenu(false);
                }}
                className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Profile
              </button>
              <button
                onClick={() => {
                  navigate('/create');
                  setShowMenu(false);
                }}
                className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                New Entry
              </button>
            </nav>
          </div>
        </>
      )}

      {/* Floating Home Button - Bottom Left */}
      <button
        onClick={() => navigate('/')}
        className="fixed bottom-6 left-6 z-40 bg-[#222] shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)] w-16 h-16 rounded-full flex items-center justify-center hover:bg-[#2a2a2a] transition-colors"
      >
        <Home className="w-7 h-7" />
      </button>

      {/* Floating Create Button - Bottom Right */}
      <button
        onClick={() => navigate('/create')}
        className="fixed bottom-6 right-6 z-40 bg-[#222] shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)] w-16 h-16 rounded-full flex items-center justify-center hover:bg-[#2a2a2a] transition-colors"
      >
        <PlusCircle className="w-7 h-7" />
      </button>
    </>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
