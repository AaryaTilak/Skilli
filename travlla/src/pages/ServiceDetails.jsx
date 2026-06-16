import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ServiceDetails() {
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
									<h2 className="lg:text-60 md:text-52 text-28 relative text-primary!">Service Detail</h2>
								</div>
								{/* BREADCRUMB ROW */}                            
								<div>
									<ul className="inline-block">
										<li className="text-base pr-7.5 relative inline-block font-semibold text-primary after:content-['-'] after:absolute after:right-2 after:-top-1.5 after:text-primary after:text-26 after:font-normal">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}>Home</a></li>
										<li className="relative inline-block text-base font-semibold text-primary">Service Detail</li>
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
					<div className="xl:pt-22.5 pt-10 xl:pb-30 pb-10">
						<div className="container">
							<div className="section-content">
								<div className="grid grid-cols-12 !justify-center">
									<div className="lg:col-span-8 col-span-12 mb-7.5 sm:px-3.75">
										<div className="trv-detail-main-wrap">
											{/*Top SLider*/}
											<div>
												<div className="swiper trv_d-slider mb-6.25">
													<div className="swiper-wrapper">
														<div className="swiper-slide">
															<div className="rounded-3xl overflow-hidden">
																<img src="/assets/images/detail-slider/slide2/pic1.jpg" alt="Image" className="rounded-3xl" width="834" height="406" loading="lazy" />
															</div>
														</div>
														<div className="swiper-slide">
															<div className="trv_d-slider-media">
																<img src="/assets/images/detail-slider/slide2/pic2.jpg" alt="Image" className="rounded-3xl" width="834" height="406" loading="lazy" />
															</div>
														</div>
														<div className="swiper-slide">
															<div className="rounded-3xl overflow-hidden">
																<img src="/assets/images/detail-slider/slide2/pic3.jpg" alt="Image" className="rounded-3xl" width="834" height="406" loading="lazy" />
															</div>
														</div>
														<div className="swiper-slide">
															<div className="rounded-3xl overflow-hidden">
																<img src="/assets/images/detail-slider/slide2/pic4.jpg" alt="Image" className="rounded-3xl" width="834" height="406" loading="lazy" />
															</div>
														</div>
														<div className="swiper-slide">
															<div className="rounded-3xl overflow-hidden">
																<img src="/assets/images/detail-slider/slide2/pic5.jpg" alt="Image" className="rounded-3xl" width="834" height="406" loading="lazy" />
															</div>
														</div>
														<div className="swiper-slide">
															<div className="rounded-3xl overflow-hidden">
																<img src="/assets/images/detail-slider/slide2/pic6.jpg" alt="Image" className="rounded-3xl" width="834" height="406" loading="lazy" />
															</div>
														</div>
													</div>
													<div className="swiper-pagination"></div>
												</div>
											</div>
											{/*Info Start*/}
											<div className="rounded-3xl md:p-7.5 p-5 bg-white dark:bg-dark">
												<h3 className="md:text-36 text-28 mb-5">Tour guide who give you proper information about every destination</h3>
												<div className="mb-7.5">
													<p className="mb-1font-title">A tour guide service provides travelers with knowledgeable professionals who lead and enhance travel experiences. Tour guides offer insights into the history, culture, and significance of the places they visit, enriching the tourist's understanding They manage itineraries, transportation, and access to attractions, ensuring a smooth and organized tour</p>
												</div>
												<h2 className="md:text-28 text-22 mb-6.25">What Is a Tour Guide Service?</h2>
												<ul className="mb-10">
													<li className="md:text-lg text-base font-normal relative pl-11.25 mb-4.5 text-primary dark:text-paleaqua font-base">
														<i className="fa-solid fa-circle-check absolute text-2xl text-secondary left-0 top-px"></i>
														Explaining historical, cultural, and natural significance of place
													</li>
													<li className="md:text-lg text-base font-normal relative pl-11.25 mb-4.5 text-primary dark:text-paleaqua font-base">
														<i className="fa-solid fa-circle-check absolute text-2xl text-secondary left-0 top-px"></i>
														Assisting with logistics like hotel check-ins, local transport, and dining
													</li>
													<li className="md:text-lg text-base font-normal relative pl-11.25 mb-4.5 text-primary dark:text-paleaqua font-base">
														<i className="fa-solid fa-circle-check absolute text-2xl text-secondary left-0 top-px"></i>
														Offering safety tips and local etiquette guidance
													</li>
													<li className="md:text-lg text-base font-normal relative pl-11.25 mb-4.5 text-primary dark:text-paleaqua font-base">
														<i className="fa-solid fa-circle-check absolute text-2xl text-secondary left-0 top-px"></i>
														Customizing itineraries based on traveler interests</li>
