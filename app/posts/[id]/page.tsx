import React from 'react'
import posts from '@/data'
import { notFound } from 'next/navigation'
import styles from "../../../styles/PostId.module.scss"
import Link from 'next/link'

export async function generateStaticParams() {
  return posts.map((post) => ({id: post.id}))
}

const page = ({params}: {params: {id: string}}) => {
  const post = posts.find((p) => p.id === params.id)
  
  if (!post) {
    return notFound();
  }

  return (
    <main>
    <section className={styles.post}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link className={styles.post__nav} href="/posts">К постам</Link>
    </section>
    </main>
  )
}

export default page


