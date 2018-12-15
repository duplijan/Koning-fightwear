import React from 'react'
import Carousel from 'nuka-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'

import carousel1 from '../../../assets/carousel1.jpg'
import carousel2 from '../../../assets/carousel2.jpg'
import carousel3 from '../../../assets/about-bjj.jpg'

import { CarouselContainer, CarouselItem, CarouselImage, CarouselText, CarouselButton } from './carousel-components'

const CarouselWrapper = () => {
    return (
      <CarouselContainer>
        <Carousel  wrapAround={ ({wrapAround: false})}
            renderCenterLeftControls={({ previousSlide }) => (
              <CarouselButton rotate onClick={previousSlide}>
                <FontAwesomeIcon icon={faAngleDoubleDown} />
              </CarouselButton>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <CarouselButton onClick={nextSlide}>
                <FontAwesomeIcon icon={faAngleDoubleDown} />
              </CarouselButton>
            )}>
          <CarouselItem>
            <CarouselText>STAY FOCUS </CarouselText>
            <CarouselImage src={`${carousel2}`} />
          </CarouselItem>
          <CarouselItem>
            <CarouselText>STAY FOCUS </CarouselText>
            <CarouselImage src={`${carousel1}`} />
          </CarouselItem>
          <CarouselItem>
            <CarouselText>STAY FOCUS </CarouselText>
            <CarouselImage src={`${carousel3}`} />
          </CarouselItem>
        </Carousel>
      </CarouselContainer>
    )
}

export default CarouselWrapper;
