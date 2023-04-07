import "@/styles/globals.css";
import "@/styles/Home.css";
import "@/container/AboutUs/AboutUs.css";
import "@/container/Chef/Chef.css";
import "@/container/Footer/Footer.css";
import "@/container/Gallery/Gallery.css";
import "@/container/Header/Header.css";
import "@/container/Intro/Intro.css";
import "@/container/Laurels/Laurels.css";
import "@/container/Menu/SpecialMenu.css";

import "@/components/Footer/FooterOverlay.css";
import "@/components/Footer/Newsletter.css";
import "@/components/Navbar/Navbar.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
