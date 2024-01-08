import Image from "next/image";
import React from "react";
import homeimg from "../../public/home-img.svg";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para lidar com o envio do formulário
    // Por exemplo, enviar os dados para um servidor, exibir uma mensagem de sucesso, etc.
  };

  return (
    <div className="container max-w-screen-xl mx-auto px-4">
      <div className="">
        <header className="flex flex-col lg:flex-row justify-between lg:mb-20">
          <div className="text-center lg:text-left mb-20 lg:mb-0">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-10">
              <span className="w-20 h-0.5 bg-pink-700"></span>
              <p className="font-medium text-pink-700 text-xl">Patricia Nutrição</p>
            </div>
            <h1 className="font-bold text-gray-800 text-5xl md:text-5xl xl:text-5xl mb-10">
              Mude de vida <br />
              Essa é sua CHANCE
            </h1>
            <p className="font-normal text-gray-500 text-sm md:text-md xl:text-lg mb-10">
              Nutrição é mais do que comida; é cuidar do seu corpo, mente e emoções. Com um plano personalizado, busco
              não só saúde, mas transformação duradoura. Vamos criar juntos um caminho para o seu bem-estar pleno.
            </p>
            <form className="space-y-5 lg:space-x-5 mb-10" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-gray-800">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-gray-800">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="block md:inline px-8 py-3 font-medium bg-pink-800 text-white text-lg rounded-md hover:bg-pink-600 transition ease-in-out duration-300"
              >
                Send
              </button>
            </form>
            <hr className="text-gray-500 mb-5" />
            <span className="font-normal text-gray-500 text-sm">I am currently open for part-time work.</span>
          </div>
          <div className="mx-auto lg:mx-0">
            <Image width="525" height="525" src={homeimg} alt="homeimg" />
          </div>
        </header>
      </div>
    </div>
  );
}
