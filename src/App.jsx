import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import Examples from './components/Examples/Examples.jsx';
import Header from './components/Header/Header.jsx';

function App() {
    return (
        <div>
            <Header />
            <main>
                <CoreConcepts />
                <Examples />
            </main>
        </div>
    );
}

export default App;
