export const metadata = {
  title: "Amire Ramazan — Quantum AI Engineer",
  description: "Building hybrid quantum AI frameworks and models that push the boundaries of computation.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-start px-8 py-16 space-y-12">
      <section className="max-w-2xl">
        <h1 className="text-5xl font-bold mb-2">hi, I'm Xan. Amire Ramazan</h1>
        <p className="text-lg opacity-60">
          Quantum AI engineer. building hybrid quantum‑classical models that reason. I like Frank Ocean and AI.
        </p>
      </section>

      <section className="max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">currently</h2>
        <p className="opacity-80">
         building Quantum Artificial Intelligence.
        </p>
      </section>

      <section className="max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">previously</h2>
        <ul className="list-disc list-inside space-y-2 opacity-80">
          <li><a href="https://www.authorea.com/users/918341/articles/1290843-quantumgptmini-a-hybrid-quantum-classical-transformer-for-enhanced-nlp" target="_blank" rel="noopener noreferrer">published QuantumGPTMini paper at 16 (matched GPT‑2 Small)</a></li>
          <li><a href="https://pypi.org/project/haul-quantum/" target="_blank" rel="noopener noreferrer">created Haul-Quantum: a python framework specifically designed for QAI</a></li>
          <li>launched VonX sandbox: Quantum AI Playground for learning</li>
          <li>launched QuantumGPTMini: first ever live experimental Quantum AI chatbot</li>
          <li>created my Quantum Machine Learning studying page</li>
        </ul>
      </section>

      <section className="max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">awards</h2>
        <p className="opacity-80">
         NASA Astrophysics Global Tournament 1st Prize 
        </p>
      </section>
      <section className="max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">interests</h2>
        <p className="opacity-80">quantum attention · symbolic inference · next‑gen QAI</p>
      </section>

      <footer className="max-w-2xl pt-8 border-t border-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex space-x-6">
          <a href="mailto:amire@xanamire.com" className="opacity-80 hover:opacity-100 transition">
            email
          </a>
          <a href="https://github.com/amirewontmiss" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">
            github
          </a>
          <a href="https://kz.linkedin.com/in/ramazan-amire-4a5263347" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">
            linkedin
          </a>
        </div>
      </footer>
    </main>
  );
}

