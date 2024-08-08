import React from "react";
import { Categories } from "../../Categories";
import { PizzaBlock } from "../../PizzaBlock/PizzaBlock";
import { Pagination } from "../../Pagination/Pagination";
import { useGetViewPizzaQuery } from "../../../api/pizzasApi";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../../redux/filter/selectors";
import { Skeleton } from "../../PizzaBlock/Skeleton";
import { setCategoryId, setCurrentPage } from "../../../redux/filter/slice";
import { Sort } from "../../Sort/Sort";

export function MainPage() {
  const dispatch = useDispatch();

  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);
  const {
    data = [],
    error,
    isLoading,
  } = useGetViewPizzaQuery({
    currentPage: currentPage,
    search: searchValue,
    categoryId: categoryId,
    sort: sort,
  });

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const onChangeCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  const pizzas = data.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort sort={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {error ? (
        <div className="content__error-info">
          <h2>Пиццы не найдены 😕</h2>
          <p>К сожалению, по данным параметрам пиццы отсутствуют.</p>
        </div>
      ) : (
        <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
}
