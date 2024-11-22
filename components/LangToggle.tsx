"use client";
import React, { FC } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { usePathname, useRouter } from "../i18n/routing";
import { Languages } from "lucide-react";

type Props = {};

const LangToggle: FC<Props> = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={`outline`} className="rounded-full w-12 h-12">
          {<Languages size={20} className={`text-black dark:text-white `} />}
          <span className="sr-only">Language Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className={`mt-2`}>
        <button
          type="button"
          onClick={() => router.push(pathname, { locale: "en" })}
          className="!text-center block w-full  mx-auto "
        >
          <DropdownMenuItem className="flex justify-center items-center">
            English
          </DropdownMenuItem>
        </button>
        <button
          type="button"
          onClick={() => router.push(pathname, { locale: "ar" })}
          className="!text-center block w-full  mx-auto "
        >
          <DropdownMenuItem className="flex justify-center items-center">
            العربية
          </DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangToggle;
