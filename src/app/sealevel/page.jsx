"use client"
import { useEffect, useState } from 'react';
import Graphsealevel from "./graphsea";
import Real from "./real";
const SeaLevelpage = () => {
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
            backgroundImage: 'url("/sealevel.jpg")',
          }}
        >

        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 "></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white text-7xl font-bold text-center font-sans serif text-white-400 transition duration-500 ease-in-out hover:transform hover:-translate-y-12">Sea Level</h1>
        </div>
      </div>

      <div className="container mx-auto py-10">
        <div>
          <Graphsealevel />
        </div>
        <div className="mt-20 bg-gray-700 rounded-lg">
          <Real />
        </div>
      </div>

      <div className="bg-gray-800 py-10 mt-20">
    
        < div className="container mx-auto">
          <div className="p-5 bg-gradient-to-r from-cyan-500 to-cyan-800 rounded-md font-calibri body pl-5 mx-25 mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-100 p-5 rounded-lg shadow-md">
            <p className='text-calibri text-justify font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800'>
            Sea level refers to the average height of the ocean's surface relative to a specific reference point, typically measured over a long period, such as decades or centuries. It is a critical indicator of global climate change, influenced by various factors including melting ice caps and glaciers, thermal expansion of seawater, and changes in ocean currents.

Over the past century, sea levels have been rising at an accelerated rate, primarily due to human-induced climate change. The Intergovernmental Panel on Climate Change (IPCC) reports that global sea levels have risen by approximately 20 centimeters (about 8 inches) since the late 19th century, with projections suggesting that this trend will continue and possibly accelerate in the coming decades.

One of the main contributors to rising sea levels is the melting of polar ice caps and glaciers, driven by increasing global temperatures. As temperatures rise, ice sheets in Antarctica and Greenland are experiencing accelerated melting, resulting in the influx of freshwater into the oceans. This additional water contributes to sea level rise, posing significant risks to coastal communities, infrastructure, and ecosystems worldwide.

In addition to melting ice, the thermal expansion of seawater as it warms is another significant factor contributing to rising sea levels. As ocean temperatures increase, seawater expands, causing the volume of the oceans to increase and leading to a rise in sea level.

The consequences of rising sea levels are profound and far-reaching, including increased coastal erosion, inundation of low-lying areas, saltwater intrusion into freshwater sources, and heightened risks from storm surges and flooding. These impacts disproportionately affect vulnerable communities, particularly those in developing countries with limited resources to adapt to changing conditions            </p>
            </div>
          </div>
          

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10">
            {[
              { image: 'https://t4.ftcdn.net/jpg/05/78/31/01/360_F_578310112_4utIeruSQwXjyzznvfTuVN6ohHkhfGEU.jpg', title: "Sinking US cities increase risk of flooding from rising sea levels", description: "A number of cities on the US east coast are sinking, increasing the risk of flooding from rising sea levels.Between 2007 and 2020 the ground under New York, Baltimore and Norfolk in Virginia sank between 1mm and 2mm a year, other places sank at double or triple that rate, and Charleston, South Carolina, sank fastest, at 4mm a year, in a city less than 3 metres above sea level.Some of this subsidence resulted from pumping out groundwater for water supplies or for natural gas, but New York and other cities are sinking under the sheer weight of their buildings pressing into soft ground." },
              { image: 'https://i.guim.co.uk/img/media/ff2f041718cf5c007cf29e642269e5927115b9f4/336_0_4936_2962/master/4936.jpg?width=620&dpr=1&s=none', title: 'Australia not prepared for how Antarctic ice changes will hit economy, scientist warns', description: "A leading Antarctic scientist has urged the Albanese government to pay closer attention to abrupt changes under way in the southern continent, warning they will affect Australians in ways that are little understood and research into them is drastically underfunded. The head of the Australian Centre for Excellence in Antarctic Science, Prof Matt King, said he found it embarrassing how little was known about the local and global ramifications of changes including a historic drop in floating sea ice cover, the accelerating melting of giant ice sheets and the slowing of a deep ocean current known as the Southern Ocean overturning circulation" },
              { image: 'https://www.state.gov/wp-content/uploads/2022/04/shutterstock_1318619594.jpeg', title: 'More than 70 million people face increased threats from sea level rise worldwide', description: "In coastal communities across the U.S., new data shows land that's home to more than 260,000 Americans is at risk of increased flooding over the next 20 years. The number of people at risk worldwide is projected to grow five-fold by the end of the century if nations continue their current course of global greenhouse gas emissions, according to the Human Climate Horizons, a collaboration between the United Nations Development Programme and the Climate Impact Lab.  The new information shows increased coastal flooding this century will put over 70 million people around the globe in the path of expanding floodplains. " },
              { image: 'https://c.ndtvimg.com/2018-11/s47olmt8_sea-generic_625x300_06_November_18.jpg?ver-20240316.08', title: 'Climate Change: Global Sea Level', description: "Global mean sea level has risen about 8–9 inches (21–24 centimeters) since 1880. The rising water level is mostly due to a combination of melt water from glaciers and ice sheets and thermal expansion of seawater as it warms. In 2022, global mean sea level was 101.2 millimeters (4 inches) above 1993 levels, making it the highest annual average in the satellite record (1993-present). The global mean water level in the ocean rose by 0.14 inches (3.6 millimeters) per year from 2006–2015, which was 2.5 times the average rate of 0.06 inches (1.4 millimeters) per year throughout most of the twentieth century. By the end of the century, global mean sea level is likely to rise at least one foot (0.3 meters) above 2000 levels, even if greenhouse gas emissions follow a relatively low pathway in coming decades." }
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
  
  export default SeaLevelpage;