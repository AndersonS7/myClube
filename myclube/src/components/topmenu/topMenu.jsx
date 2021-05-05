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
                
                <div className={style.menuExit}>
                    <span>
                        <p>28 Mar, 2021</p>
                    </span>
                    <div>
                        
                    </div>
                </div>
                </div>
            <div className={style.content}>

            </div>
        </>
    )
}