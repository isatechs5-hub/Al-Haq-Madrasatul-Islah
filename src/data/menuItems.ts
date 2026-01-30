import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: 'islam',
    label: 'Islam',
    icon: 'Mosque',
    submenus: [
      { id: 'who-is-allah', label: 'Who is Allah?', icon: 'Star' },
      { id: '99-names', label: '99 Names of Allah', icon: 'List' },
      { id: 'what-is-quran', label: 'What is Qur\'an?', icon: 'BookOpen' },
      { id: 'quran-science', label: 'Qur\'an & Modern Science', icon: 'Microscope' },
      { id: 'shariat', label: 'Islamic Shariat', icon: 'Scale' },
    ],
  },
  {
    id: 'definitions',
    label: 'Basic Definitions',
    icon: 'FileText',
    submenus: [
      { id: 'muslim', label: 'Muslim' },
      { id: 'momin', label: 'Mo\'min' },
      { id: 'mushrik', label: 'Mushrik' },
      { id: 'kaafir', label: 'Kaafir' },
      { id: 'munaafiq', label: 'Munaafiq' },
    ],
  },
  {
    id: 'history',
    label: 'Islamic History',
    icon: 'History',
    submenus: [
      { id: 'khulafa', label: 'Khulafa-e-Rashideen', icon: 'Crown' },
      { id: 'muslim-history', label: 'Brief History of Muslims', icon: 'Clock' },
      { id: 'four-imams', label: 'Four Imams / Muhaddiseen', icon: 'Users' },
    ],
  },
  {
    id: 'religions',
    label: 'Other Religions',
    icon: 'Globe',
    submenus: [
      { id: 'hinduism', label: 'Hinduism' },
      { id: 'judaism', label: 'Judaism' },
      { id: 'christianity', label: 'Christianity' },
      { id: 'buddhism', label: 'Buddhism' },
      { id: 'sikhism', label: 'Sikhism' },
      { id: 'jainism', label: 'Jainism' },
    ],
  },
  {
    id: 'questions',
    label: 'Questions for Friends',
    icon: 'MessageCircle',
    submenus: [
      { id: 'questions-hinduism', label: 'For Hindus' },
      { id: 'questions-judaism', label: 'For Jews' },
      { id: 'questions-christianity', label: 'For Christians' },
      { id: 'questions-buddhism', label: 'For Buddhists' },
      { id: 'questions-sikhism', label: 'For Sikhs' },
    ],
  },
  {
    id: 'faqs',
    label: 'FAQs on Islam',
    icon: 'HelpCircle',
  },
  {
    id: 'madrasah',
    label: 'Al Haq Madrasatul Islah',
    icon: 'School',
    submenus: [
      { id: 'introduction', label: 'Introduction' },
      { id: 'courses', label: 'Courses', icon: 'Book' },
      { id: 'admissions', label: 'Admissions', icon: 'UserPlus' },
      { id: 'donation', label: 'Donation', icon: 'Heart' },
      { id: 'welfare', label: 'Welfare & NGO', icon: 'HandHeart' },
      { id: 'gallery', label: 'Gallery / Events', icon: 'Image' },
    ],
  },
  {
    id: 'countries',
    label: 'Country Websites',
    icon: 'MapPin',
    submenus: [
      { id: 'pakistan', label: 'Pakistan' },
      { id: 'india', label: 'India' },
      { id: 'bangladesh', label: 'Bangladesh' },
      { id: 'uk', label: 'United Kingdom' },
      { id: 'usa', label: 'United States' },
      { id: 'uae', label: 'UAE' },
    ],
  },
];
