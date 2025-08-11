import {useState} from 'react';
import IqraUniversityLogo from '../assets/IqraUniversity.jpg';
import AppualsLogo from '../assets/Appuals.jpg';

const WorkExperience = () => {
  const [activeTab, setActiveTab] = useState('work');

  const workExperience = [
    {
      company: 'Appuals',
      role: 'Ghost Writer',
      period: 'Feb 2024 - Jul 2024',
      logo: AppualsLogo,
      website: 'https://appuals.com/',
      achievements: [
        'Composed 20+ troubleshooting guides for common operating system and software errors, enabling users to resolve technical issues independently.',
        'Conducted in-depth research to ensure accuracy and reliability of all guides, maintaining high-quality standards.',
        'Refined and proofread content for clarity and consistency.',
      ],
    },
  ];

  const education = [
    {
      institution: 'Iqra University',
      degree: 'BS in Computer Science',
      period: 'Oct 2023 - 2027',
      logo: IqraUniversityLogo,
      website: 'https://iuisl.iqra.edu.pk/',
    },
  ];

  const renderContent = () => {
    const data = activeTab === 'work' ? workExperience : education;

    return (
      <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="p-0">
          <ul className="ml-10 border-l border-white/20">
            {data.map((item, index) => (
              <li key={index} className="relative ml-10 py-4">
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
                  <img
                    className="size-12 rounded-full border object-contain"
                    alt={item.company || item.institution}
                    src={item.logo}
                  />
                </a>

                <div className="flex flex-1 flex-col justify-start gap-1">
                  <time className="text-xs text-white/60">{item.period}</time>
                  <h2 className="font-semibold leading-none text-white">
                    {item.company || item.institution}
                  </h2>
                  <p className="text-sm text-white/70">
                    {item.role || item.degree}
                  </p>

                  {item.achievements && (
                    <ul className="ml-4 list-outside list-disc">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-white/70 pr-8">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="mb-2 grid w-full grid-cols-2 rounded-lg bg-white/10 p-1">
        <button
          onClick={() => setActiveTab('work')}
          className={`rounded-md px-3 py-1 text-sm font-medium transition-all ${
            activeTab === 'work'
              ? 'bg-white/20 text-white shadow'
              : 'text-white/80'
          }`}>
          Work
        </button>
        <button
          onClick={() => setActiveTab('education')}
          className={`rounded-md px-3 py-1 text-sm font-medium transition-all ${
            activeTab === 'education'
              ? 'bg-white/20 text-white shadow'
              : 'text-white/80'
          }`}>
          Education
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default WorkExperience;
