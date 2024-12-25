import './App.css';
window.Telegram.WebApp
function App() {
  // Обработчик нажатия на кнопку
  const handleButtonClick = () => {
    alert("Расклад из трёх выполнен!");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Добро пожаловать!</h1>
      <button 
        onClick={handleButtonClick} 
        style={{
          fontSize: '20px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Сделать расклад из трёх
      </button>
    </div>
  );
}


export default App;
