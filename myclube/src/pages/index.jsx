import style from './style.module.scss';

export default function Home() {

    return (
        <div className={style.container}>
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
                    <h2>Veja os detalhes do seu time favorito</h2>
                </div>
                
                <div className={style.menuExit}>
                    <h3>getOut</h3>
                </div>
            </div>
            <div className={style.content}>

            </div>
        </div>
    )
}