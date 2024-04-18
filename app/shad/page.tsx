'use client';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IoBeerSharp } from "react-icons/io5";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



export default function Shad() {

  return (
    <main className="flex flex-col w-full min-h-screen bg-white">
      Shad
      <section>
      <Button className="bg-zinc-900 hover:bg-zinc-600
        transition text-white rounded py-2 px-3">
        <IoBeerSharp className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Input type="email" placeholder="Email" />

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
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
      </section>
    </main>

    
  )
}
