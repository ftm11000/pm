"use client"

import { useState, useEffect } from "react"

export default function SalesPage() {
  const [currentDate, setCurrentDate] = useState("")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentActivitySlide, setCurrentActivitySlide] = useState(0)

  useEffect(() => {
    const updateDate = () => {
      const now = new Date()
      const day = now.getDate().toString().padStart(2, "0")
      const month = (now.getMonth() + 1).toString().padStart(2, "0")
      const year = now.getFullYear()
      setCurrentDate(`${day}/${month}/${year}`)
    }

    updateDate()
    const interval = setInterval(updateDate, 60000)

    return () => clearInterval(interval)
  }, [])

  const carouselData = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/111-57zJO9VfwHTfh8MeTrItvqvKNMuSHX.webp",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/222-CgkOKkc216oM1uhC92taG3QlslgQH2.webp",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3333-S6gecole80Kk32gLmdAunaB1jLxx8v.webp",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/444-3hOhYRD1cF9WTFxZKJHpYPDgJzPQU0.webp",
    },
  ]

  const activityCarouselData = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1ee-9ycFtwvzbKM1qcezOnPkfPZMz1jUh1.webp", // 1ee.webp
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2ee-8k1XWcmp7i3iJeRXUpfjYvPFSK5gQt.webp", // 2ee.webp
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3ee-bo05M3DPJZKAtH9l6hOKXbqIbjUB5z.webp", // 3ee.webp
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4ee-U11HqJPCa3ncTo3IDginlZHcpiXQOP.webp", // 4ee.webp
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextActivitySlide = () => {
    setCurrentActivitySlide((prev) => (prev + 1) % activityCarouselData.length)
  }

  const prevActivitySlide = () => {
    setCurrentActivitySlide((prev) => (prev - 1 + activityCarouselData.length) % activityCarouselData.length)
  }

  const goToActivitySlide = (index: number) => {
    setCurrentActivitySlide(index)
  }

  const scrollToPurchase = () => {
    const purchaseSection = document.getElementById("purchase-section")
    if (purchaseSection) {
      purchaseSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Banner de desconto verde */}
      <div className="bg-green-500 text-white text-center py-2 px-2">
        <p className="text-xs sm:text-sm md:text-lg font-semibold">
          Desconto só <span className="bg-yellow-400 text-black px-1 py-0.5 rounded font-bold">HOJE</span> nessa página{" "}
          {currentDate}
        </p>
      </div>

      <div className="min-h-[calc(100vh-50px)] flex flex-col justify-center px-2 py-3 sm:px-4 sm:py-8">
        {/* Título principal */}
        <div className="text-center mb-3 sm:mb-8">
          <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight px-1 sm:px-2">
            Método 100% garantido: Aprender a ler ficou mais fácil com a Atividade Palavra Mágica – ensino com foco em
            leitura, sílabas e coordenação motora!
          </h1>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto px-2 sm:px-6">
            <div className="relative rounded-lg overflow-hidden shadow-lg sm:shadow-2xl">
              <wistia-player media-id="wj97c36bpn" aspect="0.5625" className="w-full"></wistia-player>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        {/* Seção O QUE AS CRIANÇAS VÃO APRENDER */}
        <div className="max-w-6xl mx-auto px-2 sm:px-4 py-8 sm:py-12 md:py-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">
              O QUE AS CRIANÇAS VÃO APRENDER
            </h2>

            {/* Ícone de blocos coloridos */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative">
                <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-1 sm:w-2 h-1 sm:h-2 bg-orange-400 rounded-full"></div>
                <div className="absolute -top-1 sm:-top-2 -right-3 sm:-right-6 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-green-400 rounded-full"></div>
                <div className="absolute -bottom-2 sm:-bottom-3 -left-3 sm:-left-6 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-blue-400 rounded-full"></div>
                <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-1 sm:w-2 h-1 sm:h-2 bg-red-400 rounded-full"></div>

                <div className="flex items-end space-x-1 sm:space-x-2">
                  <div className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-red-500 rounded-md sm:rounded-lg flex items-center justify-center transform rotate-12 shadow-md sm:shadow-lg">
                    <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">A</span>
                  </div>
                  <div className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-blue-500 rounded-md sm:rounded-lg flex items-center justify-center transform -rotate-6 shadow-md sm:shadow-lg">
                    <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">B</span>
                  </div>
                  <div className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-orange-500 rounded-md sm:rounded-lg flex items-center justify-center transform rotate-6 shadow-md sm:shadow-lg">
                    <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
            <div className="relative">
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 bg-white rounded-full p-1.5 sm:p-2 shadow-md sm:shadow-lg hover:shadow-xl transition-shadow"
              >
                <svg
                  className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 bg-white rounded-full p-1.5 sm:p-2 shadow-md sm:shadow-lg hover:shadow-xl transition-shadow"
              >
                <svg
                  className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-3 sm:p-6 md:p-8 text-center transition-all duration-300">
                <div className="flex justify-center">
                  <img
                    src={carouselData[currentSlide].image || "/placeholder.svg"}
                    alt="Atividade de aprendizado"
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-4 sm:mt-6 space-x-1.5 sm:space-x-2">
              {carouselData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-green-500" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Seção de depoimentos */}
        <div className="max-w-6xl mx-auto px-2 sm:px-4 py-8 sm:py-12 md:py-16">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
              VEJA O QUE PAIS
              <br />E EDUCADORES
              <br />
              DIZEM SOBRE
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-blue-500 mx-auto mt-4 sm:mt-6 mb-8 sm:mb-12"></div>
          </div>

          <div className="max-w-xs sm:max-w-sm mx-auto mb-6 sm:mb-8">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
              <wistia-player media-id="cb0eoep9ej" aspect="0.5625" className="w-full"></wistia-player>
            </div>
          </div>

          <div className="max-w-xs sm:max-w-sm mx-auto">
            <div className="bg-green-500 text-white text-center py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl shadow-lg">
              <p className="text-sm sm:text-lg font-semibold">Veja como o material transforma a sala de aula ⭐</p>
            </div>
          </div>
        </div>

        {/* Atividade Palavra Mágica Carousel */}
        <div className="max-w-4xl mx-auto px-2 sm:px-4 py-8 sm:py-12 md:py-16">
          <div className="max-w-xs sm:max-w-sm mx-auto">
            <div className="relative">
              <button
                onClick={prevActivitySlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 bg-green-500 hover:bg-green-600 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300"
              >
                <svg
                  className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextActivitySlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 bg-green-500 hover:bg-green-600 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300"
              >
                <svg
                  className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentActivitySlide * 100}%)` }}
                >
                  {activityCarouselData.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <img
                        src={slide.image || "/placeholder.svg"}
                        alt={`Atividade ${index + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6">
              <a
                href="https://checkout.viperpagamentos.com/oeUpGDZP"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-full shadow-lg transition-colors flex items-center justify-center space-x-2">
                  <span className="text-lg sm:text-xl">👉</span>
                  <span className="text-sm sm:text-lg">Comprar agora</span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-2 sm:px-4 py-6 sm:py-8">
          <div className="flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QvA6mBYFpTrzDnEWvwLQlJe8tCjbdV.png"
              alt="Processo pós-compra: Chega no seu email, Você imprime, Realiza as atividades"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
            />
          </div>
        </div>

        <div id="purchase-section">
          {/* Seção PALAVRA MÁGICA */}
          <div className="max-w-4xl mx-auto px-2 sm:px-4 py-6 sm:py-8">
            <div className="max-w-xs sm:max-w-sm mx-auto">
              <div className="bg-white border-2 border-gray-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg sm:shadow-xl">
                <div className="text-center mb-4 sm:mb-6 relative">
                  <div className="absolute -top-1 sm:-top-2 left-6 sm:left-8 text-orange-400 text-sm sm:text-lg">✦</div>
                  <div className="absolute -top-1 right-8 sm:right-12 text-blue-400 text-xs sm:text-sm">✦</div>
                  <div className="absolute bottom-1 sm:bottom-2 left-8 sm:left-12 text-yellow-400 text-xs sm:text-sm">
                    ✦
                  </div>
                  <div className="absolute bottom-0 sm:bottom-1 right-6 sm:right-8 text-red-400 text-sm sm:text-lg">
                    ◆
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black">
                    <span className="text-purple-600">PALAVRA</span>
                    <br />
                    <span className="text-yellow-500">MÁGICA</span>
                  </h3>
                </div>

                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 bg-green-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="font-semibold text-gray-800">PALAVRA MÁGICA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 bg-green-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="font-semibold text-gray-800">ACESSO IMEDIATO</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 bg-green-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="font-semibold text-gray-800">PRONTO PARA IMPRESSÃO</span>
                  </div>
                </div>

                <div className="text-center mb-3 sm:mb-4">
                  <p className="text-red-600 font-semibold text-sm sm:text-lg">
                    De <span className="line-through">R$ 30,00</span> Por Apenas:
                  </p>
                </div>

                <div className="text-center mb-4 sm:mb-6">
                  <p className="text-green-600 font-black text-3xl sm:text-4xl">R$ 10,00</p>
                </div>

                <a
                  href="https://checkout.viperpagamentos.com/oeUpGDZP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-full shadow-lg transition-colors flex items-center justify-center space-x-2">
                    <span className="text-lg sm:text-xl">👉</span>
                    <span className="text-sm sm:text-lg">Comprar agora</span>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Seção KIT ATIVIDADES DE ALFABETIZAÇÃO */}
          <div className="max-w-4xl mx-auto px-2 sm:px-4 py-6 sm:py-8">
            <div className="max-w-xs sm:max-w-sm mx-auto">
              <div className="bg-white border-2 border-gray-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg sm:shadow-xl">
                <div className="text-center mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                    KIT ATIVIDADES DE
                    <br />
                    ALFABETIZAÇÃO
                  </h3>

                  <div className="bg-red-500 text-white text-xs sm:text-sm font-bold py-1.5 sm:py-2 px-3 sm:px-4 rounded-full mb-3 sm:mb-4">
                    PALAVRAS MÁGICAS JÁ VÃO INCLUSAS
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 bg-green-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="font-semibold text-gray-800">ATIVIDADES DE CALIGRAFIA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 bg-green-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="font-semibold text-gray-800">JOGOS E LETRAS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 bg-green-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="font-semibold text-gray-800">ATIVIDADES PARA COLORIR</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 bg-green-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="font-semibold text-gray-800">CORES E FORMAS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 bg-green-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="font-semibold text-gray-800">COORDENAÇÃO MOTORA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 bg-green-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="font-semibold text-gray-800">TODAS LETRAS DO ALFABETO</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 bg-green-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="font-semibold text-gray-800">MAIS DE 300 ATIVIDADES</span>
                  </div>
                </div>

                <div className="text-center mb-3 sm:mb-4">
                  <p className="text-gray-500 line-through text-sm sm:text-lg">R$ 45,00</p>
                </div>

                <div className="text-center mb-4 sm:mb-6">
                  <p className="text-green-600 font-black text-3xl sm:text-4xl">R$ 25,00</p>
                </div>

                <a
                  href="https://checkout.viperpagamentos.com/lFZqhybk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-full shadow-lg transition-colors">
                    <span className="text-sm sm:text-lg">EU QUERO ESSE</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-2 sm:px-4 py-6 sm:py-8">
          <div className="max-w-xs sm:max-w-md mx-auto">
            <div className="flex justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CH1souKNHYOoC9HVk0Op2dKzAvfmXc.png"
                alt="Seções de WhatsApp e Pagamento Seguro"
                className="w-full max-w-xs sm:max-w-sm h-auto"
              />
            </div>
          </div>
        </div>

        {/* Seção de Dúvidas Frequentes */}
        <div className="max-w-4xl mx-auto px-2 sm:px-4 py-8 sm:py-12 md:py-16">
          <div className="max-w-xs sm:max-w-md mx-auto">
            <div className="bg-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg sm:shadow-xl">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  DÚVIDAS
                  <br />
                  FREQUENTES
                </h3>
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-green-500 mx-auto"></div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="bg-green-100 border-2 border-green-300 rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <div className="flex items-start space-x-2 mb-2">
                    <span className="text-black font-bold text-sm">▼</span>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">Como vou receber o material?</h4>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed ml-4">
                    Após a compra, o material será enviado diretamente para o seu e-mail em PDF, pronto para baixar e
                    imprimir.
                  </p>
                </div>

                <div className="bg-green-100 border-2 border-green-300 rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <div className="flex items-start space-x-2 mb-2">
                    <span className="text-black font-bold text-sm">▼</span>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">Preciso de impressora?</h4>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed ml-4">
                    Você pode imprimir em casa ou em qualquer papelaria. O material é otimizado para impressão simples,
                    sem gastar muita tinta.
                  </p>
                </div>

                <div className="bg-green-100 border-2 border-green-300 rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <div className="flex items-start space-x-2 mb-2">
                    <span className="text-black font-bold text-sm">▼</span>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">São quantas palavras?</h4>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed ml-4">
                    Mais de 100 palavras no material 😊
                  </p>
                </div>

                <div className="bg-green-100 border-2 border-green-300 rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <div className="flex items-start space-x-2 mb-2">
                    <span className="text-black font-bold text-sm">▼</span>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">Funciona para qualquer criança?</h4>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed ml-4">
                    Sim! O material foi desenvolvido para se adaptar ao ritmo de aprendizado de cada criança, tornando o
                    aprendizado mais fácil e divertido.
                  </p>
                </div>

                <div className="bg-green-100 border-2 border-green-300 rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <div className="flex items-start space-x-2 mb-2">
                    <span className="text-black font-bold text-sm">▼</span>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">
                      Quais formas de pagamento são aceitas?
                    </h4>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed ml-4">
                    Aceitamos PIX, cartão de crédito, boleto e PayPal. Pagamentos com PIX são aprovados na hora!
                  </p>
                </div>

                <div className="bg-green-100 border-2 border-green-300 rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <div className="flex items-start space-x-2 mb-2">
                    <span className="text-black font-bold text-sm">▼</span>
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">Tem garantia?</h4>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed ml-4">
                    Sim! Você tem 7 dias de garantia após a compra do produto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
