import { Carousel, CarouselCaption, CarouselItem } from 'react-bootstrap';
import MyButton from "../button/button";

import styles from './carousel.module.css';

export default function CarouselDW( {carouselItems} ) {
    return (
        <Carousel controls={false} fade>
            {
                carouselItems.carouselData.map((item, x) => (
                    <CarouselItem key={x} className={styles.carouselMain}>
                        <img 
                            className={`d-block w-100 ${styles.carouselImg}`}
                            src={item.image}
                            alt={item.altText}
                        />
                        <CarouselCaption className={styles.title}>
                            <h1 className='latoBlack'>{item.title}</h1>
                            <MyButton buttonText="Ver ahora" padding="0.65rem 3.4rem" />
                        </CarouselCaption>
                    </CarouselItem>
                ))
            }
        </Carousel>
    );
};