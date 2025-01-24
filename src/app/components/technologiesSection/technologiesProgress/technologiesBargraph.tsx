import './technologiesBargraph.scss'

interface TechnologiesBargraphProps {
  progress: string
}

export function TechnologiesBargraph({ progress }: TechnologiesBargraphProps) {
  return (
    <span className="progress">
      <span className={progress}>
        <span className="progress-name">{progress}</span>
      </span>
    </span>
  )
}
