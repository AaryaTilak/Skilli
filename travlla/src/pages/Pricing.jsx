import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Pricing() {
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
									<h2 className="lg:text-60 md:text-52 text-28 relative text-primary!">Pricing Plan</h2>
								</div>
								{/* BREADCRUMB ROW */}                            
								<div>
									<ul className="inline-block">
										<li className="text-base pr-7.5 relative inline-block font-semibold text-primary after:content-['-'] after:absolute after:right-2 after:-top-1.5 after:text-primary after:text-26 after:font-normal">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}>Home</a></li>
										<li className="relative inline-block text-base font-semibold text-primary">Pricing Plan</li>
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
			
				{/* PRICING SECTION START */}
				<div className="relative xl:pb-85 md:pb-50 pb-25 bg-no-repeat 2xl:bg-position-[bottom_center] bg-bottom-right bg-lightturquoise overflow-hidden z-1 xl:pt-30 pt-12.5" style={{ backgroundImage: "url('/assets/images/background/pricebg-1.png')" }}>
					<div className="container">
						{/* TITLE START*/}
							<div className="sm:mb-15 mb-7.5 text-center max-w-150 mx-auto">
								<h2 className="xl:text-46 md:text-40 text-3xl mb-2.5"><span className="text-citrusyellow">Price For</span> Travel The World</h2>
								<div className="text-base">Destinations worth exploring! Here are a few popular spots</div>
								<div className="-mt-7">
									<img src="/assets/images/background/Title-Separator.png" alt="Image" className="w-117.5 inline-block dark:invert" width="270" height="70" loading="lazy" />
								</div>
							</div>
						{/* TITLE END*/}
						<div className="section-content">
							<div className="trv-price-bx1-section">
								<div className="row flex justify-center">
									<div className="lg:w-1/3 md:w-1/2 w-full">
										<div className="mb-7.5 p-7.5 border-[10px] border-[#29899133] rounded-27xl bg-white dark:bg-dark">
											<div className="mb-5">
												<img src="/assets/images/trv-pricing/pic1.jpg" alt="image" className="rounded-[500px]" width="336" height="149" loading="lazy" />
											</div>
											<div className="">
												<div className="flex items-center justify-between mb-5">
													<h4 className="xl:text-28 text-22 font-medium leading-[1.2]">Budget Travel</h4>
													<div className="text-center">
														<span className="text-34 leading-[1.3] font-black block">$59</span>
														<span className="text-base block">Per Day</span>
													</div>
												</div>
												<ul className="mb-8.75">
													<li className="mb-3.5 text-base font-medium text-heading relative pl-11">
														<i className="las la-arrow-alt-circle-right text-citrusyellow text-3xl mr-5 absolute left-0 -top-1.25"></i>
														3 star hotel (4 nights)
													</li>
													<li className="mb-3.5 text-base font-medium text-heading relative pl-11">
														<i className="las la-arrow-alt-circle-right text-citrusyellow text-3xl mr-5 absolute left-0 -top-1.25"></i>
														Local taxis
													</li>
													<li className="mb-3.5 text-base font-medium text-heading relative pl-11">
														<i className="las la-arrow-alt-circle-right text-citrusyellow text-3xl mr-5 absolute left-0 -top-1.25"></i>
														Sightseeing, tickets
													</li>
													<li className="mb-3.5 text-base font-medium text-heading relative pl-11">
														<i className="las la-arrow-alt-circle-right text-citrusyellow text-3xl mr-5 absolute left-0 -top-1.25"></i>
														Tourist visa
													</li>
													<li className="mb-3.5 text-base font-medium text-heading relative pl-11">
														<i className="las la-arrow-alt-circle-right text-citrusyellow text-3xl mr-5 absolute left-0 -top-1.25"></i>
														Meals & snacks
													</li>
												</ul>
												<div className="text-center">
													<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/pricing'); }} className="site-button butn-bg-shape">Discover More</a>
												</div>
											</div>
										</div>
									</div>
									<div className="lg:w-1/3 md:w-1/2 w-full">
										<div className="mb-7.5 p-7.5 border-[10px] border-[#29899133] rounded-27xl bg-white dark:bg-dark">
											<div className="mb-5">
												<img src="/assets/images/trv-pricing/pic2.jpg" alt="image" className="rounded-[500px]" width="336" height="149" loading="lazy" />
											</div>
											<div className="">
												<div className="flex items-center justify-between mb-5">
													<h4 className="xl:text-28 text-22 font-medium leading-[1.2]">Mid-Range Travel</h4>
													<div className="text-center">
														<span className="text-34 leading-[1.3] font-black block">$79</span>
														<span className="text-base block">Per Day</span>
													</div>
												</div>
												<ul className="mb-8.75">
													<li className="mb-3.5 text-base font-medium text-heading relative pl-11">
														<i className="las la-arrow-alt-circle-right text-citrusyellow text-3xl mr-5 absolute left-0 -top-1.25"></i>
														4 star hotel (5 nights)
													</li>
													<li className="mb-3.5 text-base font-medium text-heading relative pl-11">
														<i className="las la-arrow-alt-circle-right text-citrusyellow text-3xl mr-5 absolute left-0 -top-1.25"></i>
														Local taxis & metro
													</li>
													<li className="mb-3.5 text-base font-medium text-heading relative pl-11">
														<i className="las la-arrow-alt-circle-right text-citrusyellow text-3xl mr-5 absolute left-0 -top-1.25"></i>
														Sightseeing, tickets, tours
													</li>
													<li className="mb-3.5 text-base font-medium text-heading relative pl-11">
														<i className="las la-arrow-alt-circle-right text-citrusyellow text-3xl mr-5 absolute left-0 -top-1.25"></i>
														Tourist visa
													</li>
													<li className="mb-3.5 text-base font-medium text-heading relative pl-11">
														<i className="las la-arrow-alt-circle-right text-citrusyellow text-3xl mr-5 absolute left-0 -top-1.25"></i>
														Meals & snacks
													</li>
												</ul>
												<div className="text-center">
													<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/pricing'); }} className="site-button butn-bg-shape">Discover More</a>
												</div>
											</div>
										</div>
									</div>
									<div className="lg:w-1/3 md:w-1/2 w-full">
										<div className="mb-7.5 p-7.5 border-[10px] border-[#29899133] rounded-27xl bg-white dark:bg-dark">
											<div className="mb-5">
												<img src="/assets/images/trv-pricing/pic3.png" alt="image" className="rounded-[500px]" width="336" height="149" loading="lazy" />
											</div>
											<div className="">
												<div className="flex items-center justify-between mb-5">
													<h4 className="xl:text-28 text-22 font-medium leading-[1.2]">Luxury Travel</h4>
													<div className="text-center">
														<span className="text-34 leading-[1.3] font-black block">$99</span>
														<span className="text-base block">Per Day</span>
													</div>
												</div>
												<ul className="mb-8.75">
													<li className="mb-3.5 text-base font-medium text-heading relative pl-11">
														<i className="las la-arrow-alt-circle-right text-citrusyellow text-3xl mr-5 absolute left-0 -top-1.25"></i>
														5 star hotel (7 nights)
													</li>
													<li className="mb-3.5 text-base font-medium text-heading relative pl-11">
														<i className="las la-arrow-alt-circle-right text-citrusyellow text-3xl mr-5 absolute left-0 -top-1.25"></i>
														Local taxis & metro
													</li>
													<li className="mb-3.5 text-base font-medium text-heading relative pl-11">
														<i className="las la-arrow-alt-circle-right text-citrusyellow text-3xl mr-5 absolute left-0 -top-1.25"></i>
														Sightseeing, tickets, tours
													</li>
													<li className="mb-3.5 text-base font-medium text-heading relative pl-11">
														<i className="las la-arrow-alt-circle-right text-citrusyellow text-3xl mr-5 absolute left-0 -top-1.25"></i>
														Tourist visa
													</li>
													<li className="mb-3.5 text-base font-medium text-heading relative pl-11">
														<i className="las la-arrow-alt-circle-right text-citrusyellow text-3xl mr-5 absolute left-0 -top-1.25"></i>
														Meals & snacks
													</li>

												</ul>
												<div className="text-center">
													<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/pricing'); }} className="site-button butn-bg-shape">Discover More</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute md:-left-28.75 -left-12.5 top-2/5 md:w-57.5 w-25 animate-slide-top2 opacity-50"><img src="/assets/images/hotballon-Left.png" width="230" height="333" loading="lazy" alt="image" /></div>
					<div className="bg-repeat-x h-29.25 absolute bottom-0 left-0 w-full bg-[url('/assets/images/background/pricebg-shape.png')] dark:bg-[url('/assets/images/background/pricebg-shape-dark.png')]"></div>
				</div>
				{/* PRICING SECTION END */}
				
				{/*STEPS SECTION START*/}
				<div className="bg-white dark:bg-dark relative z-1 overflow-hidden xl:pt-30 pt-12.5 xl:pb-22.5 pb-5">
					<div className="container">
						{/* TITLE START*/}
						<div className="row items-center mb-15">
							<div className="xl:w-1/3 lg:w-1/2 w-full">
								<div className="text-left">
									<h2 className="xl:text-46 md:text-40 text-3xl mb-2.5">Explore<span className="text-citrusyellow"> Latest News</span></h2>
									<div className="text-base max-lg:mb-7.5">Maybe for a travel blog, wildlife site, or web development project here are a few sample templates you can use to simulate real-time news updates:</div>
								</div>
							</div>
							<div className="xl:w-2/3 lg:w-1/2 w-full">
								<div className="lg:text-right">
									<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/services'); }} className="site-button butn-bg-shape">View More</a>
								</div>
							</div>
						 </div>
						{/* TITLE END*/}
						<div className="section-content">
							<div className="trv-step-bx1-section">
								<div className="row flex justify-center">                        
									<div className="lg:w-1/3 md:w-1/2 w-full">
										<div className="pt-12.5 px-7.5 pb-5 mb-7.5 rounded-3xl bg-linear-(--st-blue-gradient) xl:mt-30">
											<div className="text-center mb-5">
												<div className="size-30 bg-[#45869D] rounded-full inline-flex items-center justify-center">
													<div className="size-22.5 bg-white rounded-full inline-flex items-center justify-center shadow-1">
														<img src="/assets/images/trv-icon/destination.png" alt="Image" className="max-w-12 image-filter-2" style={{ filter: "brightness(0) saturate(100%) invert(73%) sepia(22%) saturate(928%) hue-rotate(153deg) brightness(78%) contrast(89%)" }} 
														width="48" height="48" loading="lazy" />
													</div>
												</div>
											</div>
											<div className="px-2.5">
												<h2 className="text-28 font-medium !text-white leading-[1.2] mb-3.75">Choose Destination</h2>
												<p className="text-base font-normal !text-white leading-[1.4] mb-5">All you have to do is, first select your preferred destination and proceed</p>
											</div>
											<div className="flex items-end justify-between">
												<div>
													<img src="/assets/images/choose-destination.png" alt="image" className="max-w-58 max-h-38.75 size-full" width="232" height="154" loading="lazy" />
												</div>
												<span className="text-76 font-black text-white leading-[1.2] ml-7.5 drop-shadow-(--bld-num-drop-shadow)">01</span>
											</div>
										</div>
									</div> 
									<div className="lg:w-1/3 md:w-1/2 w-full">
										<div className="pt-12.5 px-7.5 pb-5 mb-7.5 rounded-3xl bg-linear-(--st-pink-gradient) xl:mt-15">
											<div className="text-center mb-5">
												<div className="size-30 bg-[#CE8594] rounded-full inline-flex items-center justify-center">
													<div className="size-22.5 bg-white rounded-full inline-flex items-center justify-center shadow-1">
														<img src="/assets/images/trv-icon/make-payment.png" alt="Image" className="max-w-12 image-filter-2" style={{ filter: "brightness(0) saturate(100%) invert(66%) sepia(47%) saturate(380%) hue-rotate(301deg) brightness(101%) contrast(102%)" }} width="48" height="48" loading="lazy" />
													</div>
												</div>
											</div>
											<div className="px-2.5">
												<h2 className="text-28 font-medium !text-white leading-[1.2] mb-3.75">Make Payment</h2>
												<p className="text-base font-normal !text-white leading-[1.4] mb-5">You are important to us. We pay attention to the quality of every service we provide to you.</p>
											</div>
											<div className="flex items-end justify-between">
												<div>
													<img src="/assets/images/make-payment.png" alt="image" className="max-w-58 max-h-38.75 size-full" width="232" height="154" loading="lazy" />
												</div>
												<span className="text-76 font-black text-white leading-[1.2] ml-7.5 drop-shadow-(--bld-num-drop-shadow)">02</span>
											</div>
										</div>
									</div> 
									<div className="lg:w-1/3 md:w-1/2 w-full">
										<div className="pt-12.5 px-7.5 pb-5 mb-7.5 rounded-3xl bg-linear-(--st-green-gradient)">
											<div className="text-center mb-5">
												<div className="size-30 bg-[#047881] rounded-full inline-flex items-center justify-center">
													<div className="size-22.5 bg-white rounded-full inline-flex items-center justify-center shadow-1">
														<img src="/assets/images/trv-icon/travelling.png" alt="Image" className="max-w-12 image-filter-2" style={{ filter: "brightness(0) saturate(100%) invert(46%) sepia(28%) saturate(721%) hue-rotate(118deg) brightness(97%) contrast(86%)" }} width="48" height="48" loading="lazy" />
													</div>
												</div>
											</div>
											<div className="px-2.5">
												<h2 className="text-28 font-medium !text-white leading-[1.2] mb-3.75">Ready For Travelling</h2>
												<p className="text-base font-normal !text-white leading-[1.4] mb-5">We have seen that you have fulfilled all the requirements, now you are ready to travel.</p>
											</div>
											<div className="flex items-end justify-between">
												<div>
													<img src="/assets/images/ready-for-travelling.png" alt="image" className="max-w-58 max-h-38.75 size-full" width="232" height="154" loading="lazy" />
												</div>
												<span className="text-76 font-black text-white leading-[1.2] ml-7.5 drop-shadow-(--bld-num-drop-shadow)">03</span>
											</div>
										</div>
									</div> 
								</div>
							</div>
						</div> 
					</div>
					<div className="absolute left-0 bottom-0 -z-1 max-lg:hidden">
						<img src="/assets/images/bag.png" alt="Image" width="213" height="255" loading="lazy" />
					</div>
					<div className="absolute right-0 bottom-0 -z-1 max-lg:hidden">
						<img src="/assets/images/tent.png" alt="Image" width="361" height="236" loading="lazy" />
					</div>
				</div>
				{/*STEPS SECTION END*/}
				
				{/*CONTACT SECTION START*/}
				<div className="bg-white dark:bg-dark overflow-hidden">
					<div className="row">
						<div className="lg:w-1/2 w-full relative bg-cover max-lg:h-125" style={{ backgroundImage: "url('/assets/images/background/frm-left.jpg')" }}>
							<div className="rounded-3xl xl:py-8.75 xl:px-12.5 p-5 absolute bottom-12.5 right-12.5 left-12.5 bg-primary/30 backdrop-blur-[7px] max-xl:text-center">
								<h2 className="xl:text-52 !font-normal !text-citrusyellow !font-display">Hi there!</h2>
								<h2 className="xl:text-6xl lg:text-4xl text-28 !font-normal !text-white !font-display">What can I do for you today?</h2>
							</div>
						</div>
						<div className="lg:w-1/2 w-full">
							<div className="xl:p-12.5 xl:pl-9.5 lg:p-3 lg:pl-0 py-12.5 md:px-5 sm:px-9 px-3">
								<div className="bg-eggshell dark:bg-eggshell/5 xl:py-15 xl:px-12.5 p-7.5 rounded-3xl max-lg:mx-auto max-lg:max-w-160 max-md:max-w-full">
									{/* TITLE START*/}
									<div className="sm:mb-15 mb-7.5">
										<h2 className="xl:text-46 md:text-40 text-3xl mb-2.5"><span className="text-citrusyellow">Reach</span> & Get in Touch With Us!</h2>
										<div className="text-base">We'love to hear from you. Our friendly team is always here to chat</div>
									</div>
									{/* TITLE END*/}
									<form className="dz-form dzForm" method="POST" action="assets/script/contact_smtp.php">
										<div className="dzSubscribeMsg"></div>
										<input type="hidden" className="block w-full sm:h-18.5 h-12.5 rounded-5xl border border-primary/20 sm:py-5 sm:px-10 py-1.25 px-3.75 sm:text-base text-sm text-bodycolor bg-white outline-0 placeholder:text-bodycolor" name="dzToDo" value="Contact" />
										<input type="hidden" className="block w-full sm:h-18.5 h-12.5 rounded-5xl border border-primary/20 sm:py-5 sm:px-10 py-1.25 px-3.75 sm:text-base text-sm text-bodycolor bg-white outline-0 placeholder:text-bodycolor" name="reCaptchaEnable" value="0" />
										<div className="dzFormMsg"></div>

										<div className="mb-5">
											<input className="block w-full sm:h-18.5 h-12.5 rounded-5xl border border-primary/20 sm:py-5 sm:px-10 py-1.25 px-3.75 sm:text-base text-sm text-bodycolor bg-white outline-0 placeholder:text-bodycolor" required type="text" name="dzName" id="fullname" placeholder="Enter Your Name" />
										</div>
										<div className="mb-5">
											<input className="block w-full sm:h-18.5 h-12.5 rounded-5xl border border-primary/20 sm:py-5 sm:px-10 py-1.25 px-3.75 sm:text-base text-sm text-bodycolor bg-white outline-0 placeholder:text-bodycolor" required type="email" name="dzEmail" id="emailaddress" placeholder="Enter Email Address" />
										</div>
										<div className="mb-5">
											<input className="block w-full sm:h-18.5 h-12.5 rounded-5xl border border-primary/20 sm:py-5 sm:px-10 py-1.25 px-3.75 sm:text-base text-sm text-bodycolor bg-white outline-0 placeholder:text-bodycolor" required type="text" name="dzOther" id="Subject" placeholder="Select Your Subject" />
										</div>
										<div className="mb-5">
											<textarea placeholder="Write here" name="dzMessage" id="message" className="block w-full min-h-42 h-full rounded-3xl border border-primary/20 py-10 px-7.5 sm:text-base text-sm text-bodycolor bg-white outline-0 placeholder:text-bodycolor"></textarea>
										</div>
										<div className="mb-5">
											<div className="input-recaptcha">
												<div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
											</div>
										</div>
										<button name="submit" type="submit" value="Submit" aria-label="Send message" className="site-button butn-bg-shape">Send Message</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
    </div>
  );
}
