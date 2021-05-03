import Menu from "../components/menu/menu";

import '../styles/global.scss';
import style from '../styles/style.module.scss';

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