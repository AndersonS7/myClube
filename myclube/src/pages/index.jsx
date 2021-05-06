import style from './style.module.scss';

export default function Home() {

    return (
        <div className={style.container}>
            <div className={style.column_w60}>
                <div className={style.row}>
                    <div className={style.column}>
                        coluna a
                    </div>
                    <div className={style.column}>
                        coluna b
                    </div>
                </div>
                <div className={style.row}>
                    linha b
                </div>
            </div>
            
            <div className={style.column_w40}>
                coluna b
            </div>
        </div>
    )
}