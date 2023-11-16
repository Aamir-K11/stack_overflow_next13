import Tag from "@/components/shared/tag/Tag";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LocalSearchBar from "@/components/shared/localSeachBar/LocalSearchBar";
import Filter from "@/components/shared/filter/Filter";
import { HomePageFilters } from "@/constants/filter";

export default function Home() {
  return (
    <>
      <div className="flex w-full justify-between gap-4 max-sm:flex-col-reverse">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/" className="max-sm:self-end">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          src="/assets/icons/search.svg"
          alt={"search"}
          placeholder="Search questions"
          route="/"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-h-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <div className="mt-11 flex gap-1 max-md:hidden">
        <Tag _id={1} name={"javascript"} showCount={false} />
        <Tag _id={1} name={"javascript"} showCount={false} />
        <Tag _id={1} name={"javascript"} showCount={false} />
        <Tag _id={1} name={"javascript"} showCount={false} />
        <Tag _id={1} name={"javascript"} showCount={false} />
      </div>
    </>
  );
}
