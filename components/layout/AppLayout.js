import Meta from "../site/Meta";
import Header from "../site/header";

const AppLayout = ({ title, desc, children }) => {
  return (
    <div className="relative bg-white ">
      <Meta pageTitle={title} description={desc} />
      <div className="h-full mx-auto min-h-[85vh]">
        <div className="relative z-10 h-full pb-8 overflow-hidden bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <div className="dark">
            <Header />
          </div>

          <main className="h-full px-4 mx-auto mt-8 max-w-7xl sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
