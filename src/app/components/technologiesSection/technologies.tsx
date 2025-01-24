import { TechnologiesBargraph } from '../technologiesSection/technologiesProgress/technologiesBargraph'
import { TechnologiesIcon } from '../technologiesSection/technologiesProgress/technologiesIcon'

import './technologies.scss'

export function Technologies() {
  return (
    <div className="technologies">
      <div className="technologie-experience">
        <TechnologiesIcon src="/spring-icon.png" alt="Spring Logo" />
        <TechnologiesBargraph progress="Intermediate" />
      </div>

      <div className="technologie-experience">
        <TechnologiesIcon src="/typescript-icon.png" alt="Typescript Logo" />
        <TechnologiesBargraph progress="Intermediate" />
      </div>

      <div className="technologie-experience">
        <TechnologiesIcon src="/reactjs-icon.png" alt="ReactJs Logo" />
        <TechnologiesBargraph progress="Intermediate" />
      </div>

      <div className="technologie-experience">
        <TechnologiesIcon src="/nextjs-icon.png" alt="NextJs Logo" />
        <TechnologiesBargraph progress="Beginner" />
      </div>

      <div className="technologie-experience">
        <TechnologiesIcon src="/sass-icon.png" alt="Sass Logo" />
        <TechnologiesBargraph progress="Beginner" />
      </div>
    </div>
  )
}
