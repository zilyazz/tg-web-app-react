import React, { useState } from 'react';
import './App.css';

window.Telegram.WebApp.initEnv();

function App() {
  const [runes, setRunes] = useState([]); // Хранит текущий расклад

  const handleButtonClick = async () => {
    try {
      const response = await fetch('https://indianapolis-pal-loose-mount.trycloudflare.com/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();
      setRunes(data); // Сохраняем полученный расклад
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
        Сделать расклад из пяти рун
      </button>
      <div style={{ marginTop: '20px' }}>
        {runes.length > 0 && (
          <div>
            <h2>Ваш расклад:</h2>
            <ol>
              {runes.map((rune, index) => (
                <li key={index} style={{ marginBottom: '10px' }}>
                  <strong>Позиция {index + 1}:</strong> {rune.rune} ({rune.state})
                  <br />
                  Значение: {rune.value}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;