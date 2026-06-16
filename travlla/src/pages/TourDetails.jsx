import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TourDetails() {
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
									<h2 className="lg:text-60 md:text-52 text-28 relative text-primary!">Tour Package Detail</h2>
								</div>
								{/* BREADCRUMB ROW */}                            
								<div>
									<ul className="inline-block">
										<li className="text-base pr-7.5 relative inline-block font-semibold text-primary after:content-['-'] after:absolute after:right-2 after:-top-1.5 after:text-primary after:text-26 after:font-normal">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}>Home</a></li>
										<li className="relative inline-block text-base font-semibold text-primary">Tour Package Detail</li>
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
				
				{/* SECTION START */}
				<div className="lg:pt-30 pt-10 lg:pb-22.5 pb-17.5">
					<div className="container">
						<div className="row flex justify-center">
							<div className="lg:w-[60%] w-full">
								<div>
									{/*Info Start*/}
									<div className="sm:p-7.5 p-5 rounded-3xl bg-white dark:bg-dark max-lg:mb-7.5">
										<div>
											<div className="mb-5">
												<div Class="mb-5">
													<span Class="text-base/[1.2] font-normal text-primary dark:text-paleaqua mr-2.5">(4.8 Review)</span>
													<i className="text-2sm text-citrusyellow fa-solid fa-star"></i>
													<i className="text-2sm text-citrusyellow fa-solid fa-star"></i>
													<i className="text-2sm text-citrusyellow fa-solid fa-star"></i>
													<i className="text-2sm text-citrusyellow fa-solid fa-star"></i>
													<i className="text-2sm text-citrusyellow fa-solid fa-star"></i>
												</div>
											</div>
											<h3 className="mb-5 sm:text-36 text-28 font-medium leading-[1.2]">The Most Beautiful Destination , Bali , Indonesia</h3>
											<span className="mb-7.5 font-semibold block">2N London| 3N Paris | 1N Netherlands | 1N Germany | 3N Central Switzerland | 1N Innsbruck | 1N Padova | 1N Tuscany | 1N Rome</span>
											{/*Top SLider*/}
											<div className="mb-6.25">
												<div className="swiper trv_d-slider">
													<div className="swiper-wrapper">
														<div className="swiper-slide">
															<div className="rounded-3xl overflow-hidden">
																<img src="/assets/images/detail-slider/slide2/pic1.jpg" alt="Image" Class="rounded-3xl w-full" />   
															</div>
														</div>
														<div className="swiper-slide">
															<div className="rounded-3xl overflow-hidden">
																<img src="/assets/images/detail-slider/slide2/pic2.jpg" alt="Image" Class="rounded-3xl w-full" />   
															</div>
														</div>
														<div className="swiper-slide">
															<div className="rounded-3xl overflow-hidden">
																<img src="/assets/images/detail-slider/slide2/pic3.jpg" alt="Image" Class="rounded-3xl w-full" />   
															</div>
														</div>
														<div className="swiper-slide">
															<div className="rounded-3xl overflow-hidden">
																<img src="/assets/images/detail-slider/slide2/pic4.jpg" alt="Image" Class="rounded-3xl w-full" />   
															</div>
														</div>
														<div className="swiper-slide">
															<div className="rounded-3xl overflow-hidden">
																<img src="/assets/images/detail-slider/slide2/pic5.jpg" alt="Image" Class="rounded-3xl w-full" />   
															</div>
														</div>
														<div className="swiper-slide">
															<div className="rounded-3xl overflow-hidden">
																<img src="/assets/images/detail-slider/slide2/pic6.jpg" alt="Image" Class="rounded-3xl w-full" />   
															</div>
														</div>
													</div>
													<div className="swiper-pagination"></div>
												</div>
											</div>
											{/*Top SLider End*/}
											{/* Navigation */}
											<div>
												<nav className="bg-primary !flex justify-center flex-wrap xl:gap-5 gap-2 p-3.75 z-9 sm:mb-12.5 mb-5 rounded-2lg duration-500 navbar-one">
													<a Class="text-primary dark:text-paleaqua font-semibold bg-white dark:bg-dark py-2.5 xl:px-5 px-3 rounded-2lg xl:text-sm text-xs duration-500 hover:bg-citrusyellow hover:text-white" href="#overview">Overview</a>
													<a Class="text-primary dark:text-paleaqua font-semibold bg-white dark:bg-dark py-2.5 xl:px-5 px-3 rounded-2lg xl:text-sm text-xs duration-500 hover:bg-citrusyellow hover:text-white" href="#itinerary">Day Wise Itinerary</a>
													<a Class="text-primary dark:text-paleaqua font-semibold bg-white dark:bg-dark py-2.5 xl:px-5 px-3 rounded-2lg xl:text-sm text-xs duration-500 hover:bg-citrusyellow hover:text-white" href="#inclusions">Inclusions / Exclusions</a>
													<a Class="text-primary dark:text-paleaqua font-semibold bg-white dark:bg-dark py-2.5 xl:px-5 px-3 rounded-2lg xl:text-sm text-xs duration-500 hover:bg-citrusyellow hover:text-white" href="#TermCondition">Term & Condition</a>
												</nav>
											</div>
											{/* Over View*/}
											<section id="overview">
												<h3 className="sm:text-28 text-22 font-medium leading-[1.2] text-primary dark:text-paleaqua sm:mb-6.25 mb-3.25">Package Overview</h3>
												<p Class="mb-4">Bali, Indonesia is a volcanic island located just east of Java and west of Lombok, positioned about 8 degrees south of the equator. Its geography is defined by a rugged central mountain range dominated by active volcanoes such as Mount Agung and Mount Batur, surrounded by lush rainforests, river valleys, and terraced rice fields.</p>
												<ul className="mb-10">
													<li Class="sm:text-lg text-base font-normal text-primary dark:text-paleaqua relative pl-11.25 mb-4.5 flex items-center">
														<i className="absolute text-2xl rounded-full text-secondary left-0 top-1 fa-solid fa-circle-check"></i>
														Guided tours in 6 major cities London Paris Vaduz Florence Rome and the Vatican City.
													</li>
													<li Class="sm:text-lg text-base font-normal text-primary dark:text-paleaqua relative pl-11.25 mb-4.5">
														 <i className="absolute text-2xl rounded-full text-secondary left-0 top-1 fa-solid fa-circle-check"></i>
														Unforgettable 15-day journey through 10 European countries.
													</li>
													<li Class="sm:text-lg text-base font-normal text-primary dark:text-paleaqua relative pl-11.25 mb-4.5">
														 <i className="absolute text-2xl rounded-full text-secondary left-0 top-1 fa-solid fa-circle-check"></i>
														Professional and knowledgeable Tour Manager throughout the tour.
													</li>
													<li Class="sm:text-lg text-base font-normal text-primary dark:text-paleaqua relative pl-11.25 mb-4.5">
														 <i className="absolute text-2xl rounded-full text-secondary left-0 top-1 fa-solid fa-circle-check"></i>
														Comfortable 4-star accommodations and daily buffet breakfast.
													</li>
													<li Class="sm:text-lg text-base font-normal text-primary dark:text-paleaqua relative pl-11.25 mb-4.5">
														 <i className="absolute text-2xl rounded-full text-secondary left-0 top-1 fa-solid fa-circle-check"></i>
														Delectable Indian and local cuisine options including daily mineral water.
													</li>
													<li Class="sm:text-lg text-base font-normal text-primary dark:text-paleaqua relative pl-11.25 mb-4.5">
														 <i className="absolute text-2xl rounded-full text-secondary left-0 top-1 fa-solid fa-circle-check"></i>
														Driver tips included.
													</li>
												</ul>
												<h3 className="sm:text-28 text-22 font-medium leading-[1.2] text-primary dark:text-paleaqua mb-6.25">Additional Easemytrip Delights</h3>
												<ul className="mb-10">
													<li Class="sm:text-lg text-base font-normal text-primary dark:text-paleaqua relative pl-11.25 mb-4.5 flex items-center">
														<i className="absolute text-2xl rounded-full text-secondary left-0 top-1 fa-solid fa-circle-check"></i>
														Take home souvenirs from Holland and enjoy driver tips included.
													</li>
													<li Class="text-lg font-normal text-primary dark:text-paleaqua relative pl-11.25 mb-4.5 flex items-center">
														<i className="absolute text-2xl rounded-full text-secondary left-0 top-1 fa-solid fa-circle-check"></i>
														Savor a glass of Champagne in France Black Forest Cake in Germany and Chocolate Milkshake in Switzerland.
													</li>
													<li Class="sm:text-lg text-base font-normal text-primary dark:text-paleaqua relative pl-11.25 mb-4.5 flex items-center">
														<i className="absolute text-2xl rounded-full text-secondary left-0 top-1 fa-solid fa-circle-check"></i>
														Indulge in a Pizza and Pasta meal in Pisa Gelato Ice cream in Rome and Masala tea and hotel dinners in select cities.
													</li>
													<li Class="sm:text-lg text-base font-normal text-primary dark:text-paleaqua relative pl-11.25 mb-4.5 flex items-center">
													   <i className="absolute text-2xl rounded-full text-secondary left-0 top-1 fa-solid fa-circle-check"></i>
														Join us for a value-packed European adventure filled with breathtaking sights delightful culinary experiences and treasured memories.
													</li>
												</ul>
											</section>
											{/* Day Wise Itinerary*/}
											<section id="itinerary">
												<h3 className="sm:text-28 text-22 font-medium leading-[1.2] text-primary dark:text-paleaqua mb-6.25">Day Wise Itinerary</h3>
												<div className="bg-eggshell dark:bg-eggshell/5 rounded-3xl xl:p-10 p-5 mb-10">
													<ul>
														<li Class="mb-7.5">
															<div className="sm:flex">
																<div className="text-center">
																	<div className="size-11.25 bg-citrusyellow rounded-full flex items-center justify-center mb-1.25 max-sm:mx-auto">
																		<div className="size-9.5 bg-primary rounded-full flex items-center justify-center font-title text-22 font-bold text-white">01</div>
																	</div>
																	<span className="font-base text-sm font-semibold text-primary dark:text-paleaqua inline-block">DAY</span>
																</div>
																<div className="sm:w-[calc(100%_-_46px)] w-full max-sm:text-center sm:pl-12.5 sm:pr-5">
																	<h2 className="font-title sm:text-2xl text-xl font-medium text-primary dark:text-paleaqua leading-[1.2] mb-3.75">Day 1 Arrival in London </h2>
																	<ul className="my-5">
																		<li Class="font-title text-lg font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-2 fa-solid fa-circle-check"></i>
																			Guided tours in 6 major cities London Paris Vaduz Florence Rome and the Vatican City.
																		</li>
																		 <li Class="font-title text-lg font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-2 fa-solid fa-circle-check"></i>
																			Unforgettable 15-day journey through 10 European countries.
																		</li>
																		<li Class="font-title text-lg font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-2 fa-solid fa-circle-check"></i>
																			Professional and knowledgeable Tour Manager throughout the tour.
																		</li>
																		<li Class="font-title text-lg font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-2 fa-solid fa-circle-check"></i>
																			Comfortable 4-star accommodations and daily buffet breakfast.
																		</li>
																		 <li Class="font-title text-lg font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-2 fa-solid fa-circle-check"></i>
																			Delectable Indian and local cuisine options including daily mineral water.
																		</li>
																		<li Class="font-title text-lg font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-2 fa-solid fa-circle-check"></i>
																			Driver tips included.
																		</li>
																	</ul>
																</div>
															</div>
														</li>
														<li Class="mb-7.5">
															<div className="sm:flex">
																<div className="text-center">
																	<div className="size-11.25 bg-citrusyellow rounded-full flex items-center justify-center mb-1.25 max-sm:mx-auto">
																		<div className="size-9.5 bg-primary rounded-full flex items-center justify-center font-title text-22 font-bold text-white">02</div>
																	</div>
																	<span className="font-base text-sm font-semibold text-primary dark:text-paleaqua inline-block">DAY</span>
																</div>
																<div className="sm:w-[calc(100%_-_46px)] w-full max-sm:text-center sm:pl-12.5 sm:pr-5">
																	<h2 className="font-title sm:text-2xl text-xl font-medium text-primary dark:text-paleaqua leading-[1.2] mb-3.75">Day 2 London Exploration</h2>
																	<ul className="my-5">
																		<li Class="font-title text-lg font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-2 fa-solid fa-circle-check"></i>
																			Visit iconic landmarks: Big Ben, Houses of Parliament, Wetrv-oack-sepainster Abbey, Trafalgar Square, Piccadilly Circus, Tower Bridge, River Thames, Hyde Park.
																		</li>
																		<li Class="font-title text-lg font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-2 fa-solid fa-circle-check"></i>
																			Witness the Changing of the Guards at Buckingham Palace (subject to operation).
																		</li>
																		<li Class="font-title text-lg font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-2 fa-solid fa-circle-check"></i>
																			Visit the legendary Lord’s Cricket Ground; ride the London Eye.
																		</li>
																		<li Class="font-title text-lg font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-2 fa-solid fa-circle-check"></i>
																			Overnight in London (Breakfast, Lunch, Dinner included).
																		</li>
																		<li Class="font-title text-lg font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-2 fa-solid fa-circle-check"></i>
																			Guided city tour with an expert local guide.
																		</li>
																	</ul>
																</div>
															</div>
														</li>
														<li Class="mb-7.5">
															<div className="sm:flex">
																<div className="text-center">
																	<div className="size-11.25 bg-citrusyellow rounded-full flex items-center justify-center mb-1.25 max-sm:mx-auto">
																		<div className="size-9.5 bg-primary rounded-full flex items-center justify-center font-title text-22 font-bold text-white">03</div>
																	</div>
																	<span className="font-base text-sm font-semibold text-primary dark:text-paleaqua inline-block">DAY</span>
																</div>
																<div className="sm:w-[calc(100%_-_46px)] w-full max-sm:text-center sm:pl-12.5 sm:pr-5">
																	<h2 className="font-title sm:text-2xl text-xl font-medium text-primary dark:text-paleaqua leading-[1.2] mb-3.75">Day 3 Arrival in Paris - The City of Romance, Lights, and Glamour </h2>
																	<b>
																		Rising to 1,717 meters above sea level, it offers adventurous travelers a moderately 
																		challenging hike that rewards.
																	</b>
																	<div className="row !mt-10 mb-2.5">
																		<div className="md:w-1/2 w-full mb-5">
																			<div className="rounded-3xl overflow-hidden">
																				<img src="/assets/images/trv-blog/blog-detail/bx-pic1.jpg" alt="#" Class="w-full" />
																			</div>
																		</div>
																		<div className="md:w-1/2 w-full mb-5">
																			<div className="rounded-3xl overflow-hidden">
																				<img src="/assets/images/trv-blog/blog-detail/bx-pic2.jpg" alt="#" Class="w-full" />
																			</div>
																		</div>
																	</div>
																	<ul className="my-5">
																		<li Class="font-title sm:text-lg text-sm font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-1 fa-solid fa-circle-check"></i>
																			Check out of your hotel and proceed to visit the renowned Madame Tussauds wax museum.
																		</li>
																		<li Class="font-title sm:text-lg text-sm font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-1 fa-solid fa-circle-check"></i>
																			Travel by high-speed Eurostar train(02nd Class) from London to Paris.
																		</li>
																	   <li Class="font-title sm:text-lg text-sm font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-1 fa-solid fa-circle-check"></i>
																			Arrive in Paris and check-in at your hotel.
																		</li>
																	   <li Class="font-title sm:text-lg text-sm font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-1 fa-solid fa-circle-check"></i>
																			Leisure day - take the opportunity to explore McArthurGlen, just a short distance from your hotel.
																		</li>
																		<li Class="font-title sm:text-lg text-sm font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-1 fa-solid fa-circle-check"></i>
																			Overnight in Paris (Breakfast, Lunch, Dinner included).
																		</li>
																	</ul>
																</div>
															</div>
														</li>
														<li Class="mb-7.5">
															<div className="sm:flex">
																<div className="text-center">
																	<div className="size-11.25 bg-citrusyellow rounded-full flex items-center justify-center mb-1.25 max-sm:mx-auto">
																		<div className="size-9.5 bg-primary rounded-full flex items-center justify-center font-title text-22 font-bold text-white">04</div>
																	</div>
																	<span className="font-base text-sm font-semibold text-primary dark:text-paleaqua inline-block">DAY</span>
																</div>
																<div className="sm:w-[calc(100%_-_46px)] w-full max-sm:text-center sm:pl-12.5 sm:pr-5">
																	<h2 className="font-title sm:text-2xl text-xl font-medium text-primary dark:text-paleaqua leading-[1.2] mb-3.75">Day 4 Paris City Tour & Versailles Palace Visit</h2>
																	<ul className="my-5">
																		<li Class="font-title text-lg font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-2 fa-solid fa-circle-check"></i>
																			Guided city tour of Paris with an expert local guide.
																		</li>
																		<li Class="font-title text-lg font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-2 fa-solid fa-circle-check"></i>
																			Discover iconic attractions: Place Vendôme, Place de l’Opéra Garnier, Musée d’Orsay, Place de la Concorde, Champs Elysées, Arc de Triomphe, Alexander Bridge, Les Invalides, and more.
																		</li>
																		<li Class="font-title text-lg font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-2 fa-solid fa-circle-check"></i>
																			Ascend to the Eiffel Tower's 3rd (top) level for breathtaking views of Paris (subject to operation).
																		</li>
																		<li Class="font-title text-lg font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-2 fa-solid fa-circle-check"></i>
																			Overnight in Paris (Breakfast, Lunch, Dinner included).
																		</li>
																		<li Class="font-title text-lg font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-2 fa-solid fa-circle-check"></i>
																			Visit the magnificent Palace of Versailles, a world-renowned UNESCO site.
																		</li>
																		<li Class="font-title text-lg font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-2 fa-solid fa-circle-check"></i>
																			(Please note that access to the Eiffel Tower's 3rd level is contingent on its operational status. If it happens to be closed during our visit, we will explore the 2nd level instead, which offers fantastic views and insights into the Eiffel Tower's history.)
																		</li>
																	</ul>
																</div>
															</div>
														</li>
														<li Class="mb-7.5">
															<div className="sm:flex">
																<div className="text-center">
																	<div className="size-11.25 bg-citrusyellow rounded-full flex items-center justify-center mb-1.25 max-sm:mx-auto">
																		<div className="size-9.5 bg-primary rounded-full flex items-center justify-center font-title text-22 font-bold text-white">05</div>
																	</div>
																	<span className="font-base text-sm font-semibold text-primary dark:text-paleaqua inline-block">DAY</span>
																</div>
																<div className="sm:w-[calc(100%_-_46px)] w-full max-sm:text-center sm:pl-12.5 sm:pr-5">
																	<h2 className="font-title sm:text-2xl text-xl font-medium text-primary dark:text-paleaqua leading-[1.2] mb-3.75">Day 5 Disneyland® Paris Adventure & Romantic Seine River Cruise  </h2>
																	<div className="flex items-center justify-center mt-10 mb-2.5">
																		<div className="row">
																			<div className="md:w-1/3 w-full mb-5">
																				<div className="rounded-3xl overflow-hidden">
																					<img src="/assets/images/trv-gallery/pic1.jpg" alt="#" />
																				</div>
																			</div>
																			<div className="md:w-1/3 w-full mb-5">
																				<div className="rounded-3xl overflow-hidden">
																					<img src="/assets/images/trv-gallery/pic2.jpg" alt="#" />
																				</div>
																			</div>
																			<div className="md:w-1/3 w-full mb-5">
																				<div className="rounded-3xl overflow-hidden">
																					<img src="/assets/images/trv-gallery/pic3.jpg" alt="#" />
																				</div>
																			</div>
																			<div className="md:w-1/3 w-full mb-5">
																				<div className="rounded-3xl overflow-hidden">
																					<img src="/assets/images/trv-gallery/pic4.jpg" alt="#" />
																				</div>
																			</div>
																			<div className="md:w-1/3 w-full mb-5">
																				<div className="rounded-3xl overflow-hidden">
																					<img src="/assets/images/trv-gallery/pic5.jpg" alt="#" />
																				</div>
																			</div>
																			<div className="md:w-1/3 w-full mb-5">
																				<div className="rounded-3xl overflow-hidden">
																					<img src="/assets/images/trv-gallery/pic6.jpg" alt="#" />
																				</div>
																			</div>
																		</div>
																	</div>
																	<ul className="my-5">
																		<li Class="font-title text-lg font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-1 fa-solid fa-circle-check"></i>
																			Choose between Disney® Park or Walt Disney Studios® Park - experience thrilling rides, shows, and attractions.
																		</li>
																		<li Class="font-title text-lg font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-1 fa-solid fa-circle-check"></i>
																			Romantic Seine River cruise - glide across Notre Dame, the Eiffel Tower, and the Louvre.
																		</li>
																	   <li Class="font-title text-lg font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-1 fa-solid fa-circle-check"></i>
																			Overnight in Paris (Breakfast, Lunch, Dinner included).
																		</li>
																		<li Class="font-title text-lg font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-2 text-left flex items-center">
																		   <i className="absolute text-sm rounded-full text-citrusyellow left-0 top-1 fa-solid fa-circle-check"></i>
																			(Note: The Tour Manager reserves the right to alter the itinerary if necessary, but all attractions will be covered.)
																		</li>
																	</ul>
																</div>
															</div>
														</li>
													</ul>
												</div>
											</section>
											{/* Inclusion/Exclusions*/}
											<section id="inclusions">
												<div className="bg-eggshell dark:bg-eggshell/5 rounded-3xl xl:p-10 p-5 mb-10">
													<div className="row">
														<div className="xl:w-1/2 w-full trv-checklist-st2-mini-l mb-5">
															<h3 className="sm:text-28 text-22 font-medium leading-[1.2] text-primary dark:text-paleaqua mb-6.25">Inclusions</h3>
															<ul className="sm:p-7.5 p-4.5 h-100 overflow-y-scroll border border-paleaqua dark:border-paleaqua/40 custom-scroll">
																<li Class="font-title text-base font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-4.5">
																	<span className="absolute size-5 rounded-full text-white bg-primary  left-0 top-1 flex items-center justify-center">
																		<i className="las la-check text-xs"></i></span>
																	02 nights accommodation in Sheraton Skyline / Mercure LHR / Holiday Inn or similar Hotel in London
																</li>
																<li Class="font-title text-base font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-4.5">
																	<span className="absolute size-5 rounded-full text-white bg-primary  left-0 top-1 flex items-center justify-center">
																		<i className="las la-check text-xs"></i></span>
																	03 nights accommodation in B&B / Millennium CDG / Hilton CDG or similar hotel in Paris
																</li>
																<li Class="font-title text-base font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-4.5">
																	<span className="absolute size-5 rounded-full text-white bg-primary  left-0 top-1 flex items-center justify-center">
																		<i className="las la-check text-xs"></i></span>
																	01 night accommodation in Novotel / NH / Fletcher or similar hotel in Netherland
																</li>
																<li Class="font-title text-base font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-4.5">
																	<span className="absolute size-5 rounded-full text-white bg-primary  left-0 top-1 flex items-center justify-center">
																		<i className="las la-check text-xs"></i></span>
																	01 night accommodation in Mercure / Rilano / NH or similar hotel Germany
																</li>
																<li Class="font-title text-base font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-4.5">
																	<span className="absolute size-5 rounded-full text-white bg-primary  left-0 top-1 flex items-center justify-center">
																		<i className="las la-check text-xs"></i></span>
																	03 nights accommodation in Radisson / Ramada / Movenpick or similar hotel in Central Switzerland
																</li>
																<li Class="font-title text-base font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-4.5">
																	<span className="absolute size-5 rounded-full text-white bg-primary  left-0 top-1 flex items-center justify-center">
																		<i className="las la-check text-xs"></i></span>
																	01 night accommodation in Alpenkoning / Alphotel or similar hotel Innsbruck / Seefeld
																</li>
																<li Class="font-title text-base font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-4.5">
																	<span className="absolute size-5 rounded-full text-white bg-primary  left-0 top-1 flex items-center justify-center">
																		<i className="las la-check text-xs"></i></span>
																	01 night accommodation in Four Points by Sheraton / Unaway / Capital or similar hotel in Padova / Rovigo
																</li>
															</ul>
														</div>
														<div className="xl:w-1/2 w-full trv-checklist-st2-mini-r">
															<h3 className="sm:text-28 text-22 font-medium leading-[1.2] text-primary dark:text-paleaqua mb-6.25">Exclusions</h3>
															<ul className="sm:p-7.5 p-4.5 h-100 overflow-y-scroll border border-paleaqua dark:border-paleaqua/40 custom-scroll">
																<li Class="font-title text-base font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-4.5">
																	<span Class="absolute text-sm size-5 rounded-full text-white bg-[#ff4545] left-0 top-1 flex items-center justify-center"><i className="las la-times"></i></span>
																	The cost of the Airfare, Passport, POE charges, Visa charges, Overseas Travel Insurance, etc.
																</li>
																<li Class="font-title text-base font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-4.5">
																	<span Class="absolute text-sm size-5 rounded-full text-white bg-[#ff4545] left-0 top-1 flex items-center justify-center"><i className="las la-times"></i></span>
																	Any expenses of personal nature such as Porterage, Laundry, and Alcohol, Food or Drink not in the regular menus provided by us, mini bar and telephone calls
																</li>
																<li Class="font-title text-base font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-4.5">
																	<span Class="absolute text-sm size-5 rounded-full text-white bg-[#ff4545] left-0 top-1 flex items-center justify-center"><i className="las la-times"></i></span>
																	Any extra meals not included in the itinerary. Meals are pre - set and a choice of menu is not available
																</li>
															   <li Class="font-title text-base font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-4.5">
																	<span Class="absolute text-sm size-5 rounded-full text-white bg-[#ff4545] left-0 top-1 flex items-center justify-center"><i className="las la-times"></i></span>
																	Cost of excursions, city sightseeing, entrance fees and local guides availed of by the passengers, other than that mentioned in ‘What your tour price includes’
																</li>
																<li Class="font-title text-base font-normal text-primary dark:text-paleaqua relative pl-7.5 mb-4.5">
																	<span Class="absolute text-sm size-5 rounded-full text-white bg-[#ff4545] left-0 top-1 flex items-center justify-center"><i className="las la-times"></i></span>
																   GST, TCS and other taxes as applicable.
																</li>
															</ul>
														</div>
													</div>
												</div>
											</section>
											<section id="TermCondition">
												<h2 className="sm:text-28 text-22 font-medium leading-[1.2] text-primary dark:text-paleaqua mb-6.25">Term & Condition</h2>
												<div className="bg-eggshell dark:bg-eggshell/5 rounded-3xl xl:p-10 p-5">
													<ul>
														<li Class="mb-7.5">
															<h2 className="font-title text-2xl font-medium leading-[1.2] mb-2.5">Travel Validity</h2>
															<p className="font-base text-base font-normal leading-[1.4]">
																The deal is valid for travel till 31st October 2025.
															</p>
														</li>
														<li Class="mb-7.5">
															<h2 className="font-title text-2xl font-medium leading-[1.2] mb-2.5">Guaranteed Dates</h2>
															<p className="font-base text-base font-normal leading-[1.4]">
															   Your selected travel dates are guaranteed. In the unlikely event of seats sold out, we guarantee +/- 1/2 days from your preferred dates.
															</p>
														</li>
														<li Class="mb-7.5">
															<h2 className="font-title text-2xl font-medium leading-[1.2] mb-2.5">High Season</h2>
															<p className="font-base text-base font-normal leading-[1.4]">Prices can fluctuate during peak season dates.
															</p>
														</li>
														<li Class="mb-7.5">
															<h2 className="font-title text-2xl font-medium leading-[1.2] mb-2.5">Visa Easy</h2>
															<p className="font-base text-base font-normal leading-[1.4]">Visa assistance will be provided by our visa specialists.
															</p>
														</li>
														<li Class="mb-7.5">
															<h2 className="font-title text-2xl font-medium leading-[1.2] mb-2.5">Remarks</h2>
															<p className="font-base text-base font-normal leading-[1.4]">The exchange rate of Euro is subject to fluctuation and hence final cost will be calculated at the rate prevailing on the date of final payment.
															</p>
														</li>
														<li Class="mb-7.5">
															<h2 className="font-title text-2xl font-medium leading-[1.2] mb-2.5">Easy Cancellation</h2>
															<p className="font-base text-base font-normal leading-[1.4]">*46 and More Days prior to the Departure Date: Booking Amount is Non-Refundable . *45 to 31 Days prior to the Departure Date: 60% of the full Tour cost . *30 to 21 Days prior to the Departure Date: 80% of the full Tour cost *20 Days prior to the Departure Date: 100% of the full Tour cost
															</p>
														</li>
														<li Class="mb-7.5">
															<h2 className="font-title text-2xl font-medium leading-[1.2] mb-2.5">Booking Policy</h2>
															<p className="font-base text-base font-normal leading-[1.4] mb-4">At the time of booking: 30% of the total package cost per person or cancellation charges whichever is higher (non-refundable and non-transferable)
															</p>
															<p className="font-base text-base font-normal leading-[1.4] mb-4">Within 60 Days from Date of Departure: 50% of Full Tour Cost or cancellation charges whichever is higher (non-refundable and non-transferable) 
															</p>
															<p className="font-base text-base font-normal leading-[1.4] mb-4">Within 45 Days from Departure Date: 75% of Full Tour Cost or cancellation charges whichever is higher (non-refundable and non-transferable) 
															</p>
															<p className="font-base text-base font-normal leading-[1.4] mb-4">Please Note: For Issuance of the Flight Tickets, we require Full Payment of Airfare
															</p>
														</li>
														<li Class="mb-7.5">
															<h2 className="font-title text-2xl font-medium leading-[1.2] mb-2.5">Remarks</h2>
															<p className="font-base text-base font-normal leading-[1.4] mb-4">Prices can fluctuate during peak season dates.</p>
															<p className="font-base text-base font-normal leading-[1.4] mb-4">Confirmation is subject to availability at the time of booking </p>
														</li>
														<li Class="mb-7.5">
															<h2 className="font-title text-2xl font-medium leading-[1.2] mb-2.5">Highlights</h2>
															<p className="font-base text-base font-normal leading-[1.4] mb-4">Disneyland® Paris</p>
															<p className="font-base text-base font-normal leading-[1.4] mb-4">Keukenhof Gardens</p>
															<p className="font-base text-base font-normal leading-[1.4]">Tour Manager</p>
														</li>
													</ul>
												</div>
											</section>
										</div>
									</div>
								</div> 
							</div> 
							{/* SIDE BAR START */}
							<div className="lg:w-[40%] w-full mb-7.5">
								<aside  className="pl-2.5 my-sticky !-top-0 !h-[600px]">
									<div className="bg-white dark:bg-dark border border-paleaqua dark:border-paleaqua/40 rounded-3xl xl:p-10 p-5 mb-7.5">
										<span className="block text-primary dark:text-paleaqua font-semibold">Starting from</span>
										<span className="text-48 text-primary dark:text-paleaqua font-semibold">
											<s Class="text-38 text-citrusyellow">$99</s> $79
										</span>
										<span>/ Person</span>
										<div className="text-sm font-medium mb-2.5">
											<i className="fa-solid fa-wallet mr-1.25"></i>No Cost EMI Starts from
											<span className="text-lg"> $<span className="trvng-binding">49</span></span> 
											<a className="text-[#0D7BDC] duration-500 hover:text-primary dark:text-paleaqua block" href="javascript:void(0);">See option</a>
											
										</div>
										<button type="button" className="site-button butn-bg-shape" data-bs-toggle="modal" data-bs-target="#exampleModal" >Enquire Now</button>
									</div>
									<div className="bg-white dark:bg-dark border border-paleaqua dark:border-paleaqua/40 rounded-3xl xl:p-10 p-5 mb-7.5">
										<div className="w-full">
											<div className="w-full">
												<ul>
													<li className="pb-2.5 text-primary dark:text-paleaqua w-full text-sm font-medium">
														<span className="font-extrabold"><i className="fa-regular fa-clock"></i> Duration : </span>
														<span className="leading-6 text-2xs"> 14 Nights &amp; 15 Days </span>
													</li>
													<li className="pb-2.5 text-primary dark:text-paleaqua w-full text-sm font-medium">
														<span  className="font-extrabold"><i className="ti-location-pin"></i> Places to Visit :</span>
														<span className="leading-6 text-2xs">1N Germany | 3N Paris | 1N Rome | 1N Netherlands | 2N London | 3N Central Switzerland | 1N Innsbruck | 1N Padova | 1N Tuscany</span>
													</li>
												</ul>
											</div>
											<div className="relative my-10 text-center z-1 w-full before:block before:border before:border-[#bcbcbc] before:mt-4.5 before:absolute before:w-full before:-z-1"><span className="inline-block py-1.5 px-5 rounded-full w-auto text-15 font-medium text-white bg-primary"> Package Includes</span></div>
											<div>
												<ul className="flex flex-wrap justify-between">
													<li className="mx-2 inline-block text-sm leading-3.25 text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/hotels.png" alt="Hotal" 
															className="w-auto h-10 
															filter-[brightness(0)_saturate(100%)_invert(22%)_sepia(94%)_saturate(1002%)_hue-rotate(151deg)_brightness(96%)_contrast(95%)] mx-auto" />
														</div>
														<div className="my-2.5">Hotel</div>
													</li>
													<li className="mx-2 inline-block text-sm leading-3.25 text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/Sightseeing.png" alt="Sightseeing" 
															className="w-auto h-10 filter-[brightness(0)_saturate(100%)_invert(22%)_sepia(94%)_saturate(1002%)_hue-rotate(151deg)_brightness(96%)_contrast(95%)] mx-auto" />
														</div>
														<div className="my-2.5">Sightseeing</div>
													</li>
													<li className="mx-2 inline-block text-sm leading-3.25 text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/car.png" alt="car" 
															className="w-auto h-10 filter-[brightness(0)_saturate(100%)_invert(22%)_sepia(94%)_saturate(1002%)_hue-rotate(151deg)_brightness(96%)_contrast(95%)] mx-auto" />
														</div>
														<div cclass="my-2.5">Transfer</div>
													</li>
													<li className="mx-2 inline-block text-sm leading-3.25 text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/meal.png" alt="Meal" 
															className="w-auto h-10 filter-[brightness(0)_saturate(100%)_invert(22%)_sepia(94%)_saturate(1002%)_hue-rotate(151deg)_brightness(96%)_contrast(95%)] mx-auto" />
														</div>
														<div className="my-2.5">Meal</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</aside>
							</div>
							{/* SIDE BAR END */}
						</div>
					</div>
				</div>
    </div>
  );
}
