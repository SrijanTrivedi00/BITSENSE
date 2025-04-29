'use client';

const Footer = () => {
  const sections = [
    {
      title: 'Services',
      items: [
        'Exchange', 'Margin Trading', 'Derivatives', 'Staking',
        'API & WebSockets', 'OTC', 'Lending', 'Security & Protection',
      ],
    },
    {
      title: 'Products',
      items: ['Exchange', 'Mobile App', 'BitSense Borrow', 'Reporting App', 'Token Hub'],
    },
    {
      title: 'Company',
      items: ['About', 'Careers', 'Announcements', 'Blog', 'Market Stats', 'Our Fees'],
    },
    {
      title: 'Support',
      items: ['Help Center', 'Contact Us', 'Bug Bounty', 'Status'],
    },
    {
      title: 'Legal & Privacy',
      items: [
        'Privacy', 'Cookies Policy', 'Exchange Terms',
        'General Terms', 'Pay Terms', 'Token Terms',
      ],
    },
  ];

  return (
    <footer className="bg-[#0d1b24] text-gray-400 px-6 py-10 text-sm relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-teal-400 font-semibold mb-3">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item, index) => (
                <li key={index} className="hover:text-white cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
        2025 BitSense Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
