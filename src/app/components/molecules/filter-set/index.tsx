import { Filter, FilterCategory } from "@/types/filters";
import { Checkbox } from "../../atoms/checkbox";

interface FilterSetProps {
  title: string;
  filterList: Filter[];
  onClick: (filterName: string, filterCategory: FilterCategory) => void;
}

export const FilterSet = ({ title, filterList, onClick }: FilterSetProps) => {
  return (
    <>
      <h3>{title}</h3>
      {filterList.map((filter) => {
        const filterName = filter.name;
        return (
          <Checkbox
            key={filterName}
            label={filterName}
            checked={false}
            onClick={() => {
              onClick(filterName, filter.category);
            }}
          />
        );
      })}
    </>
  );
};
