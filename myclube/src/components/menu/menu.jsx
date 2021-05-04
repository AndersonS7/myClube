import style from './style.module.scss';
import {
    IoShieldCheckmarkOutline,
    IoNewspaperOutline,
    IoStatsChartSharp,
} from "react-icons/io5";
import { BsTable } from "react-icons/bs";
import {BiFootball} from 'react-icons/bi'
import Link from 'next/link';

export default function Content() {

    return (
        <div className={style.container}>
            <div className={style.logo}>
                <BiFootball className={style.ball}/>
                <span className={style.logoMy}>My</span> <br/>
                <span className={style.logoClub}>Club</span>
            </div>
            <ul>
                <li>
                    <Link href="/">
                        <a> <IoShieldCheckmarkOutline /> meu club </a>
                    </Link>
                </li>
                <li>
                    <Link href="/table/table">
                        <a><BsTable /> tabela </a>
                    </Link>
                </li>
                <li>
                    <Link href="/statistic/statistic">
                        <a><IoStatsChartSharp /> estatíestica </a>
                    </Link>
                </li>
                <li>
                    <Link href="/news/news">
                        <a ><IoNewspaperOutline /> notícias </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}