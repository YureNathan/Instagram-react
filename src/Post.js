import { useState } from "react";
export default function Post({
  user,
  userImg,
  content,
  byLinekd,
  contLikes,
  nameLiked,
}) {
  const [Contlikes, setContLikes] = useState(contLikes);
  const [liked, setLiked] = useState(false);
  const [salved, setSalved] = useState(false);

  function curtirPost() {
    if (liked) {
      setContLikes(Contlikes - 1);
    } else {
      setContLikes(Contlikes + 1);
    }
    setLiked(!liked);
  }
  function curtidaImagem() {
    if (!liked) {
      setContLikes(Contlikes + 1);
      setLiked(true);
    }
  }
  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={userImg} alt={user} />
          {user}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={content} alt="Post conteudo" onClick={curtidaImagem} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              name={liked ? "heart" : "heart-outline"}
              color={liked ? "danger" : "dark"}
              onClick={curtirPost}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon
              name="paper-plane-outline"
              color={liked ? "dark" : "white"}
            ></ion-icon>
          </div>
          <div>
            <ion-icon
              name={salved ? "bookmark" : "bookmark-outline"}
              onClick={() => {
                setSalved(!salved);
              }}
            ></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={byLinekd} alt={nameLiked} />
          <div className="texto">
            Curtido por <strong>{nameLiked}</strong> e{" "}
            <strong>outras {Contlikes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
