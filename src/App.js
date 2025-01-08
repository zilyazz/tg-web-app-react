import './App.css';
import React, { useState } from 'react';
window.Telegram.WebApp
function App() {
  const [runes, setRunes] = useState([]);

  const handleButtonClick = async () => {
    try {
      const response = await fetch(' https://cyan-socks-live.loca.lt/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();
      setRunes(data.runes); // Сохраняем руны в состоянии
    } catch (error) {
      console.error('Ошибка при генерации расклада:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Расклад на рунах</h1>
      <button 
        onClick={handleButtonClick} 
        style={{
          fontSize: '20px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Сделать расклад из трёх рун
      </button>
      <div style={{ marginTop: '20px' }}>
        {runes.length > 0 && (
          <div>
            <h2>Ваш расклад:</h2>
            <ul>
              {runes.map((rune, index) => (
                <li key={index} style={{ marginBottom: '10px' }}>{rune}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}



export default App;
