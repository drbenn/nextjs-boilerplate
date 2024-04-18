// import Link from 'next/link';
'use client'
import { Link } from '@chakra-ui/next-js';
import { FaBarsStaggered } from "react-icons/fa6";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  return (
    <header>
    {/* <div>
      <Link href="/">Logo</Link>
    </div>
    <nav> */}
      {/* {auth ? (
        <Link href="/panel">Panel (Protected Route)</Link>
      ) : (
        <Link href="/login">Login</Link>
      )} */}
              {/* <ul>
        <li>
            <Link href="/">
                Home
            </Link>
        </li>
        <li>
            <Link href="/contact">
                Contact
            </Link>
        </li>
        </ul>
    </nav> */}

    <nav className="bg-zinc-800 text-white h-24 w-full flex items-center px-6">
      <div className="flex-grow">
        <Link href="/">
          <span className="text-2xl font-bold">Logo</span>
        </Link>
      </div>
      <div className="hidden sm:flex space-x-4">
        <Link href="/about" color='blue.400' _hover={{ color: 'blue.500' }}>
          About
        </Link>
        <Link href="/contact">
          Contact
        </Link>
        <Link href="/rss">
          Rss
        </Link>
        <Link href="/crud">
          CRUD
        </Link>
        <Link href="/posts">
          Posts
        </Link>
        <Link href="/shad">
          Shadcn
        </Link>
        <Link href="/mysql-crud">
          MySQL CRUD
        </Link>
        <Link href="/mysql-prisma">
          MySQL Prisma
        </Link>
        <Link href="/sign-in">
          Sign In
        </Link>
      </div>
      <div className="flex text-2xl text-white sm:hidden">
        <Sheet>
          <SheetTrigger> <FaBarsStaggered /> </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  </header>

    );

}
