import { Link, useParams } from "react-router-dom";
import { useGetFullPizzaQuery } from "../../../api/pizzasApi";

export const FullPizza = () => {
    
    const { id } = useParams();
    const { data = [], error, isLoading} = useGetFullPizzaQuery(id);

  return (
    <div className="container">
      <img src={data.imageUrl} />
      <h2>{data.title}</h2>
      <h4>{data.price} ₽</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};
