import { Filter, FilterCategory } from "@/types/filters";
import { Checkbox } from "../../atoms/checkbox";
import * as styles from "./filter-set.styles";

interface FilterSetProps {
  title: string;
  filterList: Filter[];
  onClick: (filterName: string, filterCategory: FilterCategory) => void;
}

export const FilterSet = ({ title, filterList, onClick }: FilterSetProps) => {
  return (
    <div css={styles.container}>
      <h3 css={styles.title}>{title}</h3>
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
    </div>
  );
};
