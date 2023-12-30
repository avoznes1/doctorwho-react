import styles from './page.module.css'

import DoctorCard from '@/app/components/card/card'
import Header from './components/header/header'


export default function Home() {
  return (
    // <main className={styles.main}>
    <main>
      <Header />
      <h1>This is a Sample Title</h1>
      {/* <DoctorCard /> */}
    </main>
  )
};
