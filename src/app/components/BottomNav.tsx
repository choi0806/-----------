import { Home, Plus, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
      <div className="relative w-full h-[90px] pointer-events-auto">
        
        {/* Curved Background SVG */}
        <div className="absolute bottom-0 left-0 w-full h-[80px]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 375 80"
            preserveAspectRatio="none"
            style={{ filter: 'drop-shadow(0px -4px 10px rgba(0,0,0,0.06))' }}
          >
            <path
              fill="#FFFFFF"
              d="M0,24 C0,10.745 10.745,0 24,0 H132 C142,0 150,5.4 154,13.5 C161,29.1 173,42 187.5,42 C202,42 214,29.1 221,13.5 C225,5.4 233,0 243,0 H351 C364.255,0 375,10.745 375,24 V80 H0 V24 Z"
            />
          </svg>
        </div>

        {/* Nav Items */}
        <div className="relative w-full h-[80px] mt-[10px] flex justify-between items-center px-10">
          {/* Home */}
          <button
            onClick={() => navigate('/')}
            className="flex flex-col items-center justify-center pt-2 w-16 active:opacity-50"
          >
            <Home
              className={"w-[26px] h-[26px] mb-1.5 transition-colors "}
              strokeWidth={isActive('/') ? 2.5 : 2}
            />
            <span className={"text-[12px] font-bold "}>
              Home
            </span>
          </button>

          {/* Center FAB */}
          <button
            onClick={() => navigate('/photo-select')}
            className="absolute left-1/2 -translate-x-1/2 -top-5 flex items-center justify-center"
          >
            <div className="w-[64px] h-[64px] bg-[#6B4EFF] rounded-full flex items-center justify-center shadow-lg shadow-[#6B4EFF]/30 transition-transform active:scale-95">
              <Plus className="w-8 h-8 text-white mt-0.5" strokeWidth={2.5} />
            </div>
          </button>

          {/* Profile */}
          <button
            onClick={() => navigate('/settings')}
            className="flex flex-col items-center justify-center pt-2 w-16 active:opacity-50"
          >
            <User
              className={"w-[26px] h-[26px] mb-1.5 transition-colors "}
              strokeWidth={isActive('/settings') ? 2.5 : 2}
            />
            <span className={"text-[12px] font-bold "}>
              Profile
            </span>
          </button>
        </div>

      </div>
    </div>
  );
}
