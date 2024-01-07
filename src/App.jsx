import { useState } from 'react';

import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

import { CORE_CONCEPTS, EXAMPLES } from './data.js';

function App() {
    const [selectedTopic, setSelectedTopic] = useState('components');

    function handleSelectTopic(exampleType) {
        console.log(
            `%cExample ${exampleType} Selected!`,
            'color: cornflowerblue;font-family:sans-serif; font-size: 20px'
        );
        setSelectedTopic(exampleType);
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
                            onClick={() => handleSelectTopic('components')}
                        >
                            Components
                        </TabButton>
                        <TabButton onClick={() => handleSelectTopic('jsx')}>
                            JSX
                        </TabButton>
                        <TabButton onClick={() => handleSelectTopic('props')}>
                            Props
                        </TabButton>
                        <TabButton onClick={() => handleSelectTopic('state')}>
                            State
                        </TabButton>
                    </menu>
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
