import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

interface Props {
  route: string;
  src: string;
  alt: string;
  placeholder: string;
  otherClasses?: string;
}
const LocalSearchBar = ({
  route,
  src,
  alt,
  placeholder,
  otherClasses,
}: Props) => {
  return (
    <div
      className={`background-light800_darkgradient light-border mt-6 flex min-h-[56px] grow items-center gap-4 rounded-md px-4 ${otherClasses}`}
    >
      <Image
        src={src}
        alt={alt}
        height={24}
        width={24}
        className="cursor-pointer"
      />

      <Input
        placeholder={placeholder}
        className="background-light800_darkgradient paragraph-regular no-focus text-dark400_light700 placeholder border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearchBar;
