import React from 'react';

interface SkillBadgeProps {
  name: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
  return (
    <span className="px-1.5 py-0.5 bg-dark-600/70 text-accent-400 rounded text-[9px] border border-dark-500 hover:border-accent-500/30 transition-colors hover:bg-dark-500/50 cursor-default font-mono">
      {name}
    </span>
  );
};

export default SkillBadge;