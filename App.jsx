import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import FormikYup from './src/FormikYup';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <FormikYup />
    </ApplicationProvider>
  );
};

export default App;
