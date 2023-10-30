import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const LeftSidebar = () => {
  return (
    <section className="flex-between background-light900_dark200 text-dark300_light700 light-border fixed min-h-screen flex-col shadow-light-300 max-sm:hidden">
      <div className="flex-start flex-col gap-5 p-28">
        <Link href="">Home</Link>
        <Link href="">Collections</Link>
        <Link href="">Find Jobs</Link>
        <Link href="">Tags</Link>
        <Link href="">Communities</Link>
        <Link href="">Ask a Question</Link>
      </div>
      <div className="flex-center flex-col gap-6 p-6">
        <SignedIn>
          <Link href="">Logout</Link>
        </SignedIn>
        <SignedOut>
          <Link href="">Login</Link>
          <Link href="">Signup</Link>
        </SignedOut>
      </div>
    </section>
  );
};

export default LeftSidebar;
