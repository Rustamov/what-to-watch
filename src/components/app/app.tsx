import { Main } from '../../pages/main/main';

type AppProps = {
  moviesCount: number;
}

function App({ moviesCount }: AppProps): JSX.Element {
  return <Main moviesCount={moviesCount} />;
}

export default App;
