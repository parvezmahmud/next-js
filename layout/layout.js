import HeaderComp from "../components/header/header.component";
import MobileHeader from '../components/header/mobileHeader.component';
import Head from 'next/head';

const Layout = (props) => {
    return(
    <div className="flex flex-col h-screen">
    <Head>
      <title>testing</title>
    </Head>
      <header className="text-white">
        <HeaderComp />
      </header>
      <main className="flex-1 overflow-y-auto lg:p-5 p-2"  style={{ backgroundColor:'rgb(227,233,255)' }}>
          {props.children}
      </main>
      <footer className="text-white">
        <MobileHeader />
      </footer>
    </div>
    )
}

export default Layout;
