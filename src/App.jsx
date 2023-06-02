import { BrowserRouter } from "react-router-dom"; // npm install react-router-dom

import {
    Footer,
    Navbar,
} from "./components";

import {
    About,
    Achievements,
    Competitions,
    Contact,
    Experience,
    Hero,
    Projects,
} from "./sections";

const App = () => {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div>
                    <Navbar />
                    <Hero />
                </div>
                    <About />
                    <Experience />
                    <Projects />
                    <Competitions />
                    <Achievements />
                    {/* <Contact /> */}
                    <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
