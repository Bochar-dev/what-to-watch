import {Link} from 'react-router-dom';

type ButtonPlayProps = {
  filmId: number | null;
};

export default function ButtonPlay ({filmId}: ButtonPlayProps): JSX.Element {
  return (
    <Link to={`/player/${filmId}`} className="btn btn--play film-card__button" type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </Link>
  );
}
