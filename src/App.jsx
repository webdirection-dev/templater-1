import {Provider} from 'react-redux'
import {store} from './features'

import Header from "./layout/header/Header"
import Main from "./layout/main/Main"
import Footer from './layout/footer/Footer'

function App() {
    return (
        <Provider store={store}>
            <Header />
            <Main />
            <Footer />
        </Provider>
    )
}

export default App
