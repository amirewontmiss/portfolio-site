// app/page.tsx
import type { Metadata } from 'next'; // Import the Metadata type

// Explicitly type the metadata object
export const metadata: Metadata = {
  title: "Amire Ramazan — Quantum AI Engineer",
  description:
    "Building hybrid quantum AI frameworks and models that push the boundaries of computation.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-start px-8 py-16 space-y-12 font-['Inter',_sans-serif]">
      {/* Intro */}
      <section className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">hi, I&apos;m Xan. Amire Ramazan</h1>
        <p className="text-lg opacity-60">
          Quantum AI engineer. Working on hybrid quantum-classical models that reason.
        </p>
      </section>

      {/* Currently */}
      <section className="max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">currently</h2>
        <p className="opacity-80">
          building a Quantum Orchestration Layer Platform.
        </p>
      </section>

      {/* Previously */}
      <section className="max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">previously</h2>
        <ul className="list-disc list-inside space-y-3 opacity-80">
          <li>
            <a
              href="https://haulvisor.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-100 transition"
            >
              launched HaulVisor - the world&apos;s first universal quantum circuit orchestration interface.
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/posts/ramazan-amire-4a5263347_heres-how-haulvisor-works-as-a-cli-tool-activity-7331015144459628545-_s8N"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-100 transition"
            >
              created HaulVisor-Quantum - a CLI tool that connects and manages multi-backend quantum workloads with a single unified interface. Built from scratch, it supports PennyLane, Braket, and Qiskit. It&apos;s the first step toward true quantum OS-level orchestration.
            </a>
          </li>
          <li>
            <a
              href="https://www.authorea.com/users/918341/articles/1290843-quantumgptmini-a-hybrid-quantum-classical-transformer-for-enhanced-nlp" 
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-100 transition"
            >
              published QuantumGPTMini paper (matched GPT-2 Small)
            </a>
          </li>
          <li>
            <a
              href="https://pypi.org/project/haul-quantum/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-100 transition"
            >
              created Haul-Quantum: a Python framework specifically designed for QAI
            </a>
          </li>
          <li>
            <a
              href="https://vonx.vercel.app/sandbox"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-100 transition"
            >
              launched VonX sandbox: Quantum AI Playground for learning
            </a>
          </li>
          <li>
            <a
              href="https://vonx.vercel.app/" // Assuming this link is correct, though it's similar to the sandbox.
                                           // Consider updating if QuantumGPTMini has a different URL.
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-100 transition"
            >
              launched QuantumGPTMini: first-ever live experimental Quantum AI chatbot
            </a>
          </li>
          <li>
            created my Quantum Machine Learning studying page: releasing soon.
          </li>
        </ul>
      </section>

      {/* Awards */}
      <section className="max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">awards</h2>
        <p className="opacity-80">NASA Astrophysics Global Tournament 1st Prize</p>
      </section>

      {/* Interests */}
      <section className="max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">interests</h2>
        <p className="opacity-80">
          quantum attention · symbolic inference · next-gen QAI
        </p>
      </section>

      {/* Contact */}
      <footer className="max-w-2xl w-full pt-8 mt-8 border-t border-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex space-x-6 mb-4 sm:mb-0">
          <a
            href="mailto:amireramazan0809@gmail.com"
            className="opacity-80 hover:opacity-100 transition"
          >
            email
          </a>
          <a
            href="https://github.com/amirewontmiss"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition"
          >
            github
          </a>
          <a
            href="https://kz.linkedin.com/in/ramazan-amire-4a5263347"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition"
          >
            linkedin
          </a>
        </div>
        <p className="text-sm opacity-50">© {new Date().getFullYear()} Amire Ramazan</p>
      </footer>
    </main>
  );
}

