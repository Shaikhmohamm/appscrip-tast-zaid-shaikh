
import BottomNav from "@/components/BottomNav/BottomNav";
import TopNav from "../components/TopNav/TopNav";
import HeroHeader from "@/components/HeroHeader/HeroHeader";
import Products from "@/components/Products/Products";



export default function Home() {
  return (
    <div>
      <TopNav/>
      <BottomNav/>
      <HeroHeader/>
      <Products/>
    </div>
  );
}
