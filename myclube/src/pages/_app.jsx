import Menu from "../components/menu/menu";

import style from '../styles/style.module.scss';
import '../styles/global.scss'
import TopMenu from "../components/topmenu/topMenu";

function MyApp({ Component, pageProps }) {

    return (
        <div>
            <main>
                <div className={style.container}>
                    <Menu />
                    <div className={style.content}>
                        <TopMenu />
                        <Component {...pageProps} />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MyApp