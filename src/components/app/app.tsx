import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { Film } from '../../types/types';

import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { Main } from '../../pages/main/main';
import { MyList } from '../../pages/my-list/my-list';
import { Movie } from '../../pages/movie/movie';
import { AddReview } from '../../pages/add-review/add-review';
import { Player } from '../../pages/player/player';
import { SignIn as LogIn } from '../../pages/sign-in/sign-in';
import { NotFoundScreen } from '../../pages/not-found/not-found';

type AppProps = {
  films: Film[];
}

function App({ films }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Main films={films} />} />
        <Route path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={`${AppRoute.Movie}/:id`} element={<Movie />} />
        <Route path={`${AppRoute.Movie}/:id/${AppRoute.AddReview}`}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <AddReview />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path={AppRoute.LogIn} element={<LogIn />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