</ul>

												<h2 className="md:text-28 text-22 mb-6.25">Types of Tour Guide Services</h2>
												<div className="border-[6px] mb-10 rounded-3xl bg-white border-aquagray">
													<ul>
														<li className="sm:sm:flex flex-nowrap border-b border-aquagray">
															<div className="sm:pt-10 pt-5 sm:min-w-48.75 sm:w-48.75 pb-3.75 md:px-7.5 px-3.75">
																<span className="block text-xl font-title text-primary font-medium">Private Guide</span>
															</div>
															<div className="flex-1 sm:pt-10 pb-3.75 px-5 border-l border-aquagray text-base">
																<p>One-on-one personalized tours, often tailored to specific interests</p>
															</div>
														</li>
														<li className="sm:flex flex-nowrap border-b border-aquagray">
															<div className="sm:min-w-48.75 sm:w-48.75 py-3.75 md:px-7.5 px-3.75 max-sm:pb-0">
																<span className="block text-xl font-title text-primary font-medium">Group Tours</span>
															</div>
															<div className="flex-1 py-3.75 px-5 border-l border-aquagray text-base">
																<p>Shared tours with multiple travelers, often more budget-friendly</p>
															</div>
														</li>
														<li className="sm:flex flex-nowrap border-b border-aquagray">
															<div className="sm:min-w-48.75 sm:w-48.75 py-3.75 md:px-7.5 px-3.75 max-sm:pb-0"><span className="block text-xl font-title text-primary font-medium">City Guides</span></div>
															<div className="flex-1 py-3.75 px-5 border-l border-aquagray text-base">
																<p>Local experts for urban exploration—museums, markets, monuments</p>
															</div>
														</li>
														<li className="sm:flex flex-nowrap border-b border-aquagray">
															<div className="sm:min-w-48.75 sm:w-48.75 py-3.75 md:px-7.5 px-3.75 max-sm:pb-0"><span className="block text-xl font-title text-primary font-medium">Cultural Guides</span></div>
															<div className="flex-1 py-3.75 px-5 border-l border-aquagray text-base">
																<p>Focus on traditions, festivals, cuisine, and heritage sites</p>
															</div>
														</li>
														<li className="sm:flex flex-nowrap border-b border-aquagray">
															<div className="sm:min-w-48.75 sm:w-48.75 py-3.75 md:px-7.5 px-3.75 max-sm:pb-0"><span className="block text-xl font-title text-primary font-medium">Tour Managers</span></div>
															<div className="flex-1 py-3.75 px-5 border-l border-aquagray text-base">
																<p>Oversee multi-day trips, handling logistics and group coordination</p>
															</div>
														</li>
														<li className="sm:flex flex-nowrap border-b border-aquagray">
															<div className="sm:min-w-48.75 sm:w-48.75 py-3.75 md:px-7.5 px-3.75 max-sm:pb-0"><span className="block text-xl font-title text-primary font-medium">Nature & Wildlife Guides</span></div>
															<div className="flex-1 py-3.75 px-5 border-l border-aquagray text-base">
																<p>Specialists in safaris, trekking, and eco-tourism areas like sanctuaries</p>
															</div>
														</li>
													</ul>
												</div>

												<h2 className="md:text-28 text-22 mb-6.25">Key Features of Professional Tour Guides</h2>
												<ul className="mb-10">
													<li className="md:text-lg text-base font-normal relative pl-11.25 mb-4.5 text-primary dark:text-paleaqua font-base">
														<i className="fa-solid fa-circle-check absolute text-2xl text-secondary left-0 top-px"></i>
														<span className="font-semibold">Certified by the Government of USA: </span>Licensed guides undergo rigorous training and exams
													</li>
													<li className="md:text-lg text-base font-normal relative pl-11.25 mb-4.5 text-primary dark:text-paleaqua font-base">
														<i className="fa-solid fa-circle-check absolute text-2xl text-secondary left-0 top-px"></i>
														<span className="font-semibold">Multilingual: </span>Many guides speak English, Hindi, and regional languages
													</li>
													<li className="md:text-lg text-base font-normal relative pl-11.25 mb-4.5 text-primary dark:text-paleaqua font-base">
														<i className="fa-solid fa-circle-check absolute text-2xl text-secondary left-0 top-px"></i>
														<span className="font-semibold">Local Expertise: </span>Deep knowledge of history, culture, and hidden gems
													</li>
													<li className="md:text-lg text-base font-normal relative pl-11.25 mb-4.5 text-primary dark:text-paleaqua font-base">
														<i className="fa-solid fa-circle-check absolute text-2xl text-secondary left-0 top-px"></i>
														<span className="font-semibold">Flexible Engagement: </span>You can choose full-time guidance or occasional support
													</li>
													<li className="md:text-lg text-base font-normal relative pl-11.25 mb-4.5 text-primary dark:text-paleaqua font-base">
														<i className="fa-solid fa-circle-check absolute text-2xl text-secondary left-0 top-px"></i>
														<span className="font-semibold">Safety & Support: </span>Guides help navigate unfamiliar areas and handle emergencies
													</li>
												</ul>
												<h2 className="md:text-28 text-22 mb-6.25">Frequently Ask Questions</h2>
												{/* Accordian */}
												
												<div className="border-[6px] border-aquagray mb-10 rounded-3xl bg-white sm:p-7.5 p-4.5 tab-content">
													<div className="custom-accordion style-2 myAccordion">
														{/*One*/}
														<div className="relative duration-500 accordion-item">
															<div className="relative accordion-header duration-500 cursor-pointer">
																<h2 className="text-lg text-primary!">
																	<a className="sm:text-2xl text-xl bg-white border-b border-aquagray block py-5 pr-7.5">
																	01 - How can I book a trip?
																	<span className="pt-5 pb-3.75 text-primary absolute right-3 top-1.5 h-full text-22 flex duration-500"><i className="las la-angle-right relative top-1/2 left-1/2 -translate-1/2"></i></span>
																	</a>
																</h2>
															</div>
															<div className="accordion-content">
																<div className="content-inner sm:p-5 py-5 sm:pl-10 text-base border-b border-aquagray bg-white">
																	Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi cons the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion.
																</div>
															</div>
														</div>

														{/*Two*/}
														<div className="relative duration-500 accordion-item">
															<div className="relative accordion-header duration-500 cursor-pointer">
																<h2 className="text-lg text-primary!">
																	<a className="sm:text-2xl text-xl bg-white border-b border-aquagray block py-5 pr-7.5">
																	02 - What is your cancellation policy?
																	<span className="pt-5 pb-3.75 text-primary absolute right-3 top-1.5 h-full text-22 flex duration-500"><i className="las la-angle-right relative top-1/2 left-1/2 -translate-1/2"></i></span>
																	</a>
																</h2>
															</div>
															<div className="accordion-content">
																<div className="content-inner sm:p-5 py-5 sm:pl-10 text-base border-b border-aquagray bg-white">
																	Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi cons the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion.
																</div>
															</div>
														</div> 
													
														{/*Three*/}
														<div className="relative duration-500 accordion-item">
															<div className="relative accordion-header duration-500 cursor-pointer">
																<h2 className="text-lg text-primary!">
																	<a className="sm:text-2xl text-xl bg-white border-b border-aquagray block py-5 pr-7.5">
																	03 - Do you offer international travel packages?
																	<span className="pt-5 pb-3.75 text-primary absolute right-3 top-1.5 h-full text-22 flex duration-500"><i className="las la-angle-right relative top-1/2 left-1/2 -translate-1/2"></i></span>
																	</a>
																</h2>
															</div>
															<div className="accordion-content">
																<div className="content-inner sm:p-5 py-5 sm:pl-10 text-base border-b border-aquagray bg-white">
																	Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi cons the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion.
																</div>
															</div>
														</div> 
													
														{/*Four*/}
														<div className="relative duration-500 accordion-item">
															<div className="relative accordion-header duration-500 cursor-pointer">
																<h2 className="text-lg text-primary!">
																	<a className="sm:text-2xl text-xl bg-white block py-5 pr-7.5">
																	04 - Are there group discounts available?
																	<span className="pt-5 pb-3.75 text-primary absolute right-3 top-1.5 h-full text-22 flex duration-500"><i className="las la-angle-right relative top-1/2 left-1/2 -translate-1/2"></i></span>
																	</a>
																</h2>
															</div>
															<div className="accordion-content">
																<div className="content-inner sm:p-5 py-5 sm:pl-10 text-base border-b border-aquagray bg-white">
																	Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi cons the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion.
																</div>
															</div>
														</div> 
													</div> 
												</div>

												<h2 className="md:text-28 text-22 mb-6.25">Our Scheduled Amenities</h2>
												<div>
													<div className="rounded-3xl bg-eggshell mb-10">
														<ul>
															<li className="flex flex-nowrap border-aquagray border-b">
																<div className="text-2xl font-semibold font-title sm:pt-10 pt-5 px-7.5 pb-2.5">
																For Travel 
																</div>
															</li>
															<li className="sm:flex flex-nowrap border-aquagray border-b">
																<div className="sm:min-w-48.75 sm:w-48.75 py-3.75 md:px-7.5 px-3.75 max-sm:pb-0"><span className="block text-xl font-title text-primary font-medium">Hotel</span></div>
																<div className="flex-1 py-3.75 px-5 text-base sm:border-l border-aquagray">
																	<p>Free Wi-Fi, toiletries, heated floors, in-room slippers, cable TV, room service</p>
																</div>
															</li>
															<li className="sm:flex flex-nowrap border-aquagray border-b">
																<div className="sm:min-w-48.75 sm:w-48.75 py-3.75 md:px-7.5 px-3.75 max-sm:pb-0"><span className="block text-xl font-title text-primary font-medium">Restaurants</span></div>
																<div className="flex-1 py-3.75 px-5 text-base sm:border-l border-aquagray">
																	<p>Free water & side dishes, call buttons, Wi-Fi, mobile ordering</p>
																</div>
															</li>
															<li className="sm:flex flex-nowrap border-aquagray border-b">
																<div className="sm:min-w-48.75 sm:w-48.75 py-3.75 md:px-7.5 px-3.75 max-sm:pb-0"><span className="block text-xl font-title text-primary font-medium">Public Facilities</span></div>
																<div className="flex-1 py-3.75 px-5 text-base sm:border-l border-aquagray">
																	<p>Clean restrooms, free Wi-Fi (Seoul), tourist information centers, lockers</p>
																</div>
															</li>
															<li className="sm:flex flex-nowrap border-aquagray border-b">
																<div className="sm:min-w-48.75 sm:w-48.75 py-3.75 md:px-7.5 px-3.75 max-sm:pb-0"><span className="block text-xl font-title text-primary font-medium">Transportations</span></div>
																<div className="flex-1 py-3.75 px-5 text-base sm:border-l border-aquagray">
																	<p>High-speed KTX trains, T-money transportation cards, mobile apps</p>
																</div>
															</li>
															<li className="sm:flex flex-nowrap">
																<div className="sm:min-w-48.75 sm:w-48.75 pt-3.75 sm:pb-7.5 px-5"><span className="block text-xl font-title text-primary font-medium">Shopping Area</span></div>
																<div className="flex-1 pt-3.75 pb-7.5 px-5 text-base sm:border-l border-aquagray">
																	<p>Tax refund counters, delivery services, foreign language staff (in major stores)</p>
																</div>
															</li>
														</ul>
													</div>
													<div className="rounded-3xl bg-eggshell">
														<ul>
															<li className="flex flex-nowrap border-aquagray border-b">
																<div className="text-2xl font-semibold font-title sm:pt-10 pt-5 px-7.5 pb-2.5">
																For Travel 
																</div>
															</li>
															<li className="sm:flex flex-nowrap border-aquagray border-b">
																<div className="sm:min-w-48.75 sm:w-48.75 py-3.75 md:px-7.5 px-3.75 max-sm:pb-0"><span className="block text-xl font-title text-primary font-medium">Breakfast</span></div>
																<div className="flex-1 py-3.75 px-5 text-base sm:border-l border-aquagray">
																	<p>Korean breakfasts often include soup, rice, and side dishes; Western options</p>
																</div>
															</li>
															<li className="sm:flex flex-nowrap border-aquagray border-b">
																<div className="sm:min-w-48.75 sm:w-48.75 py-3.75 md:px-7.5 px-3.75 max-sm:pb-0"><span className="block text-xl font-title text-primary font-medium">Friendly Cafés</span></div>
																<div className="flex-1 py-3.75 px-5 text-base sm:border-l border-aquagray">
																	<p>Many offer English menus, desserts, Korean snacks, and unique drinks</p>
																</div>
															</li>
															<li className="sm:flex flex-nowrap border-aquagray border-b">
																<div className="sm:min-w-48.75 sm:w-48.75 py-3.75 md:px-7.5 px-3.75 max-sm:pb-0"><span className="block text-xl font-title text-primary font-medium">Delivery Apps</span></div>
																<div className="flex-1 py-3.75 px-5 text-base sm:border-l border-aquagray">
																	<p>Apps like Baemin, Yogiyo offer English support and deliver almost anywhere</p>
																</div>
															</li>
															<li className="sm:flex flex-nowrap border-aquagray border-b">
																<div className="sm:min-w-48.75 sm:w-48.75 py-3.75 md:px-7.5 px-3.75 max-sm:pb-0"><span className="block text-xl font-title text-primary font-medium">Veg/ Nonveg</span></div>
																<div className="flex-1 py-3.75 px-5 text-base sm:border-l border-aquagray">
																	<p>Growing availability, especially in Seoul; some apps help locate vegan food</p>
																</div>
															</li>
															<li className="sm:flex flex-nowrap">
																<div className="sm:min-w-48.75 sm:w-48.75 pt-3.75 sm:pb-7.5 px-5"><span className="block text-xl font-title text-primary font-medium">Free Side Dishes </span></div>
																<div className="flex-1 pt-3.75 pb-7.5 px-5 text-base sm:border-l border-aquagray">
																	<p>Most Korean restaurants offer unlimited free side dishes with meals</p>
																</div>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div> 
									</div>
									{/* SIDE BAR START */}
									<div className="lg:col-span-4 col-span-12 mb-7.5 px-3.75">
										                                <aside className="side-bar my-sticky space-top-0">
                                    {/* SEARCH */}
                                    <div className="mb-7.5 relative">                 
                                        <form role="search" method="post">
                                            <div className="relative flex flex-wrap items-stretch w-full">
                                                <label htmlFor="searchInput" className="sr-only">Search</label>
                                                <input id="searchInput" name="news-letter" type="text" aria-label="Search" className="bg-white rounded-25xl pt-3.75 pb-2.5 px-7.5 border border-primary/20 h-14 w-full outline-0" placeholder="Search ..." />
                                                <span className="absolute right-0 z-10">
                                                    <button type="submit" aria-label="Search" className="h-14 px-5 cursor-pointer"><i className="fa fa-search text-lg" aria-hidden="true"></i></button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                    {/* RECENT POSTS */}
                                    <div className="mb-7.5 trv-recent-posts">
                                        <div className="mb-5">
                                            <h4 className="relative pl-4 table text-2xl font-semibold py-1.25 px-5 bg-linear-(--heading-gradient) border-l-4 border-citrusyellow mb-6">Recent Posts</h4>
                                        </div>
                                        <div className="bg-white dark:bg-dark border border-primary/20 xl:rounded-3xl rounded-xxl xl:p-10 p-5">
                                            <div className="flex relative pb-5 border-b border-dashed border-primary/50">
                                                <div className="font-title size-10 min-w-10 text-sm leading-none text-white bg-primary text-center flex flex-col items-center justify-center rounded-md"><span className="block text-xl leading-none font-bold">14</span>June</div>                                        
                                                <div className="ml-4.5">
                                                    <div className="text-lg font-medium text-citrusyellow whitespace-nowrap table font-title leading-none pb-3.75">Aidan Butler</div>
                                                    <div className="">
                                                        <h5 className="text-xl bg-block"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }} className="hover:text-citrusyellow duration-500">Resources for your first trip to overseas vacation</a></h5>
                                                    </div>
                                                </div>                                
                                            </div>
                                            <div className="flex relative py-5 border-b border-dashed border-primary/50">
                                                <div className="font-title size-10 min-w-10 text-sm leading-none text-white bg-primary text-center flex flex-col items-center justify-center rounded-md"><span className="block text-xl leading-none font-bold">20</span>June</div>                                        
                                                <div className="ml-4.5">
                                                    <div className="text-lg font-medium text-citrusyellow whitespace-nowrap table font-title leading-none pb-3.75">Ricardo Bell</div>
                                                    <div className="">
                                                        <h5 className="text-xl bg-block"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }} className="hover:text-citrusyellow duration-500">How to get acquainted with natives in a strange land</a></h5>
                                                    </div>
                                                </div>                                
                                            </div>
                                            <div className="flex relative py-5">
                                                <div className="font-title size-10 min-w-10 text-sm leading-none text-white bg-primary text-center flex flex-col items-center justify-center rounded-md"><span className="block text-xl leading-none font-bold">24</span>June</div>                                        
                                                <div className="ml-4.5">
                                                    <div className="text-lg font-medium text-citrusyellow whitespace-nowrap table font-title leading-none pb-3.75">Martin Hicks</div>
                                                    <div className="">
                                                        <h5 className="text-xl bg-block"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }} className="hover:text-citrusyellow duration-500">Step by step guide to planning your ideal holiday</a></h5>
                                                    </div>
                                                </div>                                
                                            </div>
                                        </div>
                                    </div>
                                    {/* Top Destinations */}   
                                    <div className="mb-7.5">
                                        <div className="mb-5">
                                            <h4 className="relative pl-4 table text-2xl font-semibold py-1.25 px-5 bg-linear-(--heading-gradient) border-l-4 border-citrusyellow mb-6">Top Destinations</h4>
                                        </div>
                                        <ul className="bg-white dark:bg-dark border border-primary/20 xl:rounded-3xl rounded-xxl xl:p-10 p-5">
                                            <li className="relative py-1.25 first:pt-0 last:pb-0 flex justify-between flex-nowrap">
                                                <a className="inline-block text-xl font-title text-heading font-medium hover:text-citrusyellow duration-500" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}>Thailand</a><span className="badge">( 05 Listing )</span>
                                            </li>
                                            <li className="relative py-1.25 first:pt-0 last:pb-0 flex justify-between flex-nowrap">
                                                <a className="inline-block text-xl font-title text-heading font-medium hover:text-citrusyellow duration-500" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}>Maldives</a><span className="badge">( 07 Listing )</span>
                                            </li>
                                            <li className="relative py-1.25 first:pt-0 last:pb-0 flex justify-between flex-nowrap">
                                                <a className="inline-block text-xl font-title text-heading font-medium hover:text-citrusyellow duration-500" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}>Bangkok</a><span className="badge">( 08 Listing )</span>
                                            </li>
                                            <li className="relative py-1.25 first:pt-0 last:pb-0 flex justify-between flex-nowrap">
                                                <a className="inline-block text-xl font-title text-heading font-medium hover:text-citrusyellow duration-500" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}>Peris</a><span className="badge">( 09 Listing )</span>
                                            </li>
                                            <li className="relative py-1.25 first:pt-0 last:pb-0 flex justify-between flex-nowrap">
                                                <a className="inline-block text-xl font-title text-heading font-medium hover:text-citrusyellow duration-500" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}>Spain</a><span className="badge">( 02 Listing )</span>
                                            </li>
                                        </ul>
                                    </div>  
                                    {/* TAGS */}
                                    <div className="mb-7.5">
                                        <div className="mb-5">
                                            <h4 className="relative pl-4 table text-2xl font-semibold py-1.25 px-5 bg-linear-(--heading-gradient) border-l-4 border-citrusyellow mb-6">Popular Tags</h4>
                                        </div>
                                        <div className="bg-white dark:bg-dark border border-primary/20 xl:rounded-3xl rounded-xxl xl:p-10 p-5 flex flex-wrap gap-1.25">
                                            <a className="block text-primary dark:text-white bg-light text-base font-title font-medium duration-500 py-1.75 px-5 rounded-3xl hover:bg-citrusyellow" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}>Food</a>
                                            <a className="block text-primary dark:text-white bg-light text-base font-title font-medium duration-500 py-1.75 px-5 rounded-3xl hover:bg-citrusyellow" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}>Tour</a>
                                            <a className="block text-primary dark:text-white bg-light text-base font-title font-medium duration-500 py-1.75 px-5 rounded-3xl hover:bg-citrusyellow" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}>Pool</a>
                                            <a className="block text-primary dark:text-white bg-light text-base font-title font-medium duration-500 py-1.75 px-5 rounded-3xl hover:bg-citrusyellow" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}>Safari</a>
                                            <a className="block text-primary dark:text-white bg-light text-base font-title font-medium duration-500 py-1.75 px-5 rounded-3xl hover:bg-citrusyellow" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}>Sky View</a>
                                            <a className="block text-primary dark:text-white bg-light text-base font-title font-medium duration-500 py-1.75 px-5 rounded-3xl hover:bg-citrusyellow" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}>Hotel</a>
                                            <a className="block text-primary dark:text-white bg-light text-base font-title font-medium duration-500 py-1.75 px-5 rounded-3xl hover:bg-citrusyellow" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}>Adventure</a>
                                            <a className="block text-primary dark:text-white bg-light text-base font-title font-medium duration-500 py-1.75 px-5 rounded-3xl hover:bg-citrusyellow" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}>Travel</a>
                                            <a className="block text-primary dark:text-white bg-light text-base font-title font-medium duration-500 py-1.75 px-5 rounded-3xl hover:bg-citrusyellow" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}>Luxury</a>
                                            <a className="block text-primary dark:text-white bg-light text-base font-title font-medium duration-500 py-1.75 px-5 rounded-3xl hover:bg-citrusyellow" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}>Wildlife</a>
                                        </div>
                                    </div> 

                                    {/* GALLERY */}
                                    <div className="mb-7.5">
                                        <div className="mb-5">
                                            <h4 className="relative pl-4 table text-2xl font-semibold py-1.25 px-5 bg-linear-(--heading-gradient) border-l-4 border-citrusyellow mb-6">Gallery</h4>
                                        </div>
                                        <div className="bg-white dark:bg-dark border border-primary/20 xl:rounded-3xl rounded-xxl xl:p-10 p-5">
                                            <ul className="flex flex-wrap sm:gap-1 gap-y-0.5 gap-x-[0.5%]">
                                                <li className="lg:w-[calc(33.7%_-_4px)] w-[49%] group">
                                                    <div className="relative z-1">
                                                        <a className="block text-center relative rounded-md bg-primary elem" href="/assets/images/trv-gallery/pic1.jpg" title="Title 1" data-lcl-author="" data-lcl-thumb="assets/images/trv-gallery/pic1.jpg">
                                                            <img src="/assets/images/trv-gallery/pic1.jpg" alt="" className="h-26.5 w-full object-cover object-center rounded-md duration-500 group-hover:opacity-30" />
                                                            <i className="fa fa-file-image opacity-0 size-7.5 !leading-7.5 rounded-full bg-white text-primary absolute top-1/2 left-1/2 -translate-1/2 duration-500 group-hover:opacity-100"></i>     
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="lg:w-[calc(33.7%_-_4px)] w-[49%] group">
                                                    <div className="relative z-1">
                                                        <a className="block text-center relative rounded-md bg-primary elem" href="/assets/images/trv-gallery/pic2.jpg" title="Title 2" data-lcl-author="" data-lcl-thumb="assets/images/trv-gallery/pic2.jpg">
                                                            <img src="/assets/images/trv-gallery/pic2.jpg" alt="" className="h-26.5 w-full object-cover object-center rounded-md duration-500 group-hover:opacity-30" />
                                                            <i className="fa fa-file-image opacity-0 size-7.5 !leading-7.5 rounded-full bg-white text-primary absolute top-1/2 left-1/2 -translate-1/2 duration-500 group-hover:opacity-100"></i>     
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="lg:w-[calc(33.7%_-_4px)] w-[49%] group">
                                                    <div className="relative z-1">
                                                        <a className="block text-center relative rounded-md bg-primary elem" href="/assets/images/trv-gallery/pic3.jpg" title="Title 3"  data-lcl-author="" data-lcl-thumb="assets/images/trv-gallery/pic3.jpg">
                                                            <img src="/assets/images/trv-gallery/pic3.jpg" alt="" className="h-26.5 w-full object-cover object-center rounded-md duration-500 group-hover:opacity-30" />
                                                            <i className="fa fa-file-image opacity-0 size-7.5 !leading-7.5 rounded-full bg-white text-primary absolute top-1/2 left-1/2 -translate-1/2 duration-500 group-hover:opacity-100"></i>     
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="lg:w-[calc(33.7%_-_4px)] w-[49%] group">
                                                    <div className="relative z-1">
                                                        <a className="block text-center relative rounded-md bg-primary elem" href="/assets/images/trv-gallery/pic4.jpg" title="Title 4"  data-lcl-author="" data-lcl-thumb="assets/images/trv-gallery/pic4.jpg">
                                                            <img src="/assets/images/trv-gallery/pic4.jpg" alt="" className="h-26.5 w-full object-cover object-center rounded-md duration-500 group-hover:opacity-30" />
                                                            <i className="fa fa-file-image opacity-0 size-7.5 !leading-7.5 rounded-full bg-white text-primary absolute top-1/2 left-1/2 -translate-1/2 duration-500 group-hover:opacity-100"></i>     
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="lg:w-[calc(33.7%_-_4px)] w-[49%] group">
                                                    <div className="relative z-1">
                                                        <a className="block text-center relative rounded-md bg-primary elem" href="/assets/images/trv-gallery/pic5.jpg" title="Title 5"  data-lcl-author="" data-lcl-thumb="assets/images/trv-gallery/pic5.jpg">
                                                            <img src="/assets/images/trv-gallery/pic5.jpg" alt="" className="h-26.5 w-full object-cover object-center rounded-md duration-500 group-hover:opacity-30" />
                                                            <i className="fa fa-file-image opacity-0 size-7.5 !leading-7.5 rounded-full bg-white text-primary absolute top-1/2 left-1/2 -translate-1/2 duration-500 group-hover:opacity-100"></i>     
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="lg:w-[calc(33.7%_-_4px)] w-[49%] group">
                                                    <div className="relative z-1">
                                                        <a className="block text-center relative rounded-md bg-primary elem" href="/assets/images/trv-gallery/pic6.jpg" title="Title 6"  data-lcl-author="" data-lcl-thumb="assets/images/trv-gallery/pic6.jpg">
                                                            <img src="/assets/images/trv-gallery/pic6.jpg" alt="" className="h-26.5 w-full object-cover object-center rounded-md duration-500 group-hover:opacity-30" />
                                                            <i className="fa fa-file-image opacity-0 size-7.5 !leading-7.5 rounded-full bg-white text-primary absolute top-1/2 left-1/2 -translate-1/2 duration-500 group-hover:opacity-100"></i>     
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div> 
                                    </div> 
                                </aside>
									</div>
									{/* SIDE BAR END */}       
								</div>
							</div>
						</div>
					</div>
    </div>
  );
}
