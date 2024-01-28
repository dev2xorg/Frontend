import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
    return (
        <nav className="flexBetween max-container padding-container relative py-5">
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={85} height={35} className="px-0"/>
            </Link>
            <ul className="hidden  h-full gap-12 lg:flex  justify-between items-center">
                {NAV_LINKS.map((link) => (
                    <li key={link.key} className="flexCenter">
                        <Link href={link.href} className="regular-19 text-black-50 font-semibold cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-500">
                            {link.label}
                        </Link>
                    </li>
                ))}
                <li className="flex flex-col my-4 gap-4">
                    <button className="border border-[20B486] px-6 py-2 rounded-lg border-black text-montserrat text-white font-semibold bg-green-500">
                        Sign Up
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
