import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children, icon }) => {
  return (
    <section id={id} className="py-6 px-3 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-3">
        {icon && <span className="text-accent-500">{icon}</span>}
        <h2 className="text-lg font-bold text-white tracking-tight">{title}</h2>
        <div className="flex-grow h-[1px] bg-gradient-to-r from-accent-500/50 to-dark-600 ml-2"></div>
      </div>
      {children}
    </section>
  );
};

export default Section;