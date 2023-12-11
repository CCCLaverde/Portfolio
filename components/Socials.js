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

      <Link href={'https://github.com/CCCLaverde'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine/>
      </Link>

      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine/>
      </Link>

      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine/>
      </Link>

      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiMailAddLine/>
      </Link>

    </div>
  )
};

export default Socials;
