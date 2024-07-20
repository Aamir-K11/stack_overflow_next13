"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { sideBarLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathName = usePathname();
  return (
    <>
      {sideBarLinks.map((li) => {
        const isActive =
          pathName === li.route ||
          (pathName.includes(li.route) && li.route.length > 1);
        return (
          <Link
            key={li.imgURL}
            href={li.route}
            className={`${
              isActive
                ? "primary-gradient rounded-lg text-light-900"
                : "text-dark300_light900"
            } flex items-center justify-start gap-4 bg-transparent p-4`}
          >
            <Image
              src={li.imgURL}
              alt={li.label}
              width={20}
              height={20}
              className={`${isActive ? "" : "invert-colors"}`}
            />
            <p
              className={`${
                isActive ? "base-bold" : "base-medium"
              } max-lg:hidden`}
            >
              {li.label}
            </p>
          </Link>
        );
      })}
    </>
  );
};

const LeftSidebar = () => {
  return (
    <section className="background-light900_dark200 text-dark300_light700 light-border custom-scrollbar sticky left-0 top-0 flex min-h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        <NavContent />
      </div>

      <SignedIn>
        <Link href="sign-out">
          <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
            <span className="primary-text-gradient">Log Out</span>
          </Button>
        </Link>
      </SignedIn>
      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href="sign-in">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                alt="account"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Log In
              </span>
            </Button>
          </Link>
          <Link href="sign-up">
            <Button className="small-medium btn-tertiary light-border-2 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                alt="account"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="max-lg:hidden">Sign Up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSidebar;
