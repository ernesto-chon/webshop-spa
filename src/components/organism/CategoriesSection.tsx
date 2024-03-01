import CategoryCard from '../molecules/CategoryCard';
import { useGetCategories } from '@/hooks/useGetCategory.ts';

export default function CategoriesSection() {
  const { data: allCategories } = useGetCategories();

  if (!allCategories) {
    return (
      <div>
        <p>No elements found</p>
      </div>
    );
  }

  const shownCategories = allCategories.slice(0, 3);

  return (
    <div className="content-section">
      <h2 className="py-5"> Best Categories</h2>
      <div className="grid grid-cols-1 gap-x-5 gap-y-5 lg:grid-cols-3 ">
        {shownCategories.map((categoryName) => (
          <CategoryCard key={categoryName} category={categoryName} />
        ))}
      </div>
    </div>
  );
}
