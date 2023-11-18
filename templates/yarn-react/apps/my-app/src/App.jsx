import { Suspense, lazy } from 'react';
import Loader from '@mydomain/component-loader';

const Sample = lazy(() => import('@mydomain/component-sample'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Sample />
    </Suspense>
  );
}

export default App;
