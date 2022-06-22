import "@assets/main.scss"
import 'keen-slider/keen-slider.min.css'
import { AppProps } from "next/app"
import {FC, PropsWithChildren} from "react"
import { UIProvider } from "@components/ui/context"

const Noop: FC<PropsWithChildren> = ({children}) => <>{children}</>

function MyApp({Component, pageProps}: AppProps & {Component: {Layout: FC}}) {
    const Layout = Component.Layout ?? Noop

    return (
        <UIProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </UIProvider>
    )
}

export default MyApp