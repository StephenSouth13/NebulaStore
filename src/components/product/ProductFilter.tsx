import "./ProductFilter.css";

export default function ProductFilter({
  selected,
  onChange,
  categories,
}: {
  selected: string;
  onChange: (val: string) => void;
  categories: string[];
}) {
  return (
    <select value={selected} onChange={(e) => onChange(e.target.value)} className="product-filter">
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}
