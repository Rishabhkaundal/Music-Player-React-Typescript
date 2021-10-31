import React,{useState} from 'react';
import home from '../HomePage';
import { BrowserRouter, Link, Route } from 'react-router-dom';

function App() {
    const [landing, setLanding]=useState(true);
    return (
        <div>{landing?<h1>this is a true value</h1>:<h2>false value</h2>}
            <h1>Landing Page</h1>
            <BrowserRouter>
                <Route path='/HomePage' component={home} exact={true} />
                <Link to='/HomePage'> Main Page</Link>
            </BrowserRouter>
            {!setLanding}
        </div>
    )
}

export default App;