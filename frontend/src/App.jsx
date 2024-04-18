import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Experiences from "./components/Experiences/Experience";
import Projects from "./components/Projects/Projects";
import Hero from "./components/Hero";
import ContactForm from "./components/Contact/Contact";
import Badges from "./components/Badges/Badges";
import About from "./components/About/About";
import "bootstrap/dist/css/bootstrap.css";

function App() {
	return (
		<>
			<Header />
			{/* <Hero /> */}
			<About />
			<Badges />
			<Projects />
			<Experiences />
			<ContactForm />
			<Footer />
		</>
	);
}

export default App;
