import { getBlogPosts } from "@/app/guide/utils";
import Link from "next/link";
import { CustomMDX } from "../mdx";

const Obiettivi = () => {
  const guide = getBlogPosts();
  return (
    <section id="obiettivi" className="overflow-hidden py-8 md:py-20 lg:py-12">
      <div className="container flex justify-center">
        <div className="px-4">
          <div className="mx-auto text-center max-w-3xl">
            <div className="mb-10 space-y-6">
              <div className="rounded-2xl bg-gradient-to-br from-soft-purple/30 to-primary/10 p-6 shadow-lg">
                <h3 className="mb-4 text-2xl font-semibold text-primary">
                  Il Nostro Obiettivo
                </h3>
                <p className="text-lg leading-relaxed text-dark">
                  Realizziamo insieme <span className="font-bold text-primary">10.000.000 di Daimoku</span> per la protezione, 
                  la buona salute e la felicità di tutte le partecipanti del Corso Donne e delle loro famiglie.
                </p>
              </div>
              
              <div className="rounded-2xl bg-gradient-to-br from-accent/10 to-soft-purple/20 p-6 shadow-lg">
                <h3 className="mb-4 text-2xl font-semibold text-accent">
                  Il Nostro Impegno
                </h3>
                <p className="text-lg leading-relaxed text-dark">
                  Studiamo insieme le guide di Sensei, condividiamo esperienze e ci incoraggiamo 
                  reciprocamente nella pratica quotidiana.
                </p>
              </div>
            </div>

            {guide
              .sort((a, b) => {
                if (
                  new Date(a.metadata.publishedAt) >
                  new Date(b.metadata.publishedAt)
                ) {
                  return -1;
                }
                return 1;
              })
              .map((post) => {
                return (
                  <div
                    key={post.slug}
                    className="w-full space-x-0 md:space-x-2"
                  >
                    <div className="flex flex-col p-6 rounded-xl bg-gray-light/50 mb-6">
                      <p className="text-primary font-bold tracking-tight text-xl">
                        {post.metadata.title.toUpperCase()}
                      </p>
                      <p className="text-body-color my-4 tracking-tight leading-relaxed">
                        {post.metadata.summary}
                      </p>
                      <p className="text-body-color tabular-nums">
                        <Link
                          href={post.metadata.link}
                          className="text-primary hover:text-accent font-medium transition-colors duration-200 underline decoration-soft-purple decoration-2 underline-offset-4"
                        >
                          Leggi il messaggio completo →
                        </Link>
                      </p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                      <CustomMDX source={post.content} />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Obiettivi;
