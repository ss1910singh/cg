"use client"
import { useEffect, useState } from 'react';
import Graphmethane from "./graphmethane";


const Methanepage = () => {

  const [zoomedCard, setZoomedCard] = useState(null);

  const handleCardClick = (card) => {
    setZoomedCard(card);
  };

  const handleCloseZoomedCard = () => {
    setZoomedCard(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.zoomed-card')) {
        handleCloseZoomedCard();
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

    return (
      <div className="min-h-screen bg-gray-900 text-white">
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("/methane.avif")',
          }}
        >

        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 "></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white text-7xl font-bold text-center font-sans serif text-white-400 transition duration-500 ease-in-out hover:transform hover:-translate-y-12 ">Methane</h1>
        </div>
      </div>

      <div className="container mx-auto py-10">
        <div>
        <Graphmethane/>
       </div>

      <div className="bg-gray-800 py-10 mt-20">
    
        < div className="container mx-auto">
          <div className="p-5 bg-gradient-to-r from-lime-500 to-lime-800 rounded-md font-calibri body pl-5 mx-25 mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-100 p-5 rounded-lg shadow-md">
            <p className='text-calibri text-justify font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-lime-800'>
            Methane (CH4) is a colorless, odorless gas that is both a natural component of the Earth's atmosphere and a potent greenhouse gas. It plays a crucial role in the Earth's climate system, but excessive emissions contribute significantly to global warming and climate change. Methane has a much shorter atmospheric lifetime compared to carbon dioxide (CO2), but it is approximately 28 times more effective at trapping heat over a 100-year period. This high global warming potential (GWP) makes methane a key target for climate mitigation efforts.

Natural sources of methane include wetlands, oceans, and termites, while human activities such as fossil fuel production, agriculture, and waste management also release significant amounts of methane into the atmosphere. For example, the decomposition of organic matter in landfills and the digestive processes of livestock produce large quantities of methane. Additionally, methane is emitted during the production and transportation of fossil fuels, particularly natural gas.

The rise in atmospheric methane concentrations is concerning as it contributes to the acceleration of global warming. Despite its shorter atmospheric lifetime compared to CO2, methane's potency as a greenhouse gas makes it a significant driver of climate change. Methane emissions have been steadily increasing in recent decades, driven primarily by human activities. According to scientific studies, the global atmospheric methane concentration has more than doubled since pre-industrial times.
          </p>
            </div>
          </div>
          

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10">
            {[
              { image: 'https://th-i.thgim.com/public/incoming/4t9orj/article66873961.ece/alternates/LANDSCAPE_1200/Pipelines_Methane_Leaks_55532.jpg', title: "Methane emissions from energy sector rose", description: "Planet-heating methane released by the fossil fuel industry rose to near record highs in 2023 despite technology available to curb this pollution at virtually no cost,” the International Energy Agency said on March 13.Emissions of methane from fossil fuel operations remain unacceptably high... There is no reason for emissions to remain as high as they are,IEA chief energy economist Tim Gould told reporters ahead of the release of the agency's annual Global Methane Tracker report While some 40% of methane is released from natural sources, mainly wetlands, human activities are responsible for the rest. Agriculture is the main source — methane is burped out by livestock such as cows and sheep and emitted during rice cultivation. credits:thehindu.com" },
              { image: 'https://media.istockphoto.com/id/526594745/photo/smokestacks-with-pollution.jpg?s=612x612&w=0&k=20&c=KueJaDavzd_MnOA3h-lIJgCZdWa73dmwXLyzqQAqGOs=', title: 'Methane: A crucial opportunity in the climate fight', description: "Methane is the main ingredient in natural gas, and fossil fuel production is a major source of global methane emissions along with agriculture and waste management.Cutting methane emissions is the fastest opportunity we have to immediately slow the rate of global warming, even as we decarbonize our energy systems.It’s an opportunity we can’t afford to miss.Methane is a potent greenhouse gas that has more than 80 times the warming power of carbon dioxide over the first 20 years after it reaches the atmosphere. Even though CO2 has a longer-lasting effect, methane sets the pace for warming in the near term.About 30% of today’s global warming is driven by methane from human actions. credits: https://www.edf.org" },
              { image: 'https://scx1.b-cdn.net/csz/news/800a/2024/research-finds-dairy-f.jpg', title: 'Research finds dairy farmers receptive to methane-reducing seaweed feed', description: "Researchers from the University of New Hampshire have collaborated with researchers in Maine to find evidence that nearly half of organic dairy farmers would be willing to pay a little extra for methane-reducing seaweed feed but would only consider it if it was cost effective, aligned with existing feeding practices and would qualify them for government policies and subsidies.Nearly half of respondents reported a willingness to pay, on average, an additional 64 cents per cow per day for methane-reducing seaweed-based feed. credits: https://phys.org"},
              { image: 'https://scx1.b-cdn.net/csz/news/800a/2024/methane-leaks-from-ene-1.jpg', title: 'Methane: a powerful gas heating the planet', description: "Methane—which is potent but relatively short-lived—is a key target for countries wanting to slash emissions quickly and slow climate changeThat is particularly because large amounts of methane are simply leaking into the atmosphere from oil and gas projects.Methane emissions from the fossil fuel industry have risen for three consecutive years Agriculture is the biggest culprit, responsible for roughly a quarter of that pollution. Most is from livestock—cows and sheep release methane during digestion and in their manure—and rice cultivation, where flooded fields create ideal conditions for methane-emitting bacteria.credits: https://phys.org" }
            ].map((card, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-gray-700 cursor-pointer" onClick={() => handleCardClick(card)}>
                <div className="relative">
                  <img src={card.image} alt={card.title} className="w-full h-auto" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent h-16"></div>
                </div>
                <div className="px-4 py-4">
                  <h2 className="text-xl font-bold">{card.title}</h2>
                  <p className="text-gray-300">{card.description.substring(0, 150)}{!zoomedCard ? '... (click for more)' : ''}</p>
                </div>
              </div>
            ))}
          </div>

          {zoomedCard && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
              <div className="max-w-4xl zoomed-card">
                <div className="relative">
                  <button onClick={handleCloseZoomedCard} className="absolute top-2 right-2 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <img src={zoomedCard.image} alt={zoomedCard.title} className="w-full h-96 object-cover" />
                    <div className="px-6 py-4">
                      <h2 className="text-2xl font-bold mb-2">{zoomedCard.title}</h2>
                      <p className="text-gray-300">{zoomedCard.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
      </div>

    );
  }
  
  export default Methanepage;



  