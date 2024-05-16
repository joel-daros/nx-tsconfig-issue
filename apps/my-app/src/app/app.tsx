// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { Products } from '@nx-test/products';

export function App() {
  const myArr = [1, 2, 3];
  const index: number = 0;
  const value = myArr[index];
  return (
    <div>
      <NxWelcome title="my-app" />
      {/* That's ok, I'm using the optional operator because this project has noUncheckedIndexedAccess = true */}
      <h1>Welcome to my-app - {value?.toString()}</h1>
      <Products />
    </div>
  );
}

export default App;
