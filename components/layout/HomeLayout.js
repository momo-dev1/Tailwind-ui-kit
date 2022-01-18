import Header from "../site/Header";
import Meta from "../site/Meta";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Meta
        pageTitle="Tailwind UI KIT – 100 components and templates for React."
        description="Over 100 free and open source components and templates for tailwind css to build beautiful UI. All are fully coded and work with React"
      />

      <div className="relative h-screen overflow-hidden bg-white">
        <div className="h-full mx-auto max-w-7xl">
          <div className="relative h-full pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <Header />
            <main className="h-full px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
