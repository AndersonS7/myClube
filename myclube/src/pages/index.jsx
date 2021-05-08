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
                            <h3>Últimos 5 jogos</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><img src="/img/icones/clubes/flamengo.svg" width='45px' alt="flamengo" /></td>
                                        <td><h2>3</h2></td>
                                        <td>X</td>
                                        <td><h2>1</h2></td>
                                        <td><img src="/img/icones/clubes/fortaleza.svg" width='45px' alt="fortaleza" /></td>
                                    </tr>
                                    <tr>
                                        <td><img src="/img/icones/clubes/atletico-mg.svg" width='45px' alt="atletico-mg" /></td>
                                        <td><h2>0</h2></td>
                                        <td>X</td>
                                        <td><h2>0</h2></td>
                                        <td><img src="/img/icones/clubes/flamengo.svg" width='45px' alt="flamengo" /></td>
                                    </tr>
                                    <tr>
                                        <td><img src="/img/icones/clubes/america-mg.svg" width='45px' alt="america-mg" /></td>
                                        <td><h2>0</h2></td>
                                        <td>X</td>
                                        <td><h2>1</h2></td>
                                        <td><img src="/img/icones/clubes/flamengo.svg" width='45px' alt="flamengo" /></td>
                                    </tr>
                                    <tr>
                                        <td><img src="/img/icones/clubes/athletico-pr.svg" width='45px' alt="athletico-mg" /></td>
                                        <td><h2>0</h2></td>
                                        <td>X</td>
                                        <td><h2>2</h2></td>
                                        <td><img src="/img/icones/clubes/flamengo.svg" width='45px' alt="flamengo" /></td>
                                    </tr>
                                    <tr>
                                        <td><img src="/img/icones/clubes/flamengo.svg" width='45px' alt="flamengo" /></td>
                                        <td><h2>1</h2></td>
                                        <td>X</td>
                                        <td><h2>0</h2></td>
                                        <td><img src="/img/icones/clubes/red_bull.svg" width='45px' alt="red_bull" /></td>
                                    </tr>
                                </tbody>
                            </table>
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
                <div className={style.firstFivePlaced}>
                    <h3>Primeiros 5 colocados</h3>

                    <table>
                        <thead>

                            <tr>
                                <th></th>
                                <th></th>
                                <th>vit</th>
                                <th>emp</th>
                                <th>der</th>
                                <th>sg</th>
                                <th>recentes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1°</td>
                                <td><img src="/img/icones/clubes/gremio.svg" width='30px' alt="gremio" /></td>
                                <td>5</td>
                                <td>0</td>
                                <td>0</td>
                                <td>11</td>
                                <td>
                                    <div className={style.lastGames}>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2°</td>
                                <td><img src="/img/icones/clubes/santos.svg" width='30px' alt="santos" /></td>
                                <td>5</td>
                                <td>0</td>
                                <td>0</td>
                                <td>10</td>
                                <td>
                                    <div className={style.lastGames}>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3°</td>
                                <td><img src="/img/icones/clubes/ceara.svg" width='30px' alt="ceara" /></td>
                                <td>4</td>
                                <td>1</td>
                                <td>0</td>
                                <td>10</td>
                                <td>
                                    <div className={style.lastGames}>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>4°</td>
                                <td><img src="/img/icones/clubes/flamengo.svg" width='30px' alt="flamengo" /></td>
                                <td>4</td>
                                <td>1</td>
                                <td>0</td>
                                <td>7</td>
                                <td>
                                    <div className={style.lastGames}>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>5°</td>
                                <td><img src="/img/icones/clubes/fluminense.svg" width='30px' alt="fluminense" /></td>
                                <td>4</td>
                                <td>0</td>
                                <td>1</td>
                                <td>7</td>
                                <td>
                                    <div className={style.lastGames}>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </td>
                            </tr>
                            
                        </tbody>

                    </table>

                    <h4>jogando agora</h4>
                    <img src="/img/icones/img/aviso-nao-ha-jogos.png" width='350px' alt="não ha ajogos" />
                    <h5>não ha jogos nesse momento</h5>
                </div>
            </div>
        </div>
    )
}