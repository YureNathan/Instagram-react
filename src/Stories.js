import Story from "./Story";

export default function Stories() {
  const stories = [
    { image: "assets/9gag.svg", alt: "9gag", user: "9gag" },
    { image: "assets/meowed.svg", alt: "meowed", user: "meowed" },
    { image: "assets/barked.svg", alt: "barked", user: "barked" },
    {
      image: "assets/nathanwpylestrangeplanet.svg",
      alt: "nathanwpylestrangeplanet",
      user: "nathanwpylestrangeplanet",
    },
    {
      image: "assets/wawawicomics.svg",
      alt: "wawawicomics",
      user: "wawawicomics",
    },
    { image: "assets/respondeai.svg", alt: "respondeai", user: "respondeai" },
    {
      image: "assets/filomoderna.svg",
      alt: "filomoderna",
      user: "filomoderna",
    },
    {
      image: "assets/memeriagourmet.svg",
      alt: "memeriagourmet",
      user: "memeriagourmet",
    },
  ];
  return (
    <div className="stories">
      {stories.map((story) => (
        <Story
          imagem={story.image}
          texto={story.alt}
          usuario={story.user}
        ></Story>
      ))}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
