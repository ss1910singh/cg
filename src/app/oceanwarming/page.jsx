"use client"
import { useEffect, useState } from 'react';
import GraphOcean from "./graphocean";
import Real from "./real";

const OceanWarmingpage = () => {

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
      <div className="min-h-screen bg-gray-900 text-white ">
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("/oceanw.avif")',
          }}
        >

        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 "></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white text-7xl font-bold text-center font-sans serif text-white-400 transition duration-500 ease-in-out hover:transform hover:-translate-y-12 ">Ocean Warming</h1>
        </div>
      </div>

      <div className="container mx-auto py-10">
        <div>
          <GraphOcean />
        </div>
        <div className="mt-20 bg-gray-700 rounded-lg" >
          <Real/>
        </div>
      </div>

      <div className="bg-gray-800 py-10 mt-10">
    
        < div className="container mx-auto">
          <div className="p-5 bg-gradient-to-r from-teal-400 to-teal-800 rounded-md font-calibri body pl-5 mx-25 mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-100 p-5 rounded-lg shadow-md">
            <p className='text-calibri text-justify font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-800'>
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
              { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJPg2ZuhMAUtFczqNysg-3KpBe4W524aQKMA&usqp=CAU', title: "Ocean heating breaks record with disastrous outcomes for the planet", description: "The global ocean, which covers 70% of the planets surface, currently absorbs 90% of the solar heat trapped by humanitys carbon emissions. This greatly moderates rising atmospheric temperatures and helps temper the intensity of the climate crisis. Put another way, the world would be a lot hotter by now if the ocean wasn’t taking in all this heat.But the ocean’s absorption of this anthropogenic heat still has serious consequences.One clear result has been an unprecedented rise in global sea temperatures, which has placed strains on marine life and biological processes, and increased extreme weather on land. Rising ocean temperatures are also resulting in an escalation in marine heat waves, placing even more pressure on marine organisms and ecosystems already struggling to cope with other changes brought on by fossil fuel burning, such as ocean acidification, along with other human strssors. credits: https://news.mongabay.com" },
              { image: 'https://imgs.mongabay.com/wp-content/uploads/sites/20/2024/01/30162244/open-pit-mining-6477523_1280.jpg', title: 'The oceans are hotter than ever in modern history', description: "The seas heightened temperatures have now smashed previous heat records for at least seven years in a row. In 2023, the oceans absorbed about 287 zettajoules of heat, which Abraham says is the equivalent of eight Hiroshima atomic bombs detonating every second of every day into the ocean. Last year’s heat was 15 zettajoules greater than what the ocean absorbed in 2022.The researchers detected increased heat in many parts of the ocean — from the surface to a depth of 2,000 meters (6,600 feet) — though Abraham says higher temperatures were most evident in the surface waters, or the top 20 m (66 ft). credits: https://news.mongabay.com" },
              { image: 'https://imgs.mongabay.com/wp-content/uploads/sites/20/2024/01/30163117/ice-melt.jpg', title: 'Marine heat waves are surging', description: "High ocean temperatures don’t only drive extremes on land — they also influence extreme events in the water. As the global ocean becomes hotter, the frequency and intensity of marine heat waves increase. A marine heat wave is defined as an event in which sea temperatures exceed a certain threshold — specifically the 90th percentile of 30-year historic values — for a period of five or more days. These extreme events are caused by the influx of greenhouse gas emissions, which causes the ocean to absorb and store more heat, and also by the movement of warmer water via sea currents. While the transport of ocean water through global current systems is a natural occurrence, these processes, too, are being impacted by climate change. credits: https://news.mongabay.com" },
              { image: 'https://imgs.mongabay.com/wp-content/uploads/sites/20/2024/01/30162732/bleached-coral.jpg', title: 'What happens when the oceans heat up?', description: "Higher-than-normal sea temperatures have widespread effects across the ocean. They cause sea level rise as the water experiences thermal expansion. They can also stress or kill coral reef systems, accelerate the melting of polar sea ice, redistribute fish populations, and deplete oxygen levels.They can also influence what happens on land. Once the surface of the sea is hot, it creates the perfect conditions for terrestrial extreme weather events to develop, such as intense rainfall, droughts, and severely destructive storms.The oceans drive weather,Abraham said. “As the oceans warm, the air flows over the oceans and heat and moisture gets transferred. So it’s the oceans that help heat the atmosphere and the oceans that provide the humidity to the atmosphere … and weather is dictated by temperature and humidity. credits: https://news.mongabay.com" }
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
    
    
  )
}

     
  
  
  export default OceanWarmingpage;