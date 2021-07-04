import React from 'react';

const Contact = () => {
	return (
		<div style={{backgroundColor: '#c29ce5'}} className="archive-inquiries pos-rel mt-32 z-5 bg-lilac section-dark text-white">
			<div className="container">
				<div className="py-20">
					<h1 style={{letterSpacing: '1px', fontWeight: '400'}} className="eyebrow-lg text-2xl mb-4">Get in touch</h1>
					<p style={{fontWeight: '400', letterSpacing: '0.5px'}} className="heading-sm text-3xl font-secondary text-transform-none font-weight-normal mb-8 mb-tb-5">
						Contact us for press inquiries{' '}
						<a className="link-underline text-white link-white" href="mailto:press@usehero.com">
							press@usehero.com
						</a>
						.
					</p>
					<p style={{fontWeight: '300'}} className="body-lg mt-10 font-secondary">
						For general inquiries, please contact us at{' '}
						<a className="link-underline text-white link-white" href="mailto:hello@usehero.com<">
							hello@usehero.com
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
