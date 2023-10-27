import Mainframe from "./Mainpage/Mainframe";
import Frame2 from "./Mainpage/Frame2";
import Frame3 from "./Mainpage/Frame3";
import Frame4 from "./Mainpage/Frame4";

export default function Home() {
  return (
    <main className="main">
      <Mainframe />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </main>
  );
}
