
function App() {
  return (
    <>
      <button className="bg-red-400" onClick={() => {
        const modal = document.getElementById("modal")
        modal?.classList.remove("hidden")
      }}>Open</button>
      <div className="fixed hidden inset-0 bg-gray-600/50 overflow-y-auto h-full w-full" id="modal">
        123
      </div>

    </>
  );
}

export default App;
