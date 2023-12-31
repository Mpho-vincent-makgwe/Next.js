import Layout from "@/components/layout/layout";
import '@/styles/globals.css'
import Head from "next/head";
import { Fragment } from "react";
import { NotificationContextProvider } from "@/store/notification-context";
export default function App({ Component, pageProps }) {

  return (
    <NotificationContextProvider>
    <Layout>
      <Head>
    <title>New Next Js App</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/mpho.svg" />
  </Head>
    <Fragment>
    <Component {...pageProps}/>
   </Fragment>
   </Layout>
   </NotificationContextProvider>
   )
}
