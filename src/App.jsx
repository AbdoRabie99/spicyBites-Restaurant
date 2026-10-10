import Footer from "./Footer/Footer";
import MyHeader from "./Header/MyHeader";
import Contact from "./Hero/Contact";
import Features from "./Hero/Features";
import Hero from "./Hero/Hero";
import Menu from "./Hero/Menu";
import Partners from "./Hero/Partners";
import Testmoinals from "./Hero/Testmoinals";

function App() {
  return (
    <>
      <header>
        <MyHeader />
      </header>
      <main>
        <Hero />
        <Menu />
        <Partners />
        <Features />
        <Testmoinals />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
