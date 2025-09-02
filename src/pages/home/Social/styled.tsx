import styled from "styled-components";

export const SocialContainer = styled.section`
  .swiper-wrapper {
    padding: 10px 0;
  }
  .swiper-slide {
    max-width: 300px;
    width: 100%;
  }
  .swiper-slide-shadow-right,
  .swiper-slide-shadow-left {
    border-radius: 15px;
  }
  .swiper-slide-active {
    .bg-gradient-to-t {
      background-image: unset;
    }
    img,
    video {
      opacity: 1;
    }
    div {
      background: unset;
      opacity: 1;
      transition: all 0.26s ease;
    }
    h3 {
      color: #fff;
    }
  }
  @media (width<=768px) {
    .swiper-slide {
      max-width: 500px;
    }
  }
`;
