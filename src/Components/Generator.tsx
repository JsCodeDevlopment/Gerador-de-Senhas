import { useState } from "react";

export function Generator() {
  const [generatedKey, setGenerationKey] = useState("Senha aqui!");
  const [copied, setCopied] = useState("Copiar");

  const characterSet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?`~";
  const keyLength = 8;

  function GenerateKey() {
    let key = "";
    for (let i = 0; i < keyLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      key += characterSet.charAt(randomIndex);
    }
    setGenerationKey(key);
    setCopied("Copiar");
  }

  function Copy() {
    window.navigator.clipboard.writeText(generatedKey);
    setCopied("Copiado!");
  }
  return (
    <div className="flex flex-col bg-zinc-950 w-full items-center gap-5 justify-center h-screen">
      <h1 className="text-stone-50 text-3xl">Gerador de Senhas</h1>
      <div className="flex gap-12">
        <button
          className="bg-purple-950 text-white p-2 rounded-md"
          onClick={GenerateKey}>
          Gerar!
        </button>
        <button
          className="bg-purple-950 text-white p-2 rounded-md"
          onClick={Copy}>
          {copied}
        </button>
      </div>
      <span className="text-white">{generatedKey}</span>
    </div>
  );
}
