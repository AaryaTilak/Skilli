import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function GuideDetails() {
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
									<h2 className="lg:text-60 md:text-52 text-28 relative text-primary!">Tour Guide Detail</h2>
								</div>
								{/* BREADCRUMB ROW */}                            
								<div>
									<ul className="inline-block">
										<li className="text-base pr-7.5 relative inline-block font-semibold text-primary after:content-['-'] after:absolute after:right-2 after:-top-1.5 after:text-primary after:text-26 after:font-normal">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}>Home</a></li>
										<li className="relative inline-block text-base font-semibold text-primary">Tour Guide Detail</li>
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
			
				{/*TEAM GUIDE START*/}
				<div className="bg-light p-12.5 max-lg:py-12.5 max-lg:px-5">
					<div className="bg-white dark:bg-dark rounded-3xl xl:pt-30 pt-3.5 xl:pb-22.5 relative overflow-hidden">
						<div className="container">
							<div>
							<div className="grid grid-cols-12 gap-3.75">
									<div className="lg:col-span-5 col-span-12 px-3.75">
										<div className="bg-white p-3.75 shadow-guide-bx1 rounded-3xl text-center mb-7.5 my-sticky space-top-0">
											<div className="mb-5">
												<img src="/assets/images/trv-guide/pic1.jpg" alt="image" className="rounded-3xl w-full" width="471" height="471" loading="lazy" />
											</div>
											<ul className="mt-5">
												<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
													<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.x.com" target="_blank">
														<i className="fa-brands fa-x-twitter group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
													</a>
												</li>
												<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
													<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.facebook.com" target="_blank">
														<i className="fa-brands fa-facebook group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
													</a>
												</li>
												<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
													<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.instagram.com" target="_blank">
														<i className="fa-brands fa-instagram group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
													</a>
												</li>
												<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
													<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.pinterest.com/" target="_blank">
														<i className="fa-brands fa-pinterest group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
													</a>
												</li>
											</ul>
											<h3 className="md:text-28 text-22 font-medium leading-[1.2] my-2.5 text-primary!">
												<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="hover:text-citrusyellow duration-500"> Murphy</a>
											</h3>
											<span className="text-base font-medium leading-[1.2] text-citrusyellow mb-3.75 inline-block">Tourist Guide</span>
										</div>
									</div>
									<div className="lg:col-span-6 col-span-12 px-3.75">
										<div>
											<h2 className="xl:text-46 text-3xl mb-5">About</h2>
											<p className="text-base font-normal text-primary dark:text-paleaqua leading-[1.4] mb-7.5">
												I am a professional who enhances travel experiences by leading individuals or 
												groups through destinations, providing insightful commentary, logistical support, and 
												cultural interpretation. Here's a complete overview:
											</p>
											<ul className="mb-7.5">
												<li className="mb-2.5 text-primary dark:text-paleaqua text-base font-base"><span className="font-title text-xl font-medium mr-11.25 min-w-25 sm:inline-block block">Age:</span>36</li>
												<li className="mb-2.5 text-primary dark:text-paleaqua text-base font-base"><span className="font-title text-xl font-medium mr-11.25 min-w-25 sm:inline-block block">Education:</span>Bsc of Computer Science</li>
												<li className="mb-2.5 text-primary dark:text-paleaqua text-base font-base"><span className="font-title text-xl font-medium mr-11.25 min-w-25 sm:inline-block block">Job Title:</span>Tour Guide</li>
												<li className="mb-2.5 text-primary dark:text-paleaqua text-base font-base"><span className="font-title text-xl font-medium mr-11.25 min-w-25 sm:inline-block block">Location:</span>Philadelphia  U.S.A</li>
												<li className="mb-2.5 text-primary dark:text-paleaqua text-base font-base"><span className="font-title text-xl font-medium mr-11.25 min-w-25 sm:inline-block block">Experiences:</span>5 Years</li>
												<li className="mb-2.5 text-primary dark:text-paleaqua text-base font-base"><span className="font-title text-xl font-medium mr-11.25 min-w-25 sm:inline-block block">Contact:</span>+291 654 542 4242</li>
												<li className="mb-2.5 text-primary dark:text-paleaqua text-base font-base"><span className="font-title text-xl font-medium mr-11.25 min-w-25 sm:inline-block block">Email:</span>travllaricardo@gmail.com</li>
											</ul>
											<h2 className="xl:text-28 text-2xl  mb-7.5 !font-bold">Essential Skills</h2>
											<ul className="mb-7.5">
												<li className="font-base text-base font-normal relative mb-3.75 pl-10">
													<i className="fa-solid fa-arrow-right text-citrusyellow absolute left-0 top-0.75 border border-citrusyellow size-6 rounded-full !flex items-center justify-center"></i>
													Communication &amp; storytelling
												</li>
												<li className="font-base text-base font-normal relative mb-3.75 pl-10">
													<i className="fa-solid fa-arrow-right text-citrusyellow absolute left-0 top-0.75 border border-citrusyellow size-6 rounded-full !flex items-center justify-center"></i>
													Leadership &amp; group management
												</li>
												<li className="font-base text-base font-normal relative mb-3.75 pl-10">
													<i className="fa-solid fa-arrow-right text-citrusyellow absolute left-0 top-0.75 border border-citrusyellow size-6 rounded-full !flex items-center justify-center"></i>
													Time coordination &amp; logistics
												</li>
												<li className="font-base text-base font-normal relative mb-3.75 pl-10">
													<i className="fa-solid fa-arrow-right text-citrusyellow absolute left-0 top-0.75 border border-citrusyellow size-6 rounded-full !flex items-center justify-center"></i>
													Multilingual ability
												</li>
												<li className="font-base text-base font-normal relative mb-3.75 pl-10">
													<i className="fa-solid fa-arrow-right text-citrusyellow absolute left-0 top-0.75 border border-citrusyellow size-6 rounded-full !flex items-center justify-center"></i>
													Cultural sensitivity
												</li>
												<li className="font-base text-base font-normal relative mb-3.75 pl-10">
													<i className="fa-solid fa-arrow-right text-citrusyellow absolute left-0 top-0.75 border border-citrusyellow size-6 rounded-full !flex items-center justify-center"></i>
													First aid &amp; safety awareness (especially for adventure guides)
												</li>
											</ul>
											<h2 className="xl:text-28 text-2xl mb-7.5 !font-bold">Certifications &amp; Training</h2>
											<ul className="mb-7.5">
												<li className="font-base text-base font-normal relative mb-3.75 pl-10">
													<i className="fa-solid fa-arrow-right text-citrusyellow absolute left-0 top-0.75 border border-citrusyellow size-6 rounded-full !flex items-center justify-center"></i>
													<span className="font-semibold">India:</span> Ministry of Tourism offers licenses via IITTM and regional programs
												</li>
												<li className="font-base text-base font-normal relative mb-3.75 pl-10">
													<i className="fa-solid fa-arrow-right text-citrusyellow absolute left-0 top-0.75 border border-citrusyellow size-6 rounded-full !flex items-center justify-center"></i>
													<span className="font-semibold">Global:</span> WFTGA (World Federation of Tourist Guide Associations) sets international standards
												</li>
												<li className="font-base text-base font-normal relative mb-3.75 pl-10">
													<i className="fa-solid fa-arrow-right text-citrusyellow absolute left-0 top-0.75 border border-citrusyellow size-6 rounded-full !flex items-center justify-center"></i>
													<span className="font-semibold">Specialized Courses:</span> Adventure guiding, museum interpretation, eco-tourism, etc.
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div> 
						</div>
					</div>
				</div>
				{/*TEAM GUIDE END*/}
				
				{/*EXPLORE POPULAR TOUR START*/}
				<div className="xl:pt-30 pt-17.5 xl:pb-22.5 pb-10">
					<div className="container-fluid">
						{/* TITLE START*/}
						<div className="sm:mb-15 mb-7.5 text-center max-w-150 mx-auto">
							<h2 className="xl:text-46 md:text-40 text-3xl mb-2.5">Meet With <span className="text-citrusyellow">Tour Guide</span></h2>
							<div className="text-base">Destinations worth exploring! Here are a few popular spots</div>
							<div className="-mt-7">
								<img src="/assets/images/background/Title-Separator.png" alt="Image" className="w-117.5 inline-block dark:invert" width="470" height="70" loading="lazy" />
							</div>
						</div>
						{/* TITLE END*/}
						<div className="swiper trv-tour-guide !pb-29 !mx-auto max-w-406.5">
							<div className="swiper-wrapper">
								{/*BOX-1*/}
								<div className="swiper-slide">
									<div className="bg-white p-3.75 shadow-guide-bx1 rounded-3xl text-center mb-7.5">
										<div className="mb-5">
											<img src="/assets/images/trv-guide/pic1.jpg" alt="image" className="rounded-3xl w-full" width="271" height="271" loading="lazy" />
										</div>
										<ul className="mt-5">
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.x.com" target="_blank">
													<i className="fa-brands fa-x-twitter group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.facebook.com" target="_blank">
													<i className="fa-brands fa-facebook group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.instagram.com" target="_blank">
													<i className="fa-brands fa-instagram group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.pinterest.com/" target="_blank">
													<i className="fa-brands fa-pinterest group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
										</ul>
										<h3 className="md:text-28 text-22 font-medium leading-[1.2] my-2.5 text-primary!">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="hover:text-citrusyellow duration-500"> Murphy</a>
										</h3>
										<span className="text-base font-medium leading-[1.2] text-citrusyellow mb-3.75 inline-block">Tourist Guide</span>
									</div>
								</div>
								{/*BOX-2*/}
								<div className="swiper-slide">
									<div className="bg-white p-3.75 shadow-guide-bx1 rounded-3xl text-center mb-7.5">
										<div className="mb-5">
											<img src="/assets/images/trv-guide/pic2.jpg" alt="image" className="rounded-3xl w-full" width="271" height="271" loading="lazy" />
										</div>
										<ul className="mt-5">
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.x.com" target="_blank">
													<i className="fa-brands fa-x-twitter group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.facebook.com" target="_blank">
													<i className="fa-brands fa-facebook group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.instagram.com" target="_blank">
													<i className="fa-brands fa-instagram group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.pinterest.com/" target="_blank">
													<i className="fa-brands fa-pinterest group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
										</ul>
										<h3 className="md:text-28 text-22 font-medium leading-[1.2] my-2.5 text-primary!">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="hover:text-citrusyellow duration-500"> Alexis Cox</a>
										</h3>
										<span className="text-base font-medium leading-[1.2] text-citrusyellow mb-3.75 inline-block">Tourist Guide</span>
									</div>
								</div>
								{/*BOX-3*/}
								<div className="swiper-slide">
									<div className="bg-white p-3.75 shadow-guide-bx1 rounded-3xl text-center mb-7.5">
										<div className="mb-5">
											<img src="/assets/images/trv-guide/pic3.jpg" alt="image" className="rounded-3xl w-full" width="271" height="271" loading="lazy" />
										</div>
										<ul className="mt-5">
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.x.com" target="_blank">
													<i className="fa-brands fa-x-twitter group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.facebook.com" target="_blank">
													<i className="fa-brands fa-facebook group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.instagram.com" target="_blank">
													<i className="fa-brands fa-instagram group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.pinterest.com/" target="_blank">
													<i className="fa-brands fa-pinterest group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
										</ul>
										<h3 className="md:text-28 text-22 font-medium leading-[1.2] my-2.5 text-primary!">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="hover:text-citrusyellow duration-500"> Murray</a>
										</h3>
										<span className="text-base font-medium leading-[1.2] text-citrusyellow mb-3.75 inline-block">Tourist Guide</span>
									</div>
								</div>
								{/*BOX-4*/}
								<div className="swiper-slide">
									<div className="bg-white p-3.75 shadow-guide-bx1 rounded-3xl text-center mb-7.5">
										<div className="mb-5">
											<img src="/assets/images/trv-guide/pic4.jpg" alt="image" className="rounded-3xl w-full" width="271" height="271" loading="lazy" />
										</div>
										<ul className="mt-5">
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.x.com" target="_blank">
													<i className="fa-brands fa-x-twitter group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.facebook.com" target="_blank">
													<i className="fa-brands fa-facebook group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.instagram.com" target="_blank">
													<i className="fa-brands fa-instagram group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.pinterest.com/" target="_blank">
													<i className="fa-brands fa-pinterest group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
										</ul>
										<h3 className="md:text-28 text-22 font-medium leading-[1.2] my-2.5 text-primary!">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="hover:text-citrusyellow duration-500"> Crawford</a>
										</h3>
										<span className="text-base font-medium leading-[1.2] text-citrusyellow mb-3.75 inline-block">Tourist Guide</span>
									</div>
								</div>
								{/*BOX-5*/}
								<div className="swiper-slide">
									<div className="bg-white p-3.75 shadow-guide-bx1 rounded-3xl text-center mb-7.5">
										<div className="mb-5">
											<img src="/assets/images/trv-guide/pic5.jpg" alt="image" className="rounded-3xl w-full" width="271" height="271" loading="lazy" />
										</div>
										<ul className="mt-5">
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.x.com" target="_blank">
													<i className="fa-brands fa-x-twitter group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.facebook.com" target="_blank">
													<i className="fa-brands fa-facebook group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.instagram.com" target="_blank">
													<i className="fa-brands fa-instagram group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.pinterest.com/" target="_blank">
													<i className="fa-brands fa-pinterest group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
										</ul>
										<h3 className="md:text-28 text-22 font-medium leading-[1.2] my-2.5 text-primary!">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="hover:text-citrusyellow duration-500"> Murphy</a>
										</h3>
										<span className="text-base font-medium leading-[1.2] text-citrusyellow mb-3.75 inline-block">Tourist Guide</span>
									</div>
								</div>
								{/*BOX-6*/}
								<div className="swiper-slide">
									<div className="bg-white p-3.75 shadow-guide-bx1 rounded-3xl text-center mb-7.5">
										<div className="mb-5">
											<img src="/assets/images/trv-guide/pic6.jpg" alt="image" className="rounded-3xl w-full" width="271" height="271" loading="lazy" />
										</div>
										<ul className="mt-5">
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.x.com" target="_blank">
													<i className="fa-brands fa-x-twitter group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.facebook.com" target="_blank">
													<i className="fa-brands fa-facebook group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.instagram.com" target="_blank">
													<i className="fa-brands fa-instagram group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.pinterest.com/" target="_blank">
													<i className="fa-brands fa-pinterest group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
										</ul>
										<h3 className="md:text-28 text-22 font-medium leading-[1.2] my-2.5 text-primary!">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="hover:text-citrusyellow duration-500"> Alexis Cox</a>
										</h3>
										<span className="text-base font-medium leading-[1.2] text-citrusyellow mb-3.75 inline-block">Tourist Guide</span>
									</div>
								</div>
								{/*BOX-7*/}
								<div className="swiper-slide">
									<div className="bg-white p-3.75 shadow-guide-bx1 rounded-3xl text-center mb-7.5">
										<div className="mb-5">
											<img src="/assets/images/trv-guide/pic7.jpg" alt="image" className="rounded-3xl w-full" width="271" height="271" loading="lazy" />
										</div>
										<ul className="mt-5">
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.x.com" target="_blank">
													<i className="fa-brands fa-x-twitter group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.facebook.com" target="_blank">
													<i className="fa-brands fa-facebook group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.instagram.com" target="_blank">
													<i className="fa-brands fa-instagram group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.pinterest.com/" target="_blank">
													<i className="fa-brands fa-pinterest group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
										</ul>
										<h3 className="md:text-28 text-22 font-medium leading-[1.2] my-2.5 text-primary!">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="hover:text-citrusyellow duration-500"> Murray</a>
										</h3>
										<span className="text-base font-medium leading-[1.2] text-citrusyellow mb-3.75 inline-block">Tourist Guide</span>
									</div>
								</div>
								{/*BOX-8*/}
								<div className="swiper-slide">
									<div className="bg-white p-3.75 shadow-guide-bx1 rounded-3xl text-center mb-7.5">
										<div className="mb-5">
											<img src="/assets/images/trv-guide/pic8.jpg" alt="image" className="rounded-3xl w-full" width="271" height="271" loading="lazy" />
										</div>
										<ul className="mt-5">
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.x.com" target="_blank">
													<i className="fa-brands fa-x-twitter group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.facebook.com" target="_blank">
													<i className="fa-brands fa-facebook group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.instagram.com" target="_blank">
													<i className="fa-brands fa-instagram group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
											<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
												<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.pinterest.com/" target="_blank">
													<i className="fa-brands fa-pinterest group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
												</a>
											</li>
										</ul>
										<h3 className="md:text-28 text-22 font-medium leading-[1.2] my-2.5 text-primary!">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="hover:text-citrusyellow duration-500"> Crawford</a>
										</h3>
										<span className="text-base font-medium leading-[1.2] text-citrusyellow mb-3.75 inline-block">Tourist Guide</span>
									</div>
								</div>
							</div>
							<div className="swiper-button-next"></div>
							<div className="swiper-button-prev"></div>
						</div>
					</div>
				</div>
    </div>
  );
}
