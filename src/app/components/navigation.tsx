"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Navigation(){
    const pathname = usePathname();
    return (
        <nav>
            <Link href="/" className ={ pathname ==="/"? "font-bold mr-4":"mr-4 text-blue-50"}>home</Link>
            <Link href="/about" className ={ pathname ==="/about"? "font-bold mr-4":"mr-4 text-blue-50"}>About Us</Link>
            <Link href="/products/1" className ={ pathname ==="/products/1"? "font-bold mr-4":"mr-4 text-blue-50"}>product-1</Link>
        </nav>
    )
}