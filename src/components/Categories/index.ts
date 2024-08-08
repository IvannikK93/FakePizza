export * from "./Categories";

export type TCategoriesProps = {
  value: number;
  onChangeCategory: (id: number) => void;
};
