const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: '',
    title: 'JS.',
}

const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Jake Strahm',
    role: 'Full Stack Engineer',
    description: '',
    resume: '',
    social: {
        linkedin: 'https://linkedin.com/in/jakestrahm',
        github: 'https://github.com/jakestrahm',
    },
}

const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: 'Forum',
        description:
            'A forum akin to stack overflow; with user accounts, posts, and comments.',
        stack: ['javascript', 'node', 'express', 'mongodb'],
        sourceCode: 'https://github.com/jakestrahm/forum-backend',
        livePreview: '',
    },
    {
        name: 'Chat',
        description:
            'A real time chat service; with multiple chat rooms and user authentication.',
        stack: ['javascript', 'react', 'tailwind', 'daisy-ui', 'firebase',],
        sourceCode: 'https://github.com/jakestrahm/chat',
        livePreview: '',
    },
]

const experience = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: 'Outspoke',
        description:
            'Developed the functionality and user interface of Outspoke’s data analytics platform; creating dashboards, data visualizations, and the supporting APIs.',
        role: 'Full Stack Engineer',
        start: 'July 2022',
        end: 'Present',
        bullets: [
        ],
        stack: ['javascript', 'react', 'material-ui', 'chartjs', 'nodejs', 'express', 'mongodb'],
    },
    {
        name: 'Suco',
        description:
            'Designed and developed over thirty client websites with a team of developers; supporting operations by developing internal tools.',
        role: 'Full Stack Engineer',
        start: 'March 2021',
        end: 'July 2022',
        stack: ['javascript', 'react', 'material-ui', '.net', 'c#', 'microsoft sql server'],
    },
]

const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'react',
    'javascript',
    'material-ui',
    'tailwind',
    'daisy-ui',
    'typescript',
    'css',
    'html',
    'c#',
    '.net',
    'sql',
    'nodejs',
    'express',
    'c++',
    'python',
    'mongodb',
    'firebase',
    'postgresql',
    'microsoft sql server',
    'git',
    'docker',
    'linux',
]

const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'jaanstra@gmail.com',
}

export { header, about, projects, skills, contact, experience }
