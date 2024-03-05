import { AppProvider, ButtonGroup, Button } from '@shopify/polaris';
import "@shopify/polaris/build/esm/styles.css";
import FormOne from './formOne';
import FormThree from './formThree/formThree';
import React, { useState } from 'react';

function App() {
    const [currentForm, setCurrentForm] = useState(null);

    return (
        <AppProvider>
            <div className="App">
              <h1>Create volume discount</h1>
                <ButtonGroup segmented>
                    <Button onClick={() => setCurrentForm('FormOne')}>General</Button>
                    <Button onClick={() => setCurrentForm('FormThree')}>Volume discount rule</Button>
                </ButtonGroup>
                {currentForm === 'FormOne' && <FormOne />}
                {currentForm === 'FormThree' && <FormThree />}
            </div>
        </AppProvider>
    );
}

export default App;
