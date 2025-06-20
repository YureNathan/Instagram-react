export default function NavBar() {
  return (
    <div className="navbar">
      <div className="container">
        <ComponeteLogo
          nome="logo-instagram"
          detalhe="separador"
          image="assets/logo.png"
        />

        <div className="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div className="icones">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>

        <div className="icones-mobile">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}

function ComponeteLogo({ nome, detalhe, image }) {
  return (
    <div className="logo">
      <ion-icon name={nome}></ion-icon>
      <div className={detalhe}></div>
      <img src={image} alt="logo" />
    </div>
  );
}
