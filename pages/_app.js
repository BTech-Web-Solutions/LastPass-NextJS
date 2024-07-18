import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col gap-8 h-[400px] w-[300px]">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
