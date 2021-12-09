export default function CardInfo() {
  return (
    <div className="app">
      <div id="card">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
          <article>
            <h2 className="text-2xl font-extrabold text-gray-900">
              ConnectPlus Product
            </h2>
            <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
              <article className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out">
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                  <h3 className="text-center">
                    <a
                      className="text-white text-2xl font-bold text-center"
                      href="#"
                    >
                      <span className="absolute inset-0"></span>
                      Top 10 highest paid programming languages of 2021
                    </a>
                  </h3>
                </div>
              </article>
              <article className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out">
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                  <h3 className="text-center">
                    <a
                      className="text-white text-2xl font-bold text-center"
                      href="#"
                    >
                      <span className="absolute inset-0"></span>
                      Python Frameworks
                    </a>
                  </h3>
                </div>
              </article>
              <article className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out">
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                  <h3 className="text-center">
                    <a
                      className="text-white text-2xl font-bold text-center"
                      href="#"
                    >
                      <span className="absolute inset-0"></span>
                      The best plugins for Visual Studio Code
                    </a>
                  </h3>
                </div>
              </article>
            </section>
          </article>
        </section>
      </div>
    </div>
  );
}
