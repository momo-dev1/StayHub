"use client"
import { slugify } from "@/utils/slugify";
import { useSearchParams, useRouter } from "next/navigation";
import queryString from "query-string";
import { useCallback } from "react";

type CategoryCardProps = {
  label: string;
  srcImg: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ label, srcImg }) => {
  const params = useSearchParams();
  const router = useRouter();

  const handleClick = useCallback(() => {
    let currentQuery = {};
    if (params) {
      currentQuery = queryString.parse(params.toString());
    }
    const updatedQuery: any = {
      ...currentQuery,
      category: slugify(label),
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <div onClick={handleClick} className="rounded-lg">
      CategoryCard
    </div>
  );
};

export default CategoryCard;
