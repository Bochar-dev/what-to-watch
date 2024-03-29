import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import Header from '../../components/header/header';
import FormSubmitComment from '../../components/form-submit-comment/form-submit-comment';
import {store} from '../../store';
import {fetchFilmDetailAction} from '../../store/api-actions';
import {getFilmDetail} from '../../store/data-procces/selectors';


export default function ReviewScreen (): JSX.Element {
  const filmDetail = useAppSelector(getFilmDetail);
  const {id} = useParams();

  useEffect(() => {
    store.dispatch(fetchFilmDetailAction(id ?? ''));
  }, [id]);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <Header />
        {filmDetail &&
          <div className="film-card__poster film-card__poster--small">
            <img src={filmDetail.posterImage} alt={filmDetail.name} width="218" height="327" />
          </div>}
      </div>

      <div className="add-review">
        <FormSubmitComment />
      </div>

    </section>
  );
}
