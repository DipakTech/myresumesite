"use client";
import { MenuIcon, PanelsTopLeft } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Sidebar } from "./Sidebar";

export function SheetMenu() {
  return (
    <Sheet defaultOpen={false}>
      <SheetTrigger className="z-50 " asChild>
        <Button className="h-8 text-primary " variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:w-72 px-3 h-full flex flex-col" side="left">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
