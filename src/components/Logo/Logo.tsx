import { Link } from "react-router-dom";
import logoSvg from "../../assets/img/pizza-logo.svg";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/filter/slice";
import { TLogoProps } from ".";

export const Logo: React.FC<TLogoProps> =( {setValue}) => {
  const dispatch = useDispatch();

  const handleSearch = () => {
    setValue('');
    dispatch(setSearchValue(""));
  };

  return (
    <Link to="/FakePizza">
      <div className="header__logo" onClick={handleSearch}>
        <img width="38" src={logoSvg} alt="Pizza logo" />
        <div>
          <h1>Fake Pizza</h1>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </div>
    </Link>
  );
}
