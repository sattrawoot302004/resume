import Image from "next/image";
import Header from "./components/Header";
import Education from "./components/Education";
import Projectwork from "./components/Projectwork";
import Profile from "./components/Profile";
import Additional from "./components/Additional";
import Summary from "./components/Summary";
export default function Home() {
  return (
    <>
    <div className="my-10">
    <Header/>
    </div>
    <Profile/>
    <Summary/>
    <Projectwork/>
    <Education/>
    <Additional/>
    </>
  );
}
