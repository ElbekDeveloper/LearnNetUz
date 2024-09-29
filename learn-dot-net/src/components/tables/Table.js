import React from 'react';

const Table = ({ data }) => {
    return (
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
            <tr>
                <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Mavzu</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Vazifa</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Qo'shimcha</th>
            </tr>
            </thead>
            <tbody>
            {data.map((row) => (
                <tr key={row.id}>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{row.id}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{row.theme}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{row.task}</td>
                    <td style={{ border: '1px solid black', padding: '8px' }}>{row.topic}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;
