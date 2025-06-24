export default function Suggestion({ imagem, usuario, seguidor }) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={imagem} alt={usuario} />
        <div className="texto">
          <div className="nome">{usuario}</div>
          <div className="razao">{seguidor}</div>
        </div>
      </div>
      <div className="seguir">Seguir</div>
    </div>
  );
}
