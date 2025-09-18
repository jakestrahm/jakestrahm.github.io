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
			'Engineer new features and modernize core legacy components of CarepathRx\'s patient therapy management platform; support operations by developing internal tools.',
		role: 'Software Engineer',
		start: 'Mar 2023',
		end: 'Present',
		bullets: [
		],
		stack: ['typescript', 'node', 'react', 'mysql', 'aws'],
	},
	{
		name: 'Outspoke',
		description:
			'Developed the functionality of Outspoke\'s data analytics platform; supported operations by developing internal tools.',
		role: 'Developer',
		start: 'July 2022',
		end: 'Dec 2022',
		bullets: [
		],
		stack: ['typescript', 'node', 'react', 'mongodb', 'aws'],
	},
	{
		name: 'Suco',
		description:
			'Built prospect relationships from initial outreach to contract signing; developed and managed client websites.',
		role: 'Web Developer',
		start: 'Feb 2021',
		end: 'July 2021',
		stack: ['typescript', 'node', 'react', 'postgresql', 'aws'],
	},
]

const skills = [
	// languages
	'typescript',
	'javascript',
	'sql',
	'css',
	'html',

	// technologies
	'node.js',
	'react',
	'express',
	'redux',

	// databases
	'postgresql',
	'mongodb',
	'mysql',
	'aws',
]

const contact = {
	// email is optional - if left empty Contact section won't show up
}

export { header, about, projects, skills, contact, experience }
