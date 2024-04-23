import React from "react";

const QuemSomosPage = () => {
  return (
    <div className="flex flex-col min-h-screen px-2 py-10 justify-center items-center bg-gray-100">
        

        <main className="flex flex-col w-full max-w-4xl text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Quem Somos
            </h1>

            <p className="text-lg text-gray-700 mb-6">
                A <strong>Nome da Empresa</strong> é pioneira no desenvolvimento de soluções de inteligência artificial para monitoramento de áreas operacionais. Utilizando tecnologia de ponta em visão computacional, nosso foco é garantir a segurança e a conformidade através da identificação automática de EPIs.
            </p>

            <section className="mb-6">
                <h2 className="text-3xl text-blue-600 mb-4">Missão</h2>
                <p className="text-gray-600">Nossa missão é melhorar a segurança nos ambientes de trabalho através de tecnologias inovadoras de monitoramento, garantindo que todos os protocolos de segurança sejam seguidos rigorosamente.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-3xl text-blue-600 mb-4">Visão</h2>
                <p className="text-gray-600">Aspiramos ser líderes globais em soluções de segurança inteligente, reconhecidos por nossa confiabilidade, inovação e impacto positivo na segurança operacional das empresas.</p>
            </section>

            <section>
                <h2 className="text-3xl text-blue-600 mb-4">Tecnologia</h2>
                <p className="text-gray-600">Nosso sistema utiliza algoritmos avançados de visão computacional para detectar e analisar o uso correto de EPIs em tempo real, reduzindo riscos e aumentando a eficiência operacional.</p>
            </section>
        </main>
    </div>
)
};

export default QuemSomosPage;
