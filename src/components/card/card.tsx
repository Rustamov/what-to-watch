import { Link } from 'react-router-dom';

import { Film } from '../../types/types';

type CardProps = Film & {
  onMouseMove?: (id: number) => void;
  onMouseLeave?: () => void;
}

const Card = ({
  id,
  name,
  previewImage,
  onMouseMove = () => void 0,
  onMouseLeave = () => void 0,
}: CardProps): JSX.Element => {
  const handleMouseMove = () => {
    onMouseMove(id);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt="Macbeth" width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/movie/${id}`}>{name}</Link>
      </h3>
    </article>
  );
};

export default Card;
