import React from 'react'
import styles from "../../styles/Posts.module.scss"
import posts from "../../data/index"
import Link from 'next/link'

const Posts = () => {
  return (
    <section className={styles.postlist}>
      <h1>Список постов</h1>
      <ul>
      {posts.map((post) => (
        <li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>
      ))}
      </ul>
    </section>
  )
}

export default Posts
