'use client'
import styles from './page.module.css'
import { Auth } from 'aws-amplify'

export default function Home() {
  React.useEffect(()=>{
    Auth.currentAuthenticatedUser().then(res=>console.log(res))
  },[])
  return (
    <main className={styles.main}>
      <div>
        Nextjs app
        <div>
          File Contents: {fileContents}
        </div>
      </div>
    </main>
  )
}
