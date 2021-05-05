import style from './style.module.scss';

export default function TopMenu() {

    return (
        <>
            <div className={style.topMenu}>
                <div className={style.selectionClubs}>
                    <select name="clubs" id="clubs">
                        <option value="gre">Grêmio</option>
                        <option value="san">Santos</option>
                        <option value="cea">Ceará</option>
                        <option value="fla">Flamengo</option>

                    </select>
                </div>

                <div className={style.msg}>
                </div>

                <div className={style.menuCard}>

                    <span className={style.data}>
                        <p>28 Mar, 2021</p>
                    </span>

                    <div className={style.nameInfo}>
                        <div>sair</div>
                        <div>
                            <h3>Marcos Alvez</h3>
                            <h4>Flamengo</h4>
                        </div>
                        <span>foto</span>
                    </div>

                    {/* falta a opção de sair */}

                </div>
            </div>
            <div className={style.content}>

            </div>
        </>
    )
}