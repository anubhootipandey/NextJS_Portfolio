import React from 'react';

const Resume = () => {
  return (
      <div className="flex justify-center">
        <iframe
          src="/resume.pdf"  
          width="100%"
          height="800px"
          style={{ border: 'none' }}
          title="Resume"
        />
      </div>
  );
};

export default Resume;
