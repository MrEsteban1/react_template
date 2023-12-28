import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { animations } from "../../constants/animations";

export const HeroCard = ({ hero }) => {
  const heroImageUrl = `assets/heros/${hero.id}.jpg`;

  return (
    <div className={`col ${animations.fadeIn}`}>
      <div className="card p-2">
        <div className="row no-gutter">
          <div className="col-4 ">
            <img
              src={heroImageUrl}
              className={`card-img`}
              alt={hero.superhero}
            />
          </div>
          <div className="col-8">
            <div className="cardBody">
              <h6 className="card-tittle">{hero.superhero}</h6>
              <p className="card-text">{hero.alter_ego}</p>
              {hero.alter_ego != hero.characters && <p>{hero.characters}</p>}
              <p className="card-text">
                <small className="text-muted">{hero.first_appearance}</small>
              </p>
              <Link className="btn btn-outline-primary" to={`/hero/${hero.id}`}>
                Detalle
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  hero: PropTypes.any.isRequired,
};
