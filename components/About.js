import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../data/portfolio'

const About = () => {
  const { name, role, company, description, resume, social, greetingEmoji } =
    about
  const firstName = name ? name.split(' ')[0] : null

  return (
    <div className='about'>
      <div className='about__pseudo-padding about__pseudo-padding-top' />

      <h1 className='about__greeting animate__animated animate__fadeInUp animate__delay-1s'>
        Heyyyyyy, I&apos;m <span className='text--strong'>{firstName}</span>

        {greetingEmoji && <span> {greetingEmoji}</span>}
      </h1>

      <h1 className='about__role animate__animated animate__fadeInUp animate__delay-3s'>
        I&aposm a {role}
        {company && (
          <span>
            {' '}
            at <span className='text--strong'>{company}</span>
          </span>
        )}
        .
      </h1>

      <h2 className='about__description animate__animated animate__fadeInUp animate__delay-5s'>
        Step into the realm of innovation and tech on my Leanfolio, where you can delve into my technology-driven projects.
      </h2>

      <div className='animate__animated animate__fadeIn animate__delay-7s'>
        {description && (
          <div className='about__desc paragraph__list center' style={{ textAlign: 'justify' }}>
            {description.map((item) => (
              <p key={uniqid()}>{item}</p>
            ))}
          </div>
        }

        <div className='about__contact center'>
          {resume && (
            <a href={resume} target='_blank' rel='noreferrer'>
              <span type='button' className='btn btn--outline'>
                Resume
              </span>
            </a>
          }

          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='github'
                  className='link link--icon'
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='linkedin'
                  className='link link--icon'
                >
                  <LinkedInIcon />
                </a>
              )}
            </>
          }
        </div>
      </div>

      <div className='about__pseudo-padding' />
    </div>
  )
}

export default About
