import Image from "next/image";
import { Inter } from "next/font/google";
import { NavBar } from "~/components/header/mainNav";
import { HeroScrollDemo } from "~/components/Home/main";
import { Phases } from "~/components/Home/phases";
import { Socails } from "~/components/Home/socails";
import { Footer } from "~/components/Home/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return ( 
    <div >
<NavBar  />
  
<HeroScrollDemo />

<Phases />
     
<Socails />  
<Footer />  
</div>
  );
}
