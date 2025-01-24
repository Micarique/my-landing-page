import { GithubIcon } from "../icons/github-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";

import "./social-buttons.scss"

export function SocialButtons(){
  return(
    <div className="social">
    <a href="https://www.linkedin.com/in/micael-machado-b4b9821a5/" target="_blank"><LinkedinIcon/></a>
    <a href="https://github.com/Micarique" target="_blank"><GithubIcon/></a>
    </div>
  )
}