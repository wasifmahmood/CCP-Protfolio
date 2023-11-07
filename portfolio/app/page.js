import Header from './components/header/Header';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio'

export default function Page() {
  return (
    <div className='main'>
      <Header />
      <Home />
      <Portfolio/>
    </div>
  )
}
