import Image from "next/image";
import Mainframe from "./Mainpage/Mainframe";
import Frame2 from "./Mainpage/Frame2";

export default function Home() {
  return (
    <main className="main">
      <Mainframe />
      <Frame2 />
    </main>
  );
}
