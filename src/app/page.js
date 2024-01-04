import styles from './page.module.css'

import CarouselDW from './components/carousel/carousel'

import carouselItems from '@/app/carouselData.json';

export default function Home() {
  return (
    // <main className={styles.main}>
    <main>
      <CarouselDW carouselItems={carouselItems}/>
    </main>
  )
};
