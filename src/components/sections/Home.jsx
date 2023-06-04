import Marquee from "react-fast-marquee";

import { Link } from "react-router-dom";
import { LayoutBlog } from "../compound/main";
import Footer from "../shared/Footer";
import { HomePresentationBlog } from "../shared/main";

const Home = () => {
  return (
    <LayoutBlog>
      <LayoutBlog.Header>
        <nav>
          <Link>HOME</Link>
          <Link>ABOUT ME</Link>
          <Link>PIXER ART</Link>
          <Link>BLOG</Link>
        </nav>
      </LayoutBlog.Header>
      <LayoutBlog.Main>
        <HomePresentationBlog />
      </LayoutBlog.Main>
      <LayoutBlog.Footer>
        <Footer />
      </LayoutBlog.Footer>
    </LayoutBlog>
  );
};

export default Home;
