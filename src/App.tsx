import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { ContentDisplay } from './components/ContentDisplay';

function App() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navigation
        activeMenu={activeMenu}
        activeSubmenu={activeSubmenu}
        onMenuSelect={setActiveMenu}
        onSubmenuSelect={setActiveSubmenu}
      />
      <ContentDisplay contentId={activeSubmenu || activeMenu} />
      
      <footer className="bg-gray-800 text-white py-12 mt-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About AHMI</h3>
              <p className="text-gray-300 text-sm">
                Al Haq Madrasatul Islah is dedicated to providing authentic Islamic education
                combined with modern knowledge, creating balanced individuals for the betterment of society.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Courses</a></li>
                <li><a href="#" className="hover:text-white">Admissions</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white">Quran</a></li>
                <li><a href="#" className="hover:text-white">Hadith</a></li>
                <li><a href="#" className="hover:text-white">Islamic Articles</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>📧 info@ahmi.org</li>
                <li>📞 +92-21-1234567</li>
                <li>🌐 www.ahmi.org</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Al Haq Madrasatul Islah. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
