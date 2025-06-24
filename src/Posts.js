import Post from "./Post";

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
      {post.map(
        (
          { imageUser, user, content, nameLiked, byLinekd, contLikes },
          index
        ) => (
          <Post
            key={index}
            userImg={imageUser}
            user={user}
            content={content}
            nameLiked={nameLiked}
            byLinekd={byLinekd}
            contLikes={contLikes}
          ></Post>
        )
      )}
    </div>
  );
}
