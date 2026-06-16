import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DestinationDetails() {
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
									<h2 className="lg:text-60 md:text-52 text-28 relative text-primary!">Destination Details</h2>
								</div>
								{/* BREADCRUMB ROW */}                            
								<div>
									<ul className="inline-block">
										<li className="text-base pr-7.5 relative inline-block font-semibold text-primary after:content-['-'] after:absolute after:right-2 after:-top-1.5 after:text-primary after:text-26 after:font-normal">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}>Home</a></li>
										<li className="relative inline-block text-base font-semibold text-primary">Destination Details</li>
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
				<div className="xl:pt-30 pt-17.5 xl:pb-22.5 pb-10">
				<div className="mx-auto mb-7.5 max-w-264 px-3.75">
						{/*Top SLider*/}
						<div className="trv-detail-slider">
							<div className="swiper trv_d-slider">
								<div className="swiper-wrapper">
									<div className="swiper-slide">
										<div className="rounded-3xl">
											<img src="/assets/images/detail-slider/slide1/pic1.jpg" alt="Image" className="rounded-3xl" width="1026" height="500" loading="lazy" />   
										</div>
									</div>
									<div className="swiper-slide">
										<div className="rounded-3xl">
											<img src="/assets/images/detail-slider/slide1/pic2.jpg" alt="Image" className="rounded-3xl" width="1026" height="500" loading="lazy" />   
										</div>
									</div>
									<div className="swiper-slide">
										<div className="rounded-3xl">
											<img src="/assets/images/detail-slider/slide1/pic3.jpg" alt="Image" className="rounded-3xl" width="1026" height="500" loading="lazy" />   
										</div>
									</div>
									<div className="swiper-slide">
										<div className="rounded-3xl">
											<img src="/assets/images/detail-slider/slide1/pic4.jpg" alt="Image" className="rounded-3xl" width="1026" height="500" loading="lazy" />   
										</div>
									</div>
									<div className="swiper-slide">
										<div className="rounded-3xl">
											<img src="/assets/images/detail-slider/slide1/pic5.jpg" alt="Image" className="rounded-3xl" width="1026" height="500" loading="lazy" />   
										</div>
									</div>
									<div className="swiper-slide">
										<div className="rounded-3xl">
											<img src="/assets/images/detail-slider/slide1/pic6.jpg" alt="Image" className="rounded-3xl" width="1026" height="500" loading="lazy" />   
										</div>
									</div>
								</div>
								<div className="swiper-pagination"></div>
							</div>
						</div>
						{/*Info Start*/}
						<div className="sm:p-7.5 p-3.5 rounded-3xl bg-white dark:bg-dark">
							<h3 className="md:text-36 text-28 mb-5">Tokyo City Japan Overview</h3>
							<div className="mb-7.5">
							<p className="text-base mb-4">Tokyo, the capital city of Japan, is a dynamic metropolis that blends traditional culture with cutting-edge modernity. As one of the most populous cities in the world, Tokyo is known for its towering skyscrapers, bustling streets, and vibrant neighborhoods such as Shibuya and Shinjuku. The city offers a rich cultural experience, from historic temples like Senso-ji in Asakusa to the serene beauty of the Imperial Palace gardens. Tokyo is also a global hub for technology, fashion, and cuisine, offering everything from Michelin-starred restaurants to local ramen shops. With its efficient public transportation, safety, and endless attractions, Tokyo captivates visitors from around the world.</p>

							<p className="text-base mb-4">Beyond its fast-paced urban life, Tokyo is a city where tradition and innovation exist side by side. In districts like Ginza, luxury shopping and high-end dining meet timeless Japanese hospitality, while areas like Akihabara and Harajuku showcase Japan's pop culture, gaming, and fashion subcultures. Tokyo also plays a central role in Japan's economy and politics, housing major corporations, government buildings, and global financial institutions.</p>

							<p className="text-base mb-4">Nature and calm are never far away in Tokyo. Despite its modern skyline, the city is dotted with peaceful parks and green spaces such as Ueno Park, Yoyogi Park, and the Meiji Shrine forest. In spring, cherry blossoms (sakura) transform the city into a breathtaking landscape of pink, drawing crowds for traditional hanami (flower-viewing) picnics. Throughout the year, Tokyo hosts cultural festivals, sumo tournaments, and seasonal events that reflect Japan's deep-rooted customs.</p>
							</div>

							<h2 className="mb-6.25 md:text-28 text-22">Destinations Features</h2>
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
									Customizing itineraries based on traveler interests
								</li>
							</ul>
							<h2 className="mb-6.25 md:text-28 text-22">Our Pricing Plan</h2>
							<div className="grid grid-cols-12 sm:gap-x-7.5">
								<div className="md:col-span-6 col-span-12">
									<div className="mb-7.5 sm:p-7.5 p-3.5 rounded-3xl bg-primary">
										<div className="mb-2.5">
											<img src="/assets/images/trv-pricing/pic1.jpg" alt="image" className="rounded-3xl w-full" width="408" height="181" loading="lazy" />
										</div>
										<div>
											<div className="flex items-center justify-between mb-10">
												<h2 className="text-28 !text-white">Budget Travel</h2>
												<div className="text-center">
													<span className="text-white text-34 font-black block">$59</span>
													<span className="text-base block text-white">Per Day</span>
												</div>
											</div>
											<ul className="mb-7.5">
												<li className="mb-3.5 font-base text-base text-white font-medium relative pl-11">
													<i className="fa-solid fa-arrow-right text-citrusyellow absolute left-0 top-0.75 border border-citrusyellow size-6 rounded-full !flex items-center justify-center"></i>
													3 star hotel (4 nights)
												</li>
												<li className="mb-3.5 font-base text-base text-white font-medium relative pl-11">
													<i className="fa-solid fa-arrow-right text-citrusyellow absolute left-0 top-0.75 border border-citrusyellow size-6 rounded-full !flex items-center justify-center"></i>
													Local taxis
												</li>
												<li className="mb-3.5 font-base text-base text-white font-medium relative pl-11">
													<i className="fa-solid fa-arrow-right text-citrusyellow absolute left-0 top-0.75 border border-citrusyellow size-6 rounded-full !flex items-center justify-center"></i>
													Sightseeing, tickets
												</li>
												<li className="mb-3.5 font-base text-base text-white font-medium relative pl-11">
													<i className="fa-solid fa-arrow-right text-citrusyellow absolute left-0 top-0.75 border border-citrusyellow size-6 rounded-full !flex items-center justify-center"></i>
													Tourist visa
												</li>
												<li className="mb-3.5 font-base text-base text-white font-medium relative pl-11">
													<i className="fa-solid fa-arrow-right text-citrusyellow absolute left-0 top-0.75 border border-citrusyellow size-6 rounded-full !flex items-center justify-center"></i>
													Meals & snacks
												</li>
											</ul>
											<div className="trv-discover-btn">
												<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/pricing'); }} className="site-button butn-bg-shape">Discover More</a>
											</div>
										</div>
									</div>
								</div>
								<div className="md:col-span-6 col-span-12">
									<div className="mb-7.5 p-7.5 rounded-3xl bg-light">
										<div className="mb-2.5">
											<img src="/assets/images/trv-pricing/pic3.png" alt="image" className="rounded-3xl w-full" width="408" height="181" loading="lazy" />
										</div>
										<div>
											<div className="flex items-center justify-between mb-10">
												<h2 className="text-28">Mid-Range Travel</h2>
												<div className="text-center">
													<span className="text-primary dark:text-paleaqua text-34 font-black block">$79</span>
													<span className="text-base block text-primary dark:text-paleaqua">Per Day</span>
												</div>
											</div>
											<ul className="mb-7.5">
												<li className="mb-3.5 font-base text-base text-primary dark:text-paleaqua font-medium relative pl-11">
													<i className="fa-solid fa-arrow-right text-citrusyellow absolute left-0 top-0.75 border border-citrusyellow size-6 rounded-full !flex items-center justify-center"></i>
													3 star hotel (4 nights)
												</li>
												<li className="mb-3.5 font-base text-base text-primary dark:text-paleaqua font-medium relative pl-11">
													<i className="fa-solid fa-arrow-right text-citrusyellow absolute left-0 top-0.75 border border-citrusyellow size-6 rounded-full !flex items-center justify-center"></i>
													Local taxis
												</li>
												<li className="mb-3.5 font-base text-base text-primary dark:text-paleaqua font-medium relative pl-11">
													<i className="fa-solid fa-arrow-right text-citrusyellow absolute left-0 top-0.75 border border-citrusyellow size-6 rounded-full !flex items-center justify-center"></i>
													Sightseeing, tickets
												</li>
												<li className="mb-3.5 font-base text-base text-primary dark:text-paleaqua font-medium relative pl-11">
													<i className="fa-solid fa-arrow-right text-citrusyellow absolute left-0 top-0.75 border border-citrusyellow size-6 rounded-full !flex items-center justify-center"></i>
													Tourist visa
												</li>
												<li className="mb-3.5 font-base text-base text-primary dark:text-paleaqua font-medium relative pl-11">
													<i className="fa-solid fa-arrow-right text-citrusyellow absolute left-0 top-0.75 border border-citrusyellow size-6 rounded-full !flex items-center justify-center"></i>
													Meals & snacks
												</li>
											</ul>
											<div className="trv-discover-btn">
												<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/pricing'); }} className="site-button butn-bg-shape">Discover More</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<h2 className="mb-6.25 md:text-28 text-22">Our Top Destinations</h2>
							<div className="grid grid-cols-12 mb-2.5 sm:gap-x-7.5">
								<div className="lg:col-span-4 md:col-span-6 col-span-12 mb-7.5">
									<div className="relative">
										<div className="relative overflow-hidden rounded-t-3xl">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}><img src="/assets/images/tour/style2/pic1.jpg" alt="Image" className="h-65 w-full object-cover object-center" width="302" height="260" loading="lazy" /></a>
										</div>
										<div className="duration-500 p-5 rounded-b-3xl bg-white flex flex-col justify-between shadow-trv-content3">
											<h3 className="text-xl font-medium mb-2.5 text-primary!">
												<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}>
													Bali, Indonesia
												</a>
											</h3>
											<div className="flex justify-between mb-7.5">
												<div className="flex items-center">
													<span className="text-primary mr-2.5">(4.8)</span>
													<div className="trv-review-rating">
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
													</div>
												</div>
												<div className="text-primary font-semibold text-sm flex items-center">
													<i className="flaticon-calendar text-xl mr-2.5"></i>
													<span className="block">4 days</span>
												</div>
											</div>
											<div className="flex justify-between">
												<div className="trv-book">
													<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="site-button outline btn-sm">Book Now</a>
												</div>
												<div className="flex items-center">
													<span className="text-citrusyellow text-28 leading-[1.3] font-black block mr-2.5">$59</span>
													<span className="text-base block text-heading font-title">Per day</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="lg:col-span-4 md:col-span-6 col-span-12 mb-7.5">
									<div className="relative">
										<div className="relative overflow-hidden rounded-t-3xl">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}><img src="/assets/images/tour/style2/pic2.jpg" alt="Image" className="h-65 w-full object-cover object-center" width="302" height="260" loading="lazy" /></a>
										</div>
										<div className="duration-500 p-5 rounded-b-3xl bg-white flex flex-col justify-between shadow-trv-content3">
											<h3 className="text-xl font-medium mb-2.5 text-primary!">
												<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}>
												South Korea
												</a>
											</h3>
											<div className="flex justify-between mb-7.5">
												<div className="flex items-center">
													<span className="text-primary mr-2.5">(4.8)</span>
													<div className="trv-review-rating">
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
													</div>
												</div>
												<div className="text-primary font-semibold text-sm flex items-center">
													<i className="flaticon-calendar text-xl mr-2.5"></i>
													<span className="block">4 days</span>
												</div>
											</div>
											<div className="flex justify-between">
												<div className="trv-book">
													<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="site-button outline btn-sm">Book Now</a>
												</div>
												<div className="flex items-center">
													<span className="text-citrusyellow text-28 leading-[1.3] font-black block mr-2.5">$59</span>
													<span className="text-base block text-heading font-title">Per day</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="lg:col-span-4 md:col-span-6 col-span-12 mb-7.5">
									<div className="relative">
										<div className="relative overflow-hidden rounded-t-3xl">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}><img src="/assets/images/tour/style2/pic3.jpg" alt="Image" className="h-65 w-full object-cover object-center" width="302" height="260" loading="lazy" /></a>
										</div>
										<div className="duration-500 p-5 rounded-b-3xl bg-white flex flex-col justify-between shadow-trv-content3">
											<h3 className="text-xl font-medium mb-2.5 text-primary!">
												<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}>
													Tokyo City japan
												</a>
											</h3>
											<div className="flex justify-between mb-7.5">
												<div className="flex items-center">
													<span className="text-primary mr-2.5">(4.8)</span>
													<div className="trv-review-rating">
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
													</div>
												</div>
												<div className="text-primary font-semibold text-sm flex items-center">
													<i className="flaticon-calendar text-xl mr-2.5"></i>
													<span className="block">4 days</span>
												</div>
											</div>
											<div className="flex justify-between">
												<div className="trv-book">
													<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="site-button outline btn-sm">Book Now</a>
												</div>
												<div className="flex items-center">
													<span className="text-citrusyellow text-28 leading-[1.3] font-black block mr-2.5">$59</span>
													<span className="text-base block text-heading font-title">Per day</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="lg:col-span-4 md:col-span-6 col-span-12 mb-7.5">
									<div className="relative">
										<div className="relative overflow-hidden rounded-t-3xl">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}><img src="/assets/images/tour/style2/pic4.jpg" alt="Image" className="h-65 w-full object-cover object-center" width="302" height="260" loading="lazy" /></a>
										</div>
										<div className="duration-500 p-5 rounded-b-3xl bg-white flex flex-col justify-between shadow-trv-content3">
											<h3 className="text-xl font-medium mb-2.5 text-primary!">
												<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}>
													Plateau in Slovenia
												</a>
											</h3>
											<div className="flex justify-between mb-7.5">
												<div className="flex items-center">
													<span className="text-primary mr-2.5">(4.8)</span>
													<div className="trv-review-rating">
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
													</div>
												</div>
												<div className="text-primary font-semibold text-sm flex items-center">
													<i className="flaticon-calendar text-xl mr-2.5"></i>
													<span className="block">4 days</span>
												</div>
											</div>
											<div className="flex justify-between">
												<div className="trv-book">
													<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="site-button outline btn-sm">Book Now</a>
												</div>
												<div className="flex items-center">
													<span className="text-citrusyellow text-28 leading-[1.3] font-black block mr-2.5">$59</span>
													<span className="text-base block text-heading font-title">Per day</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="lg:col-span-4 md:col-span-6 col-span-12 mb-7.5">
									<div className="relative">
										<div className="relative overflow-hidden rounded-t-3xl">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}><img src="/assets/images/tour/style2/pic5.jpg" alt="Image" className="h-65 w-full object-cover object-center" width="302" height="260" loading="lazy" /></a>
										</div>
										<div className="duration-500 p-5 rounded-b-3xl bg-white flex flex-col justify-between shadow-trv-content3">
											<h3 className="text-xl font-medium mb-2.5 text-primary!">
												<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}>
													Spain
												</a>
											</h3>
											<div className="flex justify-between mb-7.5">
												<div className="flex items-center">
													<span className="text-primary mr-2.5">(4.8)</span>
													<div className="trv-review-rating">
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
													</div>
												</div>
												<div className="text-primary font-semibold text-sm flex items-center">
													<i className="flaticon-calendar text-xl mr-2.5"></i>
													<span className="block">4 days</span>
												</div>
											</div>
											<div className="flex justify-between">
												<div className="trv-book">
													<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="site-button outline btn-sm">Book Now</a>
												</div>
												<div className="flex items-center">
													<span className="text-citrusyellow text-28 leading-[1.3] font-black block mr-2.5">$59</span>
													<span className="text-base block text-heading font-title">Per day</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="lg:col-span-4 md:col-span-6 col-span-12 mb-7.5">
									<div className="relative">
										<div className="relative overflow-hidden rounded-t-3xl">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}><img src="/assets/images/tour/style2/pic5.jpg" alt="Image" className="h-65 w-full object-cover object-center" width="302" height="260" loading="lazy" /></a>
										</div>
										<div className="duration-500 p-5 rounded-b-3xl bg-white flex flex-col justify-between shadow-trv-content3">
											<h3 className="text-xl font-medium mb-2.5 text-primary!">
												<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}>
													Spain
												</a>
											</h3>
											<div className="flex justify-between mb-7.5">
												<div className="flex items-center">
													<span className="text-primary mr-2.5">(4.8)</span>
													<div className="trv-review-rating">
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
														<i className="fa-solid fa-star text-citrusyellow"></i>
													</div>
												</div>
												<div className="text-primary font-semibold text-sm flex items-center">
													<i className="flaticon-calendar text-xl mr-2.5"></i>
													<span className="block">4 days</span>
												</div>
											</div>
											<div className="flex justify-between">
												<div className="trv-book">
													<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="site-button outline btn-sm">Book Now</a>
												</div>
												<div className="flex items-center">
													<span className="text-citrusyellow text-28 leading-[1.3] font-black block mr-2.5">$59</span>
													<span className="text-base block text-heading font-title">Per day</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-transparent">
								<div className="clear" id="comment-list">
									<div className="comments-area" id="comments">
										<div className="mb-5">
											<h2 className="relative table text-2xl font-semibold py-1.25 px-5 bg-linear-(--st-paleaqua-gradient) border-l-4 border-citrusyellow mb-0">Customer Review</h2>
										</div>
										<div>
											{/* COMMENT LIST START */}
											<ol className="mb-6">
												<li className="relative">
													{/* COMMENT BLOCK */}
													<div className="sm:p-7.5 sm:ps-32.5 p-5 relative sm:mb-7.5 mb-5 overflow-hidden bg-eggshell dark:bg-eggshell/5 rounded-2xl max-sm:text-center">
														<div className="sm:absolute sm:top-7.5 sm:left-7.5 size-17.5 rounded-full bg-white duration-500 max-sm:mx-auto max-sm:mb-2.5">
															<img className="w-full rounded-full" src="/assets/images/comment-author/pic1.jpg" alt="img" width="70" height="70" loading="lazy" />
														</div>                                                
														<div className="block mb-1.25">
															<cite className="sm:inline-block block text-heading font-title text-xl font-semibold not-italic">Charlie</cite>
															<span className="font-normal text-sm pl-3.75">24-07-2025</span>
														</div>
														<p className="text-sm max-sm:mb-5">Exciting but also a bit overwhelming with so many amazing places out there! Let's narrow it Travlla is a multi-award-winning strategy and content creation agency that specializes in travel arketing.</p>
														<div className="sm:absolute sm:right-5 sm:top-5">
															<a href="javscript:;" className="site-button !py-1.25 !px-5 !text-sm">
																Reply
															</a>
														</div>

													</div>
													{/* SUB COMMENT BLOCK */}
													<ol className="sm:ml-10">
														<li className="relative">
														
															<div className="sm:p-7.5 sm:ps-32.5 p-5 relative sm:mb-7.5 mb-5 overflow-hidden bg-eggshell dark:bg-eggshell/5 rounded-2xl max-sm:text-center">
																<div className="sm:absolute sm:top-7.5 sm:left-7.5 size-17.5 rounded-full bg-white duration-500 max-sm:mx-auto max-sm:mb-2.5">
																	<img className="w-full rounded-full" src="/assets/images/comment-author/pic2.jpg" alt="img" width="70" height="70" loading="lazy" />
																
																</div>
																<div className="block mb-1.25">
																	<cite className="sm:inline-block block text-heading font-title text-xl font-semibold not-italic">George</cite>
																	<span className="font-normal text-sm pl-3.75">24-07-2025</span>
																</div>                                                
																<p className="text-sm max-sm:mb-5">So many amazing places out there! Let's narrow it Travlla is a multi-award-winning strategy and content creation agency that specializes in travel arketing.</p>
																<div className="sm:absolute sm:right-5 sm:top-5">
																	<a href="javscript:;" className="site-button !py-1.25 !px-5 !text-sm">
																		Reply
																	</a>
																</div>
															</div>                                                        
															
														</li>
													</ol>
												</li>
																							
											</ol>
											{/* COMMENT LIST END */}
											
											<div className="w-full">
												<div>
													<div className="bg-eggshell dark:bg-eggshell/5 xl:py-15 xl:px-12.5 p-7.5 rounded-3xl max-lg:mx-auto max-lg:max-w-160 max-md:max-w-full">
														{/* TITLE START*/}
														<div className="sm:mb-15 mb-7.5">
															<h2 className="xl:text-46 md:text-40 text-3xl mb-2.5"><span className="text-citrusyellow">Comment</span> Section</h2>
															<div className="text-base">We’love to hear from you. Our friendly team is always here to chat</div>
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
							</div>
						</div>
					</div>                
				</div>   
				{/* SECTION END */} 

				
				{/*ALL BLOGS SECTION START*/}
				<div className="bg-light xl:pt-30 pt-12.5 xl:pb-22.5 pb-5" style={{ backgroundImage: "url('/assets/images/background/patern-2.png')" }}>
					<div className="container">
						{/* TITLE START*/}
						 <div className="row items-center mb-15">
							<div className="xl:w-1/3 lg:w-1/2 w-full">
								<div className="text-left">
									<h2 className="xl:text-46 md:text-40 text-3xl mb-3.5">Explore<span className="text-citrusyellow"> Latest News</span></h2>
									<div className="text-base max-lg:mb-7.5">Maybe for a travel blog, wildlife site, or web development project here are a few sample templates you can use to simulate real-time news updates:</div>
								</div>
							</div>
							<div className="xl:w-2/3 lg:w-1/2 w-full">
								<div className="lg:text-right">
									<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }} className="site-button butn-bg-shape">See More Articles</a>
								</div>
							</div>
						 </div>
						{/* TITLE END*/}
						<div className="section-content">
							<div className="swiper trv-lat-blog-st2-swiper xl:!pb-29 !pb-22.5">
								<div className="swiper-wrapper">
									<div className="swiper-slide">
										<div className="relative mb-7.5">
											<div className="relative overflow-hidden z-1 rounded-2xl">
												<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}><img src="/assets/images/trv-blog/blog-md/pic1.jpg" alt="Image" className="w-full object-cover object-center md:h-52.5 h-85" width="412" height="210" loading="lazy" /></a>
											</div>
											
											<div className="size-10 text-heading text-xs leading-none bg-light text-center flex flex-col items-center justify-center rounded-md absolute uppercase right-2.5 top-2.5 z-1"><span className="block text-xl leading-none font-extrabold text-heading">05</span>June</div>
											<div className="bg-white py-6.25 px-5 rounded-xxl -mt-12.5 mx-5 relative z-1">
												<div className="text-lg font-medium text-citrusyellow  whitespace-nowrap table font-title leading-none pb-3.75">Poul Ward</div>
												<div>
													<h2 className="text-xl font-medium text-primary!"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }} className="hover:text-citrusyellow duration-500">Step by step guide to planning your ideal holiday</a></h2>
												</div>
											</div>                                
										</div>
									</div>
									<div className="swiper-slide">
										<div className="relative mb-7.5">
											<div className="relative overflow-hidden z-1 rounded-2xl">
												<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}><img src="/assets/images/trv-blog/blog-md/pic2.jpg" alt="Image" className="w-full object-cover object-center md:h-52.5 h-85" width="412" height="210" loading="lazy" /></a>
											</div>
											
											<div className="size-10 text-heading text-xs leading-none bg-light text-center flex flex-col items-center justify-center rounded-md absolute uppercase right-2.5 top-2.5 z-1"><span className="block text-xl leading-none font-extrabold text-heading">05</span>June</div>
											<div className="bg-white py-6.25 px-5 rounded-xxl -mt-12.5 mx-5 relative z-1">
												<div className="text-lg font-medium text-citrusyellow  whitespace-nowrap table font-title leading-none pb-3.75">Ricardo Bell</div>
												<div>
													<h2 className="text-xl font-medium text-primary!"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }} className="hover:text-citrusyellow duration-500">How to get acquainted with natives in a strange land</a></h2>
												</div>
											</div>                                
										</div>
									</div>
									<div className="swiper-slide">
										<div className="relative mb-7.5">
											<div className="relative overflow-hidden z-1 rounded-2xl">
												<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}><img src="/assets/images/trv-blog/blog-md/pic3.jpg" alt="Image" className="w-full object-cover object-center md:h-52.5 h-85" width="412" height="210" loading="lazy" /></a>
											</div>
											<div className="size-10 text-heading text-xs leading-none bg-light text-center flex flex-col items-center justify-center rounded-md absolute uppercase right-2.5 top-2.5 z-1"><span className="block text-xl leading-none font-extrabold text-heading">05</span>June</div>
											<div className="bg-white py-6.25 px-5 rounded-xxl -mt-12.5 mx-5 relative z-1">
												<div className="text-lg font-medium text-citrusyellow  whitespace-nowrap table font-title leading-none pb-3.75">Aidan Butler</div>
												<div>
													<h2 className="text-xl font-medium text-primary!"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }} className="hover:text-citrusyellow duration-500">Resources for your first trip to overseas vacation</a></h2>
												</div>
											</div>                                
										</div>
									</div>
									<div className="swiper-slide">
										<div className="relative mb-7.5">
											<div className="relative overflow-hidden z-1 rounded-2xl">
												<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}><img src="/assets/images/trv-blog/blog-md/pic4.jpg" alt="Image" className="w-full object-cover object-center md:h-52.5 h-85" width="412" height="210" loading="lazy" /></a>
											</div>
											<div className="size-10 text-heading text-xs leading-none bg-light text-center flex flex-col items-center justify-center rounded-md absolute uppercase right-2.5 top-2.5 z-1"><span className="block text-xl leading-none font-extrabold text-heading">05</span>June</div>
											<div className="bg-white py-6.25 px-5 rounded-xxl -mt-12.5 mx-5 relative z-1">
												<div className="text-lg font-medium text-citrusyellow  whitespace-nowrap table font-title leading-none pb-3.75">Poul Ward</div>
												<div>
													<h2 className="text-xl font-medium text-primary!"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }} className="hover:text-citrusyellow duration-500">Step by step guide to planning your ideal holiday</a></h2>
												</div>
											</div>                                
										</div>
									</div>
									<div className="swiper-slide">
										<div className="relative mb-7.5">
											<div className="relative overflow-hidden z-1 rounded-2xl">
												<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}><img src="/assets/images/trv-blog/blog-md/pic5.jpg" alt="Image" className="w-full object-cover object-center md:h-52.5 h-85" width="412" height="210" loading="lazy" /></a>
											</div>
											<div className="size-10 text-heading text-xs leading-none bg-light text-center flex flex-col items-center justify-center rounded-md absolute uppercase right-2.5 top-2.5 z-1"><span className="block text-xl leading-none font-extrabold text-heading">05</span>June</div>
											<div className="bg-white py-6.25 px-5 rounded-xxl -mt-12.5 mx-5 relative z-1">
												<div className="text-lg font-medium text-citrusyellow  whitespace-nowrap table font-title leading-none pb-3.75">Ricardo Bell</div>
												<div>
													<h2 className="text-xl font-medium text-primary!"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }} className="hover:text-citrusyellow duration-500">How to get acquainted with natives in a strange land</a></h2>
												</div>
											</div>                                
										</div>
									</div>
									<div className="swiper-slide">
										<div className="relative mb-7.5">
											<div className="relative overflow-hidden z-1 rounded-2xl">
												<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}><img src="/assets/images/trv-blog/blog-md/pic6.jpg" alt="Image" className="w-full object-cover object-center md:h-52.5 h-85" width="412" height="210" loading="lazy" /></a>
											</div>
											
											<div className="size-10 text-heading text-xs leading-none bg-light text-center flex flex-col items-center justify-center rounded-md absolute uppercase right-2.5 top-2.5 z-1"><span className="block text-xl leading-none font-extrabold text-heading">05</span>June</div>
											<div className="bg-white py-6.25 px-5 rounded-xxl -mt-12.5 mx-5 relative z-1">
												<div className="text-lg font-medium text-citrusyellow  whitespace-nowrap table font-title leading-none pb-3.75">Aidan Butler</div>
												<div>
													<h2 className="text-xl font-medium text-primary!"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }} className="hover:text-citrusyellow duration-500">Resources for your first trip to overseas vacation</a></h2>
												</div>
											</div>                                
										</div>
									</div>
								</div>
								<div className="swiper-button-next !top-auto !bottom-0 !size-14 rounded-full bg-citrusyellow !text-white hover:!text-citrusyellow hover:!bg-white after:!text-base !right-[calc(50%_-_70px)]"></div>
								<div className="swiper-button-prev !top-auto !bottom-0 !size-14 rounded-full bg-citrusyellow !text-white hover:!text-citrusyellow hover:!bg-white after:!text-base !left-[calc(50%_-_70px)]"></div>
							</div>
						</div> 
					</div>
				</div>
				{/*ALL BLOGS SECTION END*/}
				
				{/*COUNTER SECTION START*/}
				<div className="bg-white dark:bg-dark xl:p-20 pt-12.5 pb-5">
					<div className="container">
						<div className="row">
							<div className="lg:w-1/4 md:w-1/2 w-full">
								<div className="relative max-xl:mb-7.5">
									<div className="min-w-25 size-25 bg-primary rounded-2xl flex items-baseline justify-start absolute left-0 -top-12.5 p-3.75">
										<img src="/assets/images/trv-icon/count-icon1.png" alt="Image" className="w-12.5" width="50" height="50" loading="lazy" />
									</div>
									<div className="relative z-1 p-8.75 ml-14.5 mt-12.5 bg-primary/5 border-[7px] border-white shadow-step-bx4 backdrop-blur-[25px] rounded-3xl">
										<h4 className="font-medium text-2xl leading-8 mb-5">Awards Winning</h4>
										<div className="font-black text-42 leading-[0.75] font-base text-heading"><span className="value" data-value="3600">3600</span><b>+</b></div>
									</div>
								</div>
							</div>
							<div className="lg:w-1/4 md:w-1/2 w-full">
								<div className="relative max-xl:mb-7.5">
									<div className="min-w-25 size-25 bg-citrusyellow rounded-2xl flex items-baseline justify-start absolute left-0 -top-12.5 p-3.75">
										<img src="/assets/images/trv-icon/count-icon2.png" alt="Image" className="w-12.5" width="50" height="50" loading="lazy" />
									</div>
									<div className="relative z-1 p-8.75 ml-14.5 mt-12.5 bg-primary/5 border-[7px] border-white shadow-step-bx4 backdrop-blur-[25px] rounded-3xl">
										<h4 className="font-medium text-2xl leading-8 mb-5">Happy Traveler</h4>
										<div className="font-black text-42 leading-[0.75] font-base text-heading"><span className="value" data-value="7634">7634</span><b>+</b></div>
									</div>
								</div>    
							</div>
							<div className="lg:w-1/4 md:w-1/2 w-full">
								<div className="relative max-xl:mb-7.5">
									<div className="min-w-25 size-25 bg-primary rounded-2xl flex items-baseline justify-start absolute left-0 -top-12.5 p-3.75">
										<img src="/assets/images/trv-icon/count-icon3.png" alt="Image" className="w-12.5" width="50" height="50" loading="lazy" />
									</div>
									<div className="relative z-1 p-8.75 ml-14.5 mt-12.5 bg-primary/5 border-[7px] border-white shadow-step-bx4 backdrop-blur-[25px] rounded-3xl">
										<h4 className="font-medium text-2xl leading-8 mb-5">Tours success</h4>
										<div className="font-black text-42 leading-[0.75] font-base text-heading"><span className="value" data-value="2.5">2.5</span><b>K</b></div>
									</div>
								</div>
							</div>
							<div className="lg:w-1/4 md:w-1/2 w-full">
								<div className="relative max-xl:mb-7.5">
									<div className="min-w-25 size-25 bg-citrusyellow rounded-2xl flex items-baseline justify-start absolute left-0 -top-12.5 p-3.75">
										<img src="/assets/images/trv-icon/count-icon4.png" alt="Image" className="w-12.5" width="50" height="50" loading="lazy" />
									</div>
									<div className="relative z-1 p-8.75 ml-14.5 mt-12.5 bg-primary/5 border-[7px] border-white shadow-step-bx4 backdrop-blur-[25px] rounded-3xl">
										<h4 className="font-medium text-2xl leading-8 mb-5">Our Experience</h4>
										<div className="font-black text-42 leading-[0.75] font-base text-heading"><span className="value" data-value="25">25</span><b>+</b></div>
									</div>
								</div>    
							</div>
						</div>
					</div>
				</div>
    </div>
  );
}
