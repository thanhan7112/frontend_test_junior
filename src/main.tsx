import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import '~/styles/index.scss'
import i18n from '~/services/i18n/index.tsx'
import { Provider } from 'react-redux'
import store from '~/store/index.ts'
import Layout from '~/layout/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </I18nextProvider>
  </Provider>
)
