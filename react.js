const App = () => {
  return (
    <div>
      <h1>Hello from React!</h1>
      <p>This is a simple React component in a separate JS file.</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
