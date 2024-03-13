
import ContentImages from "./images";
import Header from "./header";
import Footer from "./footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <Header/>

      <ContentImages/>

      <Footer/>
    </main>
  );
}
