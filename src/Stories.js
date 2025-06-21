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
      <div className="story">
        {stories.map(story => <div className="imagem"> <img src={story.image} alt={story.alt} /></div>)}

      </div>
        </div>
  );
}
// falta mostrar corretamente os storys
// function ListaStory(lista) {
//   return lista.map((userInfo) => ``);
// }
