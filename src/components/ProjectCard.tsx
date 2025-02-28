import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink: string;
  codeLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  image,
  demoLink,
  codeLink,
}) => {
  return (
    <div className="bg-dark-700/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-dark-600 hover:border-dark-500">
      <div className="h-28 overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60 z-10"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-2 flex flex-col flex-grow relative z-20">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          <div className="flex items-center text-[10px] text-gray-400">
            <Star size={10} className="text-accent-400 mr-0.5" />
            <span>24</span>
          </div>
        </div>
        <p className="text-gray-400 mb-1.5 flex-grow text-[11px] leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-1 mb-1.5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-1 py-0.5 bg-dark-600/70 text-accent-400 text-[9px] rounded border border-dark-500"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mt-auto border-t border-dark-600 pt-1.5">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[10px] text-accent-400 hover:text-accent-300 transition-colors"
          >
            <ExternalLink size={10} />
            <span>Demo</span>
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[10px] text-accent-400 hover:text-accent-300 transition-colors"
          >
            <Github size={10} />
            <span>Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;