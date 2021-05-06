import style from './style.module.scss';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

export default function Home() {

    return (
        <div className={style.container}>
            <div className={style.column_w60}>
                <div className={style.row}>
                    <div className={style.column}>

                        <div className={style.row}>

                            <span className={style.vitoria}>
                                <h3>Vitorias</h3>
                                <div>
                                    <div>
                                        <p className={style.numberMainVitoria}>4</p>
                                        <p className={style.percentageVitoria}>90%</p>
                                    </div>
                                    <AiOutlineArrowUp className={style.AiOutlineArrowUp} />
                                </div>
                            </span>


                            <span className={style.empate}>
                                <h3>Empates</h3>
                                <div>
                                    <div>
                                        <p className={style.numberMainVitoria}>1</p>
                                        <p className={style.percentageVitoria}>10%</p>
                                    </div>
                                    <AiOutlineArrowDown className={style.AiOutlineArrowDown} />
                                </div>
                            </span>

                        </div>

                        <div className={style.row}>

                            <span className={style.derrota}>
                                <h3>Derrotas</h3>
                                <div>
                                    <div>
                                        <p className={style.numberMainVitoria}>0</p>
                                        <p className={style.percentageVitoria}>0%</p>
                                    </div>
                                    <h6>-</h6>
                                </div>
                            </span>

                            <span className={style.balance}>
                                <h3>Saldo</h3>
                                <div>
                                    <div>
                                        <p className={style.numberMainVitoria}>+7</p>
                                        <div>
                                            <p className={style.positiveBalance}>8</p>
                                            <p className={style.negativeBalance}>1</p>
                                        </div>
                                    </div>
                                </div>
                            </span>

                        </div>

                    </div>

                    <div className={style.column}>
                        <div className={style.lastFiveGames}>
                            <h2>Últimos 5 jogos</h2>
                        </div>
                    </div>

                </div>

                <div className={style.row}>
                    <div className={style.roudTable}>
                        <h2>Resumo do campeonato</h2>
                    </div>
                </div>

            </div>

            <div className={style.column_w40}>
                coluna b
            </div>
        </div>
    )
}