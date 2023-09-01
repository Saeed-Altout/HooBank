import Link from "next/link";
import Image from "next/image";
import { Logo, Wrapper } from "@/components";
import { footerLinks, socialMedia } from "@/constants";
import { useStateContext } from "@/contexts/providerState";
import { icons } from "react-icons";
const Footer = () => {
  const { nowYear } = useStateContext();
  return (
    <section className="flex items-center justify-center w-full h-full pt-12">
      <Wrapper>
        <div className="flex flex-col w-full gap-10">
          <div className="max-w-xl">
            <Logo styleLogo="w-[120px] h-auto mx-auto md:ml-0 md:mr-auto" />
            <p className="mt-4 text-base font-medium leading-8 text-center text-gray-400 sm:text-left md:text-lg">
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>

          <div className="flex flex-wrap items-start justify-between flex-1 w-full gap-10">
            {footerLinks.map((sideLink, index) => (
              <ul key={index} className="flex flex-col gap-5 text-gray-400">
                <li className="text-2xl font-semibold text-white">
                  {sideLink.title}
                </li>
                {
                  <ul className="flex flex-col gap-5">
                    {sideLink.links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.link}
                        className="hover:text-secondary"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </ul>
                }
              </ul>
            ))}
          </div>
          <span className="block w-full h-[0.1px] my-4 bg-gray-600" />

          <div className="max-w-5xl mx-auto">
            <p className="text-base font-medium leading-8 text-center text-gray-400 sm:text-left md:text-lg">
              Copyright Ⓒ HooBank {nowYear},{" "}
              <span className="text-secondary">Saeed Altout, </span>
              All Rights Reserved.
            </p>

            <ul className="flex items-center justify-center gap-10 py-10">
              {socialMedia.map((icon) => (
                <Link
                  href={icon.link}
                  key={icon.id}
                  className="text-white text-3xl hover:text-secondary"
                >
                  {icon.icon}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Footer;
