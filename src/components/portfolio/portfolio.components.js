import React from "react";
import "./portfolio.components.scss";
import IMG1 from "../../assets/images/portfolio1.png";
import IMG2 from "../../assets/images/portfolio2.png";
import IMG3 from "../../assets/images/portfolio3.png";
import IMG4 from "../../assets/images/portfolio4.png";
import IMG5 from "../../assets/images/portfolio5.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";

function Portfolio() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "PhotoX",
      github: "https://github.com/HashmatullahAfroz/PhotoX",
      demo: "https://hashmatullahafroz.github.io/PhotoX/",
    },
    {
      id: 2,
      image: IMG2,
      title: "BookStore",
      github: "https://github.com/HashmatullahAfroz/Book-Store",
      demo: "https://hashmatullahafroz.github.io/Book-Store/",
    },
    {
      id: 3,
      image: IMG3,
      title: "Joker Themes",
      github: "https://github.com/HashmatullahAfroz/Joker-Themes",
      demo: "https://hashmatullahafroz.github.io/Joker-Themes",
    },
    {
      id: 4,
      image: IMG4,
      title: "Mobile Van",
      github: "https://github.com/HashmatullahAfroz/mobileVan",
      demo: "https://hashmatullahafroz.github.io/mobileVan/",
    },
    {
      id: 5,
      image: IMG5,
      title: "NetPix",
      github: "https://github.com/HashmatullahAfroz/netpix",
      demo: "https://hashmatullahafroz.github.io/netpix/",
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <Swiper //it was a articale tag
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="container portfolio_container mySwiper"
      >
        {data.map(({ id, image, title, github, demo }) => {
          return (
            //it was a div
            <SwiperSlide className="portfolio_item" key={id}>
              <div className="portfolio_item_image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item_cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Portfolio;
