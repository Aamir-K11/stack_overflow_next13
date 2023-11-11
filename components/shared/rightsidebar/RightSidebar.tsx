import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../tag/Tag";

const topQuestions = [
  {
    _id: 1,
    title: "How to pass data from a server to client component in NextJS?",
  },
  {
    _id: 2,
    title: "How to declare client components in NextJS?",
  },
  {
    _id: 3,
    title: "How to use providers in NestJS?",
  },
  {
    _id: 4,
    title: "How to use React.memo?",
  },
  {
    _id: 5,
    title: "How to do pagination?",
  },
];

const popularTags = [
  { _id: 1, name: "javascript", totalQuestions: 5 },
  { _id: 2, name: "nextjs", totalQuestions: 3 },
  { _id: 1, name: "c++", totalQuestions: 1 },
  { _id: 1, name: "typescript", totalQuestions: 4 },
  { _id: 1, name: "python", totalQuestions: 2 },
];
const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 text-dark300_light700 light-border custom-scrollbar sticky right-0 top-0 flex min-h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
      <div className="mt-7 flex w-full flex-col gap-[30px]">
        {topQuestions.map((question) => {
          return (
            <Link
              key={question._id}
              href="/"
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron-right"
                height={20}
                width={20}
                className="invert-colors"
              />
            </Link>
          );
        })}
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex w-full flex-col gap-4">
          {popularTags.map((tag) => {
            return (
              <Tag
                key={tag._id}
                _id={tag._id}
                name={tag.name}
                totalQuestions={tag.totalQuestions}
                showCount
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
