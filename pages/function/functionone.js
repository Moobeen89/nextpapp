import Head from 'next/head';
import '../globals.css'

const functionone = () => {
  return (
    <div>
     <Head>
    <title>About Us</title>
    <meta name="description" content="This is the description of the new page." />
    <meta name="keywords" content="Next.js, React, Metadata" />
  </Head>
      <h2>Function one</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quas temporibus nesciunt sint illo doloribus atque doloremque ab facere error aliquam vitae facilis qui mollitia nostrum repellat iusto hic quaerat.</p>
    </div>
  )
}

export default functionone
