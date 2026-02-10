import { ContentItem, Course, AdmissionInfo, CountrySite, DonationAppeal } from '../types';

export const contentData: Record<string, ContentItem> = {
  'who-is-allah': {
    id: 'who-is-allah',
    title: 'Who is Allah in Islam?',
    introduction: 'Allah is the Arabic word for God, used by Muslims and Arabic-speaking Christians and Jews. In Islam, Allah is the One and Only God, the Creator and Sustainer of the entire universe. Understanding who Allah is forms the foundation of Islamic faith and practice.',
    sections: [
      {
        heading: 'Meaning of Allah',
        content: 'The word "Allah" comes from the Arabic root "Al-Ilah," meaning "The God" or "The Deity." It is a unique name that cannot be made plural or assigned gender, emphasizing the absolute oneness and uniqueness of God. Unlike other names for God in various languages, "Allah" has no linguistic variations and remains unchanged across all Arabic-speaking communities.',
      },
      {
        heading: 'Attributes of Allah',
        content: 'Allah possesses perfect attributes that describe His nature. These include:',
        subsections: [
          {
            heading: 'Al-Rahman (The Most Merciful)',
            content: 'Allah\'s mercy encompasses all of creation. His mercy is unlimited and extends to every being, regardless of their faith or actions.',
          },
          {
            heading: 'Al-Rahim (The Especially Merciful)',
            content: 'This attribute refers to Allah\'s specific mercy bestowed upon believers, particularly in the Hereafter.',
          },
          {
            heading: 'Al-Khaliq (The Creator)',
            content: 'Allah is the Creator of everything that exists. He created the universe, angels, human beings, and all living things with wisdom and purpose.',
          },
          {
            heading: 'Al-\'Alim (The All-Knowing)',
            content: 'Allah has perfect knowledge of everything past, present, and future. Nothing is hidden from His knowledge.',
          },
          {
            heading: 'As-Sami (The All-Hearing)',
            content: 'Allah hears all sounds and prayers, whether spoken or unspoken.',
          },
          {
            heading: 'Al-Basir (The All-Seeing)',
            content: 'Allah sees everything visible and invisible, witnessing all actions and intentions.',
          },
        ],
      },
      {
        heading: 'Difference Between Allah and Gods',
        content: 'In Islam, Allah is absolutely unique and unlike any created being. Key differences include:',
        subsections: [
          {
            heading: 'Absolute Oneness (Tawhid)',
            content: 'Allah is one, with no partners, associates, or equals. He has no son, no father, and no divine family. This concept of Tawhid is the central pillar of Islamic faith.',
          },
          {
            heading: 'No Human Form',
            content: 'Allah is beyond human limitations and physical form. He is not bound by space, time, or any physical characteristics.',
          },
          {
            heading: 'Self-Sufficient',
            content: 'Allah needs nothing while everything needs Him. He is independent of His creation, while all creation depends entirely upon Him.',
          },
          {
            heading: 'Eternal and Everlasting',
            content: 'Allah has no beginning and no end. He existed before creation and will continue to exist forever.',
          },
        ],
      },
      {
        heading: 'Quranic References',
        content: 'The Quran contains numerous verses describing Allah:',
        subsections: [
          {
            heading: 'The Verse of the Throne (Ayat al-Kursi)',
            content: '"Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great." (Quran 2:255)',
          },
          {
            heading: 'Surah Al-Ikhlas',
            content: '"Say, \'He is Allah, [who is] One, Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent.\'" (Quran 112:1-4)',
          },
          {
            heading: 'Surah Al-Baqarah 2:255',
            content: '"Allah is the Light of the heavens and the earth." (Quran 24:35)',
          },
        ],
      },
      {
        heading: 'Common Misconceptions',
        content: 'Several misconceptions exist about Allah in Islam:',
        subsections: [
          {
            heading: '"Allah is a Different God"',
            content: 'This is incorrect. Allah is the same God worshipped by Jews and Christians. The Arabic word "Allah" is used by Arabic-speaking Christians and Jews to refer to God. The concept of God in Islam shares the same fundamental attributes as the God of Abraham, Moses, and Jesus.',
          },
          {
            heading: '"Allah is Cruel or Harsh"',
            content: 'This misconception contradicts the Quran\'s emphasis on Allah\'s mercy. The Quran begins with "In the name of Allah, the Most Merciful, the Especially Merciful." Mercy is Allah\'s primary attribute, mentioned more than any other.',
          },
          {
            heading: '"Allah is Distant and Unknowable"',
            content: 'While Allah is transcendent beyond human comprehension, He is also closer to us than our jugular vein (Quran 50:16). Allah invites us to know Him through His signs in creation and through His revelation.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Allah the same as the Christian God?',
        answer: 'Yes, Allah is the same God worshipped by Jews and Christians. The Arabic word "Allah" means "The God" and is used by Arabic-speaking Christians and Jews. Muslims believe in the same God as the God of Abraham, Moses, and Jesus (peace be upon them all).',
      },
      {
        question: 'Why do Muslims call God "Allah" instead of "God"?',
        answer: '"Allah" is the Arabic word for God. Muslims use this term because the Quran was revealed in Arabic, and "Allah" is the name God chose for Himself in the Quran. It emphasizes the unique, singular nature of God.',
      },
      {
        question: 'Can we see Allah?',
        answer: 'In this worldly life, humans cannot see Allah with their physical eyes. However, believers will see Allah in Paradise according to Islamic teachings. Allah is beyond physical form and cannot be contained by space or time.',
      },
      {
        question: 'Does Allah have emotions like humans?',
        answer: 'Allah\'s attributes are perfect and unlike human emotions. While the Quran describes Allah with terms like "loving" or "angry," these are in a way that befits His perfection, without human weaknesses or limitations.',
      },
      {
        question: 'How can we know Allah?',
        answer: 'We can know Allah through His creation (the universe, nature, human beings), His revelation (the Quran), and through reflection and contemplation. The Quran encourages us to use our intellect to recognize Allah\'s signs.',
      },
    ],
    conclusion: 'Understanding who Allah is forms the foundation of Islamic faith. Allah is the One, Unique, Merciful Creator who deserves all worship and devotion. Through studying His attributes and reflecting on His creation, Muslims develop a deeper relationship with their Creator. This knowledge leads to peace, purpose, and guidance in life.',
    seoKeywords: ['Allah', 'Who is Allah', 'God in Islam', 'Islamic beliefs', 'Tawhid', 'Quran', 'Islamic theology'],
  },

  '99-names': {
    id: '99-names',
    title: 'The 99 Names of Allah (Asma-ul-Husna)',
    introduction: 'The 99 Names of Allah, known as Asma-ul-Husna (The Beautiful Names), are the most beautiful names that belong to Allah alone. These names describe His perfect attributes and help believers understand and connect with their Creator.',
    sections: [
      {
        heading: 'Meaning & Benefits',
        content: 'The 99 Names of Allah are derived from the Quran and the authentic sayings of Prophet Muhammad (peace be upon him). Each name reflects a specific attribute of Allah\'s perfection. Memorizing and contemplating these names brings numerous spiritual benefits:',
        subsections: [
          {
            heading: 'Increased Faith',
            content: 'Understanding Allah\'s attributes strengthens one\'s faith and trust in Him.',
          },
          {
            heading: 'Spiritual Connection',
            content: 'Calling upon Allah by His beautiful names creates a deeper spiritual connection.',
          },
          {
            heading: 'Character Development',
            content: 'As believers learn about Allah\'s attributes, they strive to embody those qualities in their own character.',
          },
          {
            heading: 'Peace and Tranquility',
            content: 'Remembering Allah\'s names brings peace to the heart and mind.',
          },
          {
            heading: 'Answered Prayers',
            content: 'The Prophet (peace be upon him) taught that Allah has 99 names, and whoever memorizes them will enter Paradise.',
          },
        ],
      },
      {
        heading: 'How to Memorize',
        content: 'Memorizing the 99 Names of Allah can be achieved through consistent practice:',
        subsections: [
          {
            heading: 'Start Small',
            content: 'Begin with 5-10 names and gradually add more as you become comfortable.',
          },
          {
            heading: 'Understand the Meaning',
            content: 'Don\'t just memorize the words - understand what each name means and reflects about Allah.',
          },
          {
            heading: 'Use Audio Resources',
            content: 'Listen to recitations and explanations of the names regularly.',
          },
          {
            heading: 'Daily Recitation',
            content: 'Recite the names during your daily prayers and dhikr (remembrance of Allah).',
          },
          {
            heading: 'Write Them Down',
            content: 'Keep a written list and review it regularly.',
          },
          {
            heading: 'Teach Others',
            content: 'Teaching what you\'ve learned helps reinforce your own memorization.',
          },
        ],
      },
      {
        heading: 'Daily Life Impact',
        content: 'The 99 Names of Allah have practical applications in daily life:',
        subsections: [
          {
            heading: 'In Prayer',
            content: 'Use the names in your supplications and prayers, calling upon Allah with the attribute most relevant to your need.',
          },
          {
            heading: 'In Difficult Times',
            content: 'Remember names like "Al-Rahman" (The Most Merciful) and "Al-Wadud" (The Most Loving) during hardships.',
          },
          {
            heading: 'In Gratitude',
            content: 'Express thanks using names like "Al-Karim" (The Most Generous) and "Al-Hamid" (The Praiseworthy).',
          },
          {
            heading: 'In Seeking Guidance',
            content: 'Call upon "Al-Hadi" (The Guide) when you need direction in life.',
          },
          {
            heading: 'In Decision Making',
            content: 'Remember "Al-\'Alim" (The All-Knowing) when making important choices.',
          },
        ],
      },
      {
        heading: '10 Sample Names with Meanings',
        content: 'Here are ten of the 99 Beautiful Names of Allah:',
        subsections: [
          {
            heading: '1. Allah (The God)',
            content: 'The proper name of the One True God, encompassing all His beautiful attributes.',
          },
          {
            heading: '2. Ar-Rahman (The Most Merciful)',
            content: 'His mercy encompasses all creation, without exception.',
          },
          {
            heading: '3. Ar-Rahim (The Especially Merciful)',
            content: 'His specific mercy bestowed upon believers, particularly in the Hereafter.',
          },
          {
            heading: '4. Al-Malik (The King)',
            content: 'The King of all kings, the Sovereign of the entire universe.',
          },
          {
            heading: '5. Al-Quddus (The Most Holy)',
            content: 'Free from all imperfections and defects, pure and perfect.',
          },
          {
            heading: '6. As-Salam (The Source of Peace)',
            content: 'The source of all peace and security, free from any imperfection.',
          },
          {
            heading: '7. Al-Mu\'min (The Giver of Faith)',
            content: 'The One who gives faith and security to His creation.',
          },
          {
            heading: '8. Al-Muhaymin (The Guardian)',
            content: 'The One who watches over and protects all creation.',
          },
          {
            heading: '9. Al-\'Aziz (The Almighty)',
            content: 'The Unconquerable, the Most Powerful, who cannot be overcome.',
          },
          {
            heading: '10. Al-Jabbar (The Compeller)',
            content: 'The One who compels His creation according to His will and wisdom.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'Are there exactly 99 names of Allah?',
        answer: 'The Prophet (peace be upon him) mentioned that Allah has 99 names, but this doesn\'t mean Allah only has 99 names. Allah\'s names are infinite, but these 99 are specifically mentioned in the Quran and authentic Hadith.',
      },
      {
        question: 'Can anyone use the 99 Names of Allah?',
        answer: 'These names belong exclusively to Allah. Humans should not call themselves by these names, though some names with "Abd" (servant) prefix, like "Abdullah" (Servant of Allah), are acceptable.',
      },
      {
        question: 'What is the best way to learn the 99 Names?',
        answer: 'Start by learning the meaning of each name, then memorize them gradually. Use audio resources, write them down, and recite them daily in your prayers and supplications.',
      },
      {
        question: 'Do the 99 Names have to be memorized in Arabic?',
        answer: 'While learning the Arabic is beneficial for proper pronunciation, understanding the meaning in your own language is most important. The key is understanding what each name represents about Allah.',
      },
    ],
    conclusion: 'The 99 Names of Allah offer a beautiful way to understand and connect with our Creator. By learning, memorizing, and contemplating these names, believers develop a deeper relationship with Allah and find guidance, comfort, and peace in their daily lives. These names remind us of Allah\'s perfect attributes and inspire us to strive for excellence in our own character.',
    seoKeywords: ['99 Names of Allah', 'Asma-ul-Husna', 'Beautiful Names', 'Islamic names', 'Allah attributes', 'Dhikr', 'Islamic spirituality'],
  },

  'what-is-quran': {
    id: 'what-is-quran',
    title: 'What is the Qur\'an?',
    introduction: 'The Quran is the holy book of Islam, believed by Muslims to be the literal word of Allah revealed to Prophet Muhammad (peace be upon him) over a period of 23 years. It serves as the primary source of Islamic guidance, law, and spirituality.',
    sections: [
      {
        heading: 'Revelation Process',
        content: 'The Quran was revealed gradually to Prophet Muhammad (peace be upon him) through the Angel Gabriel (Jibril):',
        subsections: [
          {
            heading: 'First Revelation',
            content: 'The revelation began in the Cave of Hira when Muhammad (peace be upon him) was 40 years old, with the first verses of Surah Al-\'Alaq.',
          },
          {
            heading: 'Gradual Revelation',
            content: 'The Quran was revealed over approximately 23 years (610-632 CE), with verses coming down in response to specific situations, questions, and events.',
          },
          {
            heading: 'Through Angel Gabriel',
            content: 'The Angel Gabriel would bring the revelation to the Prophet (peace be upon him), who would then memorize and teach it to his companions.',
          },
          {
            heading: 'Written and Memorized',
            content: 'During the Prophet\'s lifetime, scribes wrote down the revelations, and many companions memorized the entire Quran.',
          },
        ],
      },
      {
        heading: 'Preservation',
        content: 'The Quran has been preserved with remarkable accuracy:',
        subsections: [
          {
            heading: 'Memorization (Hifz)',
            content: 'Millions of Muslims have memorized the entire Quran word-for-word, creating a living chain of preservation spanning 14 centuries.',
          },
          {
            heading: 'Written Compilation',
            content: 'During the caliphate of Uthman ibn Affan, the Quran was compiled into a single standardized written text.',
          },
          {
            heading: 'Standardized Text',
            content: 'The Quranic text has remained unchanged since its compilation, with identical copies across the Muslim world.',
          },
          {
            heading: 'Tawatur Transmission',
            content: 'The Quran has been transmitted through mass transmission (tawatur), meaning it was narrated by so many people that it\'s impossible for them to have conspired on a falsehood.',
          },
        ],
      },
      {
        heading: 'Structure',
        content: 'The Quran is organized in a specific structure:',
        subsections: [
          {
            heading: '114 Surahs (Chapters)',
            content: 'The Quran contains 114 chapters of varying lengths, from 3 verses to 286 verses.',
          },
          {
            heading: '6,236 Verses (Ayat)',
            content: 'The total number of verses is 6,236, though some count 6,666 depending on the method of division.',
          },
          {
            heading: '30 Juz (Parts)',
            content: 'For ease of recitation, especially during Ramadan, the Quran is divided into 30 equal parts.',
          },
          {
            heading: 'Meccan and Medinan Surahs',
            content: 'Surahs revealed in Mecca (before migration) typically focus on faith and the Hereafter, while Medinan surahs (after migration) often address law and social matters.',
          },
          {
            heading: 'Chronological vs Arranged Order',
            content: 'The surahs are not arranged chronologically but by divine instruction, with the longest generally at the beginning and shortest at the end.',
          },
        ],
      },
      {
        heading: 'Purpose',
        content: 'The Quran serves multiple purposes in a Muslim\'s life:',
        subsections: [
          {
            heading: 'Divine Guidance',
            content: 'It provides comprehensive guidance for all aspects of life - spiritual, moral, social, economic, and political.',
          },
          {
            heading: 'Criterion for Truth',
            content: 'It serves as a criterion (Furqan) to distinguish between truth and falsehood, right and wrong.',
          },
          {
            heading: 'Source of Law',
            content: 'Along with the Prophet\'s example (Sunnah), it forms the basis of Islamic law (Shariah).',
          },
          {
            heading: 'Spiritual Nourishment',
            content: 'Recitation and reflection on the Quran provides spiritual comfort and strength.',
          },
          {
            heading: 'Sign of Prophethood',
            content: 'The Quran\'s linguistic excellence and preserved nature serve as proof of Muhammad\'s prophethood.',
          },
        ],
      },
      {
        heading: 'Why Muslims Follow It',
        content: 'Muslims follow the Quran because:',
        subsections: [
          {
            heading: 'Divine Origin',
            content: 'Muslims believe it is the literal word of Allah, not the words of Prophet Muhammad (peace be upon him).',
          },
          {
            heading: 'Complete Guidance',
            content: 'It addresses all fundamental questions about life, purpose, and the Hereafter.',
          },
          {
            heading: 'Preserved Miracle',
            content: 'Its preservation over 14 centuries without change is considered a miracle.',
          },
          {
            heading: 'Transformative Power',
            content: 'The Quran has transformed countless lives and civilizations throughout history.',
          },
          {
            heading: 'Universal Message',
            content: 'Its message is relevant to all people, times, and places.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'Is the Quran the same as the Bible?',
        answer: 'No. While both contain teachings from prophets, Muslims believe the Quran is the final, preserved revelation from Allah. The Bible, as it exists today, has undergone changes over time, while the Quran has been preserved exactly as revealed.',
      },
      {
        question: 'Can the Quran be translated?',
        answer: 'The Quran can be translated into other languages for understanding, but translations are not considered the Quran itself. The Quran is only the Arabic text revealed by Allah. Translations are called "interpretations" or "meanings of the Quran."',
      },
      {
        question: 'How do Muslims treat the Quran?',
        answer: 'Muslims treat the Quran with utmost respect. They perform ablution (ritual washing) before touching it, place it in a high place, and avoid placing other objects on top of it. It is often covered with a decorative cloth when not in use.',
      },
      {
        question: 'Do Muslims worship the Quran?',
        answer: 'No. Muslims worship Allah alone. The Quran is respected as the word of Allah, but it is not worshipped. It is a book of guidance, not an object of worship.',
      },
      {
        question: 'How often do Muslims read the Quran?',
        answer: 'Many Muslims read portions of the Quran daily, especially during prayers. During Ramadan, many complete the entire Quran at least once. The goal is to understand, reflect upon, and implement its teachings.',
      },
    ],
    conclusion: 'The Quran stands as the foundational text of Islam, providing divine guidance for all aspects of life. Its miraculous preservation, comprehensive message, and transformative power continue to impact millions worldwide. For Muslims, it is not just a book but the living word of Allah, a source of guidance, comfort, and direction in their journey through life.',
    seoKeywords: ['Quran', 'What is Quran', 'Islamic holy book', 'Quran revelation', 'Quran preservation', 'Islamic guidance', 'Holy Quran'],
  },

  'quran-science': {
    id: 'quran-science',
    title: 'Qur\'an and Modern Science',
    introduction: 'The relationship between the Quran and modern science is a topic of great interest and discussion. While the Quran is not a science textbook, it contains verses that describe natural phenomena in ways that align with modern scientific discoveries.',
    sections: [
      {
        heading: 'Harmony vs Conflict',
        content: 'The Quran and modern science are not in conflict:',
        subsections: [
          {
            heading: 'Different Purposes',
            content: 'The Quran is a book of guidance, not a science textbook. Its purpose is spiritual and moral guidance, not scientific explanation.',
          },
          {
            heading: 'Complementary Nature',
            content: 'Science explains "how" things work, while the Quran explains "why" they exist. They address different questions.',
          },
          {
            heading: 'No Contradiction',
            content: 'There is no fundamental contradiction between established scientific facts and Quranic verses when properly understood.',
          },
          {
            heading: 'Encouragement of Inquiry',
            content: 'The Quran encourages observation, reflection, and the use of intellect - the foundations of scientific inquiry.',
          },
        ],
      },
      {
        heading: 'Scientific Signs in the Quran',
        content: 'The Quran contains verses that describe natural phenomena in ways that align with modern scientific understanding:',
        subsections: [
          {
            heading: 'The Expanding Universe',
            content: '"And the heaven We constructed with strength, and indeed, We are [its] expander." (Quran 51:47) - This verse describes the expansion of the universe, discovered by modern astronomy.',
          },
          {
            heading: 'Embryonic Development',
            content: 'The Quran describes the stages of embryonic development in remarkable detail: "We created man from an extract of clay. Then We made him as a drop in a place of settlement, firmly fixed. Then We made the drop into an alaqah (leech-like structure), then We made the alaqah into a mudghah (chewed substance)..." (Quran 23:12-14).',
          },
          {
            heading: 'The Water Cycle',
            content: '"And We send down from the sky water in measure, and We give it lodging in the earth, and indeed, We are able to take it away." (Quran 23:18) - This describes the water cycle process.',
          },
          {
            heading: 'Mountains as Pegs',
            content: '"Have We not made the earth as a bed and the mountains as pegs?" (Quran 78:6-7) - Modern geology confirms that mountains have deep roots extending into the earth, stabilizing it like pegs.',
          },
          {
            heading: 'The Two Seas',
            content: '"He released the two seas, meeting [side by side]; between them is a barrier [so] neither of them transgresses." (Quran 55:19-20) - This describes the phenomenon where different bodies of water meet but do not mix immediately due to density differences.',
          },
        ],
      },
      {
        heading: 'Balanced Explanation',
        content: 'A balanced approach is essential when discussing Quran and science:',
        subsections: [
          {
            heading: 'Avoid Exaggeration',
            content: 'Not every verse needs a scientific interpretation. Some verses are metaphorical or have multiple valid meanings.',
          },
          {
            heading: 'Scientific Knowledge Evolves',
            content: 'Scientific theories change over time. What was once considered "scientific fact" may later be disproven. The Quran remains constant.',
          },
          {
            heading: 'Context Matters',
            content: 'Verses should be understood in their proper context - linguistic, historical, and spiritual.',
          },
          {
            heading: 'Not Proof of Islam',
            content: 'Scientific signs in the Quran can strengthen faith but are not the primary proof of Islam\'s truth. The primary proof is the Quran\'s message and the Prophet\'s character.',
          },
          {
            heading: 'Respect for Science',
            content: 'Muslims are encouraged to pursue scientific knowledge. Many early Muslim scholars made significant contributions to science.',
          },
        ],
      },
      {
        heading: 'Historical Muslim Contributions',
        content: 'Muslims have a rich history of scientific achievement:',
        subsections: [
          {
            heading: 'Golden Age of Islam',
            content: 'From the 8th to 14th centuries, Muslim scholars led the world in mathematics, astronomy, medicine, chemistry, and other sciences.',
          },
          {
            heading: 'Key Figures',
            content: 'Scholars like Al-Khwarizmi (algebra), Ibn Sina (medicine), Al-Biruni (astronomy), and Al-Razi (chemistry) made groundbreaking discoveries.',
          },
          {
            heading: 'Preservation of Knowledge',
            content: 'Muslims translated and preserved ancient Greek texts, which later helped spark the European Renaissance.',
          },
          {
            heading: 'Scientific Method',
            content: 'Early Muslim scholars developed and refined the scientific method, emphasizing observation and experimentation.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'Does the Quran contain all scientific knowledge?',
        answer: 'No. The Quran is not a science encyclopedia. It contains signs that point to Allah\'s power and wisdom, but it does not provide detailed scientific explanations. Its primary purpose is guidance, not scientific instruction.',
      },
      {
        question: 'Are there scientific errors in the Quran?',
        answer: 'When properly understood, there are no contradictions between the Quran and established scientific facts. Apparent contradictions usually result from misinterpretation or taking verses out of context.',
      },
      {
        question: 'Why didn\'t the Quran describe modern scientific discoveries?',
        answer: 'The Quran\'s audience was 7th-century Arabia. Describing modern scientific concepts would have been incomprehensible. The Quran speaks in a language people can understand, using familiar imagery.',
      },
      {
        question: 'Should scientific discoveries be used to prove the Quran?',
        answer: 'Scientific discoveries can strengthen faith for some, but they should not be the primary basis for belief. The Quran\'s message, its preservation, and the Prophet\'s character are stronger proofs.',
      },
    ],
    conclusion: 'The relationship between the Quran and modern science is one of harmony, not conflict. While the Quran is not a science textbook, it contains signs that align with modern scientific understanding. Muslims are encouraged to pursue scientific knowledge, seeing it as a means to appreciate Allah\'s creation and serve humanity. The balanced approach recognizes the different purposes of revelation and scientific inquiry while appreciating their complementary nature.',
    seoKeywords: ['Quran and science', 'Islam and science', 'scientific signs', 'Quran miracles', 'Islamic science', 'modern science', 'scientific discoveries'],
  },

  'introduction': {
    id: 'introduction',
    title: 'Al Haq Madrasatul Islah (AHMI) - Introduction',
    introduction: 'Al Haq Madrasatul Islah (AHMI) is a premier Islamic educational institution dedicated to providing authentic Islamic knowledge combined with modern education. Founded with the vision of creating balanced, enlightened individuals who can contribute positively to society.',
    sections: [
      {
        heading: 'Our Vision',
        content: 'To create a generation of Muslims who are:',
        subsections: [
          {
            heading: 'Rooted in Faith',
            content: 'Deeply connected to Islamic teachings and values while understanding their relevance in the modern world.',
          },
          {
            heading: 'Educated and Skilled',
            content: 'Equipped with both religious and secular knowledge to excel in all fields of life.',
          },
          {
            heading: 'Balanced Individuals',
            content: 'Maintaining harmony between spiritual and worldly pursuits, following the prophetic example of moderation.',
          },
          {
            heading: 'Contributors to Society',
            content: 'Actively working to improve their communities and serve humanity through knowledge and action.',
          },
          {
            heading: 'Global Citizens',
            content: 'Prepared to engage with the modern world while maintaining their Islamic identity.',
          },
        ],
      },
      {
        heading: 'Educational Model',
        content: 'AHMI offers a unique educational approach:',
        subsections: [
          {
            heading: 'Integrated Curriculum',
            content: 'Combining traditional Islamic sciences (Quran, Hadith, Fiqh, etc.) with modern subjects (science, mathematics, languages, technology).',
          },
          {
            heading: 'Qualified Scholars',
            content: 'Teachers who are both religiously trained and academically qualified, providing authentic knowledge with contemporary understanding.',
          },
          {
            heading: 'Practical Application',
            content: 'Emphasis on applying Islamic teachings in daily life, not just theoretical knowledge.',
          },
          {
            heading: 'Character Development',
            content: 'Focus on moral and spiritual development alongside academic excellence.',
          },
          {
            heading: 'Critical Thinking',
            content: 'Encouraging students to think critically and engage with contemporary issues from an Islamic perspective.',
          },
        ],
      },
      {
        heading: 'Global Presence',
        content: 'AHMI has established centers across multiple countries:',
        subsections: [
          {
            heading: 'Pakistan',
            content: 'Multiple campuses serving thousands of students with full-time and part-time programs.',
          },
          {
            heading: 'India',
            content: 'Educational centers providing Islamic education alongside modern schooling.',
          },
          {
            heading: 'Bangladesh',
            content: 'Institutions offering comprehensive Islamic and modern education.',
          },
          {
            heading: 'United Kingdom',
            content: 'Centers serving the Muslim community with weekend and evening programs.',
          },
          {
            heading: 'United States',
            content: 'Educational initiatives serving diverse Muslim communities.',
          },
          {
            heading: 'United Arab Emirates',
            content: 'Programs tailored to the needs of the local Muslim community.',
          },
        ],
      },
      {
        heading: 'Islamic + Modern Integration',
        content: 'AHMI\'s unique approach combines the best of both worlds:',
        subsections: [
          {
            heading: 'Authentic Islamic Knowledge',
            content: 'Courses in Quran, Hadith, Fiqh, Aqaid, Seerah, and other Islamic sciences taught by qualified scholars.',
          },
          {
            heading: 'Modern Academic Excellence',
            content: 'Science, mathematics, languages, computer skills, and other contemporary subjects.',
          },
          {
            heading: 'Career Preparation',
            content: 'Vocational training and career guidance to help students succeed in professional life.',
          },
          {
            heading: 'Language Skills',
            content: 'Arabic, Urdu, English, and other languages to enable global communication.',
          },
          {
            heading: 'Technology Integration',
            content: 'Modern teaching methods and technology to enhance learning.',
          },
          {
            heading: 'Community Engagement',
            content: 'Programs that connect students with their communities and encourage social responsibility.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'What makes AHMI different from other Islamic institutions?',
        answer: 'AHMI uniquely combines authentic Islamic education with modern academic subjects, preparing students for both religious and professional life. Our integrated curriculum and qualified scholars provide balanced education.',
      },
      {
        question: 'Is AHMI only for religious studies?',
        answer: 'No. AHMI offers a comprehensive curriculum that includes both Islamic sciences and modern academic subjects, preparing students for all aspects of life.',
      },
      {
        question: 'Are AHMI programs available online?',
        answer: 'Yes, AHMI offers both on-campus and online programs to reach students globally. Our online platform provides flexible learning options.',
      },
      {
        question: 'What qualifications do AHMI teachers have?',
        answer: 'Our teachers are qualified scholars from reputable Islamic institutions who also have modern academic qualifications, ensuring authentic knowledge with contemporary understanding.',
      },
      {
        question: 'How can I enroll in AHMI programs?',
        answer: 'You can apply through our website or visit one of our centers. We offer various programs with flexible schedules to accommodate different needs.',
      },
    ],
    conclusion: 'Al Haq Madrasatul Islah stands as a beacon of balanced Islamic education, combining the richness of Islamic tradition with the needs of the modern world. Our vision is to create generations of Muslims who are knowledgeable, skilled, and committed to serving humanity. Through our integrated educational model and global presence, AHMI continues to make a positive impact on communities worldwide.',
    seoKeywords: ['Al Haq Madrasatul Islah', 'AHMI', 'Islamic education', 'Islamic school', 'Islamic institution', 'Islamic learning', 'modern Islamic education'],
  },
};

export const coursesData: Course[] = [
  {
    id: 'aqaid',
    name: 'Aqaid (Islamic Beliefs)',
    description: 'Comprehensive study of Islamic creed and beliefs, covering the fundamentals of faith, the attributes of Allah, prophethood, and the Hereafter.',
    duration: '2 years',
    careerScope: ['Islamic scholar', 'Teacher', 'Researcher', 'Imam', 'Counselor'],
    islamicRelevance: 'Understanding correct beliefs is essential for every Muslim. This course provides the foundation for all Islamic knowledge and practice.',
    whatStudentsLearn: [
      'Fundamentals of Islamic creed (Tawhid, Risalah, Akhirah)',
      'Attributes of Allah and their implications',
      'Belief in angels, revealed books, and prophets',
      'Concept of predestination and free will',
      'Answers to contemporary theological questions',
      'Refutation of misconceptions about Islam',
    ],
  },
  {
    id: 'tafseer',
    name: 'Tafseer (Quranic Exegesis)',
    description: 'In-depth study of Quranic interpretation, covering the meanings, context, and applications of Quranic verses.',
    duration: '3 years',
    careerScope: ['Quran teacher', 'Researcher', 'Writer', 'Lecturer', 'Translator'],
    islamicRelevance: 'Understanding the Quran is essential for practicing Islam correctly. Tafseer enables Muslims to comprehend divine guidance.',
    whatStudentsLearn: [
      'Principles of Quranic interpretation',
      'Contextual understanding of verses',
      'Arabic grammar and vocabulary',
      'Thematic and analytical tafseer',
      'Scientific and historical aspects',
      'Practical application of Quranic teachings',
    ],
  },
  {
    id: 'hadees',
    name: 'Hadees (Prophetic Traditions)',
    description: 'Study of the sayings, actions, and approvals of Prophet Muhammad (peace be upon him), including methodology of Hadith sciences.',
    duration: '3 years',
    careerScope: ['Hadith scholar', 'Teacher', 'Researcher', 'Mufti', 'Lecturer'],
    islamicRelevance: 'Hadith provides detailed explanation and practical application of Quranic teachings. It is the second source of Islamic law.',
    whatStudentsLearn: [
      'Classification of Hadith (sahih, hasan, da\'if)',
      'Biographies of Hadith narrators',
      'Methodology of Hadith criticism',
      'Major Hadith collections (Sihah Sittah)',
      'Application of Hadith in daily life',
      'Chain of transmission analysis',
    ],
  },
  {
    id: 'fiqh',
    name: 'Fiqh (Islamic Jurisprudence)',
    description: 'Study of Islamic law derived from Quran and Hadith, covering worship, transactions, family law, and contemporary issues.',
    duration: '4 years',
    careerScope: ['Mufti', 'Islamic lawyer', 'Teacher', 'Judge (Qadi)', 'Counselor'],
    islamicRelevance: 'Fiqh provides practical guidance for all aspects of life, enabling Muslims to live according to Islamic teachings.',
    whatStudentsLearn: [
      'Principles of Islamic jurisprudence (Usul al-Fiqh)',
      'Laws of purification and prayer',
      'Fasting, zakat, and hajj regulations',
      'Family law and inheritance',
      'Commercial and financial transactions',
      'Contemporary issues and Islamic solutions',
    ],
  },
  {
    id: 'seerat',
    name: 'Seerat (Prophetic Biography)',
    description: 'Comprehensive study of the life of Prophet Muhammad (peace be upon him), drawing lessons for personal and social life.',
    duration: '1 year',
    careerScope: ['Teacher', 'Writer', 'Lecturer', 'Researcher', 'Counselor'],
    islamicRelevance: 'The Prophet\'s life is the perfect example for Muslims to follow. Seerah provides practical guidance for all situations.',
    whatStudentsLearn: [
      'Pre-Islamic Arabia and its context',
      'Prophetic mission in Mecca and Medina',
      'Treaties, battles, and diplomacy',
      'Leadership and management lessons',
      'Family and social relationships',
      'Application of prophetic example today',
    ],
  },
  {
    id: 'tasawwuf',
    name: 'Tasawwuf (Islamic Spirituality)',
    description: 'Study of Islamic spirituality and purification of the heart, focusing on developing a close relationship with Allah.',
    duration: '2 years',
    careerScope: ['Spiritual guide', 'Teacher', 'Counselor', 'Writer', 'Lecturer'],
    islamicRelevance: 'Spiritual purification is essential for sincere worship and moral excellence. Tasawwuf complements external Islamic practices.',
    whatStudentsLearn: [
      'Purification of the heart (Tazkiyah)',
      'Development of spiritual virtues',
      'Methods of dhikr and meditation',
      'Overcoming spiritual diseases',
      'Balancing spiritual and worldly life',
      'Teachings of great spiritual masters',
    ],
  },
];

export const admissionData: AdmissionInfo = {
  year: 2025,
  eligibility: 'Students who have completed at least 10 years of schooling (Matriculation) are eligible for admission. No prior Islamic education is required for beginner courses.',
  programs: [
    'Full-time Alim Course (6 years)',
    'Part-time Weekend Programs',
    'Online Distance Learning',
    'Short-term Certificate Courses',
    'Summer Islamic Programs',
  ],
  cities: [
    'Karachi, Pakistan',
    'Lahore, Pakistan',
    'Islamabad, Pakistan',
    'Hyderabad, Pakistan',
    'Mumbai, India',
    'Delhi, India',
    'Dhaka, Bangladesh',
    'London, UK',
    'Manchester, UK',
    'New York, USA',
    'Chicago, USA',
    'Dubai, UAE',
  ],
  entranceTest: 'A basic entrance test covering general knowledge and Islamic fundamentals will be conducted. The test assesses aptitude and basic understanding rather than prior knowledge.',
  callToAction: 'Applications for the 2025 academic year are now open. Visit your nearest AHMI center or apply online through our website. Limited seats available - apply early to secure your place.',
};

export const donationData: DonationAppeal = {
  purpose: 'Your donation supports Islamic education, community welfare, and humanitarian efforts. Contributions help provide scholarships, maintain educational facilities, support needy families, and fund disaster relief operations.',
  transparency: 'AHMI maintains complete financial transparency. Annual reports are published, and donors receive regular updates on how their contributions are used. Every donation is documented and accounted for.',
  impactStories: [
    'Over 500 students received full scholarships in 2024, enabling them to pursue Islamic education',
    '200+ families received monthly financial support through our welfare program',
    'Emergency relief provided to 10,000+ people affected by natural disasters',
    '50+ new educational centers established in underserved communities',
    'Clean water projects completed in 15 rural areas',
  ],
  quranicEncouragement: 'The Quran says: "The example of those who spend their wealth in the way of Allah is like a seed [of grain] that sprouts seven spikes; in each spike is a hundred grains. And Allah multiplies [His reward] for whom He wills." (Quran 2:261). Your charity brings multiplied rewards in this life and the Hereafter.',
};

export const countrySites: CountrySite[] = [
  {
    country: 'Pakistan',
    activities: ['Full-time Islamic schools', 'Weekend programs', 'Community centers', 'Welfare initiatives', 'Youth programs'],
    language: 'Urdu and English',
    communityFocus: 'Providing authentic Islamic education to youth and adults, with emphasis on character development and community service.',
  },
  {
    country: 'India',
    activities: ['Islamic schools', 'Distance learning', 'Community outreach', 'Interfaith dialogue', 'Educational workshops'],
    language: 'Urdu, Hindi, and English',
    communityFocus: 'Serving diverse Muslim communities with programs that respect local culture while maintaining Islamic authenticity.',
  },
  {
    country: 'Bangladesh',
    activities: ['Madrasahs', 'Vocational training', 'Healthcare initiatives', 'Educational support', 'Community development'],
    language: 'Bengali and Arabic',
    communityFocus: 'Combining Islamic education with practical skills training to empower communities and reduce poverty.',
  },
  {
    country: 'United Kingdom',
    activities: ['Weekend Islamic schools', 'Evening classes', 'Youth programs', 'Family counseling', 'Community events'],
    language: 'English and Urdu',
    communityFocus: 'Helping British Muslims maintain Islamic identity while integrating positively into British society.',
  },
  {
    country: 'United States',
    activities: ['Online programs', 'Weekend schools', 'Community workshops', 'Interfaith engagement', 'Youth mentoring'],
    language: 'English',
    communityFocus: 'Providing accessible Islamic education to American Muslims while fostering positive community relations.',
  },
  {
    country: 'United Arab Emirates',
    activities: ['Islamic courses', 'Arabic language programs', 'Community lectures', 'Family programs', 'Cultural events'],
    language: 'Arabic and English',
    communityFocus: 'Serving the diverse expatriate and local Muslim communities in the UAE with quality Islamic education.',
  },
];
