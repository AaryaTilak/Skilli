import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Compare() {
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
									<h2 className="lg:text-60 md:text-52 text-28 relative text-primary!">Tour Compare</h2>
								</div>
								{/* BREADCRUMB ROW */}                            
								<div>
									<ul className="inline-block">
										<li className="text-base pr-7.5 relative inline-block font-semibold text-primary after:content-['-'] after:absolute after:right-2 after:-top-1.5 after:text-primary after:text-26 after:font-normal">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}>Home</a></li>
										<li className="relative inline-block text-base font-semibold text-primary">Tour Compare</li>
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
			
			<div className="section-full trv-tour-compare-signel-wrap xl:py-30 py-12.5">
				<div className="container">
					<div className="p-7.5 bg-white dark:bg-dark rounded-3xl">
						<div className="mb-6.25">
							{/*Top SLider*/}
							<div className="swiper trv_d-slider overflow-hidden rounded-3xl">
								<div className="swiper-wrapper">
									<div className="swiper-slide">
										<div className="rounded-3xl overflow-hidden max-h-108">
											<img src="/assets/images/tour-com-slider/pic1.jpg" alt="Image" className="w-full rounded-3xl" />   
										</div>
									</div>
									<div className="swiper-slide">
										<div className="rounded-3xl overflow-hidden max-h-108">
											<img src="/assets/images/tour-com-slider/pic2.jpg" alt="Image" className="w-full rounded-3xl" />   
										</div>
									</div>
									<div className="swiper-slide">
										<div className="rounded-3xl overflow-hidden max-h-108">
											<img src="/assets/images/tour-com-slider/pic3.jpg" alt="Image" className="w-full rounded-3xl" />   
										</div>
									</div>
									<div className="swiper-slide">
										<div className="rounded-3xl overflow-hidden max-h-108">
											<img src="/assets/images/tour-com-slider/pic4.jpg" alt="Image" className="w-full rounded-3xl" />   
										</div>
									</div>
									<div className="swiper-slide">
										<div className="rounded-3xl overflow-hidden max-h-108">
											<img src="/assets/images/tour-com-slider/pic5.jpg" alt="Image" className="w-full rounded-3xl" />   
										</div>
									</div>
									<div className="swiper-slide">
										<div className="rounded-3xl overflow-hidden max-h-108">
											<img src="/assets/images/tour-com-slider/pic6.jpg" alt="Image" className="w-full rounded-3xl" />   
										</div>
									</div>
								</div>
								<div className="swiper-pagination"></div>
							</div>
							{/*Top SLider End*/}
						</div>
						<div className="grid grid-cols-12 md:gap-7.5">
							<div className="lg:col-span-8 col-span-12">
								<div>
									<div className="trv-sep-rating mb-5">
										<div className="trv-rating">
											<span className="text-base font-title font-normal leading-[1.2] text-primary dark:text-paleaqua mr-2.52">(4.8 Review)</span>
											<i className="las la-star text-citrusyellow text-15"></i>
											<i className="las la-star text-citrusyellow text-15"></i>
											<i className="las la-star text-citrusyellow text-15"></i>
											<i className="las la-star text-citrusyellow text-15"></i>
											<i className="las la-star text-citrusyellow text-15"></i>
										</div>
									</div>
									<h3 className="md:text-36 text-28 font-medium leading-[1.2] text-primary dark:text-paleaqua mb-5">The Most Beautiful Destination , Bali , Indonesia</h3>
									<p className="text-base mb-4">The island is unique in Indonesia as the only Hindu-majority province, with around 86% of its 45 inhabitants practising a vibrant, animism-influenced form of Balinese Hinduism . Daily life is deeply spiritual, marked by offerings (canang sari), temple ceremonies, world-class traditional dance and gamelan performances, and annual events like the serene Nyepi Day of Silence and majestic Bali Arts Festival.</p>
									<p className="text-base mb-4">
									   Bali, Indonesia is a volcanic island located just east of Java and west of Lombok, positioned about 8 degrees south of the equator. Its geography is defined by a rugged central mountain range dominated by active volcanoes such as Mount Agung and Mount Batur, surrounded by lush rainforests, river valleys, and terraced rice fields. 
									</p>
								</div>
							</div>
							<div className="lg:col-span-4 col-span-12">
								<div>
									<ul className="p-0 mb-0 block font-base text-sm font-normal text-darkgray dark:text-bodycolor">
										<li className="text-sm font-normal font-base text-darkgray dark:text-bodycolor font-leading-[1.4] pb-2.5 md:px-5 mb-5 flex justify-between items-center border-b border-[rgba(6,97,104,0.2)]"><span className="md:text-xl text-lg font-bold text-primary dark:text-paleaqua block leading-[1.2]">Location</span>Bali indonesia</li>
										<li className="text-sm font-normal font-base text-darkgray dark:text-bodycolor leading-[1.4] pb-2.5 md:px-5 mb-5 flex justify-between items-center border-b border-[rgba(6,97,104,0.2)]"><span className="md:text-xl text-lg font-bold text-primary dark:text-paleaqua block leading-[1.2]">Activity type</span>Adventure</li>
										<li className="text-sm font-normal font-base text-darkgray dark:text-bodycolor leading-[1.4] pb-2.5 md:px-5 mb-5 flex justify-between items-center border-b border-[rgba(6,97,104,0.2)]"><span className="md:text-xl text-lg font-bold text-primary dark:text-paleaqua block leading-[1.2]">Date</span>5 Sep 2025</li>
										<li className="text-sm font-normal font-base text-darkgray dark:text-bodycolor leading-[1.4] pb-2.5 md:px-5 mb-5 flex justify-between items-center border-b border-[rgba(6,97,104,0.2)]"><span className="md:text-xl text-lg font-bold text-primary dark:text-paleaqua block leading-[1.2]">Traveler</span>05</li>
										<li className="text-sm font-normal font-base text-darkgray dark:text-bodycolor leading-[1.4] pb-2.5 md:px-5 mb-5 flex justify-between items-center border-b border-[rgba(6,97,104,0.2)]">
											<div className="text-base font-normal text-primary dark:text-paleaqua leading-[1.4] flex w-full justify-between items-center">
												<span className="font-base md:text-28 text-20 font-black text-citrusyellow leading-[1.2]">$89 </span>
												Per day
											</div>
										</li>
									</ul>
									<a className="site-button butn-bg-shape" href="#" onClick={(e) => e.preventDefault()}>Book Now</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			{/*CONTACT US SECTION START */}
			<div className="pb-30">
				<div className="container">
					<div className="max-w-160 mb-15">
						<h3 className="font-medium md:text-36 text-28 leading-[1.2] text-primary dark:text-paleaqua mb-2">General comparison: Tour-packages</h3>
						<p className="text-base mb-4">Here are some sample package types/costs offered by companies and tour operators, which show what you get and how much you will have to pay:</p>
					</div>
				</div>
				<div className="trv-tour-compare-section bg-white dark:bg-dark">
					<div className="table-wrapper overflow-x-auto overflow-y-hidden custom-scroll">
						<table>
							<tbody>
							{/*1 Row */}
							<tr>
								<td className="sticky left-0 bg-white dark:bg-dark z-1 sm:py-3.75 sm:px-7.5 p-2.5 clear-both before:absolute before:-left-0.5 before:top-0 before:-bottom-px before:w-1.25 border border-cyangreen before:border-r before:border-cyangreen before:bg-linear-[var(--cyangreen-gradient)] after:absolute after:-right-0.5 after:top-0 after:-bottom-px after:w-1.25 before:border-l after:border-cyangreen after:bg-linear-[var(--cyangreen-gradient)]">
									<div className="font-base font-medium sm:text-xl text-sm text-primary dark:text-paleaqua sm:w-52.5 w-22.5">
										 Destination Images
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div className="sm:w-82.5 w-45 sm:my-3.75 my-1.25">
										<img src="/assets/images/trv-com-pic/pic1.jpg" alt="Image" className="w-full rounded-xl" />
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div className="sm:w-82.5 w-45 sm:my-3.75 my-1.25">
										<img src="/assets/images/trv-com-pic/pic2.jpg" alt="Image" className="w-full rounded-xl" />
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div className="sm:w-82.5 w-45 sm:my-3.75 my-1.25">
										<img src="/assets/images/trv-com-pic/pic3.jpg" alt="Image" className="w-full rounded-xl" />
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div className="sm:w-82.5 w-45 sm:my-3.75 my-1.25">
										<img src="/assets/images/trv-com-pic/pic4.jpg" alt="Image" className="w-full rounded-xl" />
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div className="sm:w-82.5 w-45 sm:my-3.75 my-1.25">
										<img src="/assets/images/trv-com-pic/pic5.jpg" alt="Image" className="w-full rounded-xl" />
									</div>
								</td>
							</tr>
							{/*2 Row */}
							<tr>
								<td className="sticky left-0 bg-white dark:bg-dark z-1 sm:py-3.75 sm:px-7.5 p-2.5 clear-both before:absolute before:-left-0.5 before:top-0 before:-bottom-px before:w-1.25 border border-cyangreen before:border-r before:border-cyangreen before:bg-linear-[var(--cyangreen-gradient)] after:absolute after:-right-0.5 after:top-0 after:-bottom-px after:w-1.25 before:border-l after:border-cyangreen after:bg-linear-[var(--cyangreen-gradient)]">
									<div className="font-base font-medium sm:text-xl text-sm text-primary dark:text-paleaqua sm:w-52.5 w-22.5">
										 Tour / Destination
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<h3 className="mb-5 2xl:text-28 xl:text-22 text-lg font-medium">
											<a href="javascript:void(0);">
												<i className="bi bi-geo-alt"></i>
												Tokyo City Japan
											</a>
										</h3>
										<p className="sm:text-base text-2xs mb-4">Nusa Penida is a stunning island located just southeast of Bali</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
								   <div>
										<h3 className="mb-5 2xl:text-28 xl:text-22 text-lg font-medium">
											<a href="javascript:void(0);">
												<i className="bi bi-geo-alt"></i>
												Plateau in Slovenia
											</a>
										</h3>
										<p className="sm:text-base text-2xs mb-4">Nusa Penida is a stunning island located just southeast of Bali</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<h3 className="mb-5 2xl:text-28 xl:text-22 text-lg font-medium">
											<a href="javascript:void(0);">
												<i className="bi bi-geo-alt"></i>
												Hong Kong
											</a>
										</h3>
										<p className="sm:text-base text-2xs mb-4">Nusa Penida is a stunning island located just southeast of Bali</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
								   <div>
										<h3 className="mb-5 2xl:text-28 xl:text-22 text-lg font-medium">
											<a href="javascript:void(0);">
												<i className="bi bi-geo-alt"></i>
												Thailand
											</a>
										</h3>
										<p className="sm:text-base text-2xs mb-4">Nusa Penida is a stunning island located just southeast of Bali</p>
									</div> 
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<h3 className="mb-5 2xl:text-28 xl:text-22 text-lg font-medium">
											<a href="javascript:void(0);">
												<i className="bi bi-geo-alt"></i>
												Bali, Indonesia
											</a>
										</h3>
										<p className="sm:text-base text-2xs mb-4">Nusa Penida is a stunning island located just southeast of Bali</p>
									</div>
								</td>
							</tr>
							{/*3 Row */}
							<tr>
								<td className="sticky left-0 bg-white dark:bg-dark z-1 sm:py-3.75 sm:px-7.5 p-2.5 clear-both before:absolute before:-left-0.5 before:top-0 before:-bottom-px before:w-1.25 border border-cyangreen before:border-r before:border-cyangreen before:bg-linear-[var(--cyangreen-gradient)] after:absolute after:-right-0.5 after:top-0 after:-bottom-px after:w-1.25 before:border-l after:border-cyangreen after:bg-linear-[var(--cyangreen-gradient)]">
									<div className="font-base font-medium sm:text-xl text-sm text-primary dark:text-paleaqua sm:w-52.5 w-22.5">
										 Approx Price Person
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div className="font-black sm:text-28 text-xl leading-8.5 text-citrusyellow">
										$599.00
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div className="font-black sm:text-28 text-xl leading-8.5 text-citrusyellow">
										$499.00
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div className="font-black sm:text-28 text-xl leading-8.5 text-citrusyellow">
										$649.00
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div className="font-black sm:text-28 text-xl leading-8.5 text-citrusyellow">
										$800.00
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div className="font-black sm:text-28 text-xl leading-8.5 text-citrusyellow">
										$399.00
									</div>
								</td>
							</tr>
							{/*4 Row */}
							<tr>
								<td className="sticky left-0 bg-white dark:bg-dark z-1 sm:py-3.75 sm:px-7.5 p-2.5 clear-both before:absolute before:-left-0.5 before:top-0 before:-bottom-px before:w-1.25 border border-cyangreen before:border-r before:border-cyangreen before:bg-linear-[var(--cyangreen-gradient)] after:absolute after:-right-0.5 after:top-0 after:-bottom-px after:w-1.25 before:border-l after:border-cyangreen after:bg-linear-[var(--cyangreen-gradient)]">
									<div className="font-base font-medium sm:text-xl text-sm text-primary dark:text-paleaqua sm:w-52.5 w-22.5">
										 Duration
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">6-7 days / 5 nights</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">6-7 days / 5 nights</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">6-7 days / 5 nights</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">6-7 days / 5 nights</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">6-7 days / 5 nights</p>
									</div>
								</td>
							</tr>

							{/*5 Row */}
							<tr>
								<td className="sticky left-0 bg-white dark:bg-dark z-1 sm:py-3.75 sm:px-7.5 p-2.5 clear-both before:absolute before:-left-0.5 before:top-0 before:-bottom-px before:w-1.25 border border-cyangreen before:border-r before:border-cyangreen before:bg-linear-[var(--cyangreen-gradient)] after:absolute after:-right-0.5 after:top-0 after:-bottom-px after:w-1.25 before:border-l after:border-cyangreen after:bg-linear-[var(--cyangreen-gradient)]">
									<div className="font-base font-medium sm:text-xl text-sm text-primary dark:text-paleaqua sm:w-52.5 w-22.5">
										 What’s Included / Highlights
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">Sightseeing, hotels, some meals; heritage places, desert experiences.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">Sightseeing, hotels, some meals; heritage places, desert experiences.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">Sightseeing, hotels, some meals; heritage places, desert experiences.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">Sightseeing, hotels, some meals; heritage places, desert experiences.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">Sightseeing, hotels, some meals; heritage places, desert experiences.</p>
									</div>
								</td>
							</tr>

							{/*6 Row */}
							<tr>
								<td className="sticky left-0 bg-white dark:bg-dark z-1 sm:py-3.75 sm:px-7.5 p-2.5 clear-both before:absolute before:-left-0.5 before:top-0 before:-bottom-px before:w-1.25 border border-cyangreen before:border-r before:border-cyangreen before:bg-linear-[var(--cyangreen-gradient)] after:absolute after:-right-0.5 after:top-0 after:-bottom-px after:w-1.25 before:border-l after:border-cyangreen after:bg-linear-[var(--cyangreen-gradient)]">
									<div className="font-base font-medium sm:text-xl text-sm text-primary dark:text-paleaqua sm:w-52.5 w-22.5">
										 Notes / Trade-offs
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">If you pick more luxury hotels, or add extra places, cost goes up. Travel time/cost to cover big distances adds to price.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">If you pick more luxury hotels, or add extra places, cost goes up. Travel time/cost to cover big distances adds to price.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">If you pick more luxury hotels, or add extra places, cost goes up. Travel time/cost to cover big distances adds to price.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">If you pick more luxury hotels, or add extra places, cost goes up. Travel time/cost to cover big distances adds to price.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">If you pick more luxury hotels, or add extra places, cost goes up. Travel time/cost to cover big distances adds to price.</p>
									</div>
								</td>
							</tr>

							{/*7 Row */}
							<tr>
								<td className="sticky left-0 bg-white dark:bg-dark z-1 sm:py-3.75 sm:px-7.5 p-2.5 clear-both before:absolute before:-left-0.5 before:top-0 before:-bottom-px before:w-1.25 border border-cyangreen before:border-r before:border-cyangreen before:bg-linear-[var(--cyangreen-gradient)] after:absolute after:-right-0.5 after:top-0 after:-bottom-px after:w-1.25 before:border-l after:border-cyangreen after:bg-linear-[var(--cyangreen-gradient)]">
									<div className="font-base font-medium sm:text-xl text-sm text-primary dark:text-paleaqua sm:w-52.5 w-22.5">
										 Max No. of People
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">5-7</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">5-7</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">5-7</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">5-7</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">5-7</p>
									</div>
								</td>
							</tr>

							{/*8 Row */}
							<tr>
								<td className="sticky left-0 bg-white dark:bg-dark z-1 sm:py-3.75 sm:px-7.5 p-2.5 clear-both before:absolute before:-left-0.5 before:top-0 before:-bottom-px before:w-1.25 border border-cyangreen before:border-r before:border-cyangreen before:bg-linear-[var(--cyangreen-gradient)] after:absolute after:-right-0.5 after:top-0 after:-bottom-px after:w-1.25 before:border-l after:border-cyangreen after:bg-linear-[var(--cyangreen-gradient)]">
									<div className="font-base font-medium sm:text-xl text-sm text-primary dark:text-paleaqua sm:w-52.5 w-22.5">
										 Accommodation
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">Comfort Hotel , Villa</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen"> 
									<div>
										<p className="sm:text-base text-2xs mb-4">Comfort Hotel , Villa</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">Comfort Hotel , Villa</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">Comfort Hotel , Villa</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">Comfort Hotel , Villa</p>
									</div>
								</td>
							</tr>

							{/*9 Row */}
							<tr>
								<td className="sticky left-0 bg-white dark:bg-dark z-1 sm:py-3.75 sm:px-7.5 p-2.5 clear-both before:absolute before:-left-0.5 before:top-0 before:-bottom-px before:w-1.25 border border-cyangreen before:border-r before:border-cyangreen before:bg-linear-[var(--cyangreen-gradient)] after:absolute after:-right-0.5 after:top-0 after:-bottom-px after:w-1.25 before:border-l after:border-cyangreen after:bg-linear-[var(--cyangreen-gradient)]">
									<div className="font-base font-medium sm:text-xl text-sm text-primary dark:text-paleaqua sm:w-52.5 w-22.5">
										 Transport
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p>Yes</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">Yes</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">Yes</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">Yes</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">Yes</p>
									</div>
								</td>
							</tr>

							{/*10 Row */}
							<tr>
								<td className="sticky left-0 bg-white dark:bg-dark z-1 sm:py-3.75 sm:px-7.5 p-2.5 clear-both before:absolute before:-left-0.5 before:top-0 before:-bottom-px before:w-1.25 border border-cyangreen before:border-r before:border-cyangreen before:bg-linear-[var(--cyangreen-gradient)] after:absolute after:-right-0.5 after:top-0 after:-bottom-px after:w-1.25 before:border-l after:border-cyangreen after:bg-linear-[var(--cyangreen-gradient)]">
									<div className="font-base font-medium sm:text-xl text-sm text-primary dark:text-paleaqua sm:w-52.5 w-22.5">
										 Meals
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">Yes</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">Yes</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">Yes</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">Yes</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">Yes</p>
									</div>
								</td>
							</tr>

							{/*11 Row */}
							<tr>
								<td className="sticky left-0 bg-white dark:bg-dark z-1 sm:py-3.75 sm:px-7.5 p-2.5 clear-both before:absolute before:-left-0.5 before:top-0 before:-bottom-px before:w-1.25 border border-cyangreen before:border-r before:border-cyangreen before:bg-linear-[var(--cyangreen-gradient)] after:absolute after:-right-0.5 after:top-0 after:-bottom-px after:w-1.25 before:border-l after:border-cyangreen after:bg-linear-[var(--cyangreen-gradient)]">
									<div className="font-base font-medium sm:text-xl text-sm text-primary dark:text-paleaqua sm:w-52.5 w-22.5">
										 Sightseeing & Activities
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">which ones included; optional ones cost extra</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">which ones included; optional ones cost extra</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">which ones included; optional ones cost extra</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">which ones included; optional ones cost extra</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">which ones included; optional ones cost extra</p>
									</div>
								</td>
							</tr>

							{/*12 Row */}
							<tr>
								<td className="sticky left-0 bg-white dark:bg-dark z-1 sm:py-3.75 sm:px-7.5 p-2.5 clear-both before:absolute before:-left-0.5 before:top-0 before:-bottom-px before:w-1.25 border border-cyangreen before:border-r before:border-cyangreen before:bg-linear-[var(--cyangreen-gradient)] after:absolute after:-right-0.5 after:top-0 after:-bottom-px after:w-1.25 before:border-l after:border-cyangreen after:bg-linear-[var(--cyangreen-gradient)]">
									<div className="font-base font-medium sm:text-xl text-sm text-primary dark:text-paleaqua sm:w-52.5 w-22.5">
										 Inclusions vs exclusions
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xsmb-4">entry fees, guide fees, taxes, tips etc.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="tsm:text-base text-2xs mb-4">entry fees, guide fees, taxes, tips etc.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">entry fees, guide fees, taxes, tips etc.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">entry fees, guide fees, taxes, tips etc.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">entry fees, guide fees, taxes, tips etc.</p>
									</div>
								</td>
							</tr>

							{/*13 Row */}
							<tr>
								<td className="sticky left-0 bg-white dark:bg-dark z-1 sm:py-3.75 sm:px-7.5 p-2.5 clear-both before:absolute before:-left-0.5 before:top-0 before:-bottom-px before:w-1.25 border border-cyangreen before:border-r before:border-cyangreen before:bg-linear-[var(--cyangreen-gradient)] after:absolute after:-right-0.5 after:top-0 after:-bottom-px after:w-1.25 before:border-l after:border-cyangreen after:bg-linear-[var(--cyangreen-gradient)]">
									<div className="font-base font-medium sm:text-xl text-sm text-primary dark:text-paleaqua sm:w-52.5 w-22.5">
										 Season / timing
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">prices are higher in peak tourist seasons; off-season can offer cheaper deals.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">prices are higher in peak tourist seasons; off-season can offer cheaper deals.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">prices are higher in peak tourist seasons; off-season can offer cheaper deals.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">prices are higher in peak tourist seasons; off-season can offer cheaper deals.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">prices are higher in peak tourist seasons; off-season can offer cheaper deals.</p>
									</div>
								</td>
							</tr>

							{/*14 Row */}
							<tr>
								<td className="sticky left-0 bg-white dark:bg-dark z-1 sm:py-3.75 sm:px-7.5 p-2.5 clear-both before:absolute before:-left-0.5 before:top-0 before:-bottom-px before:w-1.25 border border-cyangreen before:border-r before:border-cyangreen before:bg-linear-[var(--cyangreen-gradient)] after:absolute after:-right-0.5 after:top-0 after:-bottom-px after:w-1.25 before:border-l after:border-cyangreen after:bg-linear-[var(--cyangreen-gradient)]">
									<div className="font-base font-medium sm:text-xl text-sm text-primary dark:text-paleaqua sm:w-52.5 w-22.5">
										 Hidden costs
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">baggage fees, visa or permits, meals outside package, optional excursions.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">baggage fees, visa or permits, meals outside package, optional excursions.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">baggage fees, visa or permits, meals outside package, optional excursions.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen"> 
									<div>
										<p className="sm:text-base text-2xs mb-4">baggage fees, visa or permits, meals outside package, optional excursions.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">baggage fees, visa or permits, meals outside package, optional excursions.</p>
									</div>
								</td>
							</tr>

							{/*15 Row */}
							<tr>
								<td className="sticky left-0 bg-white dark:bg-dark z-1 sm:py-3.75 sm:px-7.5 p-2.5 clear-both before:absolute before:-left-0.5 before:top-0 before:-bottom-px before:w-1.25 border border-cyangreen before:border-r before:border-cyangreen before:bg-linear-[var(--cyangreen-gradient)] after:absolute after:-right-0.5 after:top-0 after:-bottom-px after:w-1.25 before:border-l after:border-cyangreen after:bg-linear-[var(--cyangreen-gradient)]">
									<div className="font-base font-medium sm:text-xl text-sm text-primary dark:text-paleaqua sm:w-52.5 w-22.5">
										 Group size / private vs group tours
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">private tours cost more but more flexible.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">private tours cost more but more flexible.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">private tours cost more but more flexible.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">private tours cost more but more flexible.</p>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<p className="sm:text-base text-2xs mb-4">private tours cost more but more flexible.</p>
									</div>
								</td>
							</tr>

							{/*15 Row */}
							<tr>
								<td className="sticky left-0 bg-white dark:bg-dark z-1 sm:py-3.75 sm:px-7.5 p-2.5 clear-both before:absolute before:-left-0.5 before:top-0 before:-bottom-px before:w-1.25 border border-cyangreen before:border-r before:border-cyangreen before:bg-linear-[var(--cyangreen-gradient)] after:absolute after:-right-0.5 after:top-0 after:-bottom-px after:w-1.25 before:border-l after:border-cyangreen after:bg-linear-[var(--cyangreen-gradient)]">
									<div className="font-base font-medium sm:text-xl text-sm text-primary dark:text-paleaqua sm:w-52.5 w-22.5">
										 &nbsp;
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<a href="javascript:void(0);" className="site-button outline">Book Now</a>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<a href="javascript:void(0);" className="site-button outline">Book Now</a>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<a href="javascript:void(0);" className="site-button outline">Book Now</a>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<a href="javascript:void(0);" className="site-button outline">Book Now</a>
									</div>
								</td>
								<td className="sm:py-3.75 sm:px-7.5 p-2.5 border border-cyangreen">
									<div>
										<a href="javascript:void(0);" className="site-button outline">Book Now</a>
									</div>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
    </div>
  );
}
