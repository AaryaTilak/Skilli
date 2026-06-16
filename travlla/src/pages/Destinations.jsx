import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Destinations() {
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
									<h2 className="lg:text-60 md:text-52 text-28 relative text-primary!">Destination-01 Grid</h2>
								</div>
								{/* BREADCRUMB ROW */}                            
								<div>
									<ul className="inline-block">
										<li className="text-base pr-7.5 relative inline-block font-semibold text-primary after:content-['-'] after:absolute after:right-2 after:-top-1.5 after:text-primary after:text-26 after:font-normal">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}>Home</a></li>
										<li className="relative inline-block text-base font-semibold text-primary">Destination-01 Grid</li>
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
				{/*POPULAR DESTINATION SECTION START*/}
				<div className="bg-contain bg-[bottom_center] bg-repeat-x xl:pb-22.5 xl:pt-30 pt-12.5">
					<div className="container">
						<div>
							<div className="grid grid-cols-12 gap-7.5">
								<div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 mb-7.5">
									<div className="relative z-1 group">
										<div className="rounded-3xl overflow-hidden">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}><img src="/assets/images/destinations/style1/pic1.jpg" alt="Image" className="w-full h-125 object-cover object-center" width="302" height="500" loading="lazy" /></a>
										</div>
										<div>
											<h3 className="text-28"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Paris</a></h3>
										</div>
										<div className="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
											<img src="/assets/images/destinations/hotballon-right.png" alt="image" className="w-full max-w-75 mx-auto block duration-500" width="150" height="226" loading="lazy" />
										</div>
									</div>
								</div>
								<div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 mb-7.5">
									<div className="relative z-1 group">
										<div className="rounded-3xl overflow-hidden">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}><img src="/assets/images/destinations/style1/pic2.jpg" alt="Image" className="w-full h-125 object-cover object-center" width="302" height="500" loading="lazy" /></a>
										</div>
										<div>
											<h3 className="text-28"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Maldives</a></h3>
										</div>
										<div className="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
											<img src="/assets/images/destinations/hotballon-right.png" alt="image" className="w-full max-w-75 mx-auto block duration-500" width="150" height="226" loading="lazy" />
										</div>
									</div>
								</div>
								<div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 mb-7.5">
									<div className="relative z-1 group">
										<div className="rounded-3xl overflow-hidden">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}><img src="/assets/images/destinations/style1/pic3.jpg" alt="Image" className="w-full h-125 object-cover object-center" width="302" height="500" loading="lazy" /></a>
										</div>
										<div>
											<h3 className="text-28"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Hong Kong</a></h3>
										</div>
										<div className="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
											<img src="/assets/images/destinations/hotballon-right.png" alt="image" className="w-full max-w-75 mx-auto block duration-500" width="150" height="226" loading="lazy" />
										</div>
									</div>
								</div>
								<div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 mb-7.5">
									<div className="relative z-1 group">
										<div className="rounded-3xl overflow-hidden">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}><img src="/assets/images/destinations/style1/pic4.jpg" alt="Image" className="w-full h-125 object-cover object-center" width="302" height="500" loading="lazy" /></a>
										</div>
										<div>
											<h3 className="text-28"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Thailand</a></h3>
										</div>
										<div className="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
											<img src="/assets/images/destinations/hotballon-right.png" alt="image" className="w-full max-w-75 mx-auto block duration-500" width="150" height="226" loading="lazy" />
										</div>
									</div>
								</div>
								<div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 mb-7.5">
									<div className="relative z-1 group">
										<div className="rounded-3xl overflow-hidden">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}><img src="/assets/images/destinations/style1/pic5.jpg" alt="Image" className="w-full h-125 object-cover object-center" width="302" height="500" loading="lazy" /></a>
										</div>
										<div>
											<h3 className="text-28"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Bangkok</a></h3>
										</div>
										<div className="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
											<img src="/assets/images/destinations/hotballon-right.png" alt="image" className="w-full max-w-75 mx-auto block duration-500" width="150" height="226" loading="lazy" />
										</div>
									</div>
								</div>
								<div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 mb-7.5">
									<div className="relative z-1 group">
										<div className="rounded-3xl overflow-hidden">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}><img src="/assets/images/destinations/style1/pic6.jpg" alt="Image" className="w-full h-125 object-cover object-center" width="302" height="500" loading="lazy" /></a>
										</div>
										<div>
											<h3 className="text-28"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Tokyo</a></h3>
										</div>
										<div className="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
											<img src="/assets/images/destinations/hotballon-right.png" alt="image" className="w-full max-w-75 mx-auto block duration-500" width="150" height="226" loading="lazy" />
										</div>
									</div>
								</div>
								<div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 mb-7.5">
									<div className="relative z-1 group">
										<div className="rounded-3xl overflow-hidden">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}><img src="/assets/images/destinations/style1/pic7.jpg" alt="Image" className="w-full h-125 object-cover object-center" width="302" height="500" loading="lazy" /></a>
										</div>
										<div>
											<h3 className="text-28"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">Spain</a></h3>
										</div>
										<div className="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
											<img src="/assets/images/destinations/hotballon-right.png" alt="image" className="w-full max-w-75 mx-auto block duration-500" width="150" height="226" loading="lazy" />
										</div>
									</div>
								</div>
								<div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 mb-7.5">
									<div className="relative z-1 group">
										<div className="rounded-3xl overflow-hidden">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}><img src="/assets/images/destinations/style1/pic8.jpg" alt="Image" className="w-full h-125 object-cover object-center" width="302" height="500" loading="lazy" /></a>
										</div>
										<div>
											<h3 className="text-28"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="block text-primary bg-white text-center p-5 rounded-3xl absolute left-0 right-0 -bottom-px duration-500 group-hover:text-white group-hover:bg-primary">California</a></h3>
										</div>
										<div className="absolute -z-1 top-0 left-1/2 -translate-x-1/2 duration-500 group-hover:-top-7.5">
											<img src="/assets/images/destinations/hotballon-right.png" alt="image" className="w-full max-w-75 mx-auto block duration-500" width="150" height="226" loading="lazy" />
										</div>
									</div>
								</div>
							</div>
							                                <ul className="relative block my-7.5 text-center">
                                    <li className="relative inline-block mx-px prev">
                                        <a className="relative flex justify-center items-center size-11.5 text-primary text-lg leading-11.5 font-bold text-center duration-500 font-title z-1 rounded-2lg border border-primary/20 bg-white hover:bg-primary hover:text-white" href="#0">
                                            <i className="las la-angle-left"></i>
                                        </a>
                                    </li>
                                    <li className="relative inline-block mx-px">
                                        <a className="relative flex justify-center items-center size-11.5 text-primary dark:text-white text-lg leading-11.5 font-bold text-center duration-500 font-title z-1 rounded-2lg border border-transparent hover:border-primary/20 hover:bg-white hover:text-primary" href="#0">1</a>
                                    </li>
                                    <li className="relative inline-block mx-px">
                                        <a className="relative flex justify-center items-center size-11.5 text-primary dark:text-white text-lg leading-11.5 font-bold text-center duration-500 font-title z-1 rounded-2lg border border-transparent hover:border-primary/20 hover:bg-white hover:text-primary" href="#0">2</a>
                                    </li>
                                    <li className="relative inline-block mx-px">
                                        <a className="relative flex justify-center items-center size-11.5 text-primary dark:text-white text-lg leading-11.5 font-bold text-center duration-500 font-title z-1 rounded-2lg border border-transparent hover:border-primary/20 hover:bg-white hover:text-primary" href="#0">3</a>
                                    </li>
                                    <li className="relative inline-block mx-px">
                                        <a className="relative flex justify-center items-center size-11.5 text-primary dark:text-white text-lg leading-11.5 font-bold text-center duration-500 font-title z-1 rounded-2lg border border-transparent hover:border-primary/20 hover:bg-white hover:text-primary" href="#0">...</a>
                                    </li>
                                    <li className="relative inline-block mx-px next">
                                        <a className="relative flex justify-center items-center size-11.5 text-primary text-lg leading-11.5 font-bold text-center duration-500 font-title z-1 rounded-2lg border border-primary/20 bg-white hover:bg-primary hover:text-white" href="#0">
                                            <i className="las la-angle-right"></i>
                                        </a>
                                    </li>
                                </ul>
						</div> 
					</div>
				</div>
				{/*POPULAR DESTINATION SECTION END*/}
				{/* CLIENT LOGO SECTION START */}
				<div className="p-5 bg-light">
					<div className="py-5 bg-white border-4 border-dashed border-paleaqua dark:bg-white/10 dark:border-paleaqua/40">
						<div className="container">
							<div className="grid grid-cols-12 items-center">
								<div className="xl:col-span-3 col-span-12">
									<div>
										<h2 className="!font-black !leading-[1] xl:text-46 md:text-40 text-3xl max-xl:mb-5 max-xl:text-center"><span className="!font-base text-citrusyellow block text-5xl !font-black">1K+ </span>Brands Trust Us</h2>
									</div>
								</div>
								<div className="xl:col-span-9 col-span-12">
									<div className="swiper brand-swiper">
										<div className="swiper-wrapper">
											<div className="swiper-slide">
												<div className="text-center">
													<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/about'); }}><img src="/assets/images/client-logo/dark/1.png" className="w-auto h-11.25 mx-auto opacity-40 dark:invert dark:opacity-80" alt="img" width="339" height="82" loading="lazy" /></a>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="text-center">
													<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/about'); }}><img src="/assets/images/client-logo/dark/2.png" className="w-auto h-11.25 mx-auto opacity-40 dark:invert dark:opacity-80" alt="img" width="232" height="91" loading="lazy" /></a>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="text-center">
													<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/about'); }}><img src="/assets/images/client-logo/dark/3.png" className="w-auto h-11.25 mx-auto opacity-40 dark:invert dark:opacity-80" alt="img" width="389" height="91" loading="lazy" /></a>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="text-center">
													<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/about'); }}><img src="/assets/images/client-logo/dark/4.png" className="w-auto h-11.25 mx-auto opacity-40 dark:invert dark:opacity-80" alt="img" width="219" height="91" loading="lazy" /></a>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="text-center">
													<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/about'); }}><img src="/assets/images/client-logo/dark/5.png" className="w-auto h-11.25 mx-auto opacity-40 dark:invert dark:opacity-80" alt="img" width="211" height="91" loading="lazy" /></a>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="text-center">
													<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/about'); }}><img src="/assets/images/client-logo/dark/1.png" className="w-auto h-11.25 mx-auto opacity-40 dark:invert dark:opacity-80" alt="img" width="339" height="81" loading="lazy" /></a>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="text-center">
													<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/about'); }}><img src="/assets/images/client-logo/dark/2.png" className="w-auto h-11.25 mx-auto opacity-40 dark:invert dark:opacity-80" alt="img" width="232" height="91" loading="lazy" /></a>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="text-center">
													<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/about'); }}><img src="/assets/images/client-logo/dark/3.png" className="w-auto h-11.25 mx-auto opacity-40 dark:invert dark:opacity-80" alt="img" width="339" height="91" loading="lazy" /></a>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="text-center">
													<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/about'); }}><img src="/assets/images/client-logo/dark/4.png" className="w-auto h-11.25 mx-auto opacity-40 dark:invert dark:opacity-80" alt="img" width="219" height="91" loading="lazy" /></a>
												</div>
											</div>
											<div className="swiper-slide">
												<div className="text-center">
													<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/about'); }}><img src="/assets/images/client-logo/dark/5.png" className="w-auto h-11.25 mx-auto opacity-40 dark:invert dark:opacity-80" alt="img" width="211" height="91" loading="lazy" /></a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* CLIENT LOGO  SECTION End */}
				{/*EXPLORE POPULAR TOUR START*/}
				<div className="xl:pt-30 pt-12.5 bg-lightturquoise 2xl:mx-15 sm:mx-6 xl:pb-26.5 pb-9">
                <div className="container-fluid">
                    {/* TITLE START*/}
                    <div className="sm:mb-15 mb-7.5 max-w-150 mx-auto text-center">
                        <h2 className="xl:text-46 md:text-40 text-3xl mb-2.5">Explore Popular <span className="text-citrusyellow">Tours!</span></h2>
                        <div className="text-base">Destinations worth exploring! Here are a few popular spots</div>
                        <div className="-mt-7">
                            <img src="/assets/images/background/Title-Separator.png" alt="Image" className="w-117.5 inline-block dark:invert" width="470" height="70" loading="lazy" />
                        </div>
                    </div>
                    {/* TITLE END*/}

                    <div className="section-content">

                        <div className="swiper trv-tours-st2-swiper xl:!pb-29 !pb-22.5">
                            <div className="swiper-wrapper">
                                {/*BOX-1*/}
                                <div className="swiper-slide">
                                    <div className="overflow-hidden relative group">
                                        <div className="relative overflow-hidden rounded-3xl">
                                            <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()}><img src="/assets/images/tour/style1/pic1.jpg" alt="Image" className="h-105 w-full object-cover object-center" width="418" height="420" loading="lazy" /></a>
                                            <div className="absolute bottom-0 left-0 right-0 py-3.75 px-7.5 bg-primary/5 backdrop-blur-[7px] duration-500 group-hover:opacity-0">
                                                <h3 className="md:text-28 text-22 font-medium">
                                                    <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="text-white">
                                                        <i className="flaticon-placeholder"></i>
                                                        Bali, Indonesia
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="duration-500 opacity-0 translate-y-7.5 scale-1 absolute inset-5 p-7.5 rounded-2xl shadow-trv-content bg-primary/60 backdrop-blur-[5px] flex flex-col justify-between group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                                            <div className="flex justify-between mb-7.5">
                                                <div className="h-10 py-2.5 px-5 bg-primary text-white font-semibold text-sm rounded-e-5xl flex -ml-7.5 items-center">
                                                    <i className="bi bi-calendar2-week text-xl mr-2.5"></i>
                                                    <span className="block">8 days , 3 Nights</span>
                                                </div>
                                                <div className="w-22.5 text-right">
                                                    <span className="text-white text-34 leading-[1.3] font-black block">$59</span>
                                                    <span className="text-base block text-white">Per Day</span>
                                                </div>
                                            </div>
                                            <div className="trv-content-bottom-section">
                                                <div className="mb-5">
                                                    <h3 className="md:text-28 text-22 font-medium">
                                                        <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="text-white">
                                                            <i className="flaticon-placeholder"></i>
                                                            Bali, Indonesia
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div className="flex flex-wrap items-center justify-between">
                                                    <div>
                                                        <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="site-button outline btn-sm !text-white hover:!text-citrusyellow">Book Now</a>
                                                    </div>
                                                    <div className="trv-tour-rating">
                                                        <span className="text-white">(4.8 Review)</span>
                                                        <div className="trv-review-rating">
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*BOX-2*/}
                                <div className="swiper-slide">
                                    <div className="overflow-hidden relative group">
                                        <div className="relative overflow-hidden rounded-3xl">
                                            <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()}><img src="/assets/images/tour/style1/pic2.jpg" alt="Image" className="h-105 w-full object-cover object-center" width="418" height="420" loading="lazy" /></a>
                                            <div className="absolute bottom-0 left-0 right-0 py-3.75 px-7.5 bg-primary/5 backdrop-blur-[7px] duration-500 group-hover:opacity-0">
                                                <h3 className="md:text-28 text-22 font-medium">
                                                    <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="text-white">
                                                        <i className="flaticon-placeholder"></i>
                                                        South Korea
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="duration-500 opacity-0 translate-y-7.5 scale-1 absolute inset-5 p-7.5 rounded-2xl shadow-trv-content bg-primary/60 backdrop-blur-[5px] flex flex-col justify-between group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                                            <div className="flex justify-between mb-7.5">
                                                <div className="h-10 py-2.5 px-5 bg-primary text-white font-semibold text-sm rounded-e-5xl flex -ml-7.5 items-center">
                                                    <i className="bi bi-calendar2-week text-xl mr-2.5"></i>
                                                    <span className="block">8 days , 3 Nights</span>
                                                </div>
                                                <div className="w-22.5 text-right">
                                                    <span className="text-white text-34 leading-[1.3] font-black block">$59</span>
                                                    <span className="text-base block text-white">Per Day</span>
                                                </div>
                                            </div>
                                            <div className="trv-content-bottom-section">
                                                <div className="mb-5">
                                                    <h3 className="md:text-28 text-22 font-medium">
                                                        <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="text-white">
                                                            <i className="flaticon-placeholder"></i>
                                                           South Korea
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div className="flex flex-wrap items-center justify-between">
                                                    <div>
                                                        <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="site-button outline btn-sm !text-white hover:!text-citrusyellow">Book Now</a>
                                                    </div>
                                                    <div className="trv-tour-rating">
                                                        <span className="text-white">(4.8 Review)</span>
                                                        <div className="trv-review-rating">
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*BOX-3*/}
                                <div className="swiper-slide">
                                    <div className="overflow-hidden relative group">
                                        <div className="relative overflow-hidden rounded-3xl">
                                            <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()}><img src="/assets/images/tour/style1/pic1.jpg" alt="Image" className="h-105 w-full object-cover object-center" width="418" height="420" loading="lazy" /></a>
                                            <div className="absolute bottom-0 left-0 right-0 py-3.75 px-7.5 bg-primary/5 backdrop-blur-[7px] duration-500 group-hover:opacity-0">
                                                <h3 className="md:text-28 text-22 font-medium">
                                                    <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="text-white">
                                                        <i className="flaticon-placeholder"></i>
                                                       Tokyo City Japan
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="duration-500 opacity-0 translate-y-7.5 scale-1 absolute inset-5 p-7.5 rounded-2xl shadow-trv-content bg-primary/60 backdrop-blur-[5px] flex flex-col justify-between group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                                            <div className="flex justify-between mb-7.5">
                                                <div className="h-10 py-2.5 px-5 bg-primary text-white font-semibold text-sm rounded-e-5xl flex -ml-7.5 items-center">
                                                    <i className="bi bi-calendar2-week text-xl mr-2.5"></i>
                                                    <span className="block">8 days , 3 Nights</span>
                                                </div>
                                                <div className="w-22.5 text-right">
                                                    <span className="text-white text-34 leading-[1.3] font-black block">$59</span>
                                                    <span className="text-base block text-white">Per Day</span>
                                                </div>
                                            </div>
                                            <div className="trv-content-bottom-section">
                                                <div className="mb-5">
                                                    <h3 className="md:text-28 text-22 font-medium">
                                                        <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="text-white">
                                                            <i className="flaticon-placeholder"></i>
                                                            Tokyo City Japan
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div className="flex flex-wrap items-center justify-between">
                                                    <div>
                                                        <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="site-button outline btn-sm !text-white hover:!text-citrusyellow">Book Now</a>
                                                    </div>
                                                    <div className="trv-tour-rating">
                                                        <span className="text-white">(4.8 Review)</span>
                                                        <div className="trv-review-rating">
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*BOX-4*/}
                                <div className="swiper-slide">
                                    <div className="overflow-hidden relative group">
                                        <div className="relative overflow-hidden rounded-3xl">
                                            <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()}><img src="/assets/images/tour/style1/pic4.jpg" alt="Image" className="h-105 w-full object-cover object-center" width="418" height="420" loading="lazy" /></a>
                                            <div className="absolute bottom-0 left-0 right-0 py-3.75 px-7.5 bg-primary/5 backdrop-blur-[7px] duration-500 group-hover:opacity-0">
                                                <h3 className="md:text-28 text-22 font-medium">
                                                    <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="text-white">
                                                        <i className="flaticon-placeholder"></i>
                                                        Plateau in Slovenia
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="duration-500 opacity-0 translate-y-7.5 scale-1 absolute inset-5 p-7.5 rounded-2xl shadow-trv-content bg-primary/60 backdrop-blur-[5px] flex flex-col justify-between group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                                            <div className="flex justify-between mb-7.5">
                                                <div className="h-10 py-2.5 px-5 bg-primary text-white font-semibold text-sm rounded-e-5xl flex -ml-7.5 items-center">
                                                    <i className="bi bi-calendar2-week text-xl mr-2.5"></i>
                                                    <span className="block">8 days , 3 Nights</span>
                                                </div>
                                                <div className="w-22.5 text-right">
                                                    <span className="text-white text-34 leading-[1.3] font-black block">$59</span>
                                                    <span className="text-base block text-white">Per Day</span>
                                                </div>
                                            </div>
                                            <div className="trv-content-bottom-section">
                                                <div className="mb-5">
                                                    <h3 className="md:text-28 text-22 font-medium">
                                                        <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="text-white">
                                                            <i className="flaticon-placeholder"></i>
                                                            Plateau in Slovenia
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div className="flex flex-wrap items-center justify-between">
                                                    <div>
                                                        <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="site-button outline btn-sm !text-white hover:!text-citrusyellow">Book Now</a>
                                                    </div>
                                                    <div className="trv-tour-rating">
                                                        <span className="text-white">(4.8 Review)</span>
                                                        <div className="trv-review-rating">
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*BOX-5*/}
                                <div className="swiper-slide">
                                    <div className="overflow-hidden relative group">
                                        <div className="relative overflow-hidden rounded-3xl">
                                            <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()}><img src="/assets/images/tour/style1/pic5.jpg" alt="Image" className="h-105 w-full object-cover object-center" width="418" height="420" loading="lazy" /></a>
                                            <div className="absolute bottom-0 left-0 right-0 py-3.75 px-7.5 bg-primary/5 backdrop-blur-[7px] duration-500 group-hover:opacity-0">
                                                <h3 className="md:text-28 text-22 font-medium">
                                                    <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="text-white">
                                                        <i className="flaticon-placeholder"></i>
                                                        Bali, Indonesia
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="duration-500 opacity-0 translate-y-7.5 scale-1 absolute inset-5 p-7.5 rounded-2xl shadow-trv-content bg-primary/60 backdrop-blur-[5px] flex flex-col justify-between group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                                            <div className="flex justify-between mb-7.5">
                                                <div className="h-10 py-2.5 px-5 bg-primary text-white font-semibold text-sm rounded-e-5xl flex -ml-7.5 items-center">
                                                    <i className="bi bi-calendar2-week text-xl mr-2.5"></i>
                                                    <span className="block">8 days , 3 Nights</span>
                                                </div>
                                                <div className="w-22.5 text-right">
                                                    <span className="text-white text-34 leading-[1.3] font-black block">$59</span>
                                                    <span className="text-base block text-white">Per Day</span>
                                                </div>
                                            </div>
                                            <div className="trv-content-bottom-section">
                                                <div className="mb-5">
                                                    <h3 className="md:text-28 text-22 font-medium">
                                                        <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="text-white">
                                                            <i className="flaticon-placeholder"></i>
                                                            Bali, Indonesia
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div className="flex flex-wrap items-center justify-between">
                                                    <div>
                                                        <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="site-button outline btn-sm !text-white hover:!text-citrusyellow">Book Now</a>
                                                    </div>
                                                    <div className="trv-tour-rating">
                                                        <span className="text-white">(4.8 Review)</span>
                                                        <div className="trv-review-rating">
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*BOX-6*/}
                                <div className="swiper-slide">
                                    <div className="overflow-hidden relative group">
                                        <div className="relative overflow-hidden rounded-3xl">
                                            <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()}><img src="/assets/images/tour/style1/pic6.jpg" alt="Image" className="h-105 w-full object-cover object-center" width="418" height="420" loading="lazy" /></a>
                                            <div className="absolute bottom-0 left-0 right-0 py-3.75 px-7.5 bg-primary/5 backdrop-blur-[7px] duration-500 group-hover:opacity-0">
                                                <h3 className="md:text-28 text-22 font-medium">
                                                    <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="text-white">
                                                        <i className="flaticon-placeholder"></i>
                                                        Bali, Indonesia
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="duration-500 opacity-0 translate-y-7.5 scale-1 absolute inset-5 p-7.5 rounded-2xl shadow-trv-content bg-primary/60 backdrop-blur-[5px] flex flex-col justify-between group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                                            <div className="flex justify-between mb-7.5">
                                                <div className="h-10 py-2.5 px-5 bg-primary text-white font-semibold text-sm rounded-e-5xl flex -ml-7.5 items-center">
                                                    <i className="bi bi-calendar2-week text-xl mr-2.5"></i>
                                                    <span className="block">8 days , 3 Nights</span>
                                                </div>
                                                <div className="w-22.5 text-right">
                                                    <span className="text-white text-34 leading-[1.3] font-black block">$59</span>
                                                    <span className="text-base block text-white">Per Day</span>
                                                </div>
                                            </div>
                                            <div className="trv-content-bottom-section">
                                                <div className="mb-5">
                                                    <h3 className="md:text-28 text-22 font-medium">
                                                        <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="text-white">
                                                            <i className="flaticon-placeholder"></i>
                                                            Bali, Indonesia
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div className="flex flex-wrap items-center justify-between">
                                                    <div>
                                                        <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="site-button outline btn-sm !text-white hover:!text-citrusyellow">Book Now</a>
                                                    </div>
                                                    <div className="trv-tour-rating">
                                                        <span className="text-white">(4.8 Review)</span>
                                                        <div className="trv-review-rating">
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                            <i className="las la-star text-citrusyellow"></i>
                                                        </div>
                                                    </div>
                                                </div>
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
    </div>
  );
}
