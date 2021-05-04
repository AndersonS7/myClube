import Menu from "../components/menu/menu";

import style from '../styles/style.module.scss';
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {

    return (
        <div>
            <main>
                <div className={style.container}>
                    <Menu />
                    <Component {...pageProps} />
                </div>
            </main>
        </div>
    )
}

export default MyApp