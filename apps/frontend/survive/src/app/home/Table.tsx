// components/Table.tsx
import React from 'react';

const Table = () => {
  return (
    <div className="table-container" style={{
      width: '1090px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
      }}>
        <thead>
          <tr style={{
            backgroundColor: '#f0f0f0',
            color: '#333',
            fontWeight: 'bold',
          }}>
            <th style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>Name</th>
            <th style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>Type of Threat</th>
            <th style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>Threat Level</th>
            <th style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{
            backgroundColor: '#fff',
            color: '#333',
          }}>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>Earthquake</td>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>Seismic</td>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>High</td>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>2023-02-20</td>
          </tr>
          <tr style={{
            backgroundColor: '#fff',
            color: '#333',
          }}>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>Flood</td>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>Hydrological</td>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>Medium</td>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>2023-02-15</td>
          </tr>
          <tr style={{
            backgroundColor: '#fff',
            color: '#333',
          }}>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>Forest Fire</td>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>Pyroclastic</td>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>Low</td>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>2023-02-10</td>
          </tr>
          <tr style={{
            backgroundColor: '#fff',
            color: '#333',
          }}>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>Hurricane</td>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>Meteorological</td>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>High</td>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>2023-02-05</td>
          </tr>
          <tr style={{
            backgroundColor: '#fff',
            color: '#333',
          }}>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>Landslide</td>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>Geological</td>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd' }}>Medium</td>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>2023-01-30</td>
          </tr>
          <tr style={{
            backgroundColor: '#fff',
            color: '#333',
          }}>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>Snowstorm</td>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>Meteorological</td>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>Low</td>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>2023-01-25</td>
          </tr>
          <tr style={{
            backgroundColor: '#fff',
            color: '#333',
          }}>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>Tornado</td>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>Meteorological</td>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>High</td>
            <td style={{
              padding: '10px',
              border: '1px solid #ddd',
            }}>2023-01-20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;