import ContactForm from '@/components/contactform/ContactForm'


const contactpage = () => {
	return (
		// <div className='flex flex-col items-center justify-center gap-y-12'>
		// 	<div className='mt-12 text-3xl text-gray-400'>Coming Soon.....</div>
		// 	<div className='al'>
		// 		<Image src='/nodding-yes.gif' width={300} height={300} />
		// 	</div>
		// 	<div className='al'>
		// 		<Image src='/honest-work-meme.jpg' width={300} height={300} />
		// 	</div>
		// </div>
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("https://t3.ftcdn.net/jpg/05/68/49/90/360_F_568499083_q9QfafI1PkGJA8QQMIpiTT557xUUJ4Qq.jpg")',
          }}
        >
			<ContactForm />
		</div>
	)
}

export default contactpage
