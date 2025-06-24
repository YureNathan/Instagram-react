import { useState } from "react";

export default function User() {
  const [nome, setNome] = useState("");
  const [imagemP, setImagemP] = useState("assets/catanacomics.svg");
  
  function mudarNomeP() {
    const nomeDigitado = prompt("Digte o novo nome: ");
    if (nomeDigitado !== null && nomeDigitado !== "") {
      setNome(nomeDigitado);
    }
  }
  function mudarImagemP() {
    const linkImagem = prompt("Digite o link da nova imagem");
    if (linkImagem !== null && linkImagem !== "") {
      setImagemP(linkImagem);
    }
  }
  return (
    <div className="usuario">
      <img src={imagemP} alt="imagem de perfil" onClick={mudarImagemP} />
      <div className="texto">
        <span>
          <strong>{!nome ? "catanacomics" : `${nome}`}</strong>
          <ion-icon name="pencil" onClick={mudarNomeP}></ion-icon>
        </span>
      </div>
    </div>
  );
}
