import Image from 'next/image';

const items = [
  {
    type: 'Experience',
    title: 'Founded Zed Trading',
    image: 'https://github.com/RiadZX/portfolio/blob/main/public/certificates/zed.png?raw=true',
    description: "Offering copytrading solutions on the Solana blockchain. One of the fastest bots on the market."
  },
  {
    type: 'Experience',
    title: 'intern@superconnectors',
    image: 'https://github.com/RiadZX/portfolio/blob/main/public/certificates/superconnectors.png?raw=true',
    description: "worked on improving the UI, UX and adding gamification elements to the application"
  },
  {
    type: 'Certificate',
    title: 'Microsoft Certified: Azure Fundamentals',
    image: 'https://github.com/RiadZX/portfolio/blob/main/public/certificates/microsoft.png?raw=true',
    description: 'Microsoft Certified: Azure Fundamentals'
  },

];

export default function CertificatesExperiencesSection() {
  return (
    <section className="my-12">
      <h2 className="mb-8 text-2xl font-semibold tracking-tighter text-center">Certificates & Experiences</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center bg-neutral-50 dark:bg-neutral-900 rounded-lg shadow-sm p-4 border border-neutral-200 dark:border-neutral-800">
            <div className="flex-shrink-0 w-16 h-16 relative mr-4">
              <Image src={item.image} alt={item.title} fill className="object-contain rounded-md" />
            </div>
            <div>
              <div className="text-sm text-neutral-500 mb-1">{item.type}</div>
              <div className="font-semibold text-lg mb-1">{item.title}</div>
              <div className="text-neutral-700 dark:text-neutral-300 text-sm">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 