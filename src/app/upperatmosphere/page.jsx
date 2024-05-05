"use client"
import { useEffect, useState } from 'react';
import Graphsta from "./graphsta";
import Graphtro from "./graphtro";

const UpperAtmospherepage = () => {

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
            backgroundImage: 'url("/upperat.avif")',
          }}
        >

        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 "></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white text-7xl font-bold text-center font-sans serif text-white-400 transition duration-500 ease-in-out hover:transform hover:-translate-y-12 ">Upper Atmosphere</h1>
        </div>
      </div>

      <div className="container mx-auto py-10">
        <div>
        <Graphtro/>
  <div className='mt-20'> <Graphsta/></div>

       </div>

      <div className="bg-gray-800 py-10 mt-20 ">
    
        < div className="container mx-auto">
          <div className="p-5 bg-gradient-to-r from-orange-500 to-sky-800 rounded-md font-calibri body pl-5 mx-25 mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-100 p-5 rounded-lg shadow-md">
            <p className='text-calibri text-justify font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-sky-800'>
            Ocean warming refers to the increase in the temperature of the Earth's oceans over time, primarily driven by the absorption of excess heat trapped in the atmosphere due to greenhouse gas emissions. As one of the most significant indicators of climate change, ocean warming has profound implications for marine ecosystems, weather patterns, sea levels, and human societies.

              The oceans act as a vast heat sink, absorbing more than 90% of the excess heat trapped by greenhouse gases in the Earth's atmosphere. This thermal energy is distributed throughout the ocean depths, leading to widespread warming of ocean waters. The consequences of ocean warming are far-reaching, including coral bleaching, melting polar ice caps, altered marine habitats, and disruptions to global ocean currents.

              Coral reefs, in particular, are highly sensitive to temperature changes, and prolonged periods of elevated ocean temperatures can trigger coral bleaching events, causing widespread damage and mortality to coral ecosystems. Additionally, warmer ocean waters contribute to the melting of polar ice caps and glaciers, leading to rising sea levels and increased coastal flooding and erosion.

              Ocean warming also impacts marine biodiversity, with shifts in the distribution and abundance of species, changes in migration patterns, and increased risk of extinction for some vulnerable species. Furthermore, warmer ocean temperatures can fuel more intense and frequent extreme weather events, such as hurricanes, cyclones, and typhoons, posing risks to coastal communities and infrastructure.

              Addressing ocean warming requires urgent and coordinated efforts to reduce greenhouse gas emissions, mitigate the impacts of climate change, and protect marine ecosystems. Adaptation measures, such as the establishment of marine protected areas and the restoration of degraded habitats, can help build resilience to the effects of ocean warming and safeguard the health and productivity of the world's oceans for future generations.
          </p>
            </div>
          </div>
          

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10">
            {[
              { image: 'https://cdn.downtoearth.org.in/library/large/2023-09-15/0.54024500_1694762840_istock-174771982.jpg', title: "Human-led climate impact on the Upper Atmosphere", description: "The Earth upper atmosphere, called stratosphere, has been dramatically cooling in response to human-induced climate change since 1986, according to a recent study. This is in complete contrast to the effects on the lowermost part of the atmosphere, the troposphere.Temperatures in the stratosphere were 12 to 15 times greater than what would have occurred naturally, without human influence. Previous studies, based on computer modelling, created a simulation by increasing levels of atmospheric carbon dioxide levels from 150 to 300 to 600 parts per million (ppm) and saw increased warming of the troposphere and increased cooling of the stratosphere. Subsequent studies based on computer models also confirmed this prediction. credits: https://www.downtoearth.org.in" },
              { image: 'https://scx1.b-cdn.net/csz/news/800a/2024/scientists-create-new.jpg', title: 'Is the Upper Atmosphere drying?', description: "The idea of drying the upper atmosphere is the newest addition to what some scientists are calling a last-ditch toolbox to deal with climate change by manipulating the world's atmosphere or oceans. Known as geoengineering, it's often rejected because of potential side effects, and is usually mentioned not as an alternative to reducing carbon pollution, but in addition to emission cuts. credits: https://phys.org" },
              { image: 'https://cdn.downtoearth.org.in/library/large/2024-02-26/0.58634800_1708926667_istock-165773692.jpg', title: 'Magnetic Field in Upper Atmosphere', description: "Just as snow crystals form in the upper atmosphere, then fall to lower, warmer elevations and melt, scientists believe a phenomenon called iron snow happens in the molten iron cores of some planetary bodies. Cooling near the core-mantle boundary creates crystals of iron, which melt as they fall deeper into the hot core. This movement may create magnetic fields in some smaller bodies like Mercury and Jupiter's moon Ganymede, but its dynamics are not well known. he researchers' simple experimental setup involved a tank of water cooled from below, with a layer of salt water at the bottom to prevent ice crystal adhesion. As the lower layers of freshwater cooled, they produced ice crystals, which floated upward and melted once they reached warmer water. This created an overturning current that, along with latent heat created by crystal formation, eventually warmed lower layers of water and halted ice crystal formation. When the water cooled sufficiently again, the process started over. credits: https://phys.org" },
              { image: 'https://cdn.mos.cms.futurecdn.net/k6okX2VVUg4qWoyxuNLsf7-1200-80.jpg', title: 'Phenomena called Steve and picket fence are masquerading as auroras', description: "The shimmering green, red and purple curtains of the northern and southern lights—the auroras—may be the best-known phenomena lighting up the nighttime sky, but the most mysterious are the mauve and white streaks called Steve and their frequent companion, a glowing green picket fence. Claire Gasque, a University of California, Berkeley, graduate student in physics, has now proposed a physical explanation for these phenomena that is totally different from the processes responsible for the well-known auroras. She has teamed up with researchers at the campus's Space Sciences Laboratory (SSL) to propose that NASA launch a rocket into the heart of the aurora to find out if she's correct. credits: https://phys.org" }
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
  
  export default UpperAtmospherepage;