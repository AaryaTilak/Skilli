import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Faq() {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-content">
      {/* INNER PAGE BANNER */}
				<div className="relative bg-cover bg-center w-full bg-white bg-[url('/assets/images/background/inr-banner.jpg')] overflow-hidden">
						<div className="opacity-100 absolute left-0 top-0 size-full"></div>
						<div className="flex w-full lg:h-160 md:h-135 h-100 pb-10 items-baseline mx-auto">
							<div className="relative md:mt-60 mt-45 flex items-center justify-center w-full flex-col z-5">
								<div>
									<h2 className="lg:text-60 md:text-52 text-28 relative text-primary!">Frequently Asked Questions</h2>
								</div>
								{/* BREADCRUMB ROW */}                            
								<div>
									<ul className="inline-block">
										<li className="text-base pr-7.5 relative inline-block font-semibold text-primary after:content-['-'] after:absolute after:right-2 after:-top-1.5 after:text-primary after:text-26 after:font-normal">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}>Home</a></li>
										<li className="relative inline-block text-base font-semibold text-primary">Frequently Asked Questions</li>
									</ul>
								</div>
							</div>
							{/* BREADCRUMB ROW END */}                        
						</div>
						<div className="h-50 w-full absolute top-50 left-0 z-1">            
							<div className="inline-block whitespace-nowrap animate-moveCloud">
								<img src="/assets/images/inr-banner-cloud.png" alt="Image" className="h-47.5" />
							</div>
						</div>
						<div className="absolute w-1/2 right-0 top-0 bottom-0 z-1">
							<div className="mt-60 animate-slide-right"><img src="/assets/images/airplane.png" alt="Image" className="animate-slide-top-fast" width="378" height="146" /></div>
						</div>
						<div className="absolute right-11.25 bottom-16.25 animate-slide-top2"><img src="/assets/images/hotballon-Left.png" alt="Image" className="md:w-21 w-10" width="84" height="121" /></div>
						<div className="absolute md:-right-15 -right-10 top-41.25 animate-slide-top"><img src="/assets/images/hotballon-right.png" alt="Image" className="md:w-37.5 w-20"
						width="230" height="333" /></div>
					</div>
				{/* INNER PAGE BANNER END */}
			
				{/*FAQ SECTION START*/}
				<div className="xl:pt-30 pt-12.5 xl:pb-22.5 pb-5">
					<div className="container">
						<div className="grid grid-cols-12">
							<div className="lg:col-span-5 col-span-12 sm:px-3.75">
								<div className="relative mb-7.5">
									{/* TITLE START*/}
									<div className="text-left mb-15">
										<h2 className="mb-3.5 xl:text-46 md:text-40 text-3xl">Find <span className="text-citrusyellow">Answers</span> for Questions You Have.</h2>
										<div className="mb-12.5 text-base">
											Travlla is a multi-award-winning strategy and content creation
											agency that specializes in travel marketing.
										</div>
									</div>
									{/* TITLE END*/}
									<div className="relative max-lg:flex max-lg:justify-center">
										<div className="lg:text-left text-center lg:ml-10">
											<img src="/assets/images/faq-media.png" alt="img" width="378" height="500" loading="lazy" />
										</div>
										<div className="p-5 absolute bottom-0 left-0 bg-[rgba(255,255,255,0.56)] border-[5px] border-citrusyellowlight shadow-[0px_16px_24.7px_rgba(6,97,104,0.3)] backdrop-blur-lg rounded-3xl flex items-center max-lg:w-full max-lg:justify-center">
											<div className="w-12 min-w-12 mr-7.5 h-12 flex items-center justify-center"><i className="fa-solid fa-quote-left text-74 leading-[0.75] pt-1.25"></i></div>
											<h3 className="sm:text-28 text-22 text-primary!">Give us a chance to help you!</h3>
										</div>
									</div>
								</div>
							</div>
							<div className="lg:col-span-7 col-span-12 sm:px-3.75">
								<div className="border-[6px] border-aquagray lg:mb-10 rounded-3xl bg-white dark:bg-dark sm:p-7.5 p-4.5 tab-content">
									<div className="custom-accordion style-2 myAccordion">
										{/*One*/}
										<div className="relative duration-500 accordion-item">
											<div className="relative accordion-header cursor-pointer">
												<h2 className="text-lg">
													<a className="sm:text-2xl text-xl bg-white dark:bg-dark border-b border-aquagray block py-5 pr-7.5">
													01 - Do you offer group discounts?
													<span className="pt-5 pb-3.75 text-primary absolute right-0 top-1.5 h-full text-22 duration-500 flex"><i className="las la-angle-right relative top-1/2 left-1/2 -translate-1/2"></i></span>
													</a>
												</h2>
											</div>
											<div className="accordion-content">
												<div className="content-inner sm:p-5 py-5 sm:pl-10 text-base border-b border-aquagray bg-white dark:bg-dark">
													Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi cons the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion.
												</div>
											</div>
										</div>
										{/*Two*/}
										<div className="relative duration-500 accordion-item">
											<div className="relative accordion-header cursor-pointer">
												<h2 className="text-lg">
													<a className="sm:text-2xl text-xl bg-white dark:bg-dark border-b border-aquagray block py-5 pr-7.5">
													02 - How do I make changes to my booking?
													<span className="pt-5 pb-3.75 text-primary absolute right-0 top-1.5 h-full text-22 duration-500 flex"><i className="las la-angle-right relative top-1/2 left-1/2 -translate-1/2"></i></span>
													</a>
												</h2>
											</div>
											<div className="accordion-content">
												<div className="content-inner sm:p-5 py-5 sm:pl-10 text-base border-b border-aquagray bg-white dark:bg-dark">
													Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi cons the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion.
												</div>
											</div>
										</div> 
										{/*Three*/}
										<div className="relative duration-500 accordion-item">
											<div className="relative accordion-header cursor-pointer">
												<h2 className="text-lg">
													<a className="sm:text-2xl text-xl bg-white dark:bg-dark border-b border-aquagray block py-5 pr-7.5">
													03 - Are flights included in the package price?
													<span className="pt-5 pb-3.75 text-primary absolute right-0 top-1.5 h-full text-22 duration-500 flex"><i className="las la-angle-right relative top-1/2 left-1/2 -translate-1/2"></i></span>
													</a>
												</h2>
											</div>
											<div className="accordion-content">
												<div className="content-inner sm:p-5 py-5 sm:pl-10 text-base border-b border-aquagray bg-white dark:bg-dark">
													Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi cons the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion.
												</div>
											</div>
										</div> 
										{/*Four*/}
										<div className="relative duration-500 accordion-item">
											<div className="relative accordion-header cursor-pointer">
												<h2 className="text-lg">
													<a className="sm:text-2xl text-xl bg-white dark:bg-dark border-b border-aquagray block py-5 pr-7.5">
													04 - What is the cancellation policy?
													<span className="pt-5 pb-3.75 text-primary absolute right-0 top-1.5 h-full text-22 duration-500 flex"><i className="las la-angle-right relative top-1/2 left-1/2 -translate-1/2"></i></span>
													</a>
												</h2>
											</div>
											<div className="accordion-content">
												<div className="content-inner sm:p-5 py-5 sm:pl-10 text-base border-b border-aquagray bg-white dark:bg-dark">
													Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi cons the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion.
												</div>
											</div>
										</div>
										<div className="relative duration-500 accordion-item">
											<div className="relative accordion-header cursor-pointer">
												<h2 className="text-lg">
													<a className="sm:text-2xl text-xl bg-white dark:bg-dark border-b border-aquagray block py-5 pr-7.5">
													05 - What's included in my travel package?
													<span className="pt-5 pb-3.75 text-primary absolute right-0 top-1.5 h-full text-22 duration-500 flex"><i className="las la-angle-right relative top-1/2 left-1/2 -translate-1/2"></i></span>
													</a>
												</h2>
											</div>
											<div className="accordion-content">
												<div className="content-inner sm:p-5 py-5 sm:pl-10 text-base border-b border-aquagray bg-white dark:bg-dark">
													Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi cons the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion.
												</div>
											</div>
										</div>
										<div className="relative duration-500 accordion-item">
											<div className="relative accordion-header cursor-pointer">
												<h2 className="text-lg">
													<a className="sm:text-2xl text-xl bg-white dark:bg-dark border-b border-aquagray block py-5 pr-7.5">
													06 - How far in advance should I book my trip?
													<span className="pt-5 pb-3.75 text-primary absolute right-0 top-1.5 h-full text-22 duration-500 flex"><i className="las la-angle-right relative top-1/2 left-1/2 -translate-1/2"></i></span>
													</a>
												</h2>
											</div>
											<div className="accordion-content">
												<div className="content-inner sm:p-5 py-5 sm:pl-10 text-base border-b border-aquagray bg-white dark:bg-dark">
													Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi cons the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion.
												</div>
											</div>
										</div> 
										<div className="relative duration-500 accordion-item">
											<div className="relative accordion-header cursor-pointer">
												<h2 className="text-lg">
													<a className="sm:text-2xl text-xl bg-white dark:bg-dark border-b border-aquagray block py-5 pr-7.5">
													07 - Can I book only accommodations through your site?
													<span className="pt-5 pb-3.75 text-primary absolute right-0 top-1.5 h-full text-22 duration-500 flex"><i className="las la-angle-right relative top-1/2 left-1/2 -translate-1/2"></i></span>
													</a>
												</h2>
											</div>
											<div className="accordion-content">
												<div className="content-inner sm:p-5 py-5 sm:pl-10 text-base border-b border-aquagray bg-white dark:bg-dark">
													Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi cons the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion.
												</div>
											</div>
										</div>
										<div className="relative duration-500 accordion-item">
											<div className="relative accordion-header cursor-pointer">
												<h2 className="text-lg">
													<a className="sm:text-2xl text-xl bg-white dark:bg-dark block py-5 pr-7.5">
													08 - How can I contact support during my trip?
													<span className="pt-5 pb-3.75 text-primary absolute right-0 top-1.5 h-full text-22 duration-500 flex"><i className="las la-angle-right relative top-1/2 left-1/2 -translate-1/2"></i></span>
													</a>
												</h2>
											</div>
											<div className="accordion-content">
												<div className="content-inner sm:p-5 py-5 sm:pl-10 text-base bg-white dark:bg-dark">
													Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi cons the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion.
												</div>
											</div>
										</div> 	
									</div> 
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*FAQ SECTION END*/}
				
				{/*CONTACT SECTION START*/}
				<div className="lg:p-30 lg:pr-5 sm:p-12.5 px-5 py-12.5 bg-cover bg-[url('/assets/images/background/con-sec-bg.jpg')]">
					<div className="grid grid-cols-12">
						<div className="lg:col-span-6 col-span-12">
							<div className="">
								<div className="bg-[rgba(0,0,0,0.22)] rounded-3xl lg:py-15 lg:px-12.5 p-5 border border-white/60 backdrop-blur-lg">
									{/* TITLE START*/}
									<div className="sm:mb-15 mb-7.5">
										<h2 className="xl:text-46 md:text-40 text-3xl mb-2.5 !text-white"><span className="text-citrusyellow">Reach</span> & Get in Touch With Us!</h2>
										<div className="text-base text-white">We'love to hear from you. Our friendly team is always here to chat</div>
									</div>
									{/* TITLE END*/}
									<form className="dz-form dzForm" method="POST" action="assets/script/contact_smtp.php">
										<input type="hidden" className="block w-full sm:h-18.5 h-12.5 rounded-5xl border border-primary/20 sm:py-5 sm:px-10 py-1.25 px-3.75 sm:text-base text-sm text-bodycolor bg-white outline-0 placeholder:text-bodycolor" name="dzToDo" value="Contact" />
										<input type="hidden" className="block w-full sm:h-18.5 h-12.5 rounded-5xl border border-primary/20 sm:py-5 sm:px-10 py-1.25 px-3.75 sm:text-base text-sm text-bodycolor bg-white outline-0 placeholder:text-bodycolor" name="reCaptchaEnable" value="0" />
										<div className="dzFormMsg"></div>
										
										<div className="mb-5 relative">
											<input required placeholder="Name" type="text" name="dzName" id="dzname" autoComplete="name" className="block w-full sm:h-18.5 h-12.5 rounded-5xl border border-primary/20 sm:py-5 sm:px-10 py-1.25 px-3.75 sm:text-base text-sm text-bodycolor bg-white placeholder:text-bodycolor/0 duration-300 peer outline-0" />
											<label htmlFor="dzname" className="absolute sm:text-base text-sm text-bodycolor left-10 top-6 duration-300 transform -translate-y-3.5 scale-75 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 pointer-events-none origin-left">Enter Your Name</label>
										</div>
										
										<div className="mb-5 relative">
											<input className="block w-full sm:h-18.5 h-12.5 rounded-5xl border border-primary/20 sm:py-5 sm:px-10 py-1.25 px-3.75 sm:text-base text-sm text-bodycolor bg-white placeholder:text-bodycolor/0 duration-300 peer outline-0" required type="email" name="dzEmail" id="emailaddress" placeholder="Enter Email Address" autoComplete="email" />
											<label htmlFor="emailaddress" className="absolute sm:text-base text-sm text-bodycolor left-10 top-6 duration-300 transform -translate-y-3.5 scale-75 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 pointer-events-none origin-left">Email Address</label>   
										</div>
										<div className="mb-5 relative">
											<input className="block w-full sm:h-18.5 h-12.5 rounded-5xl border border-primary/20 sm:py-5 sm:px-10 py-1.25 px-3.75 sm:text-base text-sm text-bodycolor bg-white placeholder:text-bodycolor/0 duration-300 peer outline-0" required type="text" name="dzOther" id="Subject" placeholder="Select Your Subject" />
											<label htmlFor="Subject" className="absolute sm:text-base text-sm text-bodycolor left-10 top-6 duration-300 transform -translate-y-3.5 scale-75 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 pointer-events-none origin-left">Subject</label>
										</div>
										<div className="mb-5 relative">
											<textarea autoComplete="off" placeholder="Write here" name="dzMessage" id="message" className="block w-full min-h-42 h-full rounded-3xl border border-primary/20 py-10 px-7.5 sm:text-base text-sm text-bodycolor bg-white outline-0 placeholder:text-bodycolor/0 peer"></textarea>
											<label htmlFor="message" className="absolute sm:text-base text-sm text-bodycolor left-10 top-6 duration-300 transform -translate-y-3.5 scale-75 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 pointer-events-none origin-left">Write here</label>
										</div>
										<div className="mb-5 relative">
											<div className="input-recaptcha">
												<div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
											</div>
										</div>
										<button name="submit" type="submit" value="Submit" className="site-button butn-bg-shape">Send Message</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
    </div>
  );
}
