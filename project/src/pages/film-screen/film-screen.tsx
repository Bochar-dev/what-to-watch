import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FilmList from '../../components/film-list/film-list';
import ButtonPlay from '../../components/button-play/button-play';
import ButtonAddReview from '../../components/button-add-review/button-add-review';
import Tabs from '../../components/tabs/tabs';
import ButtonMyList from '../../components/button-mylist/button-mylist';
import {fetchFilmDetailAction, fetchSimularFilmsAction, fetchFilmCommentsAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFilmComments, getFilmDetail, getFilmsSimular} from '../../store/data-procces/selectors';

export default function FilmScreen (): JSX.Element {
  const dispatch = useAppDispatch();
  const {id} = useParams();

  const filmDetail = useAppSelector(getFilmDetail);
  const simularFilms = useAppSelector(getFilmsSimular);
  const filmComments = useAppSelector(getFilmComments);

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmDetailAction(id));
      dispatch(fetchSimularFilmsAction(id));
      dispatch(fetchFilmCommentsAction(id));
    }
  }, [id, dispatch]);

  return (
    filmDetail !== null ?
      <>
        <section className="film-card film-card--full" style={{backgroundColor: filmDetail.backgroundColor}}>
          <div className="film-card__hero">
            <Header film={filmDetail} />

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{filmDetail.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{filmDetail.genre}</span>
                  <span className="film-card__year">{filmDetail.released}</span>
                </p>
                <div className="film-card__buttons">
                  <ButtonPlay filmId={filmDetail.id}/>

                  <ButtonMyList film={filmDetail}/>

                  <ButtonAddReview />
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={filmDetail.posterImage} alt={filmDetail.name} width="218" height="327" />
              </div>

              <div className="film-card__desc">
                {<Tabs film={filmDetail} reviews={filmComments}/>}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <div className="catalog__films-list">
              {<FilmList films={simularFilms} isMoreFilms />}
            </div>
          </section>

          <Footer />
        </div>
      </> :
      <NotFoundScreen />
  );
}
