import React from 'react';
import '../Banner/Banner.css';
import Carousel from 'react-bootstrap/Carousel';
import carouseimage1 from '../../images/carouseimage1.png';
import carouseimage2 from '../../images/carouseimage2.png';
import carouseimage3 from '../../images/carouseimage3.png';

class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <Carousel className="carouselEdit">
          <Carousel.Item>
            <div className="bannerContent">
              <img src={carouseimage1} className="latestMov" alt="" />
              <div className="latestInfo">
                <h2>
                  <u>
                    <b>#1 Latest</b>
                  </u>
                </h2>
                <p>
                  <b>The Croods: A New Age</b>
                </p>
                <div className="info">
                  The Croods are back in this all-new family-friendly adventure. A new family has
                  shown up on their prehistoric block claiming to be way better than the Croods.
                  Known as the Bettermans, they announce to all of the world that they are more
                  evolved than the lovable Croods. What will happen in this hilarious conflict of
                  caveman families when they finally go toe to toe in a battle of the brutes?
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="bannerContent">
              <img src={carouseimage2} className="latestMov" alt="" />
              <div className="latestInfo">
                <h2>
                  <u>
                    <b>#2 Latest</b>
                  </u>
                </h2>
                <p>
                  <b>Wild Mountain Thyme</b>
                </p>
                <div className="info">
                  John Patrick Shanley, who created the classic MOONSTRUCK, brings his sweeping
                  romantic vision to Ireland with Wild Mountain Thyme. The headstrong farmer
                  Rosemary Muldoon (Emily Blunt) has her heart set on winning her neighbor Anthony
                  Reilly's love. The problem is Anthony (Jamie Dornan) seems to have inherited a
                  family curse, and remains oblivious to his beautiful admirer. Stung by his father
                  Tony's (Christopher Walken) plans to sell the family farm to his American nephew
                  (Jon Hamm), Anthony is jolted into pursuing his dreams in this comedic, moving and
                  wildly romantic tale.
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="bannerContent">
              <img src={carouseimage3} className="latestMov" alt="" />
              <div className="latestInfo">
                <h2>
                  <u>
                    <b>#3 Latest</b>
                  </u>
                </h2>
                <p>
                  <b>Happiest Season</b>
                </p>
                <div className="info">
                  A heart touching story of a young girl who wants to enjoy the acceptance of her
                  family during the most trying of times. It is Christmastime and she does not want
                  to ruin this most special of holidays. Can she remain true to herself or will she
                  give in to the expectations of others. She has many difficult choices to make as
                  she learns what it truly means to come of age.
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Banner;
