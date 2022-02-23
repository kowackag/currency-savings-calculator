import React from 'react';
import StyledWalletTable from './WalletTable.styled';

const columnsNames = ['Waluta', 'Ilość', 'Data Zakupu', 'Cena Zakupu', 'Obecny kurs', 'Obecna wartość', 'Zysk/Strata']

const WalletTable = () => {

    return (
        <StyledWalletTable>
            <table>
                <thead>
                    <tr> {columnsNames.map(col=> <th>{col}</th>)}

                    </tr>
                </thead>
                <tbody>
                    <tr> {columnsNames.map(col=> <td>{col}</td>)}

                    </tr>
                </tbody>
            </table>
        </StyledWalletTable>   
    )
}

export default WalletTable;