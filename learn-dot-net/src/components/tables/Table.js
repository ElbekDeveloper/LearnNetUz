import React from 'react';

const Table = ({ data }) => {
    return (
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
            <tr>
                <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Mavzu</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Video</th>
            </tr>
            </thead>
            <tbody>
            {data.map((row) => (
                <tr key={row.id}>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{row.id}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{row.theme}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{row.video}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;
