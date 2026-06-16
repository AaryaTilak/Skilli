import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-content">
      <div className="relative bg-cover bg-center w-full bg-white bg-[url('/assets/images/background/inr-banner.jpg')] overflow-hidden">
						<div className="opacity-100 absolute left-0 top-0 size-full"></div>
						<div className="flex w-full lg:h-160 md:h-135 h-100 pb-10 items-baseline mx-auto">
							<div className="relative md:mt-60 mt-45 flex items-center justify-center w-full flex-col z-5">
								<div>
									<h2 className="lg:text-60 md:text-52 text-28 relative text-primary!">About Us</h2>
								</div>
								{/* BREADCRUMB ROW */}                            
								<div>
									<ul className="inline-block">
										<li className="text-base pr-7.5 relative inline-block font-semibold text-primary after:content-['-'] after:absolute after:right-2 after:-top-1.5 after:text-primary after:text-26 after:font-normal">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}>Home</a></li>
										<li className="relative inline-block text-base font-semibold text-primary">About Us</li>
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
				
				{/*WE RECOMMEND SECTION START*/}
				<div className="xl:pt-30 pt-12.5 bg-white dark:bg-dark">
						<div className="container">
							<div className="section-content">
								<div className="trv-we-recommend2-row">
									<div className="row">
										<div className="lg:w-7/12 w-full">
											<div className="relative mr-6">
												<div className="2xl:max-w-94 max-w-80 relative z-1 before:absolute sm:before:size-97.5 before:size-80.5 before:left-0 before:top-22.5 before:bg-eggshell before:rounded-full before:-z-1 max-md:-left-12 max-sm:-left-0">
													<img src="/assets/images/abt-pic1.png" alt="image" className="max-w-full h-auto" width="376" height="672" loading="lazy" />
												</div>
												<div className="mt-6 2xl:size-97.5 xl:size-90.5 md:size-75.5 size-70.5 border-[20px] border-paleaqua rounded-full absolute xl:right-7 md:-right-6 -right-24 xl:bottom-17.5 bottom-15.5 z-1 max-sm:hidden">
													<img src="/assets/images/we-rec3-pic.jpg" alt="image" className="w-full rounded-full" width="350" height="350" loading="lazy" />
												</div>
												<div className="mt-6 size-50 border-[10px] border-white rounded-full shadow-[0px_27px_35.9px_rgba(41,137,145,0.2)] absolute 2xl:left-90.5 xl:left-78.5 md:left-74.5 left-64.5 2xl:top-0.25 xl:-top-20.75 md:-top-3.75 -top-1.25 z-1 max-sm:hidden">
													<img src="/assets/images/we-rec3-pic2.jpg" alt="image" className="w-full rounded-full" width="180" height="180" loading="lazy" />
												</div>
													
											</div>
										</div>

										<div className="lg:w-5/12 w-full">
											<div className="xl:mb-30 mb-7.5 relative">
												{/* TITLE START*/}
												<div className="sm:mb-15 mb-7.5">
													<h2 className="xl:text-46 md:text-40 text-3xl mb-3.5">We <span className="text-citrusyellow">Recommend </span>Beautiful Destinations Every Month</h2>
													<div className="lg:mb-12.5 mb-7.5 2xl:pr-8.75 text-base">Travlla is a multi-award-winning strategy and content creation
														agency that specializes in travel marketing. They have one of the
														world's largest and most influential online travel communities,
														helping brands and tourism.
													</div>
												</div>
												{/* TITLE END*/}

												<div className="mb-12.5">
													
													<div className="flex items-center xl:max-w-104 max-w-full py-3.75 px-10 bg-white border border-primary/10 rounded-2xl mb-5">
														<div className="bg-no-repeat size-13.75 min-w-13.75 bg-size-[100%] mr-7.5 flex items-center justify-center">
															<span><img src="/assets/images/trv-icon/travel-guide.png" alt="#" className="image-filter-2 max-w-12" style={{ filter: "brightness(0) saturate(100%) invert(12%) sepia(96%) saturate(4615%) hue-rotate(176deg) brightness(92%) contrast(95%)" }} width="48" height="49" loading="lazy" /></span>
														</div>
														<div>
															<h2 className="text-2xl text-primary! font-medium mb-3">Trusted travel guide</h2>
															<p className="">Provides reliable information to help travelers plan their trips efficiently and safely.</p>   
														</div>
													</div>
													<div className="flex items-center xl:max-w-104 max-w-full py-3.75 px-10 bg-white border border-primary/10 rounded-2xl mb-5">
														<div className="bg-no-repeat size-13.75 min-w-13.75 bg-size-[100%] mr-7.5 flex items-center justify-center">
															<span><img src="/assets/images/trv-icon/mission-icon.png" alt="#" className="image-filter-2 max-w-12" style={{ filter: "brightness(0) saturate(100%) invert(12%) sepia(96%) saturate(4615%) hue-rotate(176deg) brightness(92%) contrast(95%)" }}
															width="48" height="49" loading="lazy" /></span>
														</div>
														<div>
															<h2 className="text-2xl text-primary! font-medium mb-3">Mission & Vision</h2>
															<p className="">Aims to connect people to positive experience through travel, helping them see the world differently.</p>   
														</div>
													</div>
													
												</div>

												<div className="sm:flex items-center">
													<div className="mr-3">
														<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="site-button butn-bg-shape">Discover More</a>
													</div>
													<div className="flex max-sm:pt-2.5">
														<div className="flex items-center mr-5">
															<span className="size-9 inline-flex rounded-5xl overflow-hidden border border-white -ml-2.5 first:ml-0">
																<img src="/assets/images/hpy-cus/pic1.jpg" alt="img" width="34" height="34" loading="lazy" />
															</span>
															<span className="size-9 inline-flex rounded-5xl overflow-hidden border border-white -ml-2.5 first:ml-0">
																<img src="/assets/images/hpy-cus/pic2.jpg" alt="img" width="34" height="34" loading="lazy" />
															</span>
															<span className="size-9 inline-flex rounded-5xl overflow-hidden border border-white -ml-2.5 first:ml-0">
																<img src="/assets/images/hpy-cus/pic3.jpg" alt="img" width="34" height="34" loading="lazy" />
															</span>
														</div>
														<div className="">
															<span className="block font-black text-22 text-secondary">3.5k</span>
															<p className="uppercase font-medium text-xs">Happy Customer</p>
														</div>
													</div>
												</div>
												<div className="2xl:absolute right-0 bottom-0 2xl:w-22.5 max-2xl:pt-5">
													<div className="inline-flex items-center sm:w-85 2xl:absolute left-0 text-left 2xl:-rotate-90 2xl:origin-[0_0] 2xl:pl-26.5">
														<h2 className="font-black sm:text-83 text-5xl leading-none !text-citrusyellow text-shadow-[0px_4px_0px_var(--color-primary)] mr-3.75 !font-base">25</h2>
														<span className="sm:text-28 text-xl font-black leading-1.2 text-heading">Years of Experience</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div> 
						</div>
					</div>
				{/*WE RECOMMEND SECTION END*/}
				
				{/*POPULAR DESTINATION SECTION START*/}
				<div className="relative overflow-hidden md:pb-22.5 pb-10 md:pt-30 pt-17.5 bg-contain bg-[bottom_center] bg-repeat-x bg-[url('/assets/images/background/Cloud-bg.png')]">
					<div className="container">
						{/* TITLE START*/}
						<div className="text-center max-w-150 mx-auto md:mb-15 mb-7.5">
							<h2 className="xl:text-46 md:text-40 text-3xl mb-2.5"><span className="text-citrusyellow">Popular </span>Destination</h2>
							<p className="text-base">Destinations worth exploring! Here are a few popular spots</p>
							<div className="-mt-7">
								<img src="/assets/images/background/Title-Separator.png" alt="Image" className="w-117.5 inline-block dark:invert" width="470" height="70" />
							</div>
						</div>
						{/* TITLE END*/}
						<div >
							<div className="swiper reviewtwo-slider !relative !z-1 !-mt-7.5 xl:!pb-29 !pb-22.5">
								<div className="swiper-wrapper pt-7.5">
									<div className="swiper-slide">
										<div className="relative z-1 group">
											<div className="rounded-3xl overflow-hidden">
												<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}><img src="/assets/images/destinations/style1/pic1.jpg" width="309" height="500" alt="Image" className="w-full h-125 object-cover object-center" /></a>
											</div>
											<div>
												<h3 className="text-28"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Paris</a></h3>
											</div>
											<div className="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
												<img src="/assets/images/destinations/hotballon-right.png" alt="image" width="155" height="233" className="w-full max-w-75 mx-auto block duration-500" />
											</div>
										</div>
									</div>

									<div className="swiper-slide">
										<div className="relative z-1 group">
											<div className="rounded-3xl overflow-hidden">
												<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}><img src="/assets/images/destinations/style1/pic2.jpg" width="309" height="500" alt="Image" className="w-full h-125 object-cover object-center" /></a>
											</div>
											<div>
												<h3 className="text-28"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}  className="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Maldives</a></h3>
											</div>
											<div className="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
												<img src="/assets/images/destinations/hotballon-right.png" alt="image" width="155" height="233" className="w-full max-w-75 mx-auto block duration-500" />
											</div>
										</div>
									</div>

									<div className="swiper-slide">
										<div className="relative z-1 group">
											<div className="rounded-3xl overflow-hidden">
												<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}><img src="/assets/images/destinations/style1/pic3.jpg" width="309" height="500" alt="Image" className="w-full h-125 object-cover object-center" /></a>
											</div>
											<div>
												<h3 className="text-28"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Hong Kong</a></h3>
											</div>
											<div className="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
												<img src="/assets/images/destinations/hotballon-right.png" alt="image" width="155" height="233" className="w-full max-w-75 mx-auto block duration-500" />
											</div>
										</div>
									</div>

									<div className="swiper-slide">
										<div className="relative z-1 group">
											<div className="rounded-3xl overflow-hidden">
												<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}><img src="/assets/images/destinations/style1/pic4.jpg" width="309" height="500" alt="Image" className="w-full h-125 object-cover object-center" /></a>
											</div>
											<div>
												<h3 className="text-28"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Thailand</a></h3>
											</div>
											<div className="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
												<img src="/assets/images/destinations/hotballon-right.png" alt="image" width="155" height="233" className="w-full max-w-75 mx-auto block duration-500" />
											</div>
										</div>
									</div>

									<div className="swiper-slide">
										<div className="relative z-1 group">
											<div className="rounded-3xl overflow-hidden">
												<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}><img src="/assets/images/destinations/style1/pic5.jpg" width="309" height="500" alt="Image" className="w-full h-125 object-cover object-center" /></a>
											</div>
											<div>
												<h3 className="text-28"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Bangkok</a></h3>
											</div>
											<div className="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
												<img src="/assets/images/destinations/hotballon-right.png" alt="image" width="155" height="233" className="w-full max-w-75 mx-auto block duration-500" />
											</div>
										</div>
									</div>

									<div className="swiper-slide">
										<div className="relative z-1 group">
											<div className="rounded-3xl overflow-hidden">
												<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}><img src="/assets/images/destinations/style1/pic6.jpg" width="309" height="500" alt="Image" className="w-full h-125 object-cover object-center" /></a>
											</div>
											<div>
												<h3 className="text-28"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Tokyo</a></h3>
											</div>
											<div className="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
												<img src="/assets/images/destinations/hotballon-right.png" alt="image" width="155" height="233" className="w-full max-w-75 mx-auto block duration-500" />
											</div>
										</div>
									</div>

									<div className="swiper-slide">
										<div className="relative z-1 group">
											<div className="rounded-3xl overflow-hidden">
												<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}><img src="/assets/images/destinations/style1/pic7.jpg" width="309" height="500" alt="Image" className="w-full h-125 object-cover object-center" /></a>
											</div>
											<div>
												<h3 className="text-28"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Spain</a></h3>
											</div>
											<div className="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
												<img src="/assets/images/destinations/hotballon-right.png" alt="image" width="155" height="233" className="w-full max-w-75 mx-auto block duration-500" />
											</div>
										</div>
									</div>

									<div className="swiper-slide">
										<div className="relative z-1 group">
											<div className="rounded-3xl overflow-hidden">
												<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}><img src="/assets/images/destinations/style1/pic8.jpg" width="309" height="500" alt="Image" className="w-full h-125 object-cover object-center" /></a>
											</div>
											<div>
												<h3 className="text-28"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">California</a></h3>
											</div>
											<div className="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
												<img src="/assets/images/destinations/hotballon-right.png" alt="image" width="155" height="233" className="w-full max-w-75 mx-auto block duration-500" />
											</div>
										</div>
									</div>
								</div>
								<div className="swiper-button-next"></div>
								<div className="swiper-button-prev"></div>
							</div>
						</div> 
					</div>
					<div className="absolute -left-28.75 top-2/5 w-57.5 opacity-50 animate-slide-top2"><img src="/assets/images/hotballon-Left.png" alt="image" width="233" height="333" /></div>
					<div className="absolute -right-13.75 top-2/5 w-27.5 animate-slide-top"><img src="/assets/images/hotballon-right.png" alt="image"  width="110" height="166" /></div>
				</div>
				{/*POPULAR DESTINATION SECTION END*/}
				
				{/* tv service style 1 start */}
				<div className="bg-primary lg:py-30 py-12.5 px-5">
					<div className="container">
						{/* TITLE START*/}
						<div className="text-center max-w-150 mx-auto md:mb-15 mb-7.5">
							<h2 className="xl:text-46 md:text-40 text-3xl mb-2.5 !text-white"><span className="text-citrusyellow">Our Amazing </span>Services</h2>
							<p className="text-base text-paleaqua">Destinations worth exploring! Here are a few popular spots</p>
							<div className="-mt-7">
								<img src="/assets/images/background/TitleSeparator2.png" alt="Image" className="w-117.5 inline-block" width="470" height="70" loading="lazy" />
							</div>
						</div>
						{/* TITLE END*/}
					</div>
					<div className="bg-light max-w-440 mx-auto sm:p-15 p-7 rounded-6xl mb-15">
						<div className="grid grid-cols-12 justify-center gap-7.5">
							<div className="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12">
								<div className="bg-white rounded-3xl p-3.75 text-center shadow-[0px_30px_26px_rgba(41,137,145,0.2)] border border-paleaqua/18 hover:shadow-none hover:bg-primary group duration-500 max-sm:w-[80%] max-sm:mx-auto">
									<div className="mb-5">
										<img src="/assets/images/trv-services/1.jpg" alt="image" className="rounded-xl w-full" width="356" height="356" loading="lazy" />
									</div>
									<div>
										<h2 className="md:text-28 text-22 text-primary!"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/services'); }} className="group-hover:text-citrusyellow duration-500">Tour Guide</a></h2>
									</div>
								</div>
							</div>
							<div className="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12">
								<div className="bg-white rounded-3xl p-3.75 text-center shadow-[0px_30px_26px_rgba(41,137,145,0.2)] border border-paleaqua/18 hover:shadow-none hover:bg-primary group duration-500 max-sm:w-[80%] max-sm:mx-auto">
									<div className="mb-5">
										<img src="/assets/images/trv-services/2.jpg" alt="image" className="rounded-xl w-full" width="356" height="356" loading="lazy" />
									</div>
									<div>
										<h2 className="md:text-28 text-22 text-primary!"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/services'); }} className="group-hover:text-citrusyellow duration-500">Entertainment</a></h2>
									</div>
								</div>
							</div>
							<div className="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12">
								<div className="bg-white rounded-3xl p-3.75 text-center shadow-[0px_30px_26px_rgba(41,137,145,0.2)] border border-paleaqua/18 hover:shadow-none hover:bg-primary group duration-500 max-sm:w-[80%] max-sm:mx-auto">
									<div className="mb-5">
										<img src="/assets/images/trv-services/3.jpg" alt="image" className="rounded-xl w-full" width="356" height="356" loading="lazy" />
									</div>
									<div>
										<h2 className="md:text-28 text-22 text-primary!"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/services'); }} className="group-hover:text-citrusyellow duration-500">Safe Flight</a></h2>
									</div>
								</div>
							</div>
							<div className="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12">
								<div className="bg-white rounded-3xl p-3.75 text-center shadow-[0px_30px_26px_rgba(41,137,145,0.2)] border border-paleaqua/18 hover:shadow-none hover:bg-primary group duration-500 max-sm:w-[80%] max-sm:mx-auto">
									<div className="mb-5">
										<img src="/assets/images/trv-services/4.jpg" alt="image" className="rounded-xl w-full" width="356" height="356" loading="lazy" />
									</div>
									<div>
										<h2 className="md:text-28 text-22 text-primary!"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/services'); }} className="group-hover:text-citrusyellow duration-500">Texi & Metro</a></h2>
									</div>
								</div>
							</div>
							<div className="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12">
								<div className="bg-white rounded-3xl p-3.75 text-center shadow-[0px_30px_26px_rgba(41,137,145,0.2)] border border-paleaqua/18 hover:shadow-none hover:bg-primary group duration-500 max-sm:w-[80%] max-sm:mx-auto">
									<div className="mb-5">
										<img src="/assets/images/trv-services/5.jpg" alt="image" className="rounded-xl w-full" width="356" height="356" loading="lazy" />
									</div>
									<div>
										<h2 className="md:text-28 text-22 text-primary!"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/services'); }} className="group-hover:text-citrusyellow duration-500">Delicious Food</a></h2>
									</div>
								</div>
							</div>
							<div className="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12">
								<div className="bg-white rounded-3xl p-3.75 text-center shadow-[0px_30px_26px_rgba(41,137,145,0.2)] border border-paleaqua/18 hover:shadow-none hover:bg-primary group duration-500 max-sm:w-[80%] max-sm:mx-auto">
									<div className="mb-5">
										<img src="/assets/images/trv-services/6.jpg" alt="image" className="rounded-xl w-full" width="356" height="356" loading="lazy" />
									</div>
									<div>
										<h2 className="md:text-28 text-22 text-primary!"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/services'); }} className="group-hover:text-citrusyellow duration-500">Spa & Massages</a></h2>
									</div>
								</div>
							</div>
							<div className="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12">
								<div className="bg-white rounded-3xl p-3.75 text-center shadow-[0px_30px_26px_rgba(41,137,145,0.2)] border border-paleaqua/18 hover:shadow-none hover:bg-primary group duration-500 max-sm:w-[80%] max-sm:mx-auto">
									<div className="mb-5">
										<img src="/assets/images/trv-services/7.jpg" alt="image" className="rounded-xl w-full" width="356" height="356" loading="lazy" />
									</div>
									<div>
										<h2 className="md:text-28 text-22 text-primary!"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/services'); }} className="group-hover:text-citrusyellow duration-500">Interesting Rest</a></h2>
									</div>
								</div>
							</div>
							<div className="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12">
								<div className="bg-white rounded-3xl p-3.75 text-center shadow-[0px_30px_26px_rgba(41,137,145,0.2)] border border-paleaqua/18 hover:shadow-none hover:bg-primary group duration-500 max-sm:w-[80%] max-sm:mx-auto">
									<div className="mb-5">
										<img src="/assets/images/trv-services/8.jpg" alt="image" className="rounded-xl w-full" width="356" height="356" loading="lazy" />
									</div>
									<div>
										<h2 className="md:text-28 text-22 text-primary!"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/services'); }} className="group-hover:text-citrusyellow duration-500">Pickup & Drop</a></h2>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="relative text-right z-1">
							<span className="text-white font-title font-normal md:text-28 text-xl">Wornderful Services  For You</span>
							<h2 className="lg:!text-80 md:!text-46 sm:!text-3xl !text-2xl uppercase !font-black !text-citrusyellow !font-base">Services We Offer</h2>
						</div>
					</div>
				</div>
				{/* tv service style 1 end*/}
				
				{/*TESTIMONIAL SECTION START*/}
				<div className="sm:py-22.5 py-10 relative overflow-hidden bg-white dark:bg-dark">
					<div className="container">
						{/* TITLE START*/}
						<div className="text-center max-w-150 mx-auto xl:mb-15 mb-0">
							<h2 className="xl:text-46 md:text-40 text-3xl mb-2.5">Our Client<span className="text-citrusyellow"> Says!</span></h2>
							<p className="text-base">Destinations worth exploring! Here are a few popular spots</p>
							<div className="-mt-7">
								<img src="/assets/images/background/Title-Separator.png" alt="Image" className="w-117.5 inline-block dark:invert" width="470" height="70" loading="lazy" />
							</div>
						</div>
						{/* TITLE END*/}
						<div>
							<div className="text-center relative font-bold 2xl:text-40xl/48 xl:text-30xl/48 lg:text-80 max-lg:mb-7.5 sm:text-6xl text-40 tracking-[0.12em] uppercase bg-primary-gradient bg-clip-text 
							[-webkit-text-fill-color:transparent] 
							bg-[linear-gradient(to_bottom,#066168_15%,rgba(255,170,13,0.3019607843)_60%,#fff_85%)]">
								Testimonial
								<img src="/assets/images/airplane-takeoff1.png" alt="Image" className="absolute xl:-top-5 sm:-top-6 top-0 left-1/2 -translate-x-1/2 max-xl:w-[40%] max-md:w-[60%]" width="493" height="116" loading="lazy" />
							</div>

							<div className="relative">
								{/*Image Slider*/}
								<div className="swiper testimonial-content-sld">
									<div className="swiper-wrapper">
										{/*1*/}
										<div className="swiper-slide">
											<div className="md:flex items-center bg-white dark:bg-dark">
												<div className="mb-0 relative lg:max-w-93.75 max-w-62.5 z-1 lg:mr-23.75 md:mr-7.5 max-md:mx-auto max-md:mb-7.5 before:absolute before:size-95 before:rounded-full before:bg-citrusyellow before:opacity-10 before:-right-23.5 before:top-1/2 before:-translate-y-1/2 before:-z-1 after:absolute after:size-82.5 after:rounded-full after:bg-primary after:-right-10.5 after:top-1/2 after:-translate-y-1/2 after:-z-1 max-lg:after:hidden max-lg:before:hidden">
													<img src="/assets/images/trv-testimonial2/pic1.jpg" alt="Image" className="rounded-3xl w-full h-auto" width="375" height="489" loading="lazy" />
												</div>
												<div className="lg:max-w-122.5 max-w-85 ml-auto max-lg:mr-auto max-md:mx-auto">
													<div className="flex items-center justify-between mb-6.25 max-sm:flex-col max-sm:text-center sm:items-start">
														<div>
															<h2 className="!font-display lg:!text-36 !text-28 !font-normal text-primary mb-0">Amelia Warner</h2>
															<span className="font-title text-xl font-medium text-citrusyellow inline-block">Tourist</span>
														</div>
														<div>
															<img src="/assets/images/trv-icon/Quote.png" alt="img" className="lg:max-w-17.5 max-w-11 max-h-14.5 w-full" style={{ filter: "brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" }} width="70" height="58" loading="lazy" />
														</div>
													</div>
													<p className="font-title lg:text-2xl text-lg text-primary mb-5 max-lg:pr-7.5 max-md:pr-0 dark:text-paleaqua">
														Once the travel bug bites, there is no known antidote, and I know that I shall be happily infected until the end of my life. A journey is best measured in friends.
													</p>
													<div className="md:float-right text-citrusyellow text-base mr-0.75">
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
													</div>
												</div>
											</div>
										</div>
										{/*2*/}
										<div className="swiper-slide">
											<div className="md:flex items-center bg-white dark:bg-dark">
												<div className="mb-0 relative lg:max-w-93.75 max-w-62.5 z-1 lg:mr-23.75 md:mr-7.5 max-md:mx-auto max-md:mb-7.5 before:absolute before:size-95 before:rounded-full before:bg-citrusyellow before:opacity-10 before:-right-23.5 before:top-1/2 before:-translate-y-1/2 before:-z-1 after:absolute after:size-82.5 after:rounded-full after:bg-primary after:-right-10.5 after:top-1/2 after:-translate-y-1/2 after:-z-1 max-lg:after:hidden max-lg:before:hidden">
													<img src="/assets/images/trv-testimonial2/pic2.jpg" alt="Image" className="rounded-3xl w-full h-auto" width="375" height="489" loading="lazy" />
												</div>
												<div className="lg:max-w-122.5 max-w-85 ml-auto max-lg:mr-auto max-md:mx-auto">
													<div className="flex items-center justify-between mb-6.25 max-sm:flex-col max-sm:text-center sm:items-start">
														<div>
															<h2 className="!font-display lg:!text-36 !text-28 !font-normal text-primary mb-0">Kavin Martin</h2>
															<span className="font-title text-xl font-medium text-citrusyellow inline-block">Travler</span>
														</div>
														<div>
															<img src="/assets/images/trv-icon/Quote.png" alt="image" className="lg:max-w-17.5 max-w-11 max-h-14.5 w-fulll" style={{ filter: "brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" }} width="70" height="58" loading="lazy" />
														</div>
													</div>
													<p className="font-title lg:text-2xl text-lg text-primary mb-5 max-lg:pr-7.5 max-md:pr-0 dark:text-paleaqua">
														I Was Very Impresed Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta mauris.
													</p>
													<div className="md:float-right text-citrusyellow text-base mr-0.75">
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
													</div>
												</div>
											</div>
										</div>
										{/*3*/}
										<div className="swiper-slide">
											<div className="md:flex items-center bg-white dark:bg-dark">
												<div className="mb-0 relative lg:max-w-93.75 max-w-62.5 z-1 lg:mr-23.75 md:mr-7.5 max-md:mx-auto max-md:mb-7.5 before:absolute before:size-95 before:rounded-full before:bg-citrusyellow before:opacity-10 before:-right-23.5 before:top-1/2 before:-translate-y-1/2 before:-z-1 after:absolute after:size-82.5 after:rounded-full after:bg-primary after:-right-10.5 after:top-1/2 after:-translate-y-1/2 after:-z-1 max-lg:after:hidden max-lg:before:hidden">
													<img src="/assets/images/trv-testimonial2/pic3.jpg" alt="Image" className="rounded-3xl w-full h-auto" width="375" height="489" loading="lazy" />
												</div>
												<div className="lg:max-w-122.5 max-w-85 ml-auto max-lg:mr-auto max-md:mx-auto">
													<div className="flex items-center justify-between mb-6.25 max-sm:flex-col max-sm:text-center sm:items-start">
														<div>
															<h2 className="!font-display lg:!text-36 !text-28 !font-normal text-primary mb-0">Antonio</h2>
															<span className="font-title text-xl font-medium text-citrusyellow inline-block">Tourist</span>
														</div>
														<div>
															<img src="/assets/images/trv-icon/Quote.png" alt="image" className="lg:max-w-17.5 max-w-11 max-h-14.5 w-fulll" style={{ filter: "brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" }} width="70" height="58" loading="lazy" />
														</div>
													</div>
													<p className="font-title lg:text-2xl text-lg text-primary mb-5 max-lg:pr-7.5 max-md:pr-0 dark:text-paleaqua">
														Travel bug bites, there is no known antidote, and I know that I shall be happily infected until the end of my life. A journey is best measured in friends.
													</p>
													<div className="md:float-right text-citrusyellow text-base mr-0.75">
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
													</div>
												</div>
											</div>
										</div>
									   {/*1*/}
										<div className="swiper-slide">
											<div className="md:flex items-center bg-white dark:bg-dark">
												<div className="mb-0 relative lg:max-w-93.75 max-w-62.5 z-1 lg:mr-23.75 md:mr-7.5 max-md:mx-auto max-md:mb-7.5 before:absolute before:size-95 before:rounded-full before:bg-citrusyellow before:opacity-10 before:-right-23.5 before:top-1/2 before:-translate-y-1/2 before:-z-1 after:absolute after:size-82.5 after:rounded-full after:bg-primary after:-right-10.5 after:top-1/2 after:-translate-y-1/2 after:-z-1 max-lg:after:hidden max-lg:before:hidden">
													<img src="/assets/images/trv-testimonial2/pic1.jpg" alt="Image" className="rounded-3xl w-full h-auto" width="375" height="489" loading="lazy" />
												</div>
												<div className="lg:max-w-122.5 max-w-85 ml-auto max-lg:mr-auto max-md:mx-auto">
													<div className="flex items-center justify-between mb-6.25 max-sm:flex-col max-sm:text-center sm:items-start">
														<div>
															<h2 className="!font-display lg:!text-36 !text-28 !font-normal text-primary mb-0">Amelia Warner</h2>
															<span className="font-title text-xl font-medium text-citrusyellow inline-block">Tourist</span>
														</div>
														<div>
															<img src="/assets/images/trv-icon/Quote.png" alt="image" className="lg:max-w-17.5 max-w-11 max-h-14.5 w-fulll" style={{ filter: "brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" }} width="70" height="58" loading="lazy" />
														</div>
													</div>
													<p className="font-title lg:text-2xl text-lg text-primary mb-5 max-lg:pr-7.5 max-md:pr-0 dark:text-paleaqua">
														Once the travel bug bites, there is no known antidote, and I know that I shall be happily infected until the end of my life. A journey is best measured in friends.
													</p>
													<div className="md:float-right text-citrusyellow text-base mr-0.75">
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
													</div>
												</div>
											</div>
										</div>
										{/*2*/}
										<div className="swiper-slide">
											<div className="md:flex items-center bg-white dark:bg-dark">
												<div className="mb-0 relative lg:max-w-93.75 max-w-62.5 z-1 lg:mr-23.75 md:mr-7.5 max-md:mx-auto max-md:mb-7.5 before:absolute before:size-95 before:rounded-full before:bg-citrusyellow before:opacity-10 before:-right-23.5 before:top-1/2 before:-translate-y-1/2 before:-z-1 after:absolute after:size-82.5 after:rounded-full after:bg-primary after:-right-10.5 after:top-1/2 after:-translate-y-1/2 after:-z-1 max-lg:after:hidden max-lg:before:hidden">
													<img src="/assets/images/trv-testimonial2/pic2.jpg" alt="Image" className="rounded-3xl w-full h-auto" width="375" height="489" loading="lazy" />
												</div>
												<div className="lg:max-w-122.5 max-w-85 ml-auto max-lg:mr-auto max-md:mx-auto">
													<div className="flex items-center justify-between mb-6.25 max-sm:flex-col max-sm:text-center sm:items-start">
														<div>
															<h2 className="!font-display lg:!text-36 !text-28 !font-normal text-primary mb-0">Kavin Martin</h2>
															<span className="font-title text-xl font-medium text-citrusyellow inline-block">Travler</span>
														</div>
														<div>
															<img src="/assets/images/trv-icon/Quote.png" alt="image" className="lg:max-w-17.5 max-w-11 max-h-14.5 w-fulll" style={{ filter: "brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" }} width="70" height="58" loading="lazy" />
														</div>
													</div>
													<p className="font-title lg:text-2xl text-lg text-primary mb-5 max-lg:pr-7.5 max-md:pr-0 dark:text-paleaqua">
														I Was Very Impresed Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta mauris.
													</p>
													<div className="md:float-right text-citrusyellow text-base mr-0.75">
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
													</div>
												</div>
											</div>
										</div>
										{/*3*/}
										<div className="swiper-slide">
											<div className="md:flex items-center bg-white dark:bg-dark">
												<div className="mb-0 relative lg:max-w-93.75 max-w-62.5 z-1 lg:mr-23.75 md:mr-7.5 max-md:mx-auto max-md:mb-7.5 before:absolute before:size-95 before:rounded-full before:bg-citrusyellow before:opacity-10 before:-right-23.5 before:top-1/2 before:-translate-y-1/2 before:-z-1 after:absolute after:size-82.5 after:rounded-full after:bg-primary after:-right-10.5 after:top-1/2 after:-translate-y-1/2 after:-z-1 max-lg:after:hidden max-lg:before:hidden">
													<img src="/assets/images/trv-testimonial2/pic3.jpg" alt="Image" className="rounded-3xl w-full h-auto" width="375" height="489" loading="lazy" />
												</div>
												<div className="lg:max-w-122.5 max-w-85 ml-auto max-lg:mr-auto max-md:mx-auto">
													<div className="flex items-center justify-between mb-6.25 max-sm:flex-col max-sm:text-center sm:items-start">
														<div>
															<h2 className="!font-display lg:!text-36 !text-28lg:!text-36 !text-28 !font-normal text-primary mb-0">Antonio</h2>
															<span className="font-title text-xl font-medium text-citrusyellow inline-block">Tourist</span>
														</div>
														<div>
															<img src="/assets/images/trv-icon/Quote.png" alt="image" className="lg:max-w-17.5 max-w-11 max-h-14.5 w-fulll" style={{ filter: "brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" }} width="70" height="58" loading="lazy" />
														</div>
													</div>
													<p className="font-title lg:text-2xl text-lg text-primary mb-5 max-lg:pr-7.5 max-md:pr-0 dark:text-paleaqua">
														Travel bug bites, there is no known antidote, and I know that I shall be happily infected until the end of my life. A journey is best measured in friends.
													</p>
													<div className="md:float-right text-citrusyellow text-base mr-0.75">
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
													</div>
												</div>
											</div>
										</div>
										{/*3*/}
										{/*2*/}
										<div className="swiper-slide">
											<div className="md:flex items-center bg-white dark:bg-dark">
												<div className="mb-0 relative lg:max-w-93.75 max-w-62.5 z-1 lg:mr-23.75 md:mr-7.5 max-md:mx-auto max-md:mb-7.5 before:absolute before:size-95 before:rounded-full before:bg-citrusyellow before:opacity-10 before:-right-23.5 before:top-1/2 before:-translate-y-1/2 before:-z-1 after:absolute after:size-82.5 after:rounded-full after:bg-primary after:-right-10.5 after:top-1/2 after:-translate-y-1/2 after:-z-1 max-lg:after:hidden max-lg:before:hidden">
													<img src="/assets/images/trv-testimonial2/pic2.jpg" alt="Image" className="rounded-3xl w-full h-auto" width="375" height="489" loading="lazy" />
												</div>
												<div className="lg:max-w-122.5 max-w-85 ml-auto max-lg:mr-auto max-md:mx-auto">
													<div className="flex items-center justify-between mb-6.25 max-sm:flex-col max-sm:text-center sm:items-start">
														<div>
															<h2 className="!font-display lg:!text-36 !text-28 !font-normal text-primary mb-0">Kavin Martin</h2>
															<span className="font-title text-xl font-medium text-citrusyellow inline-block">Travler</span>
														</div>
														<div>
															<img src="/assets/images/trv-icon/Quote.png" alt="image" className="lg:max-w-17.5 max-w-11 max-h-14.5 w-fulll" style={{ filter: "brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" }} width="70" height="58" loading="lazy" />
														</div>
													</div>
													<p className="font-title lg:text-2xl text-lg text-primary mb-5 max-lg:pr-7.5 max-md:pr-0 dark:text-paleaqua">
														I Was Very Impresed Lorem posuere in miss drana en the nisan semere sceriun amiss etiam ornare in the miss drana is lorem fermen nunta mauris.
													</p>
													<div className="md:float-right text-citrusyellow text-base mr-0.75">
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
													</div>
												</div>
											</div>
										</div>
										{/*3*/}
										<div className="swiper-slide">
											<div className="md:flex items-center bg-white dark:bg-dark">
												<div className="mb-0 relative lg:max-w-93.75 max-w-62.5 z-1 lg:mr-23.75 md:mr-7.5 max-md:mx-auto max-md:mb-7.5 before:absolute before:size-95 before:rounded-full before:bg-citrusyellow before:opacity-10 before:-right-23.5 before:top-1/2 before:-translate-y-1/2 before:-z-1 after:absolute after:size-82.5 after:rounded-full after:bg-primary after:-right-10.5 after:top-1/2 after:-translate-y-1/2 after:-z-1 max-lg:after:hidden max-lg:before:hidden">
													<img src="/assets/images/trv-testimonial2/pic3.jpg" alt="Image" className="rounded-3xl w-full h-auto" width="375" height="489" loading="lazy" />
												</div>
												<div className="lg:max-w-122.5 max-w-85 ml-auto max-lg:mr-auto max-md:mx-auto">
													<div className="flex items-center justify-between mb-6.25 max-sm:flex-col max-sm:text-center sm:items-start">
														<div>
															<h2 className="!font-display lg:!text-36 !text-28 !font-normal text-primary mb-0">Antonio</h2>
															<span className="font-title text-xl font-medium text-citrusyellow inline-block">Tourist</span>
														</div>
														<div>
															<img src="/assets/images/trv-icon/Quote.png" alt="image" className="lg:max-w-17.5 max-w-11 max-h-14.5 w-fulll" style={{ filter: "brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" }} width="70" height="58" loading="lazy" />
														</div>
													</div>
													<p className="font-title lg:text-2xl text-lg text-primary mb-5 max-lg:pr-7.5 max-md:pr-0 dark:text-paleaqua">
														Travel bug bites, there is no known antidote, and I know that I shall be happily infected until the end of my life. A journey is best measured in friends.
													</p>
													<div className="md:float-right text-citrusyellow text-base mr-0.75">
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
														<i className="fa-solid fa-star"></i>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="testimonial-content-sld-control">
										<div className="swiper-button-next"></div>
										<div className="swiper-button-prev"></div>
									</div>
								</div>
								{/*Thumbnail Slider*/}
								<div className="swiper testimonial-thum-sld xl:h-92.5 h-auto !overflow-hidden xl:w-28.75 w-62.5 xl:!absolute xl:top-1/2 top-auto xl:left-128.75 left-0 xl:-translate-y-1/2 transform-none max-xl:mt-5 xl:!mx-auto md:!mx-0 !mx-auto !relative">
									<div className="swiper-wrapper xl:flex-col">
										<div className="swiper-slide">
											<div className="duration-500">
												<img src="/assets/images/trv-testimonial2/pic1.jpg" alt="Image" className="duration-500 size-19 object-cover object-center rounded-xl cursor-pointer" width="76" height="76" loading="lazy" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="duration-500">
												<img src="/assets/images/trv-testimonial2/pic2.jpg" alt="Image"  className="duration-500 size-19 object-cover object-center rounded-xl cursor-pointer" width="76" height="76" loading="lazy" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="duration-500">
												<img src="/assets/images/trv-testimonial2/pic3.jpg" alt="Image"  className="duration-500 size-19 object-cover object-center rounded-xl cursor-pointer" width="76" height="76" loading="lazy" />
											</div>
									   </div>
										<div className="swiper-slide">
											<div className="duration-500">
												<img src="/assets/images/trv-testimonial2/pic4.jpg" alt="Image"  className="duration-500 size-19 object-cover object-center rounded-xl cursor-pointer" width="76" height="76" loading="lazy" />
											</div>
										</div>

										<div className="swiper-slide">
											<div className="duration-500">
												<img src="/assets/images/trv-testimonial2/pic1.jpg" alt="Image"  className="duration-500 size-19 object-cover object-center rounded-xl cursor-pointer" width="76" height="76" loading="lazy" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="duration-500">
												<img src="/assets/images/trv-testimonial2/pic2.jpg" alt="Image"  className="duration-500 size-19 object-cover object-center rounded-xl cursor-pointer" width="76" height="76" loading="lazy" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="duration-500">
												<img src="/assets/images/trv-testimonial2/pic3.jpg" alt="Image"  className="duration-500 size-19 object-cover object-center rounded-xl cursor-pointer" width="76" height="76" loading="lazy" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="duration-500">
												<img src="/assets/images/trv-testimonial2/pic4.jpg" alt="Image"  className="duration-500 size-19 object-cover object-center rounded-xl cursor-pointer" width="76" height="76" loading="lazy" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute -right-13.75 top-2/5 w-27.5 animate-slide-top"><img src="/assets/images/hotballon-right.png" alt="image" /></div>
				</div>
    </div>
  );
}
