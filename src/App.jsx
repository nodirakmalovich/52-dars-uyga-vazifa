import logo from './logo.svg';
import './App.css';
import SubscribeBtn from './component/buttons/subsribeBtn';
import NavbarTop from './component/navbar/navbarTop';
import Virus from './component/virus/virus';
import MainNews from './component/news/mainNews';
import Notification from './component/notification/notification';
import LatesNews from './component/news/lastNews';
import Addvertisment from './component/advertisment/ad';
import Footer from './component/footer/footer';

function App() {
  return (
    <div>
      <NavbarTop />
      <Virus />
      <MainNews />
      <Notification />
      <LatesNews />
      <Addvertisment />
      <Footer />
    </div>
  );
}

export default App;

