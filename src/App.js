import './App.css';

import NavBar from './Containers/navbar/Navbar';
import WhoIAm from './Containers/who-am-i/WhoIAm';
import Education from './Containers/education/Education';
import Work from './Containers/work/Work';
import Skills from './Containers/skills/Skills';

function App() {
  return (
    <main className='main'>
      <NavBar />
      <section className='sectionScrollable' id="section1">
        <WhoIAm />
      </section>
      {/* <span className='section_divisor'></span> */}
      <section className='sectionScrollable' id="section2">
        <Education />
      </section>
      {/* <span className='section_divisor'></span> */}
      <section className='sectionScrollable' id="section3">
        <Work />
      </section>
      <section className='sectionScrollable' id="section4">
        <Skills />
      </section>
    </main>
  );
}

export default App;
