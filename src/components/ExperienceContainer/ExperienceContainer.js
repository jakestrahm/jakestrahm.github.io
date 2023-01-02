import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ExperienceContainer.css'

const ExperienceContainer = ({ experience }) => (
    <div className='experience'>
        <h3>{experience.name}</h3>
        <h5>{experience.role}</h5>
        <h6 className='experience__duration'>{experience.start} — {experience.end}</h6>

        <p className='experience__description'>{experience.description}</p>

        {experience.bullets && (
            <ul className='experience__bullets'>
                {experience.bullets.map((item) => (
                    <li key={uniqid()} className='experience__bullets-item'>
                        {item}
                    </li>
                ))}
            </ul>
        )}

        {experience.stack && (
            <ul className='experience__stack'>
                {experience.stack.map((item) => (
                    <li key={uniqid()} className='experience__stack-item'>
                        {item}
                    </li>
                ))}
            </ul>
        )}

        {experience.sourceCode && (
            <a
                href={experience.sourceCode}
                aria-label='source code'
                className='link link--icon'
            >
                <GitHubIcon />
            </a>
        )}

        {experience.livePreview && (
            <a
                href={experience.livePreview}
                aria-label='live preview'
                className='link link--icon'
            >
                <LaunchIcon />
            </a>
        )}
    </div>
)

export default ExperienceContainer
