import { useState } from 'react';
import TabButton from '../TabButton/TabButton';
import Section from '../Section/Section';
import { EXAMPLES } from '../../data';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelectTopic(exampleType) {
        setSelectedTopic(exampleType);
    }

    return (
        <Section title="Examples" id="examples">
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
        </Section>
    );
}
