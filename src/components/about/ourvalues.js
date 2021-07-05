import React, { useEffect } from 'react';
import '../../styles/about/header.css';
import Aos from 'aos'

function Ourvalues({ aboutData, aboutSlogan }) {
	useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
	return (
		<>
			{aboutData ? (
				<section className="text-gray-600 body-font">
					<div data-aos="fade-up" className="titlestyle" style={{ display: 'flex', flexDirection: 'column', marginLeft: '4%' }}>
						<h1 style={{ fontSize: '25px', color: '#3b66ea', marginBottom: '3%' }}> {aboutData?.title} </h1>
						<h2 style={{ fontSize: '28px', color: 'black', width: '50%' }}> {aboutSlogan} </h2>
					</div>
					<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
						<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
							<p
								className="mb-8 leading-relaxed"
								style={{ fontWeight: '500', fontSize: '20px', textAlign: 'left' }}
							>
								{' '}
								{aboutData?.description}{' '}
							</p>
						</div>
						<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
							{aboutData ? (
								<img className="object-cover object-center rounded" alt="hero" src={aboutData?.image} />
							) : null}
						</div>
					</div>
				</section>
			) : null}
		</>
	);
}

export default Ourvalues;
