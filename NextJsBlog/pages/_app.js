import NavBarLayout from '@/componets/Layouts/NavBarLayout'
import '@/styles/globals.css'

const App = ({ Component, pageProps })=> {
  return( <NavBarLayout>
    <Component {...pageProps} />
    </NavBarLayout>
)};
export default App;