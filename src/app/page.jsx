'use client'
import TiltCard from '@/components/ui/TiltCard'
import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import {
	animate,
	motion,
	useMotionTemplate,
	useMotionValue,
} from 'framer-motion'
import { useEffect } from 'react'
import { FiArrowRight } from 'react-icons/fi'

const COLORS_TOP = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C']

const Home = () => {
	const color = useMotionValue(COLORS_TOP[0])

	useEffect(() => {
		animate(color, COLORS_TOP, {
			ease: 'easeInOut',
			duration: 10,
			repeat: Infinity,
			repeatType: 'mirror',
		})
	}, [])

	const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`
	const border = useMotionTemplate`1px solid ${color}`
	const boxShadow = useMotionTemplate`0px 4px 24px ${color}`
	return (
		<main className='scroll-smooth'>
			<div className=' snap-y snap-mandatory h-screen w-screen overflow-scroll'>
				<div className='h-screen w-screen flex w-screen justify-center items-center bg-orange-500 snap-center'>
					<motion.section
						style={{
							backgroundImage: 'url("https://png.pngtree.com/background/20230615/original/pngtree-view-of-the-night-sky-with-trees-and-forest-picture-image_3540325.jpg")'
						}}
						className='relative grid h-screen place-content-center w-full bg-gray-950 px-4 py-24 text-gray-200'>
						<div className='relative z-10 flex flex-col items-center'>
							<h1 className='max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium     leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight'>
								Climate Gradient
							</h1>
							<p className='my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed'>
								Insights for Action: Navigating Climate Change
								Challenges with Data-Driven Analysis for a
								Greener Tomorrow
							</p>
							<motion.button
								style={{
									border,
									boxShadow,
								}}
								whileHover={{
									scale: 1.015,
								}}
								whileTap={{
									scale: 0.985,
								}}
								className='group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50'>
								<a href='#second' className=''>
									Explore now
								</a>
								<FiArrowRight className='transition-transform group-hover:rotate-45 group-active:-rotate-12' />
							</motion.button>
						</div>

						<div className='absolute inset-0 z-0'>
							<Canvas>
								<Stars
									radius={50}
									count={2500}
									factor={4}
									fade
									speed={2}
								/>
							</Canvas>
						</div>
					</motion.section>
				</div>

				<div
					className='h-screen w-screen flex flex-col justify-center items-center snap-center pt-20'
					id='second'>
					<div className='font-bold text-white text-6xl mb-10 pt-20'>
						Explore👀
					</div>
					<div className='font-bold text-white text-xl mb-8'>
						Track the impact of human activities on our planet's
						climate with our interactive visualizations.
					</div>

					<div className='flex flex-shrink'>
						<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-rows-2 gap-5 w-full place-content-center px-4 py-2 text-slate-900'>
							<div>
								<TiltCard
									CardTitle='Methane'
									CardPara='Charting Methane Trends: Mapping the Rise and Impact Over Time'
									location='/methane'
								/>
							</div>

							<div>
								<TiltCard
									CardTitle='Upper Atmosphere'
									CardPara='Visualize Upper Atmosphere Dynamics: Tracking Changes for Climate Insights'
									location='/upperatmosphere'
								/>
							</div>

							<div>
								<TiltCard
									CardTitle='Ocean Warming'
									CardPara='Delve into Ocean Warming: Visualizing Temperature Trends Beneath the Waves'
									location='/oceanwarming'
								/>
							</div>
						</div>
					</div>
				</div>

				{/* <div className='h-screen w-screen flex flex-col justify-center items-center snap-center gap-y-10'>
					<div className='font-bold text-white text-6xl mb-10 mt-16'>
						Learn🧠 About Climate Change
					</div>
					<div className='flex flex-wrap w-3/4 p-5'>
						<Carousel>
							<CarouselContent>
								<CarouselItem className='flex flex-col'>
									<p className='text-2xl font-bold mb-5'>
										What is climate change?
									</p>
									<p className='p-2'>
										Alright, imagine our planet Earth like a
										big blanket. Normally, this blanket
										keeps us warm and cozy by trapping some
										of the Sun's heat. But, oh no! Imagine
										that this blanket is getting thicker and
										thicker because of some things we do,
										like burning lots of stuff and cutting
										down too many trees. This extra thick
										blanket is making the Earth too warm,
										and that's making some parts of the
										Earth very hot and some very cold. It's
										like when you wear too many clothes and
										feel too hot. That's what's happening to
										our Earth. So, when we talk about
										climate change, we mean the Earth is
										getting too hot because of all the
										things we're doing. We need to be
										careful and try to make the blanket
										thinner again so the Earth can be just
										right for everyone.
									</p>
								</CarouselItem>
								<CarouselItem className='flex flex-col p-5'>
									<p className='text-2xl font-bold mb-5'>
										What causes climate change?
									</p>
									<p className='p-2'>
										Let us consider the Earth like a big
										puzzle, and everything on it, like
										people, cars, and factories, are puzzle
										pieces. When we use these puzzle pieces
										a lot, they make something called
										"greenhouse gases." These gases go up
										into the air and make a big blanket
										around Earth. This blanket traps too
										much heat from the sun, and that makes
										the Earth warmer, like when you put on
										too many blankets in bed. So, all those
										puzzle pieces we use too much are making
										the Earth too warm, and that's what
										causes climate change.
									</p>
								</CarouselItem>
								<CarouselItem className='flex flex-col p-5'>
									<p className='text-2xl font-bold mb-5'>
										How is climate change affecting the
										planet?
									</p>
									<p className='p-2'>
										Climate change is affecting the planet
										in various ways. It's bringing hotter
										weather, causing extreme storms and
										heavy rain, melting ice at the poles,
										disrupting animal habitats, and altering
										seasonal patterns. These changes make
										life harder for people, animals, and
										plants. That's why it's crucial to work
										together to reduce the impacts of
										climate change.
									</p>
								</CarouselItem>
								<CarouselItem className='flex flex-col p-5'>
									<p className='text-2xl font-bold mb-5'>
										What are greenhouse gases and their role
										in climate change?
									</p>
									<p className='p-2'>
										Greenhouse gases are like a special
										blanket for the Earth. When sunlight
										comes to Earth, some of it gets trapped
										by this blanket, keeping our planet
										warm. But when we make too many
										greenhouse gases, like when we drive
										cars or make stuff in factories, the
										blanket gets thicker. This makes the
										Earth warmer, causing climate change.
										So, greenhouse gases help keep us warm,
										but too many of them can make the Earth
										too hot.
									</p>
								</CarouselItem>
								<CarouselItem className='flex flex-col p-5'>
									<p className='text-2xl font-bold mb-5'>
										What are the social and economic impacts
										of climate change?
									</p>
									<p className='p-2'>
										Climate change has various social and
										economic impacts. Extreme weather
										events, such as storms and droughts, can
										damage homes, crops, and businesses,
										leading to costly repairs and losses.
										Health problems may arise due to hotter
										temperatures, resulting in increased
										medical expenses. Reduced food
										production can drive up prices and
										affect food security. Additionally,
										climate-related displacement may force
										people to move, causing financial strain
										and social upheaval. Furthermore,
										changes in industries and job sectors
										may occur, impacting employment
										opportunities and economic stability.
										Addressing climate change is essential
										to mitigate these challenges and
										safeguard communities' well-being and
										prosperity.
									</p>
								</CarouselItem>
								<CarouselItem className='flex flex-col p-5'>
									<p className='text-2xl font-bold mb-5'>
										What are some strategies for mitigating
										climate change?
									</p>
									<p className='p-2'>
										To mitigate climate change, we can
										employ several simple strategies.
										Firstly, transitioning to clean energy
										sources such as solar, wind, and
										hydroelectric power reduces greenhouse
										gas emissions. Additionally, conserving
										energy by using energy-efficient
										appliances and reducing unnecessary
										consumption helps decrease our carbon
										footprint. Planting trees and preserving
										natural habitats can absorb carbon
										dioxide from the atmosphere. Moreover,
										reducing waste through recycling,
										reusing items, and minimizing food waste
										minimizes emissions from production
										processes. By implementing these
										actions, we can collectively contribute
										to mitigating climate change and
										protecting our planet for future
										generations.
									</p>
								</CarouselItem>
							</CarouselContent>
							<CarouselPrevious />
							<CarouselNext />
						</Carousel>
					</div>
				</div> */}
			</div>
		</main>
	)
}

export default Home
