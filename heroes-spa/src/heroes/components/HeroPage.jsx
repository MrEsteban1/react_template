import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroesByPublisher";
import { animations } from "../../constants/animations";

export const HeroPage = () => {
  const params = useParams();
  const { id } = params;
  const hero = useMemo(() => getHeroById(id), [id]);
  console.log(hero);
  const navigator = useNavigate();
  const onNavigateBack = () => {
    navigator(-1);
  };

  return (
    <div className="row mt-5 ">
      <div className="col-4">
        <img
          src={`/assets/heros/${id}.jpg`}
          alt={hero.superhero}
          className={`img-thumbnail ${animations.fadeInLeft}`}
        />
      </div>
      <div className={`col-8 ${animations.fadeIn}`}>
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: {hero.alter_ego}</b>
          </li>
          <li className="list-group-item">Publisher: {hero.publisher}</li>
          <li className="list-group-item">
            First appearance: {hero.first_appearance}
          </li>
          <li className="list-group-item">Character: {hero.characters}</li>
        </ul>
        <button className="btn btn-primary mt-4" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
