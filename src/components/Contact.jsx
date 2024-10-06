import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false); // Estado para a mensagem de sucesso

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName('');
    setEmail('');
    setMessage('');
    setSuccess(true); // Atualiza o estado de sucesso
  };

  return (
    <section id="contact" className="py-20 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">CONTATO</h2>
        {success && <p className="text-green-500 mt-4">Mensagem enviada com sucesso!</p>} {/* Mensagem de sucesso */}
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="Seu Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs"
            required
          />
          <input
            type="email"
            placeholder="Seu Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs"
            required
          />
          <textarea
            placeholder="Sua Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-3 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs"
            required
            rows="4"
          />
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded transition duration-300 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
