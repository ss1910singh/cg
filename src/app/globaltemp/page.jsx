"use client"
import { useEffect, useState } from 'react';
import GraphTemperature from "./graphtemparature";
import Real from "./real";

const GlobalTemperaturepage = () => {
  const [zoomedCard, setZoomedCard] = useState(null);

  const handleCardClick = (card) => {
    setZoomedCard(card);
  };

  const handleCloseZoomedCard = () => {
    setZoomedCard(null);
  };

  function App() {
    const [color, setColor] = useColor("#561ecb");

    return <ColorPicker color={color} onChange={setColor} />;
  }

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
  }, []) ;
    return (
      <div className="min-h-screen bg-gray-900 text-white">
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("/globaltemp1.jpg")',
          }}
        >

        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 "></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white text-7xl font-bold text-center font-sans serif text-white-400 transition duration-500 ease-in-out hover:transform hover:-translate-y-12 ">Global Temperature</h1>
        </div>
      </div>

      <div className="container mx-auto py-10">
        <div>
          <GraphTemperature />
        </div>
        <div className="mt-20 bg-gray-700 rounded-lg">
          <Real />
        </div>
      </div>

      <div className="bg-gray-800 py-10 mt-20">
    
        < div className="container mx-auto">
          <div className="p-5 bg-gradient-to-r from-gray-500 to-gray-800 rounded-md font-calibri body pl-5 mx-25 mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-100 p-5 rounded-lg shadow-md">
            <p className='text-calibri text-justify font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-800'>
            Global temperature refers to the average temperature of the Earth's atmosphere over a specified period, typically measured in decades or centuries. It is a key indicator of climate change and is influenced by various natural and human factors.

Over the past century, global temperatures have been steadily rising, primarily due to human activities such as burning fossil fuels, deforestation, and industrial processes. These activities release greenhouse gases such as carbon dioxide (CO2), methane (CH4), and nitrous oxide (N2O) into the atmosphere, which trap heat and contribute to the greenhouse effect.

The Intergovernmental Panel on Climate Change (IPCC) reports that the Earth's average surface temperature has increased by approximately 1.2 degrees Celsius (2.2 degrees Fahrenheit) since the late 19th century. This warming trend has led to numerous consequences, including more frequent and severe heatwaves, melting polar ice caps and glaciers, rising sea levels, and disruptions to ecosystems and biodiversity.

Furthermore, the impacts of global temperature rise are not evenly distributed, with some regions experiencing more pronounced changes than others. Developing countries and vulnerable communities, in particular, are disproportionately affected by climate change, facing challenges such as food and water scarcity, extreme weather events, and health risks.

Efforts to mitigate climate change and limit global temperature rise are crucial to safeguarding the planet and its inhabitants. This includes transitioning to renewable energy sources, enhancing energy efficiency, protecting and restoring forests, implementing sustainable land management practices, and adopting policies to reduce greenhouse gas emissions.  </p>
            </div>
          </div>
          

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10">
            {[
              { image: 'https://wmo.int/sites/default/files/styles/prose_1x/public/2024-01/thumbnail_annual.png?itok=GSQ58pk5', title: "WMO confirms that 2023 smashes global temperature record", description: "The annual average global temperature approached 1.5° Celsius above pre-industrial levels – symbolic because the Paris Agreement on climate change aims to limit the long-term temperature increase (averaged over decades rather than an individual year like 2023) to no more than 1.5° Celsius above pre-industrial levels. Six leading international datasets used for monitoring global temperatures and consolidated by WMO show that the annual average global temperature was 1.45 ± 0.12 °C above pre-industrial levels (1850-1900) in 2023. Global temperatures in every month between June and December set new monthly records. July and August were the two hottest months on record."},
              { image: 'https://www.aljazeera.com/wp-content/uploads/2023/07/33PB94T-highres-1689751380.jpg?resize=770%2C513&quality=80', title: 'Global temperature in 2023 .', description: "According to the 2023 Global Climate Report from NOAA National Centers for Environmental Information, every month of 2023 ranked among the 7 warmest for that month, and the months in the second half of the year (June-December) were each their hottest on record. In July, August, and September, global temperatures were more than 1.0°C (1.8°F) above the long-term average—the first time in NOAA's record any month has breached that threshold. " },
              { image: 'https://images.hindustantimes.com/tech/img/2022/01/02/1600x900/MaxPixel.net-Hot-Earth-Global-Warming-Globe-Heat-Climate-Change-5224748_1641111164239_1641111182120.jpg', title: 'UN climate chief presses for faster actions', description: "OXFORD: Humanity has only two years left to save the world by making dramatic changes in the way it spews heat-trapping emissions and it has even less time to act to get the finances behind such a massive shift, the head of the United Nations climate agency said on Wednesday. With governments of the world facing a 2025 deadline for new and stronger plans to curb carbon pollution, nearly half of the world's populations voting in elections this year, and crucial global finance meetings later this month in Washington, United Nations executive climate secretary Simon Stiell said he knows his warning may sound melodramatic. But he said action over the next two years is essential."},
              { image: 'https://science.nasa.gov/wp-content/uploads/2023/11/effectsbannernew-opt.jpeg?w=1100', title: 'February 2024 was the hottest on record, with global temperatures surpassing critical climate threshold', description: "The world has marked yet another consecutive month of reocrd-breaking heat. New data from Copernicus, the European Union's climate change monitoring service, shows that last month was the hottest February on record globally, with exceptionally high temperatures in both the air and sea. The record heat comes as the U.S. continues to battle weather extremes. In recent weeks, communities across the nation have seen spring- and summer-like temperatures, extreme rain and flooding, massive snowfall, and fire weather conditions that drove Texas' largest-ever wildfire that quickly became one of the biggest in U.S. history. Those kinds of extremes are a byproduct of the climate change-fueled rise in global temperatures, and are only expected to become more frequent and intense as warming continues. " }
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
    );
  }
  
  export default GlobalTemperaturepage;