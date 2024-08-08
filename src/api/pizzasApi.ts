import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pizzasApi = createApi({
  reducerPath: "getPizzas",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://666f3ec5f1e1da2be5225941.mockapi.io/data",
  }),
  endpoints: (builder) => ({
    getAllPizzas: builder.query({
      query: () => "",
    }),
    getViewPizza: builder.query({
      query: ({ currentPage, search, categoryId, sort }) => {
        let result = `?title=${search}&limit=4&page=${currentPage}&sortBy=${sort.value}&order=${sort.sortType}`;
        if (categoryId !== 0) result = result + `&category=${categoryId}`;
        return result;
      },
    }),
    getFullPizza: builder.query({
      query: (id) => `${id}`, 
    })
  }),
});

export const { useGetAllPizzasQuery, useGetViewPizzaQuery, useGetFullPizzaQuery } = pizzasApi;
