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
        <div className="text-center">
          <div className="text-6xl mb-6">🕌</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Al Haq Madrasatul Islah
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your gateway to authentic Islamic knowledge. Explore our comprehensive collection
            of educational content covering Islam, Islamic history, comparative religion,
            and much more.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card p-6">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-semibold text-lg mb-2">Comprehensive Content</h3>
              <p className="text-gray-600 text-sm">
                In-depth articles on Islamic beliefs, history, and contemporary issues
              </p>
            </div>
            <div className="card p-6">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-semibold text-lg mb-2">Expert Knowledge</h3>
              <p className="text-gray-600 text-sm">
                Authored by qualified Islamic scholars and educators
              </p>
            </div>
            <div className="card p-6">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="font-semibold text-lg mb-2">Global Reach</h3>
              <p className="text-gray-600 text-sm">
                Accessible to Muslims and non-Muslims worldwide
              </p>
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
