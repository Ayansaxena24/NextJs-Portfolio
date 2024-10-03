// next image
import Image from "next/image";

//next link
import Link from "next/link";

//components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href={'/'} className="flex gap-x-2">
            {/* <Image
              src={"/logo.svg"}
              width={220}
              height={48}
              alt=""
              priority={true}
            /> */}
            <span className="text-white text-[40px] font-sora font-semibold tracking-widest">Ayan</span>            
            <span className="text-white text-[40px] font-sora font-extralight tracking-widest">Saxena</span>
            <span className="text-accent text-[40px] font-extralight tracking-widest">.</span>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
