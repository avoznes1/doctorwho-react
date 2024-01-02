import styles from './page.module.css'

import DoctorCard from '@/app/components/card/card'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import CarouselDW from './components/carousel/carousel'

import carouselItems from '@/app/carouselData.json';

export default function Home() {
  return (
    // <main className={styles.main}>
    <main>
      <Header />
      <CarouselDW carouselItems={carouselItems}/>
      {/* <DoctorCard /> */}
      <Footer />
    </main>
  )
};
