export default function Story({ imagem, texto, usuario }) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={imagem} alt={texto} />
      </div>
      <div className="usuario">{usuario}</div>
    </div>
  );
}
