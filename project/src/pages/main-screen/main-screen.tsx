import HeaderComponent from '../../components/header/header';
import FooterComponent from '../../components/footer/footer';

import ButtonPlay from '../../components/button-play/button-play';
import {Film} from '../../types/film';
import GenresList from '../../components/genres-list/genres-list';

type MainScreenProps = {
  promoFilm: Film;
};

export default function MainScreen (props: MainScreenProps): JSX.Element {
  const {
    promoFilm,
  } = props;

  return (
    <>
      <section className="film-card">

        <HeaderComponent />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">

                <ButtonPlay />

                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <FooterComponent />
      </div>
    </>
  );
}
