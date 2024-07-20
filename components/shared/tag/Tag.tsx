import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";

interface Props {
  _id: number;
  name: string;
  totalQuestions?: number;
  showCount: boolean;
}

const Tag = ({ _id, name, totalQuestions, showCount }: Props) => {
  return (
    <Link href="/" className="flex justify-between gap-2">
      <Badge className="subtle-medium text-light400_light500 background-light800_dark300 rounded-md border-none p-4 uppercase">
        {name}
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{totalQuestions}</p>
      )}
    </Link>
  );
};

export default Tag;
