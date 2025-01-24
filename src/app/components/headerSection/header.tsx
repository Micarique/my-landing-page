import Image from 'next/image'
import "./header.scss"

export function Header() {
  return(
  <div className="header">
        <div>
          <h1>Hi, i'm Micael!</h1>
          <h2>Sofware Developer</h2>
        </div>
        <Image
          src="/me.jpg"
          alt="Profile picture"
          width={280}
          height={300}
          priority
        />
  </div>
  )
}