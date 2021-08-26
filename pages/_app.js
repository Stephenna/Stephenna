import "../styles/tailwind.css";
import { FormspreeProvider } from '@formspree/react'


function MyApp({ Component, pageProps }) {
  return (
  <>
    <FormspreeProvider project='1753489261589429965'>
      <Component {...pageProps} />
    </FormspreeProvider>
  </>
  )
}

export default MyApp
