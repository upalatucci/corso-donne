const Obiettivi = () => {
  return (
    <section id="obiettivi" className="overflow-hidden py-8 md:py-20 lg:py-12">
      <div className="container flex justify-center">
        <div className="px-4">
          <div className="mx-auto text-center max-w-3xl">
            <div className="mb-10 space-y-6">
              <div className="rounded-2xl bg-gradient-to-br from-soft-purple/30 to-primary/10 p-6 shadow-lg">
                <h3 className="mb-4 text-2xl font-semibold text-primary">
                  Il Corso
                </h3>
                <p className="text-lg leading-relaxed text-dark mb-4">
                  Il Corso Donne Nazionale 2026 si svolgerà a{" "}
                  <span className="font-semibold">
                    Salerno dal 27 febbraio al 1 marzo
                  </span>
                  , ed è dedicato alle responsabili di regione e territorio.
                </p>
                <p className="text-lg leading-relaxed text-dark">
                  Lo scopo è lavorare insieme per dare il via a un anno ricco di
                  occasioni e incoraggiamenti. Desideriamo che il nostro
                  tradizionale corso sia come sempre l&apos;inizio di un&apos;
                  <span className="font-semibold text-primary">
                    onda potente
                  </span>{" "}
                  che, partendo dalle partecipanti, si propaghi in ogni zona
                  d&apos;Italia e che raggiunga ogni donna.
                </p>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-accent/10 to-soft-purple/20 p-6 shadow-lg">
                <h3 className="mb-6 text-2xl font-semibold text-accent">
                  I Nostri Obiettivi
                </h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start">
                    <span className="text-accent font-bold text-xl mr-3">
                      •
                    </span>
                    <span className="text-lg leading-relaxed text-dark">
                      <span className="font-semibold">
                        111&apos; daimoku al giorno
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold text-xl mr-3">
                      •
                    </span>
                    <span className="text-lg leading-relaxed text-dark">
                      <span className="font-semibold">
                        Accompagnare un&apos;amica allo zadankai
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold text-xl mr-3">
                      •
                    </span>
                    <span className="text-lg leading-relaxed text-dark">
                      <span className="font-semibold">
                        Incontrare 5 persone
                      </span>{" "}
                      che stanno affrontando difficoltà personali o che si sono
                      allontanate
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-6 shadow-lg">
                <h3 className="mb-6 text-2xl font-semibold text-primary">
                  Materiale di Studio
                </h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">
                      •
                    </span>
                    <span className="text-lg leading-relaxed text-dark">
                      <span className="font-semibold">
                        La Rivoluzione Umana n.10
                      </span>{" "}
                      - capitolo &quot;Determinazione&quot;
                      <span className="text-body-color text-base">
                        {" "}
                        (dal libro o a puntate sul Nuovo rinascimento)
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold text-xl mr-3">
                      •
                    </span>
                    <span className="text-lg leading-relaxed text-dark">
                      <span className="font-semibold">
                        Gosho La scelta del tempo
                      </span>
                      <span className="text-body-color text-base">
                        {" "}
                        (dal B&S 143/144/145)
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-soft-purple/20 to-primary/5 p-6 shadow-lg border border-soft-purple/30">
                <p className="text-base leading-relaxed text-dark italic text-center">
                  Per questo condivideremo slogan e materiale di studio sulle
                  riviste in modo che, anche se solo poche rappresentanti
                  potranno essere al corso, tutto il gruppo donne sia unito e
                  tutte si sentano coinvolte in questo movimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Obiettivi;
