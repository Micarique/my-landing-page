import "./primary-button.scss"

interface PrimaryButtonProps {
  text: string
}

export function PrimaryButton({ text } : PrimaryButtonProps) {
  return(
    <button className="primary-button">{text}</button>
  )
}