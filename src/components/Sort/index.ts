import { TSort } from "../../redux/filter/types";

export const sortList: TSort[] = [
  { title: "популярности", value: "rating", sortType: "asc" },
  { title: "цене", value: "price", sortType: "asc" },
  { title: "алфавиту", value: "title", sortType: "asc" },
];

export type TSortProps = {
  sort: TSort;
};
