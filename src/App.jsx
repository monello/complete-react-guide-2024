import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

import { CORE_CONCEPTS } from './data.js';

function App() {
    let tabContent = 'Please select an example above.';

    function handleExampleSelect(exampleType) {
        console.log(
            `%cExample ${exampleType} Selected!`,
            'color: cornflowerblue;font-family:sans-serif; font-size: 20px'
        );
        tabContent = exampleType;
    }
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>
                    <ul>
                        <CoreConcepts {...CORE_CONCEPTS[0]} />
                        <CoreConcepts {...CORE_CONCEPTS[1]} />
                        <CoreConcepts {...CORE_CONCEPTS[2]} />
                        <CoreConcepts {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <section id="examples">
                    <h2>Example</h2>
                    <menu>
                        <TabButton
                            onClick={() => handleExampleSelect('components')}
                        >
                            Components
                        </TabButton>
                        <TabButton onClick={() => handleExampleSelect('jsx')}>
                            JSX
                        </TabButton>
                        <TabButton onClick={() => handleExampleSelect('props')}>
                            Props
                        </TabButton>
                        <TabButton onClick={() => handleExampleSelect('state')}>
                            State
                        </TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
