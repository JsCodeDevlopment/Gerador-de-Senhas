import { useState } from "react";

export function Generator() {
  const [generatedKey, setGenerationKey] = useState("Senha aqui!");
  const [copied, setCopied] = useState("Copiar");
  const [passwordSize, setPasswordSize] = useState(8);

  const characterSet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?`~";

  function GenerateKey() {
    let key = "";
    for (let i = 0; i < passwordSize; i++) {
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
      <input
        className="text-purple-950 p-2 rounded-md border-purple-950"
        type="number"
        id="passwordSize"
        min={1}
        max={16}
        value={passwordSize}
        placeholder="Qnt. Caracteres"
        onChange={(ev) => setPasswordSize(ev.target.value)}
      />
      <p className="text-white">Qnt. de Caracteres!</p>
      <div className="flex gap-12">
        <button
          className="bg-purple-950 text-white p-2 rounded-md"
          onClick={GenerateKey}
        >
          Gerar!
        </button>
        <button
          className="bg-purple-950 text-white p-2 rounded-md"
          onClick={Copy}
        >
          {copied}
        </button>
      </div>
      <span className="text-white">{generatedKey}</span>
    </div>
  );
}
