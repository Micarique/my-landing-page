import { SectionTitle } from '../sectionTitle/section-title'
import './information.scss'

export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Languages" />
      <div className="languages-info">
        <p>EN - Intermediate </p>
        <p>PT-BR - Native Speaker</p>
      </div>
      <SectionTitle text="Education" />
      <div className="educational-info">
        <p>Computer Engineering Bachelors Degree - Universidade Feevale.</p>
      </div>
    </div>
  )
}
