import Story from "./Story";

export default function Stories() {
  const stories = [
    { image: "assets/9gag.svg", user: "9gag" },
    { image: "assets/meowed.svg", user: "meowed" },
    { image: "assets/barked.svg", user: "barked" },
    {
      image: "assets/nathanwpylestrangeplanet.svg",
      user: "nathanwpylestrangeplanet",
    },
    { image: "assets/wawawicomics.svg", user: "wawawicomics" },
    { image: "assets/respondeai.svg", user: "respondeai" },
    { image: "assets/filomoderna.svg", user: "filomoderna" },
    {
      image: "assets/memeriagourmet.svg",
      user: "memeriagourmet",
    },
  ];
  return (
    <div className="stories">
      {stories.map(({ image, user }, index) => (
        <Story key={index} imagem={image} texto={user} usuario={user}></Story>
      ))}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
