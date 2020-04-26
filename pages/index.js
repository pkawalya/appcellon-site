import Head from 'next/head'

const Home = () => (
  <div className="container">
    <Head>
      <title>Appcellon</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400"></link>
    </Head>

    <header class="site__header">

      <div class="grid">

        <div class="site__logo">
          <a href="/"><img src="/appcellon.png" alt="Appcellon" width="100" /></a>
        </div>

        <nav class="navigation navigation--inline navigation--main">
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#" class="button button--primary button--rounded">Request a quote</a></li>
          </ul>
        </nav>

      </div>

    </header>

  <main class="site__main">

    <section class="site__section site__section--start align text--center">

      <div class="grid">

        <h1>Elegance defined</h1>

        <a href="#" class="button--scroll animation animation--infinite animation--up-down"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="-275 398.7 44.2 44.2"><path fill="#fff" d="M-275 420.8c0-12.2 9.9-22.1 22.1-22.1s22.1 9.9 22.1 22.1c0 12.2-9.9 22.1-22.1 22.1s-22.1-9.9-22.1-22.1zm42.7 0c0-11.4-9.2-20.6-20.6-20.6-11.4 0-20.6 9.2-20.6 20.6 0 11.4 9.2 20.6 20.6 20.6 11.4 0 20.6-9.3 20.6-20.6zM-260.6 418c0-.2.1-.4.2-.5.3-.3.8-.3 1.1 0l6.8 6.8 6.8-6.8c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-7.3 7.3c-.3.3-.8.3-1.1 0l-7.3-7.3c-.3-.2-.3-.4-.3-.6z"/></svg></a>

      </div>

    </section>

  </main>

  </div>
)

export default Home
