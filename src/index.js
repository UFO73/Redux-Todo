import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { App } from 'components/app'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <Provider store={store}>
    <PersistGate loading={undefined} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
)
