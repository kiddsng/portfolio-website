import { BrowserRouter } from "react-router-dom"; // npm install react-router-dom

import {
    About,
    Achievements,
    Competitions,
    Contact,
    Experience,
    Footer,
    Hero,
    Navbar,
    Projects,
} from "./components";

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
