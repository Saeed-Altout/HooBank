import Image from "next/image";
import Link from "next/link";
import { logo } from "../assets/index";

const Logo = ({ styleLogo }) => (
  <Link href={"/"}>
    <Image src={logo} alt="Logo" className={`${styleLogo}`} />
  </Link>
);

export default Logo;
