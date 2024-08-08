export type TSort = {
  value: string;
  title: string;
  sortType: string; 
};

export interface IFilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: TSort;
}
