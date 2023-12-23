import Link from "next/link";

import {
  RiLinkedinLine,
  RiGithubLine,
  RiMailAddLine,
  RiTwitterLine
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">

      <Link href={'https://github.com/CCCLaverde'} className="hover:text-accent transition-all duration-300" target="_blank">
        <RiGithubLine/>
      </Link>

      <Link href={'https://www.linkedin.com/in/cristian-c-laverde-565278264/'} className="hover:text-accent transition-all duration-300" target="_blank">
        <RiLinkedinLine/>
      </Link>

      <Link href={'https://twitter.com/CCCLaverde'} className="hover:text-accent transition-all duration-300" target="_blank">
        <RiTwitterLine/>
      </Link>

      <Link href={'/contact'} className="hover:text-accent transition-all duration-300" target="_blank">
        <RiMailAddLine/>
      </Link>

    </div>
  )
};

export default Socials;
