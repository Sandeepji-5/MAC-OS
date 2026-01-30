import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import './cli.scss'

function Cli({windowName, setWindowsState}) {
  return (
    <MacWindow  windowName={windowName} setWindowsState={setWindowsState}>
        <div className="cli-window">
            <Terminal
            commands={{
              about: {
                description: 'Display information about me.',
                usage: 'about',
                fn: () => 'Hi, I am Sandeep. I am a web developer passionate about building creative projects!'
              },
              projects: {
                description: 'List some of my featured projects.',
                usage: 'projects',
                fn: () =>
                  '1. Portfolio Website\n2. Spotify Integration\n3. Resume Viewer\n4. Weather App\n5. Task Manager\n(Type project <number> for more info)'
              },
              project: {
                description: 'Get details on a specific project. Usage: project <number>',
                usage: 'project <number>',
                fn: (num) => {
                  switch (num) {
                    case '1': return 'Portfolio Website - Built using React.js and SCSS.';
                    case '2': return 'Spotify Integration - Embed and control Spotify playlists.';
                    case '3': return 'Resume Viewer - View PDF resume inside MacWindow UI.';
                    case '4': return 'Weather App - Real-time weather info using open APIs.';
                    case '5': return 'Task Manager - Organize daily tasks efficiently.';
                    default: return 'Project not found. Use projects to see available projects.';
                  }
                }
              },
              contact: {
                description: 'Show my contact information.',
                usage: 'contact',
                fn: () => 'Email: sandeep@email.com | LinkedIn: linkedin.com/in/sandeep'
              },
              resume: {
                description: 'Open my resume.',
                usage: 'resume',
                fn: () => 'You can view my resume by clicking on the Resume window above!'
              },
              skills: {
                description: 'List my technical skills.',
                usage: 'skills',
                fn: () => 'JavaScript, React, HTML, CSS/SCSS, Node.js, Express, MongoDB, Git, UI/UX Design'
              },
              education: {
                description: 'Show my educational background.',
                usage: 'education',
                fn: () => 'B.Tech in Computer Science, XYZ University'
              },
              hobbies: {
                description: 'Show my hobbies.',
                usage: 'hobbies',
                fn: () => 'Music, Coding, Reading, Cycling, Traveling'
              },
              github: {
                description: 'Show my GitHub profile link.',
                usage: 'github',
                fn: () => 'https://github.com/sandeepsportfolio'
              },
              linkedin: {
                description: 'Show my LinkedIn profile link.',
                usage: 'linkedin',
                fn: () => 'https://linkedin.com/in/sandeep'
              },
              experience: {
                description: 'Show my work experience.',
                usage: 'experience',
                fn: () => '2+ years as frontend developer. Internships at ABC Corp and XYZ Solutions.'
              },
              blog: {
                description: 'Show my blog URL.',
                usage: 'blog',
                fn: () => 'https://blog.sandeep.dev'
              },
              certifications: {
                description: 'Show my certifications.',
                usage: 'certifications',
                fn: () => 'Certified Web Developer, Responsive Web Design - freeCodeCamp'
              },
              frameworks: {
                description: 'List frameworks I use.',
                usage: 'frameworks',
                fn: () => 'React, Express, SASS/SCSS, Tailwind, Bootstrap'
              },
              languages: {
                description: 'List programming languages I know.',
                usage: 'languages',
                fn: () => 'JavaScript, Python, C++, Java'
              },
              awards: {
                description: 'Show any awards I have received.',
                usage: 'awards',
                fn: () => 'Top Performer Award - ABC Corp, Coding Challenge Winner - 2022'
              },
              inspiration: {
                description: 'Share my biggest inspiration.',
                usage: 'inspiration',
                fn: () => 'My passion for innovation and solving real world problems with technology.'
              },
              funfact: {
                description: 'Show a fun fact about me.',
                usage: 'funfact',
                fn: () => 'I can listen to music and debug code at the same time!'
              },
              motto: {
                description: 'Show my personal motto.',
                usage: 'motto',
                fn: () => '"Code with passion, deploy with confidence."'
              },
              theme: {
                description: 'Show current theme info.',
                usage: 'theme',
                fn: () => 'MacOS-inspired dark theme.'
              },
              location: {
                description: 'Show my location.',
                usage: 'location',
                fn: () => 'Bangalore, India'
              },
              open: {
                description: 'Command to open external links: open <link>',
                usage: 'open <link>',
                fn: (link) => `Opening ${link}... (feature coming soon!)`
              },
          
              suggestions: {
                description: 'Get suggestions on how to explore the portfolio.',
                usage: 'suggestions',
                fn: () => 'Try commands like "projects", "skills", "contact", "resume", "github", or "experience".'
              },
             
              
              echo: {
                description: 'Echo a passed string.',
                usage: 'echo <string>',
                fn: (...args) => args.join(' ')
              }
            }}
            welcomeMessage={'Welcome to  Goloka terminal...'}
            promptLabel={'$andeep:~$'}
            promptLabelStyle={{color:'#00ff00'}}
            
            
            /> 
        </div>
    </MacWindow>
  )
}

export default Cli