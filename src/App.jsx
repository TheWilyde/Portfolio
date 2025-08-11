import {useEffect, useState} from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import WorkExperience from './components/WorkExperience.jsx';
import FeaturedProjects from './components/FeaturedProjects.jsx';
import Footer from './components/Footer.jsx';
import Projects from './pages/Projects.jsx';

const App = () => {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const isProjects = path === '/projects';

  return (
    <div className="min-h-screen supports-[height:100dvh]:min-h-[100dvh] flex flex-col">
      <Navbar />
      <div className="mx-auto flex-1 w-full max-w-3xl flex flex-col px-8">
        <main className="grow">
          {isProjects ? (
            <Projects />
          ) : (
            <article className="mt-8 flex flex-col gap-16 pb-10 sm:pb-16">
              <Hero />
              <WorkExperience />
              <FeaturedProjects />
            </article>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
