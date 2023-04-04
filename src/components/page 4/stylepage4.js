import { keyframes } from "styled-components";
import styled from "styled-components";
const bounceIn = keyframes`
0% {
  transform: scale(0.8);
  opacity: 0;
}
  60% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
  `


export const Oblique = styled.div`
  position: relative;
  overflow: hidden;

  .oblique .main-block-oblique {
  overflow: hidden;
  position: relative;
  z-index: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  background-repeat: no-repeat;
}

.oblique .skew-block-repeat {
  will-change: transform;
  -webkit-transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  -moz-transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  -ms-transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  -o-transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  opacity: 0.8;
  min-height: 100vh;
  float: left;
  position: relative;
  z-index: 0;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  margin: 0 -1px;
}

.oblique .skew-block-repeat a .oblique-inner {
  -webkit-transform: skewX(-10deg);
  transform: skewX(-10deg);
  margin-left: 0;
  margin-right: 0;
  -webkit-transition: box-shadow 0.2s ease-out;
  -moz-transition: box-shadow 0.2s ease-out;
  -ms-transition: box-shadow 0.2s ease-out;
  -o-transition: box-shadow 0.2s ease-out;
  transition: box-shadow 0.2s ease-out;
  position: relative;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  height: 100%;
  position: absolute;
  width: 100%;
}

.oblique .skew-block-repeat a .oblique-caption {
  position: absolute;
  bottom: 90px;
  color: #fff;
  z-index: 1;
  width: 100%;
  bottom: auto;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
}

.oblique .skew-block {
  margin-left: -10vh;
  margin-right: -10vh;
}

.oblique .skew-block-repeat:hover {
  -webkit-box-flex: 1.5;
  -webkit-flex: 1.5;
  -ms-flex: 1.5;
  flex: 1.5;
  opacity: 1;
}

.oblique .skew-block-repeat a .oblique-inner .image-wrapper .main-image .image-img {
  position: absolute;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.2s ease-out;
  -moz-transition:0.2s ease-out;
  -ms-transition: 0.2s ease-out;
  -o-transition: 0.2s ease-out;
  transition: 0.2s ease-out;
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
  border: 0;
}

.oblique .skew-block-repeat a .oblique-inner .image-wrapper {
  margin-left: -10vh;
  margin-right: -10vh;
  -webkit-transform: skewX(10deg);
  transform: skewX(10deg);
  position: relative;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  height: 100%;
}

.oblique .skew-block-repeat a .oblique-caption h2 {
  font-family: "poppins", sans-serif;
  font-size: 4rem;
  color: #fff;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
}

.oblique .skew-block-repeat a .oblique-caption button {
  font-family: "poppins", sans-serif;
  font-size: 1.1rem;
  text-transform: uppercase;
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
  padding: 0.8rem 6rem;
  margin-top: 1rem;
  opacity: 0.5;
  cursor: pointer;
  -webkit-transition: all 800ms;
  -moz-transition: all 800ms;
  -ms-transition: all 800ms;
  -o-transition: all 800ms;
  transition: all 800ms;
}

.oblique .skew-block-repeat:hover a .oblique-caption h2 {
  animation: bounceIn 1200ms;
}

.oblique .skew-block-repeat:hover a .oblique-caption button {
  opacity: 0.8;
  background: #fff;
  color: #000;
}
  @media (max-width: 768px) {
  .oblique .main-block-oblique {
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .oblique .skew-block-repeat {
    min-height: 50vh;
  }

  .oblique .skew-block-repeat a .oblique-caption button {
    opacity: 0.9;
  }

}
`;
