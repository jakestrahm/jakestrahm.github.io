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
        name: 'T.H.R.',
        description:
            'Reminders application for team\'s hackathon entry. Designed application, architected system, and mentored participants through development of frontend within 48 hours.',
        stack: ['javascript', 'node', 'express', 'react', 'mongodb'],
        sourceCode: 'https://github.com/jakestrahm/treasure-hacks-3',
        livePreview: '',
    },
    {
        name: 'Computer Club Communications',
        description:
            'Forum for alma mater\'s computer club. Designed application, architected system, implemented the backend, and mentored participants through development of frontend.',
        stack: ['javascript', 'node', 'express', 'mongodb'],
        sourceCode: 'https://github.com/jakestrahm/forum-backend',
        livePreview: '',
    },
    {
        name: 'jMessage',
        description:
            'A chat service with real time updates, multiple chat rooms, user authentication, and a recreation of iMessage\'s mobile UI',
        stack: ['javascript', 'react', 'tailwind', 'daisy-ui', 'firebase',],
        sourceCode: 'https://github.com/jakestrahm/jMessage',
        livePreview: '',
    },
]

const experience = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: 'CarepathRx',
        description:
            'Engineer new features and modernize core components of CarepathRx's patient therapy management platform; develop dashboards to support both internal and client operations.',
        role: 'Software Engineer',
        start: 'Mar 2024',
        end: 'Present',
        bullets: [
        ],
        stack: ['typescript', 'node', 'react', 'redux', 'bootstrap', 'mysql', 'socket.io'],
    },
    {
        name: 'Outspoke',
        description:
            'Developed the functionality and user interface of Outspoke’s data analytics platform- creating dashboards, data visualizations, and several internal tools.',
        role: 'Developer',
        start: 'July 2022',
        end: 'Dec 2022',
        bullets: [
        ],
        stack: ['typescript', 'node', 'express', 'react', 'redux', 'material-ui', 'mongodb'],
    },
    {
        name: 'Suco',
        description:
            'Designed and developed over thirty client websites with a team of developers; supporting operations by developing internal tools.',
        role: 'Web Developer',
        start: 'Feb 2021',
        end: 'July 2021',
        stack: ['typescript', 'node', 'express', 'react', 'material-ui', 'postgresql' ],
    },
]

const skills = [
    // languages
    'typescript',
    'javascript',
    'c++',
    'sql',
    'css',
    'html',

    // technologies
    'node.js',
    'express',
    'react',
    'redux toolkit',
    'socket.io',
    'd3',
    'bootstrap',

    // databases
    'postgresql',
    'mongodb',
    'mysql',
    'mssql',

    // other
    'docker',
    'git',
    'aws',
    'linux'
]

const contact = {
    // email is optional - if left empty Contact section won't show up
}

export { header, about, projects, skills, contact, experience }
