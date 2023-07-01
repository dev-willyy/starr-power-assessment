import Featured from '../components/Featured';
import FeaturedProperties from '../components/FeaturedProperties';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MailList from '../components/MailList';
import Navbar from '../components/Navbar';
import PropertyList from '../components/PropertyList';
import '../styles/home.css';

function Home() {
  console.log(process.env);

  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Search by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Visitors adore</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
