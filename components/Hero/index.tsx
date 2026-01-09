import Daimoku from "../Daimoku/Daimoku";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-8 pt-[120px] md:pb-[80px] md:pt-[100px] xl:pb-[100px] xl:pt-[180px] 2xl:pb-[120px] 2xl:pt-[210px] bg-gradient-to-b from-soft-purple/10 via-transparent to-transparent"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-4 text-3xl font-semibold leading-tight text-dark sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Corso Donne Nazionale 2026
                </h1>
                <p className="mb-3 text-lg text-body-color sm:text-xl md:text-2xl font-medium">
                  Salerno, 27 febbraio - 1 marzo
                </p>
                <p className="mb-8 text-base text-body-color sm:text-lg md:text-xl italic">
                  Unite nella pratica, forti nella fede
                </p>
                <Daimoku />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
