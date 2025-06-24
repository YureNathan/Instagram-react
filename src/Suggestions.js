import Suggestion from "./Suggestion";

export default function Suggestions() {
  const sugestoes = [
    {
      nomeUser: "bad.vibes.memes",
      imageUser: "assets/bad.vibes.memes.svg",
      seguidor: "Segue você",
    },
    {
      nomeUser: "chibirdart",
      imageUser: "assets/chibirdart.svg",
      seguidor: "Segue você",
    },
    {
      nomeUser: "razoesparaacreditar",
      imageUser: "assets/razoesparaacreditar.svg",
      seguidor: "Novo no Instagram",
    },
    {
      nomeUser: "adorable_animals",
      imageUser: "assets/adorable_animals.svg",
      seguidor: "Segue você",
    },
    {
      nomeUser: "smallcutecats",
      imageUser: "assets/smallcutecats.svg",
      seguidor: "Segue você",
    },
  ];
  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestoes.map(({ imageUser, nomeUser, seguidor }, index) => (
        <Suggestion
          key={index}
          imagem={imageUser}
          usuario={nomeUser}
          seguidor={seguidor}
        />
      ))}
    </div>
  );
}
