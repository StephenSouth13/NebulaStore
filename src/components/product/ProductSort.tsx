import "./ProductSort.css";

export default function ProductSort({
  selected,
  onChange,
}: {
  selected: string;
  onChange: (val: string) => void;
}) {
  return (
    <select value={selected} onChange={(e) => onChange(e.target.value)} className="product-sort">
      <option value="none">Sắp xếp</option>
      <option value="asc">Giá tăng dần</option>
      <option value="desc">Giá giảm dần</option>
    </select>
  );
}
