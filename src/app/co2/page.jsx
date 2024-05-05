'use client'
import { useEffect, useState } from 'react'
import Graphco2 from './graphco2'
import Real from './real'

function Page() {
	const [zoomedCard, setZoomedCard] = useState(null)

	const handleCardClick = (card) => {
		setZoomedCard(card)
	}

	const handleCloseZoomedCard = () => {
		setZoomedCard(null)
	}

	function App() {
		const [color, setColor] = useColor('#561ecb')

		return <ColorPicker color={color} onChange={setColor} />
	}

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!event.target.closest('.zoomed-card')) {
				handleCloseZoomedCard()
			}
		}

		document.body.addEventListener('click', handleClickOutside)

		return () => {
			document.body.removeEventListener('click', handleClickOutside)
		}
	}, [])

	return (
		<div className='min-h-screen bg-gray-900 text-white'>
			<div className='relative h-screen overflow-hidden'>
				<div
					className='absolute inset-0 bg-fixed bg-cover bg-center z-0'
					style={{
						backgroundImage: 'url("/CO2 IMAGE.jpg")',
					}}></div>
				<div className='absolute top-0 left-0 w-full h-full bg-black opacity-70 '></div>
				<div className='absolute inset-0 flex items-center justify-center text-center'>
					<h1 className='text-white text-7xl font-bold text-center font-sans serif text-white-400 transition duration-500 ease-in-out hover:transform hover:-translate-y-12'>
						Carbon Dioxide
					</h1>
				</div>
			</div>

			<div className='container mx-auto py-10'>
				<div>
					<Graphco2 />
				</div>
				<div className='mt-20 rounded-lg'>
					<Real />
				</div>
			</div>

			<div className='bg-gray-800 py-10'>
				<div className='container mx-auto'>
					<div className='p-5 bg-gradient-to-r from-amber-500 to-amber-800 rounded-md font-calibri body pl-5 mx-25 mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='bg-slate-100 p-5 rounded-lg shadow-md'>
							<p className='text-calibri text-justify font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800'>
								Each year, human activities release more carbon
								dioxide into the atmosphere than natural
								processes can remove, causing the amount of
								carbon dioxide in the atmosphere to increase.
								The global average carbon dioxide set a new
								record high in 2022: 417.06 parts per million.
								Atmospheric carbon dioxide is now 50 percent
								higher than it was before the Industrial
								Revolution. The annual rate of increase in
								atmospheric carbon dioxide over the past 60
								years is about 100 times faster than previous
								natural increases, such as those that occurred
								at the end of the last ice age 11,000-17,000
								years ago. The ocean has absorbed enough carbon
								dioxide to lower its pH by 0.1 units, a 30%
								increase in acidity. The concentration of CO2 in
								the atmosphere has been steadily increasing,
								with measurements showing a significant rise
								since the Industrial Revolution. In 2022, the
								global average concentration of CO2 reached a
								new record high of 417.06 parts per million.
								This level is approximately 50 percent higher
								than pre-industrial levels, representing a stark
								shift driven by human activities. The rapid
								increase in atmospheric CO2 has profound
								implications for Earth's climate system. CO2 is
								a potent greenhouse gas, trapping heat in the
								atmosphere and contributing to global warming
								and climate change. This warming leads to a
								variety of impacts, including rising sea levels,
								more frequent and intense extreme weather
								events, altered precipitation patterns, and
								disruptions to ecosystems and biodiversity.
								Efforts to mitigate the impacts of rising CO2
								levels include transitioning to renewable energy
								sources, improving energy efficiency,
								reforestation and afforestation initiatives, and
								implementing carbon capture and storage
								technologies.
							</p>
						</div>
					</div>

					<div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10'>
						{[
							{
								image: 'https://www.europarl.europa.eu/resources/library/images/20240410PHT20344/20240410PHT20344-cl.jpg',
								title: 'MEPs adopt stricter CO2 emissions targets for trucks and buses',
								description:
									'The regulation, addressing emissions from new trucks, buses and trailers, was endorsed by MEPs with 341 votes in favour, 268 against and 14 abstentions.CO2 emissions from large trucks and buses will have to be reduced by 45% for the period 2030-2034, 65% for 2035-2039 and 90% as of 2040. By 2030, new urban buses will need to reduce their emissions by 90% and become zero-emission vehicles by 2035. Emissions reduction targets are also set for trailers (7.5%) and semi-trailers (10%), starting from 2030The law requires the Commission to conduct a detailed review of the effectiveness and impact of the new rules by 2027. This review will need to assess, among others, whether to apply the rules to small lorries, the role of a methodology for registering HDVs exclusively running on CO2 neutral fuels and the role that a carbon correction factor could have in the transition towards zero-emission HDVs.',
							},
							{
								image: 'https://i.unu.edu/media/ourworld.unu.edu-en/article/21453/sea-level-rise-is-inevitable-but-we-can-still-prevent-catastrophe-for-coastal-regions.jpg',
								title: 'Rising seas, fueled by CO2, threaten to swallow millions in coastal cities.',
								description:
									'Rising CO2 traps heat, warming the oceans which then expand and melt land-based ice. This double whammy threatens coastal regions with rising sea levels. Depending on our success in curbing emissions, estimates suggest sea levels could rise by 0.3 to 2 meters by 2100, potentially submerging significant areas of low-lying land and displacing millions living in vulnerable coastal cities. The exact number of cities is uncertain, but some studies suggest hundreds of cities around the world could be partially or entirely inundated by rising seas by the end of the century.',
							},
							{
								image: 'https://sb.ecobnb.net/app/uploads/sites/3/2022/04/copertina-1.jpg',
								title: 'CO2 Trap: Plants Feast, Animals Starve',
								description:
									"CO2 emissions are a double-edged sword for nature. Plants initially enjoy a growth boost, but this buffet comes with a hidden cost: their food quality suffers. This disrupts the food chain for animals who rely on them. Meanwhile, oceans become acidic as they absorb CO2, dissolving the shells of coral and other creatures. Rising seas, fueled by a warming planet, threaten coastal habitats, disrupting breeding grounds and migration routes for wildlife. Studies suggest extinction rates could skyrocket 20-50 times by 2100 if we don't cut CO2. The future of plants, animals, and the entire web of life hinges on our ability to curb CO2 emissions.",
							},
							{
								image: 'https://varmentguard.com/uploads/permanent/1d3825ccca58100c20f547962159623d',
								title: 'CO2 heat: Up go temps, down goes nature.',
								description:
									"Earth's CO2 blanket traps heat, disrupting ecosystems and pushing temperatures up. Studies warn of extinction rates spiking 20-50 times by 2050 if emissions continue. Countless species already face a precarious fight for survival due to scorching heat, melting glaciers, and habitat loss. While pinpointing exact extinction numbers linked solely to CO2 is difficult, the decline in biodiversity is a troubling sign. Urgent action to curb CO2 emissions is critical to prevent a mass extinction event.",
							},
						].map((card, index) => (
							<div
								key={index}
								className='rounded-lg overflow-hidden shadow-lg bg-gray-700 cursor-pointer'
								onClick={() => handleCardClick(card)}>
								<div className='relative'>
									<img
										src={card.image}
										alt={card.title}
										className='w-full h-auto'
									/>
									<div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent h-16'></div>
								</div>
								<div className='px-4 py-4'>
									<h2 className='text-xl font-bold'>
										{card.title}
									</h2>
									<p className='text-gray-300'>
										{card.description.substring(0, 150)}
										{!zoomedCard
											? '... (click for more)'
											: ''}
									</p>
								</div>
							</div>
						))}
					</div>

					{zoomedCard && (
						<div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center'>
							<div className='max-w-4xl zoomed-card'>
								<div className='relative'>
									<button
										onClick={handleCloseZoomedCard}
										className='absolute top-2 right-2 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 focus:outline-none'>
										<svg
											className='w-6 h-6'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</button>
									<div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg'>
										<img
											src={zoomedCard.image}
											alt={zoomedCard.title}
											className='w-full h-96 object-cover'
										/>
										<div className='px-6 py-4'>
											<h2 className='text-2xl font-bold mb-2'>
												{zoomedCard.title}
											</h2>
											<p className='text-gray-300'>
												{zoomedCard.description}
											</p>
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

export default Page
