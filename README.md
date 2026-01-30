# Al Haq Madrasatul Islah (AHMI) - Islamic Content Platform

A modern React + TypeScript application for delivering authentic Islamic educational content to Muslims and non-Muslims worldwide.

## Features

- **Comprehensive Islamic Content**: Articles on Islamic beliefs, Quran, Hadith, Islamic history, and more
- **Interactive Navigation**: Easy-to-use menu system with organized categories
- **Responsive Design**: Mobile-first design that works on all devices
- **SEO-Friendly**: Optimized content structure for search engines
- **Modern UI**: Clean, professional interface using TailwindCSS
- **TypeScript**: Full type safety for robust code

## Tech Stack

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **TailwindCSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/       # React components
│   ├── Navigation.tsx
│   ├── ContentDisplay.tsx
│   └── icons.tsx
├── data/            # Content data
│   ├── menuItems.ts
│   └── content.ts
├── types/           # TypeScript types
│   └── index.ts
├── utils/           # Utility functions
│   └── cn.ts
├── App.tsx          # Main application component
└── main.tsx         # Entry point
```

## Content Sections

The platform includes content for:

- **Islam**: Who is Allah, 99 Names of Allah, Quran, Quran & Science, Islamic Shariat
- **Basic Definitions**: Muslim, Mo'min, Mushrik, Kaafir, Munaafiq
- **Islamic History**: Khulafa-e-Rashideen, History of Muslims, Four Imams
- **Other Religions**: Hinduism, Judaism, Christianity, Buddhism, Sikhism, Jainism
- **Questions for Friends**: Respectful dialogue questions for interfaith understanding
- **FAQs on Islam**: Common questions answered
- **Al Haq Madrasatul Islah**: Introduction, Courses, Admissions, Donation, Welfare
- **Country Websites**: Localized content for different countries

## Adding New Content

To add new content:

1. Add content to `src/data/content.ts` in the `contentData` object
2. Follow the `ContentItem` interface structure
3. Add menu items to `src/data/menuItems.ts` if needed
4. Content will automatically be available in the navigation

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* your colors */ },
      gold: { /* your colors */ },
    },
  },
}
```

### Content

All content is in `src/data/content.ts`. Edit this file to update or add content.

## Deployment

The application can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- Any static file hosting

```bash
npm run build
# Deploy the 'dist' folder
```

## Contributing

This is an educational platform for authentic Islamic knowledge. When contributing:

1. Maintain respectful, educational tone
2. Ensure content is accurate and well-sourced
3. Follow the existing code style
4. Test changes thoroughly

## License

© 2025 Al Haq Madrasatul Islah. All rights reserved.

## Support

For questions or support, contact: info@ahmi.org
