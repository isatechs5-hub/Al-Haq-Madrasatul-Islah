import React from 'react';
import { ContentItem } from '../types';
import { contentData } from '../data/content';
import { coursesData, admissionData, donationData, countrySites } from '../data/content';

interface ContentDisplayProps {
  contentId: string | null;
}

export const ContentDisplay: React.FC<ContentDisplayProps> = ({ contentId }) => {
  if (!contentId) {
    return (
      <div className="container-custom py-12">
        <div className="text-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-12 shadow-xl border border-emerald-100">
          <div className="text-8xl mb-6 animate-pulse">🕌</div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Welcome to Al Haq Madrasatul Islah
          </h1>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your gateway to authentic Islamic knowledge and comprehensive education. Explore our diverse programs 
            ranging from Quranic studies to advanced Islamic scholarship, all designed to nurture spiritual growth 
            and academic excellence.
          </p>
          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Home Section */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">🏠</span> Home
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {['Admissions Open', 'Apply Online', 'News & Events', 'Announcements'].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-emerald-200 hover:border-emerald-400 hover:scale-105 transform">
                    <div className="flex items-center space-x-2">
                      <span className="text-emerald-600 group-hover:text-emerald-700 transition-colors">▸</span>
                      <span className="text-gray-700 font-medium group-hover:text-emerald-700 transition-colors">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Departments Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">🏫</span> Departments
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Aalim Program (Dars-e-Nizami)',
                  'Quran Studies',
                  'International Students Division',
                  'Women\'s Education Wing',
                  'Advanced Studies Department',
                  'School & College Section',
                  'Global Branch Network'
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-blue-200">
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-600">▸</span>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Programs Section */}
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">📚</span> Programs
              </h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-purple-700 mb-3">Quranic Education</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    'Noorani Qaida',
                    'Quran Reading (Nazra)',
                    'Quran Memorization (Hifz)',
                    'Quran Recitation Studies',
                    'Advanced Qira\'at Program'
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-purple-200">
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-600">▸</span>
                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-purple-700 mb-3">Islamic Studies</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    '8-Year Aalim Course Program',
                    '6-Year Aalim Course Program',
                    'Fiqh Course Specialization',
                    'Hadith Course Specialization'
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-purple-200">
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-600">▸</span>
                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-purple-700 mb-3">Professional & Other Programs</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    'Arabic Language Studies',
                    'Islamic Media & Communication',
                    'Diploma Certification Programs'
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-purple-200">
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-600">▸</span>
                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Admissions Section */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg border border-orange-100 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-orange-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">🎓</span> Admissions
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Online Admission Form',
                  'Admission Status',
                  'Fee Structure',
                  'Eligibility Criteria',
                  'Prospectus Download'
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-orange-200">
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-600">▸</span>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academics Section */}
            <div className="bg-gradient-to-r from-cyan-50 to-sky-50 rounded-2xl p-8 shadow-lg border border-cyan-100 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-cyan-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">📖</span> Academics
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Academic Calendar',
                  'Examination Results',
                  'Student Portal Login',
                  'Alumni Registration',
                  'E-Learning Platform'
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-cyan-200">
                    <div className="flex items-center space-x-2">
                      <span className="text-cyan-600">▸</span>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Institutions Section */}
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 shadow-lg border border-rose-100 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-rose-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">🏛️</span> Institutions
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Quran Memorization Center',
                  'Online Learning School',
                  'Women\'s Institute',
                  'International Department',
                  'Mosque Services Unit'
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-rose-200">
                    <div className="flex items-center space-x-2">
                      <span className="text-rose-600">▸</span>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Section */}
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">🤝</span> Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Certificate Verification',
                  'Welfare Programs',
                  'Media Center',
                  'Spiritual Development',
                  'New Muslim Support'
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-emerald-200 hover:border-emerald-400 hover:scale-105 transform">
                    <div className="flex items-center space-x-2">
                      <span className="text-emerald-600 group-hover:text-emerald-700 transition-colors">▸</span>
                      <span className="text-gray-700 font-medium group-hover:text-emerald-700 transition-colors">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources Section */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-indigo-100 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-indigo-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">📂</span> Resources
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Document Library (English & Urdu)',
                  'Video Gallery',
                  'Photo Gallery',
                  'Research Publications',
                  'Download Center'
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-indigo-200">
                    <div className="flex items-center space-x-2">
                      <span className="text-indigo-600">▸</span>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* About Us Section */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-amber-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">ℹ️</span> About Us
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'About the Institution',
                  'Vision & Mission',
                  'Leadership',
                  'Faculty Members',
                  'Achievements',
                  'Activities',
                  'Future Roadmap'
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-amber-200">
                    <div className="flex items-center space-x-2">
                      <span className="text-amber-600">▸</span>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-8 shadow-lg border border-red-100 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">📞</span> Contact
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  'Branch Locations',
                  'Help Desk',
                  'Support Center',
                  'Feedback Form'
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-red-200">
                    <div className="flex items-center space-x-2">
                      <span className="text-red-600">▸</span>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const content = contentData[contentId];
  const course = coursesData.find((c) => c.id === contentId);
  const admission = contentId === 'admissions' ? admissionData : null;
  const donation = contentId === 'donation' ? donationData : null;
  const country = countrySites.find((c) => c.country.toLowerCase() === contentId.split('-')[0]);

  if (!content && !course && !admission && !donation && !country) {
    return (
      <div className="container-custom py-12">
        <div className="text-center">
          <div className="text-4xl mb-4">📝</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Content Coming Soon</h2>
          <p className="text-gray-600">
            This section is being prepared. Please check back later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <article className="container-custom py-12">
      {content && <ContentItemDisplay content={content} />}
      {course && <CourseDisplay course={course} />}
      {admission && <AdmissionDisplay admission={admission} />}
      {donation && <DonationDisplay donation={donation} />}
      {country && <CountryDisplay country={country} />}
    </article>
  );
};

const ContentItemDisplay: React.FC<{ content: ContentItem }> = ({ content }) => (
  <>
    <header className="mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        {content.title}
      </h1>
      {content.seoKeywords && (
        <div className="flex flex-wrap gap-2 mb-4">
          {content.seoKeywords.map((keyword) => (
            <span
              key={keyword}
              className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
            >
              {keyword}
            </span>
          ))}
        </div>
      )}
    </header>

    <div className="prose prose-lg max-w-none">
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">{content.introduction}</p>
      </section>

      {content.sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.heading}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
          {section.subsections && (
            <div className="space-y-4 ml-4">
              {section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="pl-4 border-l-4 border-primary-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {subsection.heading}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{subsection.content}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}

      {content.faqs && content.faqs.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {content.faqs.map((faq, index) => (
              <div key={index} className="card p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Q: {faq.question}</h3>
                <p className="text-gray-700">A: {faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed">{content.conclusion}</p>
      </section>
    </div>
  </>
);

const CourseDisplay: React.FC<{ course: any }> = ({ course }) => (
  <>
    <header className="mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        {course.name}
      </h1>
    </header>

    <div className="prose prose-lg max-w-none">
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Description</h2>
        <p className="text-gray-700 leading-relaxed">{course.description}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Duration</h2>
        <p className="text-gray-700">{course.duration}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What Students Learn</h2>
        <ul className="space-y-2">
          {course.whatStudentsLearn.map((item: string, index: number) => (
            <li key={index} className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Career Scope</h2>
        <div className="flex flex-wrap gap-2">
          {course.careerScope.map((scope: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-gold-100 text-gold-800 rounded-full text-sm"
            >
              {scope}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Islamic Relevance</h2>
        <p className="text-gray-700 leading-relaxed">{course.islamicRelevance}</p>
      </section>
    </div>
  </>
);

const AdmissionDisplay: React.FC<{ admission: any }> = ({ admission }) => (
  <>
    <header className="mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Admissions {admission.year}
      </h1>
    </header>

    <div className="prose prose-lg max-w-none space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Eligibility</h2>
        <p className="text-gray-700">{admission.eligibility}</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Programs Offered</h2>
        <ul className="space-y-2">
          {admission.programs.map((program: string, index: number) => (
            <li key={index} className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span className="text-gray-700">{program}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Cities</h2>
        <div className="grid md:grid-cols-2 gap-2">
          {admission.cities.map((city: string, index: number) => (
            <div key={index} className="flex items-center">
              <span className="text-primary-600 mr-2">📍</span>
              <span className="text-gray-700">{city}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Entrance Test</h2>
        <p className="text-gray-700">{admission.entranceTest}</p>
      </section>

      <section className="card p-6 bg-primary-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Call to Action</h2>
        <p className="text-gray-700 mb-4">{admission.callToAction}</p>
        <button className="btn-primary">Apply Now</button>
      </section>
    </div>
  </>
);

const DonationDisplay: React.FC<{ donation: any }> = ({ donation }) => (
  <>
    <header className="mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Support Our Mission
      </h1>
    </header>

    <div className="prose prose-lg max-w-none space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Purpose of Donation</h2>
        <p className="text-gray-700">{donation.purpose}</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Transparency</h2>
        <p className="text-gray-700">{donation.transparency}</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Impact Stories</h2>
        <div className="space-y-3">
          {donation.impactStories.map((story: string, index: number) => (
            <div key={index} className="flex items-start">
              <span className="text-2xl mr-3">✓</span>
              <span className="text-gray-700">{story}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-6 bg-gold-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quranic Encouragement</h2>
        <p className="text-gray-700 italic">{donation.quranicEncouragement}</p>
      </section>

      <section className="text-center">
        <button className="btn-secondary text-lg px-8 py-3">
          Donate Now 💝
        </button>
      </section>
    </div>
  </>
);

const CountryDisplay: React.FC<{ country: any }> = ({ country }) => (
  <>
    <header className="mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        AHMI {country.country}
      </h1>
    </header>

    <div className="prose prose-lg max-w-none space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Language</h2>
        <p className="text-gray-700">{country.language}</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Activities & Programs</h2>
        <ul className="space-y-2">
          {country.activities.map((activity: string, index: number) => (
            <li key={index} className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span className="text-gray-700">{activity}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Community Focus</h2>
        <p className="text-gray-700">{country.communityFocus}</p>
      </section>
    </div>
  </>
);
