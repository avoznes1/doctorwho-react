import styles from './page.module.css'

import MyButton from '@/app/components/button/button'
import DoctorCard from '@/app/components/card/card'


export default function Home() {
  return (
    <main className={styles.main}>
      <h1>This is a Sample Title</h1>
      {/* <MyButton /> */}
      <DoctorCard />
    </main>
  )
};
