'use client'
export default function AboutPage() {
	const teamMembers = [
		{
			name: 'Satish Singh',
			role: 'B.Tech 2nd Year (AI&DS)',
			image: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-avatar-profile-picture-male-icon.png',
			github: 'https://github.com/ss1910singh',
			linkedin: 'https://www.linkedin.com/in/satish-singh-964b09278/',
			email: 'sat.sin.rt22@dypatil.edu',
		},
		{
			name: 'Sankalp Sathe',
			role: 'B.Tech 2nd Year (AI&DS)',
			image: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-avatar-profile-picture-male-icon.png',
			github: 'https://github.com/quantumscribe',
			linkedin:
				'https://www.linkedin.com/in/sankalp-sathe-5ba396183?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
			email: 'san.sat.rt22@dypatil.edu',
		},
		{
			name: 'Pranavi Shukla',
			role: 'B.Tech 2nd Year (AI&DS)',
			image: 'https://static.vecteezy.com/system/resources/previews/039/845/007/non_2x/placeholder-avatar-female-person-default-woman-avatar-image-gray-profile-anonymous-face-picture-illustration-isolated-on-white-vector.jpg',
			github: 'https://github.com/pranavishuklaa',
			linkedin: 'https://www.linkedin.com/in/pranavi-shukla-255879293/',
			email: 'pra.shu.rt22@dypatil.edu',
		},
		{
			name: 'Aakash Shedge',
			role: 'B.Tech 2nd Year (AI&DS)',
			image: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-avatar-profile-picture-male-icon.png',
			github: 'https://github.com/Aakash2934',
			linkedin: 'https://www.linkedin.com/in/your-linkedin-handle',
			email: 'aak.she.rt22@dypatil.edu',
		},
	]

	return (
		<div>
			<div
				className='relative bg-cover bg-center bg-opacity-50'
				style={{
					backgroundImage:
						"url('https://t4.ftcdn.net/jpg/00/54/21/61/360_F_54216185_QoJFPWXq0ti77J4p5TDAE5IMYUhZOc4e.jpg')",
				}}>
				<div className='container mx-auto px-6 py-12 text-black'>
					<h1 className='text-4xl font-bold mb-4'>ClimateGradient</h1>
					<p className='text-lg'>
						A Welcome to <strong>ClimateGradient</strong>. Our
						mission is to provide a powerful platform for global
						cooperation and policy analysis in addressing climate
						change. With real-time data updates and a user-friendly
						interface, we aim to make a positive impact on the
						world&apos;s environmental challenges.
					</p>
				</div>
			</div>
			<section
				id='our-mission'
				className='mt-12 border-b border-white-200'>
				<div className='container mx-auto px-6'>
					<h2 className='text-3xl font-semibold mb-4 text-center'>
						Our Mission
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						<div className='flex items-center justify-center'>
							<img
								src='https://t3.ftcdn.net/jpg/06/15/17/14/360_F_615171472_VfBqTvsPSfAbsXl2T8nkbua7Vff2hRfh.jpg'
								alt='Our Mission'
								className='max-w-full rounded-lg shadow-lg'
							/>
						</div>
						<div className='flex flex-col justify-center'>
							<p className='text-lg leading-relaxed'>
								Climate change is an urgent global issue. Our
								mission is to create a sustainable future by
								promoting adaptability to environmental
								challenges and reducing ecological footprints.
								Every action on this platform contributes to a
								better world for all. As the planet faces rising
								temperatures and extreme weather, it is our
								collective responsibility to tackle climate
								change.
							</p>
							<p className='text-lg leading-relaxed mt-4'>
								Through awareness and sustainable practices, we
								empower individuals and communities to combat
								this existential threat. Our commitment to
								environmental stewardship safeguards
								biodiversity, ensuring a resilient world where
								all beings thrive. Together, we can secure a
								sustainable future, preserving the planet's
								health for generations to come.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
