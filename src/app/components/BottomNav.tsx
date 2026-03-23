import { Home, Plus, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';

const navItems = [
  { id: 'home', icon: Home, path: '/' },
  { id: 'protect', icon: Plus, path: '/protect', isCenter: true },
  { id: 'my', icon: User, path: '/settings' },
];

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <div className="absolute bottom-0 left-0 right-0 z-30 bg-white pb-6">
      <div className="relative w-full h-[70px] flex justify-between items-center px-14">
        {navItems.map((item) => {
          const active = isActive(item.path);
          
          if (item.isCenter) {
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className="relative flex items-center justify-center -translate-y-4"
              >
                <div className="w-[64px] h-[64px] bg-[#111] rounded-full flex items-center justify-center shadow-lg z-10 transition-transform active:scale-95">
                  <item.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
              </button>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className="flex items-center justify-center p-2"
            >
              <item.icon
                className={`w-[30px] h-[30px] transition-colors ${
                  active ? 'text-gray-900' : 'text-gray-300'
                }`}
                strokeWidth={active ? 2.5 : 2}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}