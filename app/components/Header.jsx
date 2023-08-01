"use client";

import Link from 'next/link'
import {usePathname} from 'next/navigation'
const Header = () => {

    const pathname = usePathname();

    const navItems = [
        {
            label: "Home",
            href: '/'
        },
        {
            label: "About",
            href: '/about'
        },
        {
            label: "Location",
            href: '/about/location'
        },
        {
            label: "Pages",
            href: '/pages'
        },
        {
            label: "Restaurant",
            href: '/about/restaurant'
        },
        {
            label: "Settings",
            href: '/about/settings'
        },
        {
            label: "Advertisment",
            href: '/about/advertisment'
        },
        // {
        //     label: "Cuisines",
        //     href: '/cuisines'
        // }

    ]
  return (
    <div>
       <ul className='flex gap-5 py-10'>
        {
            navItems.map((link, index) =>(
                <li key={index}>
                    <Link href={link.href} className={ pathname === `${link.href}` ? "text-blue-500 font-bold " : ""}>
                        {link.label}
                    </Link>
                </li>
            ))
        }
       </ul>
    </div>
  )
}

export default Header