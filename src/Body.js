import Posts from "./Posts";
import Stories from "./Stories";

export default function Body() {
  return (
    <div className="corpo">
      <div className="esquerda">
        <Stories />
        <Posts />
      </div>
    </div>
  );
}
