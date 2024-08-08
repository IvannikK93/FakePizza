import { useDispatch } from "react-redux";
import { useGetAllPizzasQuery } from "../api/pizzasApi";
import { setItems } from "../redux/pizza/slice";

export const useGetAllPizza = () => {
  const dispatch = useDispatch();
  const { data = [] } = useGetAllPizzasQuery("");
  if (data) dispatch(setItems(data));
};
