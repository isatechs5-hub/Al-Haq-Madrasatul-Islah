import React, { useState } from 'react';
import { MenuItem } from '../types';
import { menuItems } from '../data/menuItems';
import { getIcon } from './icons';
import { cn } from '../utils/cn';

interface NavigationProps {
  activeMenu: string | null;
  activeSubmenu: string | null;
  onMenuSelect: (menuId: string | null) => void;
  onSubmenuSelect: (submenuId: string | null) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeMenu,
  activeSubmenu,
  onMenuSelect,
  onSubmenuSelect,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => {
                onMenuSelect(null);
                onSubmenuSelect(null);
              }}
              className="flex items-center space-x-2 text-primary-700 hover:text-primary-800 transition-colors"
            >
              <span className="text-2xl">🕌</span>
              <span className="font-bold text-lg">AHMI</span>
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className={cn(
            "md:flex items-center space-x-1",
            mobileMenuOpen ? "block absolute top-16 left-0 right-0 bg-white shadow-lg p-4" : "hidden"
          )}>
            {menuItems.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => {
                      if (item.submenus) {
                        onMenuSelect(activeMenu === item.id ? null : item.id);
                      } else {
                        onMenuSelect(item.id);
                        onSubmenuSelect(null);
                        setMobileMenuOpen(false);
                      }
                    }}
                    className={cn(
                      "flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200",
                      activeMenu === item.id
                        ? "bg-primary-100 text-primary-700"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                    {item.submenus && (
                      <svg
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          activeMenu === item.id ? "rotate-180" : ""
                        )}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>

                  {item.submenus && activeMenu === item.id && (
                    <div className="absolute left-0 top-full mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                      {item.submenus.map((submenu) => {
                        const SubIcon = submenu.icon ? getIcon(submenu.icon) : null;
                        return (
                          <button
                            key={submenu.id}
                            onClick={() => {
                              onSubmenuSelect(submenu.id);
                              setMobileMenuOpen(false);
                            }}
                            className={cn(
                              "w-full flex items-center space-x-2 px-4 py-2 text-left transition-colors",
                              activeSubmenu === submenu.id
                                ? "bg-primary-50 text-primary-700"
                                : "text-gray-700 hover:bg-gray-50"
                            )}
                          >
                            {SubIcon && <SubIcon className="w-4 h-4" />}
                            <span className="text-sm">{submenu.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
