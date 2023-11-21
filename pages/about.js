import Head from 'next/head';
import './globals.css'

// export const metadata = {
//   title: 'About - Create Next App',
//   description: 'Generated by create next app',
// }

const About = () => {
  return (<div>
    <Head>
    <title>About Us</title>
    <meta name="description" content="This is the description of the new page." />
    <meta name="keywords" content="Next.js, React, Metadata" />
  </Head>
    
      <h1>About Page</h1>
      <p>This is the about page content.</p>
    </div>
    );
};

export default About;