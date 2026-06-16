import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Blogs() {
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
									<h2 className="lg:text-60 md:text-52 text-28 relative text-primary!">Blog Grid</h2>
								</div>
								{/* BREADCRUMB ROW */}                            
								<div>
									<ul className="inline-block">
										<li className="text-base pr-7.5 relative inline-block font-semibold text-primary after:content-['-'] after:absolute after:right-2 after:-top-1.5 after:text-primary after:text-26 after:font-normal">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}>Home</a></li>
										<li className="relative inline-block text-base font-semibold text-primary">Blog Grid</li>
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
                    {/*EXPLORE POPULAR TOUR START*/}
                    <div className="section-full trv-blog-grid-inner xl:pt-30 pt-12.5 xl:pb-22.5 pb-5">
                        <div className="container">
                            <div className="section-content">
                                <div className="trv-blog-grid-inner-row">
                                    <div className="row">
                                        {/*BOX-1*/}
                                        <div className="lg:w-1/3 md:w-1/2 w-full">
                                            <div className="relative mb-7.5">
                                                <div className="relative z-1 rounded-2xl overflow-hidden">
                                                    <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}><img src="/assets/images/trv-blog/blog-lg/pic1.jpg" alt="Image" className="w-full object-cover object-center xl:h-113.25 md:h-97.5 h-85" width="416" height="453" loading="lazy" /></a>
                                                </div>
                                                
                                                <div className="size-20 text-heading text-base leading-none bg-light text-center flex flex-col items-center justify-center rounded-md absolute uppercase right-2.5 top-2.5 z-1"><span className="block text-4xl leading-none font-extrabold text-heading">05</span>June</div>                                        
                                                <div className="p-7.5 pt-15 rounded-xxl absolute z-1 bottom-0 left-0 w-full bg-linear-(--bg2-gradient)">
                                                    <div className="text-lg font-medium text-citrusyellow whitespace-nowrap table font-title leading-none pb-3.75">By Joey Peterson</div>
                                                    <div className="">
                                                        <h3 className="md:text-28 text-22 !text-white"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }} className="hover:text-citrusyellow duration-500">The Top Travel Destinations for Photography Enthusiasts</a></h3>
                                                    </div>
                                                </div>                                
                                            </div>
                                        </div>
                                        {/*BOX-2*/}
                                        <div className="lg:w-1/3 md:w-1/2 w-full">
                                            <div className="relative mb-7.5">
                                                <div className="relative z-1 rounded-2xl overflow-hidden">
                                                    <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}><img src="/assets/images/trv-blog/blog-lg/pic2.jpg" alt="Image" className="w-full object-cover object-center xl:h-113.25 md:h-97.5 h-85" width="416" height="453" loading="lazy" /></a>
                                                </div>
                                                
                                                <div className="size-20 text-heading text-base leading-none bg-light text-center flex flex-col items-center justify-center rounded-md absolute uppercase right-2.5 top-2.5 z-1"><span className="block text-4xl leading-none font-extrabold text-heading">06</span>June</div>                                        
                                                <div className="p-7.5 pt-15 rounded-xxl absolute z-1 bottom-0 left-0 w-full bg-linear-(--bg2-gradient)">
                                                    <div className="text-lg font-medium text-citrusyellow whitespace-nowrap table font-title leading-none pb-3.75">By Aliena SMith</div>
                                                    <div className="">
                                                        <h3 className="md:text-28 text-22 !text-white"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }} className="hover:text-citrusyellow duration-500">The Best Ways to Travel with Your Significant Other</a></h3>
                                                    </div>
                                                </div>                                
                                            </div>
                                        </div>
                                        {/*BOX-3*/}
                                        <div className="lg:w-1/3 md:w-1/2 w-full">
                                            <div className="relative mb-7.5">
                                                <div className="relative z-1 rounded-2xl overflow-hidden">
                                                    <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}><img src="/assets/images/trv-blog/blog-lg/pic3.jpg" alt="Image" className="w-full object-cover object-center xl:h-113.25 md:h-97.5 h-85" width="416" height="453" loading="lazy" /></a>
                                                </div>
                                                
                                                <div className="size-20 text-heading text-base leading-none bg-light text-center flex flex-col items-center justify-center rounded-md absolute uppercase right-2.5 top-2.5 z-1"><span className="block text-4xl leading-none font-extrabold text-heading">07</span>June</div>                                        
                                                <div className="p-7.5 pt-15 rounded-xxl absolute z-1 bottom-0 left-0 w-full bg-linear-(--bg2-gradient)">
                                                    <div className="text-lg font-medium text-citrusyellow whitespace-nowrap table font-title leading-none pb-3.75">By Ronin Colun</div>
                                                    <div className="">
                                                        <h3 className="md:text-28 text-22 !text-white"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }} className="hover:text-citrusyellow duration-500">Top 3 Adventure Destinations for Your Next Holiday</a></h3>
                                                    </div>
                                                </div>                                
                                            </div>
                                        </div>
                                        {/*BOX-4*/}
                                        <div className="lg:w-1/3 md:w-1/2 w-full">
                                            <div className="relative mb-7.5">
                                                <div className="relative z-1 rounded-2xl overflow-hidden">
                                                    <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}><img src="/assets/images/trv-blog/blog-lg/pic4.jpg" alt="Image" className="w-full object-cover object-center xl:h-113.25 md:h-97.5 h-85" width="416" height="453" loading="lazy" /></a>
                                                </div>
                                                
                                                <div className="size-20 text-heading text-base leading-none bg-light text-center flex flex-col items-center justify-center rounded-md absolute uppercase right-2.5 top-2.5 z-1"><span className="block text-4xl leading-none font-extrabold text-heading">05</span>June</div>                                        
                                                <div className="p-7.5 pt-15 rounded-xxl absolute z-1 bottom-0 left-0 w-full bg-linear-(--bg2-gradient)">
                                                    <div className="text-lg font-medium text-citrusyellow whitespace-nowrap table font-title leading-none pb-3.75">By Joey Peterson</div>
                                                    <div className="">
                                                        <h3 className="md:text-28 text-22 !text-white"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }} className="hover:text-citrusyellow duration-500">The Top Travel Destinations for Photography Enthusiasts</a></h3>
                                                    </div>
                                                </div>                                
                                            </div>
                                        </div>
                                        {/*BOX-5*/}
                                        <div className="lg:w-1/3 md:w-1/2 w-full">
                                            <div className="relative mb-7.5">
                                                <div className="relative z-1 rounded-2xl overflow-hidden">
                                                    <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}><img src="/assets/images/trv-blog/blog-lg/pic5.jpg" alt="Image" className="w-full object-cover object-center xl:h-113.25 md:h-97.5 h-85" width="416" height="453" loading="lazy" /></a>
                                                </div>
                                                
                                                <div className="size-20 text-heading text-base leading-none bg-light text-center flex flex-col items-center justify-center rounded-md absolute uppercase right-2.5 top-2.5 z-1"><span className="block text-4xl leading-none font-extrabold text-heading">06</span>June</div>                                        
                                                <div className="p-7.5 pt-15 rounded-xxl absolute z-1 bottom-0 left-0 w-full bg-linear-(--bg2-gradient)">
                                                    <div className="text-lg font-medium text-citrusyellow whitespace-nowrap table font-title leading-none pb-3.75">By Aliena SMith</div>
                                                    <div className="">
                                                        <h3 className="md:text-28 text-22 !text-white"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }} className="hover:text-citrusyellow duration-500">The Best Ways to Travel with Your Significant Other</a></h3>
                                                    </div>
                                                </div>                                
                                            </div>
                                        </div>
                                        {/*BOX-6*/}
                                        <div className="lg:w-1/3 md:w-1/2 w-full">
                                            <div className="relative mb-7.5">
                                                <div className="relative z-1 rounded-2xl overflow-hidden">
                                                    <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}><img src="/assets/images/trv-blog/blog-lg/pic6.jpg" alt="Image" className="w-full object-cover object-center xl:h-113.25 md:h-97.5 h-85" width="416" height="453" loading="lazy" /></a>
                                                </div>
                                                
                                                <div className="size-20 text-heading text-base leading-none bg-light text-center flex flex-col items-center justify-center rounded-md absolute uppercase right-2.5 top-2.5 z-1"><span className="block text-4xl leading-none font-extrabold text-heading">07</span>June</div>                                        
                                                <div className="p-7.5 pt-15 rounded-xxl absolute z-1 bottom-0 left-0 w-full bg-linear-(--bg2-gradient)">
                                                    <div className="text-lg font-medium text-citrusyellow whitespace-nowrap table font-title leading-none pb-3.75">By Ronin Colun</div>
                                                    <div className="">
                                                        <h3 className="md:text-28 text-22 !text-white"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }} className="hover:text-citrusyellow duration-500">Top 3 Adventure Destinations for Your Next Holiday</a></h3>
                                                    </div>
                                                </div>                                
                                            </div>
                                        </div>
                                        {/*BOX-7*/}
                                        <div className="lg:w-1/3 md:w-1/2 w-full">
                                            <div className="relative mb-7.5">
                                                <div className="relative z-1 rounded-2xl overflow-hidden">
                                                    <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}><img src="/assets/images/trv-blog/blog-lg/pic7.jpg" alt="Image" className="w-full object-cover object-center xl:h-113.25 md:h-97.5 h-85" width="416" height="453" loading="lazy" /></a>
                                                </div>
                                                
                                                <div className="size-20 text-heading text-base leading-none bg-light text-center flex flex-col items-center justify-center rounded-md absolute uppercase right-2.5 top-2.5 z-1"><span className="block text-4xl leading-none font-extrabold text-heading">05</span>June</div>                                        
                                                <div className="p-7.5 pt-15 rounded-xxl absolute z-1 bottom-0 left-0 w-full bg-linear-(--bg2-gradient)">
                                                    <div className="text-lg font-medium text-citrusyellow whitespace-nowrap table font-title leading-none pb-3.75">By Joey Peterson</div>
                                                    <div className="">
                                                        <h3 className="md:text-28 text-22 !text-white"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }} className="hover:text-citrusyellow duration-500">The Top Travel Destinations for Photography Enthusiasts</a></h3>
                                                    </div>
                                                </div>                                
                                            </div>
                                        </div>
                                        {/*BOX-8*/}
                                        <div className="lg:w-1/3 md:w-1/2 w-full">
                                            <div className="relative mb-7.5">
                                                <div className="relative z-1 rounded-2xl overflow-hidden">
                                                    <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}><img src="/assets/images/trv-blog/blog-lg/pic8.jpg" alt="Image" className="w-full object-cover object-center xl:h-113.25 md:h-97.5 h-85" width="416" height="453" loading="lazy" /></a>
                                                </div>
                                                
                                                <div className="size-20 text-heading text-base leading-none bg-light text-center flex flex-col items-center justify-center rounded-md absolute uppercase right-2.5 top-2.5 z-1"><span className="block text-4xl leading-none font-extrabold text-heading">06</span>June</div>                                        
                                                <div className="p-7.5 pt-15 rounded-xxl absolute z-1 bottom-0 left-0 w-full bg-linear-(--bg2-gradient)">
                                                    <div className="text-lg font-medium text-citrusyellow whitespace-nowrap table font-title leading-none pb-3.75">By Aliena SMith</div>
                                                    <div className="">
                                                        <h3 className="md:text-28 text-22 !text-white"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }} className="hover:text-citrusyellow duration-500">The Best Ways to Travel with Your Significant Other</a></h3>
                                                    </div>
                                                </div>                                
                                            </div>
                                        </div>
                                        {/*BOX-9*/}
                                        <div className="lg:w-1/3 md:w-1/2 w-full">
                                            <div className="relative mb-7.5">
                                                <div className="relative z-1 rounded-2xl overflow-hidden">
                                                    <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}><img src="/assets/images/trv-blog/blog-lg/pic9.jpg" alt="Image" className="w-full object-cover object-center xl:h-113.25 md:h-97.5 h-85" width="416" height="453" loading="lazy" /></a>
                                                </div>
                                                
                                                <div className="size-20 text-heading text-base leading-none bg-light text-center flex flex-col items-center justify-center rounded-md absolute uppercase right-2.5 top-2.5 z-1"><span className="block text-4xl leading-none font-extrabold text-heading">07</span>June</div>                                        
                                                <div className="p-7.5 pt-15 rounded-xxl absolute z-1 bottom-0 left-0 w-full bg-linear-(--bg2-gradient)">
                                                    <div className="text-lg font-medium text-citrusyellow whitespace-nowrap table font-title leading-none pb-3.75">By Ronin Colun</div>
                                                    <div className="">
                                                        <h3 className="md:text-28 text-22 !text-white"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }} className="hover:text-citrusyellow duration-500">Top 3 Adventure Destinations for Your Next Holiday</a></h3>
                                                    </div>
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
                    </div>
                    {/*EXPLORE POPULAR TOUR END*/}
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
