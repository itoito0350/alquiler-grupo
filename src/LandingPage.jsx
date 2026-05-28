import { useEffect, useState } from "react";

const TALLY_FORM_URL = "https://tally.so/embed/WOKj8J?alignLeft=1&hideTitle=1&dynamicHeight=1";

export default function LandingPage() {
  const [counter, setCounter] = useState(0);
  const targetCounter = 127;

  useEffect(() => {
    const duration = 1400;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCounter(Math.floor(easedProgress * targetCounter));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="min-h-screen w-full max-w-full bg-gradient-to-b from-orange-50 via-white to-blue-50 text-gray-900 overflow-x-hidden">
      <section className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>

        <div className="relative text-center space-y-8">
          <div className="inline-block px-5 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold shadow-sm">
            Disponible en toda España
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            ¿No puedes alquilar solo?
            <span className="block mt-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Encuentra gente para alquilar juntos.
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Conectamos personas compatibles para compartir alquiler y encontrar piso en grupo.
            Sin fotos, sin datos delicados y totalmente gratis.
          </p>

          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 bg-white/80 backdrop-blur border border-orange-100 shadow-xl px-6 py-4 rounded-[2rem]">
            <span className="tabular-nums text-7xl md:text-8xl font-black leading-none bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-sm">
              {counter}
            </span>

            <div className="text-center sm:text-left">
              <p className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                personas ya están
              </p>
              <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent leading-tight">
                buscando piso juntos
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#formulario"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:scale-105 transition-all"
            >
              Apuntarme gratis
            </a>

            <a
              href="#como-funciona"
              className="bg-white border border-gray-200 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50 shadow-md transition-all inline-flex items-center justify-center"
            >
              Ver cómo funciona
            </a>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="text-center lg:text-left">
              <p className="text-orange-600 font-black uppercase tracking-[0.25em] mb-4">
                La idea es simple
              </p>

              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                Si solo no puedes,
                <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  no busques solo.
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Encuentra una persona o varios compañeros con presupuesto parecido al tuyo y empezad a buscar piso juntos.
              </p>
            </div>

            <div className="relative w-full max-w-full">
              <div className="absolute -inset-6 bg-gradient-to-r from-orange-400 to-red-400 rounded-[3rem] blur-2xl opacity-20"></div>

              <div className="relative w-full max-w-full overflow-hidden bg-white/90 backdrop-blur rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-orange-100 p-5 md:p-10">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 border-b border-orange-100 pb-6 mb-6 text-center sm:text-left">
                  <div>
                    <p className="text-gray-500 font-semibold">
                      Alquiler solo
                    </p>

                    <p className="text-4xl sm:text-5xl font-black text-gray-300 line-through whitespace-nowrap">
                      1.200€
                    </p>
                  </div>

                  <div className="text-5xl sm:text-6xl font-light text-orange-500 px-2 rotate-90 sm:rotate-0">
                    →
                  </div>

                  <div>
                    <p className="text-orange-600 font-semibold">
                      Alquiler compartido
                    </p>

                    <p className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent whitespace-nowrap">
                      600€
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="rounded-3xl bg-orange-50 p-5">
                    <div className="text-4xl mb-2">👤</div>
                    <p className="font-bold text-gray-700">1 persona</p>
                  </div>

                  <div className="rounded-3xl bg-orange-50 p-5">
                    <div className="text-4xl mb-2">🤝</div>
                    <p className="font-bold text-gray-700">Mismo plan</p>
                  </div>

                  <div className="rounded-3xl bg-orange-50 p-5">
                    <div className="text-4xl mb-2">🏡</div>
                    <p className="font-bold text-gray-700">Un piso mejor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              Cómo funciona
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              En menos de 2 minutos puedes encontrar una persona o compañeros para alquilar juntos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative bg-white p-10 rounded-3xl shadow-xl border border-orange-100">
              <div className="absolute -top-5 left-8 w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center font-black text-xl shadow-lg">
                1
              </div>

              

              <h3 className="text-2xl font-bold mb-4">
                Crea tu perfil
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg">
                Indica ciudad, presupuesto y si buscas una persona o varios compañeros.
                Sin fotos ni datos personales delicados.
              </p>
            </div>

            <div className="relative bg-white p-10 rounded-3xl shadow-xl border border-blue-100">
              <div className="absolute -top-5 left-8 w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center font-black text-xl shadow-lg">
                2
              </div>

              

              <h3 className="text-2xl font-bold mb-4">
                Encuentra personas compatibles
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg">
                Te mostramos personas con presupuesto y objetivos similares en tu ciudad.
              </p>
            </div>

            <div className="relative bg-white p-10 rounded-3xl shadow-xl border border-green-100">
              <div className="absolute -top-5 left-8 w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white flex items-center justify-center font-black text-xl shadow-lg">
                3
              </div>

              

              <h3 className="text-2xl font-bold mb-4">
                Alquilad juntos
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg">
                Hablad entre vosotros y buscad pisos que solos no podríais pagar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Sin postureo. Sin complicaciones. Solo gente real.
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Solo personas reales buscando alquilar juntas.
            El objetivo es conectar gente compatible para encontrar vivienda más fácilmente.
          </p>
        </div>
      </section>

      <section id="formulario" className="relative py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_#f97316,_transparent_35%),radial-gradient(circle_at_bottom_right,_#3b82f6,_transparent_35%)]"></div>

        <div className="relative max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">
              Únete a la lista inicial
            </h2>

            <p className="text-gray-300 text-lg">
              Estamos empezando en ciudades con mayor problema de alquiler.
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur text-black p-4 md:p-8 rounded-3xl shadow-2xl border border-white/30">
            <iframe
              data-tally-src={TALLY_FORM_URL}
              src={TALLY_FORM_URL}
              width="100%"
              height="620"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Formulario de inscripción"
              className="rounded-2xl"
            ></iframe>

            <div className="mt-6 space-y-4">
              <p className="text-sm text-gray-500 text-center">
                No pedimos fotos, DNI, nóminas ni datos delicados. Solo la información necesaria para poder conectar personas compatibles.
              </p>

              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-5 text-center shadow-xl">
                <p className="text-lg font-black text-white mb-2">
                  Esto es solo el principio 🚀
                </p>

                <p className="text-orange-50 leading-relaxed">
                  Muy pronto empezarás a recibir novedades, nuevas funciones y posibles conexiones compatibles en tu ciudad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}