//links
import Link from "next/link";
import { FaTwitter, FaTwitterSquare } from "react-icons/fa";

//icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiDribbleLine,
  RiLinkedinLine,
  RiBehanceLine,
  RiFacebookLine,
  RiGithubLine,
  RiTwitterLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={"https://github.com/Ayansaxena24"} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={"https://www.instagram.com/ayan.saxena24?igsh=MXhiM2tqeHNucWtzcA=="} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={"https://www.linkedin.com/in/ayan-saxena-210a5421b/"} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={"https://x.com/AyanSaxena24"} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine />
      </Link>
    </div>
  );
};

export default Socials;
