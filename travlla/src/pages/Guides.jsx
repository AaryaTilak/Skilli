import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Guides() {
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
									<h2 className="lg:text-60 md:text-52 text-28 relative text-primary!">Tour Guide</h2>
								</div>
								{/* BREADCRUMB ROW */}                            
								<div>
									<ul className="inline-block">
										<li className="text-base pr-7.5 relative inline-block font-semibold text-primary after:content-['-'] after:absolute after:right-2 after:-top-1.5 after:text-primary after:text-26 after:font-normal">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}>Home</a></li>
										<li className="relative inline-block text-base font-semibold text-primary">Tour Guide</li>
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
				<div className="xl:py-30 py-15">
					<div className="container">
						{/* TITLE START*/}
						<div className="sm:mb-15 mb-7.5 text-center max-w-150 mx-auto">
							<h2 className="xl:text-46 md:text-40 text-3xl mb-2.5">Meet With <span className="text-citrusyellow">Tour Guide</span></h2>
							<div className="text-base">Destinations worth exploring! Here are a few popular spots</div>
							<div className="-mt-7">
								<img src="/assets/images/background/Title-Separator.png" alt="Image" className="w-117.5 inline-block dark:invert" width="470" height="70" loading="lazy" />
							</div>
						</div>
						{/* TITLE END*/}
						<div className="grid grid-cols-12 gap-3.75">
							{/*BOX-1*/}
							<div className="lg:col-span-3 md:col-span-6 col-span-12">
								<div className="bg-white p-3.75 shadow-guide-bx1 rounded-3xl text-center mb-7.5">
									<div className="mb-5">
										<img src="/assets/images/trv-guide/pic1.jpg" alt="image" className="rounded-3xl w-full" width="283" height="283" loading="lazy" />
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
							<div className="lg:col-span-3 md:col-span-6 col-span-12">
								<div className="bg-white p-3.75 shadow-guide-bx1 rounded-3xl text-center mb-7.5">
									<div className="mb-5">
										<img src="/assets/images/trv-guide/pic2.jpg" alt="image" className="rounded-3xl w-full" width="283" height="283" loading="lazy" />
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
							<div className="lg:col-span-3 md:col-span-6 col-span-12">
								<div className="bg-white p-3.75 shadow-guide-bx1 rounded-3xl text-center mb-7.5">
									<div className="mb-5">
										<img src="/assets/images/trv-guide/pic3.jpg" alt="image" className="rounded-3xl w-full" width="283" height="283" loading="lazy" />
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
							<div className="lg:col-span-3 md:col-span-6 col-span-12">
								<div className="bg-white p-3.75 shadow-guide-bx1 rounded-3xl text-center mb-7.5">
									<div className="mb-5">
										<img src="/assets/images/trv-guide/pic4.jpg" alt="image" className="rounded-3xl w-full" width="283" height="283" loading="lazy" />
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
							<div className="lg:col-span-3 md:col-span-6 col-span-12">
								<div className="bg-white p-3.75 shadow-guide-bx1 rounded-3xl text-center mb-7.5">
									<div className="mb-5">
										<img src="/assets/images/trv-guide/pic5.jpg" alt="image" className="rounded-3xl w-full" width="283" height="283" loading="lazy" />
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
							<div className="lg:col-span-3 md:col-span-6 col-span-12">
								<div className="bg-white p-3.75 shadow-guide-bx1 rounded-3xl text-center mb-7.5">
									<div className="mb-5">
										<img src="/assets/images/trv-guide/pic6.jpg" alt="image" className="rounded-3xl w-full" width="283" height="283" loading="lazy" />
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
							<div className="lg:col-span-3 md:col-span-6 col-span-12">
								<div className="bg-white p-3.75 shadow-guide-bx1 rounded-3xl text-center mb-7.5">
									<div className="mb-5">
										<img src="/assets/images/trv-guide/pic7.jpg" alt="image" className="rounded-3xl w-full" width="283" height="283" loading="lazy" />
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
							<div className="lg:col-span-3 md:col-span-6 col-span-12">
								<div className="bg-white p-3.75 shadow-guide-bx1 rounded-3xl text-center mb-7.5">
									<div className="mb-5">
										<img src="/assets/images/trv-guide/pic8.jpg" alt="image" className="rounded-3xl w-full" width="283" height="283" loading="lazy" />
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
				{/*EXPLORE POPULAR TOUR END*/}
				
				{/*STEPS SECTION START*/}
				<div className="section-full trv-step-bx1-wrap xl:pt-30 pt-12.5 xl:pb-22.5 pb-5">
                <div className="container">
                    {/* TITLE START*/}
                    <div className="sm:mb-15 mb-7.5 text-center max-w-150 mx-auto">
                        <h2 className="xl:text-46 md:text-40 text-3xl mb-2.5">Easy Steps <span className="text-citrusyellow">For Bookings</span></h2>
                        <div className="text-base">Destinations worth exploring! Here are a few popular spots</div>
                        <div className="-mt-7">
                            <img src="/assets/images/background/Title-Separator.png" alt="Image" className="w-117.5 inline-block dark:invert" width="470" height="70" loading="lazy" />
                        </div>
                    </div>
                    {/* TITLE END*/}

                    <div className="section-content">
                        <div className="trv-step-bx1-section">
                            <div className="row">                        
                                <div className="md:w-1/3 w-full mb-7.5">
                                    <div className="bg-white border border-primary/10 lg:p-10 p-5 shadow-step-bx1 rounded-3xl rounded-se-[200px]">
                                        <div className="flex items-baseline justify-between mb-6.25">
                                            <div className="lg:size-20 size-17 items-center justify-center flex bg-primary rounded-2xl lg:text-42 text-40 text-white font-black">
                                                01
                                            </div>
                                            <div className="lg:size-25 size-22 bg-citrusyellow rounded-5xl flex items-center justify-center -mr-5">
                                                <div className="lg:size-22.5 size-20.5 bg-white rounded-5xl flex items-center justify-center">
                                                    <img src="/assets/images/trv-icon/destination.png" alt="image" className="image-filter-1 max-w-12" style={{ filter: "brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" }} width="48" height="48" loading="lazy" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-2xl leading-[1.2] font-medium mb-2.5 text-primary font-title">
                                            Choose Destination
                                        </div>
                                        <p className="text-primary mb-0">All you have to do is, first select your preferred destination and proceed</p>
                                    </div>
                                </div> 

                                <div className="md:w-1/3 w-full mb-7.5">

                                    <div className="bg-white border border-primary/10 lg:p-10 p-5 shadow-step-bx1 rounded-3xl rounded-se-[200px]">
                                        <div className="flex items-baseline justify-between mb-6.25">
                                            <div className="lg:size-20 size-17 items-center justify-center flex bg-primary rounded-2xl lg:text-42 text-40 text-white font-black">
                                                02
                                            </div>
                                            <div className="lg:size-25 size-22 bg-citrusyellow rounded-5xl flex items-center justify-center -mr-5">
                                                <div className="lg:size-22.5 size-20.5 bg-white rounded-5xl flex items-center justify-center">
                                                    <img src="/assets/images/trv-icon/make-payment.png" alt="image" className="image-filter-1 max-w-12" style={{ filter: "brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" }} width="48" height="48" loading="lazy" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-2xl leading-[1.2] font-medium mb-2.5 text-primary font-title">
                                            Make Payment
                                        </div>
                                        <p className="text-primary mb-0">You are important to us. We pay attention to the quality of every service we provide to you.</p>
                                    </div>
                                </div> 

                                <div className="md:w-1/3 w-full mb-7.5">

                                    <div className="bg-white border border-primary/10 lg:p-10 p-5 shadow-step-bx1 rounded-3xl rounded-se-[200px]">
                                        <div className="flex items-baseline justify-between mb-6.25">
                                            <div className="lg:size-20 size-17 items-center justify-center flex bg-primary rounded-2xl lg:text-42 text-40 text-white font-black">
                                                03
                                            </div>
                                            <div className="lg:size-25 size-22 bg-citrusyellow rounded-5xl flex items-center justify-center -mr-5">
                                                <div className="lg:size-22.5 size-20.5 bg-white rounded-5xl flex items-center justify-center">
                                                    <img src="/assets/images/trv-icon/travelling.png" alt="image" className="image-filter-1 max-w-12" style={{ filter: "brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" }} width="48" height="48" loading="lazy" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-2xl leading-[1.2] font-medium mb-2.5 text-primary font-title">
                                            Ready For Travelling
                                        </div>
                                        <p className="text-primary mb-0"> We have seen that you have fulfilled all the requirements, now you are ready to travel.</p>
                                    </div>
                                </div> 

                            </div>
                            <div className="my-7.5 bg-citrusyellow xl:h-46 rounded-2xl overflow-hidden bg-[url('/assets/images/add-hr-cloud.png')] bg-no-repeat bg-contain bg-bottom lg:flex items-center justify-between lg:py-12.5 lg:px-15 p-3.75 pt-7.5 max-lg:text-center">
                                <div className="flex items-end max-lg:justify-center max-lg:mb-3.75">
                                    <h2 className="!font-black 2xl:!text-30xl !text-80 !leading-[0.75] !text-white !font-base mr-4.5">48</h2>
                                    <div className="block font-black text-xl leading-6 text-primary uppercase">%<span className="block">Off</span></div>
                                </div>
                                <div className="2xl:text-50 xl:text-4xl text-28 2xl:leading-18.5 leading-normal text-primary flex-1 mx-5 font-display max-lg:mb-3.75">
                                    <span className="text-white font-semibold text-lg leading-6 block pb-2.5">Get Special Offer</span>
                                    Tours and Trip Packages , Globally
                                </div>
                                <div>
                                    <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="site-button butn-bg-shape btn-white">Discover More</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
    </div>
  );
}
