import { useState } from "react";

export default function Posts() {
  const post = [
    {
      imageUser: "assets/meowed.svg",
      user: "meowed",
      content: "assets/gato-telefone.svg",
      nameLiked: "respondeai",
      byLinekd: "assets/respondeai.svg",
      contLikes: 101523,
    },
    {
      imageUser: "assets/barked.svg",
      user: "barked",
      content: "assets/dog.svg",
      nameLiked: "adorable animals",
      byLinekd: "assets/adorable_animals.svg",
      contLikes: 99159,
    },
     {
      imageUser: "assets/nathanwpylestrangeplanet.svg",
      user: "nathanwpylestrangeplanet",
      content: "assets/tirinha.jpg",
      nameLiked: "chibirdart",
      byLinekd: "assets/chibirdart.svg",
      contLikes: 101220,
    },
  ];

  return (
    <div className="posts">
      {post.map((info) => (
        <Post
          userImg={info.imageUser}
          user={info.user}
          content={info.content}
          nameLiked={info.nameLiked}
          byLinekd={info.byLinekd}
          contLikes={info.contLikes}
        ></Post>
      ))}
    </div>
  );
}

function Post({ user, userImg, content, byLinekd, contLikes, nameLiked }) {
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
        <img src={content} alt="Post conteudo" />
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
