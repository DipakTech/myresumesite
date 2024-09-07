"use client";
import { useRouter } from "next/navigation";
import { ModeToggle } from "./ui/mode-toggle";
import { SheetMenu } from "./SheetMenu";

export default function Header() {
  const router = useRouter();

  return (
    <div className="mx-auto flex py-2 w-full container fixed flex-1 overflow-hidden dark:text-slate-900 z-50">
      <div className="z-0 flex-1 overflow-y-scroll">
        <header className="fixed inset-x-0 flex h-10 shadow backdrop-blur-md">
          <div className="mx-auto flex w-full  items-center justify-between px-8">
            <SheetMenu />
            <p
              onClick={() => router.push("/")}
              className="flex origin-left items-center text-xl font-semibold uppercase cursor-pointer"
            >
              <span className="-ml-1.5 inline-block -rotate-90 text-[10px]  text-slate-900 dark:text-slate-300 dark:hover:text-white leading-[0]">
                The
              </span>
              <span className="-ml-1 text-2xl text-slate-900 dark:text-slate-300 dark:hover:text-white tracking-[-.075em]">
                Dipak Giri
              </span>
            </p>
            <nav className=" sm:flex items-center space-x-6 text-sm font-medium text-slate-400">
              <div className="flex gap-2 items-center ">
                <ModeToggle />
              </div>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
}
