import CarouselDW from './components/carousel/carousel'

import carouselItems from '@/app/carouselData.json';

export default function Home() {
  return (
    <main>
      <CarouselDW carouselItems={carouselItems}/>
    </main>
  )
};