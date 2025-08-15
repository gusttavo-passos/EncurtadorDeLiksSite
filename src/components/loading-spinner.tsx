import "./styles/loading-spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Carregando...</p>
    </div>
  );
}
