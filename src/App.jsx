import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import WorkExperience from './components/WorkExperience.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto flex max-w-3xl flex-col px-8">
        <main className="grow">
          <article className="mt-8 flex flex-col gap-16 pb-16">
            <Hero />
            <WorkExperience />
          </article>
        </main>
      </div>
    </>
  );
};

export default App;
