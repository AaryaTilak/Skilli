import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Services() {
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
									<h2 className="lg:text-60 md:text-52 text-28 relative text-primary!">Services</h2>
								</div>
								{/* BREADCRUMB ROW */}                            
								<div>
									<ul className="inline-block">
										<li className="text-base pr-7.5 relative inline-block font-semibold text-primary after:content-['-'] after:absolute after:right-2 after:-top-1.5 after:text-primary after:text-26 after:font-normal">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}>Home</a></li>
										<li className="relative inline-block text-base font-semibold text-primary">Services</li>
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
                            <span className="text-white font-title font-bold md:text-28 text-xl">Wornderful Services  For You</span>
                            <h2 className="lg:!text-80 md:!text-46 sm:!text-3xl !text-2xl uppercase !font-black !text-citrusyellow !font-base">Services We Offer</h2>
                        </div>
                    </div>
                </div>
                {/* tv service style 1 end*/}
                
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
                
                {/*COUNTER SECTION START*/}
                <div className="2xxl:p-10 2xxl:pb-2.5 pt-10 pb-2.5 bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="md:w-1/4 w-1/2 mb-7.5">
                            <div className="2xl:flex border border-dashed border-white/20 2xl:p-8.75 p-5">
                                <div className="w-12.5 min-w-12.5 2xl:mr-7.5 max-2xl:mb-2.5">
                                    <img src="/assets/images/trv-icon/count-icon1.png" alt="Image" className="w-full" width="50" height="50" loading="lazy" />
                                </div>
                                <div className="trv-icon-content-info">
                                    <h4 className="font-medium lg:text-2xl text-base leading-[1.2] lg:mb-5 mb-1.25 !text-white">Awards Winning</h4>
                                    <div className="text-citrusyellow font-black lg:text-42 text-xl leading-[0.75]"><span className="value" data-value="3600">3600</span><b>+</b></div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/4 w-1/2 mb-7.5">
                            <div className="2xl:flex border border-dashed border-white/20 2xl:p-8.75 p-5">
                                <div className="w-12.5 min-w-12.5 2xl:mr-7.5 max-2xl:mb-2.5">
                                    <img src="/assets/images/trv-icon/count-icon2.png" alt="Image" className="w-full" width="50" height="50" loading="lazy" />
                                </div>
                                <div className="trv-icon-content-info">
                                    <h4 className="font-medium lg:text-2xl text-base leading-[1.2] lg:mb-5 mb-1.25 !text-white">Happy Traveler</h4>
                                    <div className="text-citrusyellow font-black lg:text-42 text-xl leading-[0.75]"><span className="value" data-value="7634">7634</span><b>+</b></div>
                                </div>
                            </div>    
                        </div>
                        <div className="md:w-1/4 w-1/2 mb-7.5">
                            <div className="2xl:flex border border-dashed border-white/20 2xl:p-8.75 p-5">
                                <div className="w-12.5 min-w-12.5 2xl:mr-7.5 max-2xl:mb-2.5">
                                    <img src="/assets/images/trv-icon/count-icon3.png" alt="Image" className="w-full" width="50" height="50" loading="lazy" />
                                </div>
                                <div className="trv-icon-content-info">
                                    <h4 className="font-medium lg:text-2xl text-base leading-[1.2] lg:mb-5 mb-1.25 !text-white">Tours success</h4>
                                    <div className="text-citrusyellow font-black lg:text-42 text-xl leading-[0.75]"><span className="value" data-value="2.5">2.5</span><b>K</b></div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/4 w-1/2 mb-7.5">
                            <div className="2xl:flex border border-dashed border-white/20 2xl:p-8.75 p-5">
                                <div className="w-12.5 min-w-12.5 2xl:mr-7.5 max-2xl:mb-2.5">
                                    <img src="/assets/images/trv-icon/count-icon4.png" alt="Image" className="w-full" width="50" height="50" loading="lazy" />
                                </div>
                                <div className="trv-icon-content-info">
                                    <h4 className="font-medium lg:text-2xl text-base leading-[1.2] lg:mb-5 mb-1.25 !text-white">Our Experience</h4>
                                    <div className="text-citrusyellow font-black lg:text-42 text-xl leading-[0.75]"><span className="value" data-value="25">25</span><b>+</b></div>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
                {/*COUNTER SECTION END*/}
                
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
    </div>
  );
}
