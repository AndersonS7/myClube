import Link from 'next/link';


export default function Table () {
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Clube</th>
                    <th>Pontos</th>
                    <th>Vitorias</th>
                    <th>Empates</th>
                    <th>Derrotas</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Flamengo</td>
                    <td>15</td>
                    <td>5</td>
                    <td>1</td>
                    <td>0</td>
                </tr>
            </tbody>
        </table>
    )
}