export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  submenus?: SubMenuItem[];
}

export interface SubMenuItem {
  id: string;
  label: string;
  icon?: string;
}

export interface ContentItem {
  id: string;
  title: string;
  introduction: string;
  sections: ContentSection[];
  faqs?: FAQ[];
  conclusion: string;
  seoKeywords?: string[];
}

export interface ContentSection {
  heading: string;
  content: string;
  subsections?: ContentSubsection[];
}

export interface ContentSubsection {
  heading: string;
  content: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  duration: string;
  careerScope: string[];
  islamicRelevance: string;
  whatStudentsLearn: string[];
}

export interface CountrySite {
  country: string;
  activities: string[];
  language: string;
  communityFocus: string;
}

export interface DonationAppeal {
  purpose: string;
  transparency: string;
  impactStories: string[];
  quranicEncouragement: string;
}

export interface AdmissionInfo {
  year: number;
  eligibility: string;
  programs: string[];
  cities: string[];
  entranceTest: string;
  callToAction: string;
}
