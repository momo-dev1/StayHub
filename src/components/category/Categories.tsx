import CategoryCard from "./CategoryCard";

type CategoriesProps = {};

const categories = [
  {
    label: "Top World",
    srcImg: "/categories/top",
  },
  {
    label: "Hottest",
    srcImg: "/categories/top",
  },
  {
    label: "Family",
    srcImg: "/categories/top",
  },
];

const Categories: React.FC<CategoriesProps> = (props) => {
  return (
    <section className="">
      <div className="flex items-center justify-between">
        <h3>Explore top hotels by category</h3>
        <div className="flex gap-1">
          <button></button>
        </div>
      </div>
      <div className="flex gap-3 overflow-x-scroll">
        {categories.map((item) => (
          <CategoryCard
            key={item.label}
            label={item.label}
            srcImg={item.srcImg}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;
