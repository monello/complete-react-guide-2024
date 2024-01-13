import { useState } from 'react';

import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

import { CORE_CONCEPTS, EXAMPLES } from './data.js';

function App() {
    const [selectedTopic, setSelectedTopic] = useState();

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
                        {CORE_CONCEPTS.map((concept) => (
                            <CoreConcept key={concept.title} {...concept} />
                        ))}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Example</h2>
                    <menu>
                        <TabButton
                            onClick={() => handleSelectTopic('components')}
                            isSelected={selectedTopic === 'components'}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            onClick={() => handleSelectTopic('jsx')}
                            isSelected={selectedTopic === 'jsx'}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            onClick={() => handleSelectTopic('props')}
                            isSelected={selectedTopic === 'props'}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            onClick={() => handleSelectTopic('state')}
                            isSelected={selectedTopic === 'state'}
                        >
                            State
                        </TabButton>
                    </menu>

                    {!selectedTopic && <p>Please select a topic</p>}
                    {selectedTopic && (
                        <div id="tab-content">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                            </pre>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}

export default App;
