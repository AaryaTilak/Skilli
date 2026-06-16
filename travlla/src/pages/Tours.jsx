import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Tours() {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-content">
      {/*Tour Package Banner*/}
				<div className="relative h-147.5 z-10">
					<div className="w-full after:absolute after:inset-0 after:bg-[linear-gradient(2deg,rgb(0,0,0)_0%,rgba(10,10,10,0.51)_50%,rgba(0,0,0,0)_100%)] after:z-11">
						<div className="overflow-hidden">
							<img src="/assets/images/main-slider/slider4/pic1.jpg" alt="Image" className="h-147.5 object-cover w-full object-center" />   
						</div>
					</div>
					<div className="container">
						{/* SEARCH BAR START*/}
						<div className="max-w-162.5 w-[calc(100%_-_20px)] mx-auto mb-15 absolute z-99 bottom-0 left-1/2 -translate-x-1/2 holiday-banner">
							<h3 className="!text-white text-center md:text-42 text-36 mb-7.5">Australia Holiday Package </h3>
							<div className="sm:h-20 bg-white sm:rounded-full rounded-xl sm:p-2.5 p-5">
								<form className="dz-form dzForm" method="POST" action="assets/script/contact_smtp.php">
									<div className="sm:flex justify-between">
										<div className="sm:w-[calc(50%_-_20px)] sm:px-5 relative flex items-center swiper-slides-center w-full max-sm:mb-5">
											<div>
												<label className="text-sm text-primary font-bold font-title block">From</label>
												<div className="relative">
													<input  type="text" name="from" className="outline-none h-6 p-0 font-base font-normal text-sm text-darkgray bg-transparent placeholder:!text-darkgray" placeholder="Melbourne" />
												</div>
											</div>
										</div>
										<div className="sm:w-[calc(50%_-_20px)] sm:px-5 relative flex items-center swiper-slides-center w-full sm:before:border-l before:border-[#ddd] before:mr-5 before:absolute before:left-0 before:top-0 before:bottom-0 custom-select box-filter max-sm:mb-5">
											<div className="form-group" data-label="Color">
												<label className="text-sm text-primary font-bold font-title block">
													To Destination/Category
												</label>
												<select className="dynamic-select" id="sortingSelect" aria-label="Default select example" defaultValue="Zealand">
													<option value="Zealand">Australia</option>
													<option value="Paris">Paris</option>
													<option value="Bali">Bali</option>
													<option value="Indonesia">Indonesia</option>
												</select>
											</div>
										</div>
										<div className="sm:w-auto w-full">
											<button type="submit" name="submit" value="submit" className="text-28 text-white rounded-full size-15 bg-primary absolute top-1.25 right-1.25 duration-500 cursor-pointer" aria-label="Search"><i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i></button>
										</div>
									</div>
								</form>
							</div>
						</div>
						{/* SEARCH BAR END*/}
					</div>
				</div>
				{/*Tour Package Banner End*/}
				
				{/*Top FIlter Bar Start */}
				<div className="sm:p-7.5 py-7.5 sticky top-22.5 z-10">
					<div className="container">
						<div className="bg-light rounded-2lg p-2.5">
							<form>
								<div className="bg-white py-3 px-4 rounded-2lg shadow-[0_2px_6px_rgba(0,0,0,0.05)] mx-auto relative lg:flex items-center justify-between trv-filter-bar-section">
									<div className="flex items-center gap-2.5 flex-wrap">
										<div className="relative max-lg:w-[32.2%] max-md:w-[48.2%] max-sm:w-full">
											<button className="border border-[#e0e0e0] bg-[#f9f9f9] text-primary py-2 px-4.5 rounded-lg text-sm font-medium cursor-pointer relative duration-500 width-space-nowrap w-full trv-filter-btn max-lg:flex max-lg:justify-between max-lg:items-center" data-target="sort" type="button">Sort By<i className="text-xs pl-2.5 las la-angle-down"></i></button>
											<div className="trv-filter-content absolute top-15 left-0 bg-white rounded-2lg shadow-[0_4px_10px_rgba(0,0,0,0.1)] p-3.75 z-10 w-62.5 animate-fadeIn hidden duration-500" id="sort">
												<h2 className="mb-2.5 text-2sm text-primary!">Sort By</h2>
												<label className="block mb-2 text-sm cursor-pointer"><input type="radio" name="sort" /> Popularity</label>
												<label className="block mb-2 text-sm cursor-pointer"><input type="radio" name="sort" /> Price: Low to High</label>
												<label className="block mb-2 text-sm cursor-pointer"><input type="radio" name="sort" /> Price: High to Low</label>
											</div>
										</div>
										<div className="relative max-lg:w-[32.2%] max-md:w-[48.2%] max-sm:w-full">
											<button className="border border-[#e0e0e0] bg-[#f9f9f9] text-primary py-2 px-4.5 rounded-lg text-sm font-medium cursor-pointer relative duration-500 width-space-nowrap w-full trv-filter-btn max-lg:flex max-lg:justify-between max-lg:items-center" data-target="package" type="button">Package Type <i className="text-xs pl-2.5 las la-angle-down"></i></button>
											<div className="trv-filter-content absolute top-15 left-0 bg-white rounded-2lg shadow-[0_4px_10px_rgba(0,0,0,0.1)] p-3.75 z-10 w-62.5 animate-fadeIn hidden duration-500" id="package">
												<h2 className="mb-2.5 text-2sm text-primary!">Package Type</h2>
												<label className="block mb-2 text-sm cursor-pointer"><input type="checkbox" /> Family</label>
												<label className="block mb-2 text-sm cursor-pointer"><input type="checkbox" /> Adventure</label>
												<label className="block mb-2 text-sm cursor-pointer"><input type="checkbox" /> Romantic</label>
											</div>
										</div>
										<div className="relative max-lg:w-[32.2%] max-md:w-[48.2%] max-sm:w-full">
											<button className="border border-[#e0e0e0] bg-[#f9f9f9] text-primary py-2 px-4.5 rounded-lg text-sm font-medium cursor-pointer relative duration-500 width-space-nowrap w-full trv-filter-btn max-lg:flex max-lg:justify-between max-lg:items-center" data-target="price" type="button">Price <i className="text-xs pl-2.5 las la-angle-down"></i></button>
											<div className="trv-filter-content absolute top-15 left-0 bg-white rounded-2lg shadow-[0_4px_10px_rgba(0,0,0,0.1)] p-3.75 z-10 w-62.5 animate-fadeIn hidden duration-500" id="price">
											<h2 className="mb-2.5 text-2sm text-primary!">Price Range</h2>
											<label className="block mb-2 text-sm cursor-pointer"><input type="checkbox" /> Under ₹25,000</label>
											<label className="block mb-2 text-sm cursor-pointer"><input type="checkbox" /> ₹25,000 - ₹50,000</label>
											<label className="block mb-2 text-sm cursor-pointer"><input type="checkbox" /> ₹50,000+</label>
											</div>
										</div>
										<div className="relative max-lg:w-[32.2%] max-md:w-[48.2%] max-sm:w-full">
											<button className="border border-[#e0e0e0] bg-[#f9f9f9] text-primary py-2 px-4.5 rounded-lg text-sm font-medium cursor-pointer relative duration-500 width-space-nowrap w-full trv-filter-btn max-lg:flex max-lg:justify-between max-lg:items-center" data-target="duration" type="button">Duration <i className="text-xs pl-2.5 las la-angle-down"></i></button>
											<div className="trv-filter-content absolute top-15 left-0 bg-white rounded-2lg shadow-[0_4px_10px_rgba(0,0,0,0.1)] p-3.75 z-10 w-62.5 animate-fadeIn hidden duration-500" id="duration">
												<h2 className="mb-2.5 text-2sm text-primary!">Duration</h2>
												<label className="block mb-2 text-sm cursor-pointer"><input type="checkbox" /> 1-3 Days</label>
												<label className="block mb-2 text-sm cursor-pointer"><input type="checkbox" /> 4-7 Days</label>
												<label className="block mb-2 text-sm cursor-pointer"><input type="checkbox" /> 8+ Days</label>
											</div>
										</div>
										<div className="relative max-lg:w-[32.2%] max-md:w-[48.2%] max-sm:w-full">
											<button className="border border-[#e0e0e0] bg-[#f9f9f9] text-primary py-2 px-4.5 rounded-lg text-sm font-medium cursor-pointer relative duration-500 width-space-nowrap w-full trv-filter-btn max-lg:flex max-lg:justify-between max-lg:items-center" data-target="flight" type="button">Flight <i className="text-xs pl-2.5 las la-angle-down"></i></button>
											<div className="trv-filter-content absolute top-15 left-0 bg-white rounded-2lg shadow-[0_4px_10px_rgba(0,0,0,0.1)] p-3.75 z-10 w-62.5 animate-fadeIn hidden duration-500" id="flight">
												<h2 className="mb-2.5 text-2sm text-primary!">Flight</h2>
												<label className="block mb-2 text-sm cursor-pointer"><input type="radio" name="flight" /> Included</label>
												<label className="block mb-2 text-sm cursor-pointer"><input type="radio" name="flight" /> Excluded</label>
											</div>
										</div>
										<div className="relative max-lg:w-[32.2%] max-md:w-[48.2%] max-sm:w-full">
											<button className="border border-[#e0e0e0] bg-[#f9f9f9] text-primary py-2 px-4.5 rounded-lg text-sm font-medium cursor-pointer relative duration-500 width-space-nowrap w-full trv-filter-btn max-lg:flex max-lg:justify-between max-lg:items-center" data-target="themes" type="button">Themes <i className="text-xs pl-2.5 las la-angle-down"></i></button>
											<div className="trv-filter-content absolute top-15 left-0 bg-white rounded-2lg shadow-[0_4px_10px_rgba(0,0,0,0.1)] p-3.75 z-10 w-62.5 animate-fadeIn hidden duration-500" id="themes">
												<h2 className="mb-2.5 text-2sm text-primary!">Themes</h2>
												<label className="block mb-2 text-sm cursor-pointer"><input type="checkbox" /> Honeymoon</label>
												<label className="block mb-2 text-sm cursor-pointer"><input type="checkbox" /> Wildlife</label>
												<label className="block mb-2 text-sm cursor-pointer"><input type="checkbox" /> Beach</label>
											</div>
										</div>
									</div>
									<div className="max-lg:text-center max-lg:pt-2.5">
										<a href="javascript:void(0);" className="text-primary font-semibold text-sm cursor-pointer ml-2.5 hover:text-citrusyellow duration-500">Reset All</a>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				{/*Top FIlter Bar End */}

				{/* Project 2 SECTION START */}
				<div className="section-full pb-22.5">
					<div className="container">
						{/* PAGINATION START */}
						<div className="mb-10 text-center">
							<ul className="masonry-filter flex flex-wrap max-md:justify-center bg-light rounded-2lg py-1 px-5">
								<li className="relative z-1 text-left inline-block"><a data-filter="*" href="#" onClick={(e) => e.preventDefault()} className="text-sm relative z-1 font-semibold py-2.5 px-3.5 flex xl:mr-5 mr-3 
								hover:text-citrusyellow duration-500"><img src="/assets/images/filter-icon/001-suitcase.png" alt="Image" className="mr-2.5 h-5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" /> All Package</a></li>
								
								<li className="relative z-1 text-left inline-block"><a data-filter=".cat-1" href="#" onClick={(e) => e.preventDefault()} className="text-sm relative z-1 font-semibold py-2.5 px-3.5 flex xl:mr-5 mr-3 hover:text-citrusyellow duration-500"><img src="/assets/images/filter-icon/002-badge.png" alt="Image" className="mr-2.5 h-5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" /> Top Selling</a></li>
								
								<li className="relative z-1 text-left inline-block"><a data-filter=".cat-2" href="#" onClick={(e) => e.preventDefault()} className="text-sm relative z-1 font-semibold py-2.5 px-3.5 flex xl:mr-5 mr-3 hover:text-citrusyellow duration-500"><img src="/assets/images/filter-icon/003-manager.png" alt="Image" className="mr-2.5 h-5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" /> Package with Tour Manager</a></li>
								
								<li className="relative z-1 text-left inline-block"><a data-filter=".cat-3" href="#" onClick={(e) => e.preventDefault()} className="text-sm relative z-1 font-semibold py-2.5 px-3.5 flex xl:mr-5 mr-3 hover:text-citrusyellow duration-500"><img src="/assets/images/filter-icon/004-tour-guide.png" alt="Image" className="mr-2.5 h-5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" /> Guided Tours</a></li>
								
								<li className="relative z-1 text-left inline-block"><a data-filter=".cat-4" href="#" onClick={(e) => e.preventDefault()} className="text-sm relative z-1 font-semibold py-2.5 px-3.5 flex xl:mr-5 mr-3 hover:text-citrusyellow duration-500"><img src="/assets/images/filter-icon/006-business-trip.png" alt="Image" className="mr-2.5 h-5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" /> All-Inclusive Package</a></li>
							</ul>
						</div>
						{/* PAGINATION END */}
						
						{/* PROJECT CONTENT START */}
						<div className="masonry-wrap row clear-both flex justify-center flex-wrap">
							{/* COLUMNS 1 */}
							<div className="masonry-item cat-1 xl:w-[33.33%] md:w-1/2 w-full mb-7.5">
								<div>
									<div className="relative overflow-hidden rounded-t-3xl">
										<a href="javascript:void(0);"><img src="/assets/images/tour/style1/pic1.jpg" alt="Image" className="h-55 w-full object-cover object-center" /></a>
										<div className="absolute top-7.5 left-0 py-1.5 px-2.5 bg-white text-primary font-semibold text-sm rounded-r-3xl flex items-center">
											<input className="mr-2.5" type="checkbox" />
											<span className="block">Add Compare</span>
										</div>
									</div>
									<div className="bg-white p-7.5 rounded-b-3xl shadow-[0px_18px_18px_rgba(0,106,114,0.15)]">
										<div className="mb-2.5 flex items-center">
											<i className="text-xl las la-calendar-week mr-1.25"></i>
											<span>10N / 11D | Group Departure</span>
										</div>
										<div className="mb-2.5">
											<h3 className="text-2xl font-medium text-primary!">
												<a href="javascript:void(0);" className="hover:text-citrusyellow duration-500">
													Budget Paris & Swiss Getaway
												</a>
											</h3>
										</div>
										<div className="text-base leading-[1.3] font-title font-medium">
											<div>
												<p className="mb-4">3N Paris | 1N Geneva | 2N Central Switzerland | 1N Innsbruck | 1N Padova | 1N Arezzo | 1N Rome</p>
											</div>
											<div className="border-y border-paleaqua pt-2.5 mb-2.5">
												<ul>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/hotels.png" alt="Hotal" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/Sightseeing.png" alt="Sightseeing" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/car.png" alt="car" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/meal.png" alt="Meal" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
												</ul>
											</div>
											<span className="block text-primary font-semibold">Starting from</span>
											<span>
												<s className="text-lg text-citrusyellow">$799</s> $549
											</span>
											<span className="block">Per Person on twin sharing</span>
										</div>
										<ul className="mt-2.5 mb-5">
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Swarovski World.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Mini Train Ride in Vaduz.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Versailles Palace.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Romantic River Seine Cruise.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Visit Iconic Eiffel Tower. 
											</li>
										</ul>
										<div className="flex items-center justify-between">
											<div className="trv-book">
												<a href="javascript:void(0);" className="site-button outline">Book Now</a>
											</div>
											<div className="trv-tour-rating">
												<span className="trv-tour-review-count">(4.8 Review)</span>
												<div className="flex items-center text-citrusyellow mt-1.25">
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
							</div>

							{/* COLUMNS 2 */}
							<div className="masonry-item cat-2 xl:w-[33.33%] md:w-1/2 w-full mb-7.5">
								<div>
									<div className="relative overflow-hidden rounded-t-3xl">
										<a href="javascript:void(0);"><img src="/assets/images/tour/style1/pic2.jpg" alt="Image" className="h-55 w-full object-cover object-center" /></a>
										<div className="absolute top-7.5 left-0 py-1.5 px-2.5 bg-white text-primary font-semibold text-sm rounded-r-3xl flex items-center">
											<input className="mr-2.5" type="checkbox" />
											<span className="block">Add Compare</span>
										</div>
									</div>
									<div className="bg-white p-7.5 rounded-b-3xl shadow-[0px_18px_18px_rgba(0,106,114,0.15)]">
										<div className="mb-2.5 flex items-center">
											<i className="text-xl las la-calendar-week mr-1.25"></i>
											<span>10N / 11D | Group Departure</span>
										</div>
										<div className="mb-2.5">
											<h3 className="text-2xl font-medium text-primary!">
												<a href="javascript:void(0);" className="hover:text-citrusyellow duration-500">
													Budget Paris & Swiss Getaway
												</a>
											</h3>
										</div>
										<div className="text-base leading-[1.3] font-title font-medium">
											<div>
												<p className="mb-4">3N Paris | 1N Geneva | 2N Central Switzerland | 1N Innsbruck | 1N Padova | 1N Arezzo | 1N Rome</p>
											</div>
											<div className="border-y border-paleaqua pt-2.5 mb-2.5">
												<ul>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/hotels.png" alt="Hotal" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/Sightseeing.png" alt="Sightseeing" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/car.png" alt="car" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/meal.png" alt="Meal" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
												</ul>
											</div>
											<span className="block text-primary font-semibold">Starting from</span>
											<span>
												<s className="text-lg text-citrusyellow">$799</s> $549
											</span>
											<span className="block">Per Person on twin sharing</span>
										</div>
										<ul className="mt-2.5 mb-5">
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Swarovski World.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Mini Train Ride in Vaduz.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Versailles Palace.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Romantic River Seine Cruise.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Visit Iconic Eiffel Tower. 
											</li>
										</ul>
										<div className="flex items-center justify-between">
											<div className="trv-book">
												<a href="javascript:void(0);" className="site-button outline">Book Now</a>
											</div>
											<div className="trv-tour-rating">
												<span className="trv-tour-review-count">(4.8 Review)</span>
												<div className="flex items-center text-citrusyellow mt-1.25">
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
							</div>                    

							{/* COLUMNS 3 */}
							<div className="masonry-item cat-3 xl:w-[33.33%] md:w-1/2 w-full mb-7.5">
								<div>
									<div className="relative overflow-hidden rounded-t-3xl">
										<a href="javascript:void(0);"><img src="/assets/images/tour/style1/pic3.jpg" alt="Image" className="h-55 w-full object-cover object-center" /></a>
										<div className="absolute top-7.5 left-0 py-1.5 px-2.5 bg-white text-primary font-semibold text-sm rounded-r-3xl flex items-center">
											<input className="mr-2.5" type="checkbox" />
											<span className="block">Add Compare</span>
										</div>
									</div>
									<div className="bg-white p-7.5 rounded-b-3xl shadow-[0px_18px_18px_rgba(0,106,114,0.15)]">
										<div className="mb-2.5 flex items-center">
											<i className="text-xl las la-calendar-week mr-1.25"></i>
											<span>10N / 11D | Group Departure</span>
										</div>
										<div className="mb-2.5">
											<h3 className="text-2xl font-medium text-primary!">
												<a href="javascript:void(0);" className="hover:text-citrusyellow duration-500">
													Budget Paris & Swiss Getaway
												</a>
											</h3>
										</div>
										<div className="text-base leading-[1.3] font-title font-medium">
											<div>
												<p className="mb-4">3N Paris | 1N Geneva | 2N Central Switzerland | 1N Innsbruck | 1N Padova | 1N Arezzo | 1N Rome</p>
											</div>
											<div className="border-y border-paleaqua pt-2.5 mb-2.5">
												<ul>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/hotels.png" alt="Hotal" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/Sightseeing.png" alt="Sightseeing" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/car.png" alt="car" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/meal.png" alt="Meal" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
												</ul>
											</div>
											<span className="block text-primary font-semibold">Starting from</span>
											<span>
												<s className="text-lg text-citrusyellow">$799</s> $549
											</span>
											<span className="block">Per Person on twin sharing</span>
										</div>
										<ul className="mt-2.5 mb-5">
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Swarovski World.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Mini Train Ride in Vaduz.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Versailles Palace.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Romantic River Seine Cruise.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Visit Iconic Eiffel Tower. 
											</li>
										</ul>
										<div className="flex items-center justify-between">
											<div className="trv-book">
												<a href="javascript:void(0);" className="site-button outline">Book Now</a>
											</div>
											<div className="trv-tour-rating">
												<span className="trv-tour-review-count">(4.8 Review)</span>
												<div className="flex items-center text-citrusyellow mt-1.25">
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
							</div>                    

							{/* COLUMNS 4 */}
							<div className="masonry-item cat-4 xl:w-[33.33%] md:w-1/2 w-full mb-7.5">
								<div>
									<div className="relative overflow-hidden rounded-t-3xl">
										<a href="javascript:void(0);"><img src="/assets/images/tour/style1/pic4.jpg" alt="Image" className="h-55 w-full object-cover object-center" /></a>
										<div className="absolute top-7.5 left-0 py-1.5 px-2.5 bg-white text-primary font-semibold text-sm rounded-r-3xl flex items-center">
											<input className="mr-2.5" type="checkbox" />
											<span className="block">Add Compare</span>
										</div>
									</div>
									<div className="bg-white p-7.5 rounded-b-3xl shadow-[0px_18px_18px_rgba(0,106,114,0.15)]">
										<div className="mb-2.5 flex items-center">
											<i className="text-xl las la-calendar-week mr-1.25"></i>
											<span>10N / 11D | Group Departure</span>
										</div>
										<div className="mb-2.5">
											<h3 className="text-2xl font-medium text-primary!">
												<a href="javascript:void(0);" className="hover:text-citrusyellow duration-500">
													Budget Paris & Swiss Getaway
												</a>
											</h3>
										</div>
										<div className="text-base leading-[1.3] font-title font-medium">
											<div>
												<p className="mb-4">3N Paris | 1N Geneva | 2N Central Switzerland | 1N Innsbruck | 1N Padova | 1N Arezzo | 1N Rome</p>
											</div>
											<div className="border-y border-paleaqua pt-2.5 mb-2.5">
												<ul>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/hotels.png" alt="Hotal" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/Sightseeing.png" alt="Sightseeing" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/car.png" alt="car" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/meal.png" alt="Meal" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
												</ul>
											</div>
											<span className="block text-primary font-semibold">Starting from</span>
											<span>
												<s className="text-lg text-citrusyellow">$799</s> $549
											</span>
											<span className="block">Per Person on twin sharing</span>
										</div>
										<ul className="mt-2.5 mb-5">
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Swarovski World.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Mini Train Ride in Vaduz.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Versailles Palace.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Romantic River Seine Cruise.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Visit Iconic Eiffel Tower. 
											</li>
										</ul>
										<div className="flex items-center justify-between">
											<div className="trv-book">
												<a href="javascript:void(0);" className="site-button outline">Book Now</a>
											</div>
											<div className="trv-tour-rating">
												<span className="trv-tour-review-count">(4.8 Review)</span>
												<div className="flex items-center text-citrusyellow mt-1.25">
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
							</div>                    

							{/* COLUMNS 5 */}
							<div className="masonry-item cat-4 xl:w-[33.33%] md:w-1/2 w-full mb-7.5">
								<div>
									<div className="relative overflow-hidden rounded-t-3xl">
										<a href="javascript:void(0);"><img src="/assets/images/tour/style1/pic5.jpg" alt="Image" className="h-55 w-full object-cover object-center" /></a>
										<div className="absolute top-7.5 left-0 py-1.5 px-2.5 bg-white text-primary font-semibold text-sm rounded-r-3xl flex items-center">
											<input className="mr-2.5" type="checkbox" />
											<span className="block">Add Compare</span>
										</div>
									</div>
									<div className="bg-white p-7.5 rounded-b-3xl shadow-[0px_18px_18px_rgba(0,106,114,0.15)]">
										<div className="mb-2.5 flex items-center">
											<i className="text-xl las la-calendar-week mr-1.25"></i>
											<span>10N / 11D | Group Departure</span>
										</div>
										<div className="mb-2.5">
											<h3 className="text-2xl font-medium text-primary!">
												<a href="javascript:void(0);" className="hover:text-citrusyellow duration-500">
													Budget Paris & Swiss Getaway
												</a>
											</h3>
										</div>
										<div className="text-base leading-[1.3] font-title font-medium">
											<div>
												<p className="mb-4">3N Paris | 1N Geneva | 2N Central Switzerland | 1N Innsbruck | 1N Padova | 1N Arezzo | 1N Rome</p>
											</div>
											<div className="border-y border-paleaqua pt-2.5 mb-2.5">
												<ul>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/hotels.png" alt="Hotal" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/Sightseeing.png" alt="Sightseeing" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/car.png" alt="car" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/meal.png" alt="Meal" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
												</ul>
											</div>
											<span className="block text-primary font-semibold">Starting from</span>
											<span>
												<s className="text-lg text-citrusyellow">$799</s> $549
											</span>
											<span className="block">Per Person on twin sharing</span>
										</div>
										<ul className="mt-2.5 mb-5">
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Swarovski World.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Mini Train Ride in Vaduz.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Versailles Palace.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Romantic River Seine Cruise.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Visit Iconic Eiffel Tower. 
											</li>
										</ul>
										<div className="flex items-center justify-between">
											<div className="trv-book">
												<a href="javascript:void(0);" className="site-button outline">Book Now</a>
											</div>
											<div className="trv-tour-rating">
												<span className="trv-tour-review-count">(4.8 Review)</span>
												<div className="flex items-center text-citrusyellow mt-1.25">
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
							</div>                    

							{/* COLUMNS 6 */}
							<div className="masonry-item cat-1 xl:w-[33.33%] md:w-1/2 w-full mb-7.5">
								<div>
									<div className="relative overflow-hidden rounded-t-3xl">
										<a href="javascript:void(0);"><img src="/assets/images/tour/style1/pic6.jpg" alt="Image" className="h-55 w-full object-cover object-center" /></a>
										<div className="absolute top-7.5 left-0 py-1.5 px-2.5 bg-white text-primary font-semibold text-sm rounded-r-3xl flex items-center">
											<input className="mr-2.5" type="checkbox" />
											<span className="block">Add Compare</span>
										</div>
									</div>
									<div className="bg-white p-7.5 rounded-b-3xl shadow-[0px_18px_18px_rgba(0,106,114,0.15)]">
										<div className="mb-2.5 flex items-center">
											<i className="text-xl las la-calendar-week mr-1.25"></i>
											<span>10N / 11D | Group Departure</span>
										</div>
										<div className="mb-2.5">
											<h3 className="text-2xl font-medium text-primary!">
												<a href="javascript:void(0);" className="hover:text-citrusyellow duration-500">
													Budget Paris & Swiss Getaway
												</a>
											</h3>
										</div>
										<div className="text-base leading-[1.3] font-title font-medium">
											<div>
												<p className="mb-4">3N Paris | 1N Geneva | 2N Central Switzerland | 1N Innsbruck | 1N Padova | 1N Arezzo | 1N Rome</p>
											</div>
											<div className="border-y border-paleaqua pt-2.5 mb-2.5">
												<ul>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/hotels.png" alt="Hotal" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/Sightseeing.png" alt="Sightseeing" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/car.png" alt="car" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/meal.png" alt="Meal" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
												</ul>
											</div>
											<span className="block text-primary font-semibold">Starting from</span>
											<span>
												<s className="text-lg text-citrusyellow">$799</s> $549
											</span>
											<span className="block">Per Person on twin sharing</span>
										</div>
										<ul className="mt-2.5 mb-5">
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Swarovski World.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Mini Train Ride in Vaduz.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Versailles Palace.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Romantic River Seine Cruise.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Visit Iconic Eiffel Tower. 
											</li>
										</ul>
										<div className="flex items-center justify-between">
											<div className="trv-book">
												<a href="javascript:void(0);" className="site-button outline">Book Now</a>
											</div>
											<div className="trv-tour-rating">
												<span className="trv-tour-review-count">(4.8 Review)</span>
												<div className="flex items-center text-citrusyellow mt-1.25">
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
							</div>

							{/* COLUMNS 7 */}
							<div className="masonry-item cat-2 xl:w-[33.33%] md:w-1/2 w-full mb-7.5">
								<div>
									<div className="relative overflow-hidden rounded-t-3xl">
										<a href="javascript:void(0);"><img src="/assets/images/tour/style1/pic7.jpg" alt="Image" className="h-55 w-full object-cover object-center" /></a>
										<div className="absolute top-7.5 left-0 py-1.5 px-2.5 bg-white text-primary font-semibold text-sm rounded-r-3xl flex items-center">
											<input className="mr-2.5" type="checkbox" />
											<span className="block">Add Compare</span>
										</div>
									</div>
									<div className="bg-white p-7.5 rounded-b-3xl shadow-[0px_18px_18px_rgba(0,106,114,0.15)]">
										<div className="mb-2.5 flex items-center">
											<i className="text-xl las la-calendar-week mr-1.25"></i>
											<span>10N / 11D | Group Departure</span>
										</div>
										<div className="mb-2.5">
											<h3 className="text-2xl font-medium text-primary!">
												<a href="javascript:void(0);" className="hover:text-citrusyellow duration-500">
													Budget Paris & Swiss Getaway
												</a>
											</h3>
										</div>
										<div className="text-base leading-[1.3] font-title font-medium">
											<div>
												<p className="mb-4">3N Paris | 1N Geneva | 2N Central Switzerland | 1N Innsbruck | 1N Padova | 1N Arezzo | 1N Rome</p>
											</div>
											<div className="border-y border-paleaqua pt-2.5 mb-2.5">
												<ul>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/hotels.png" alt="Hotal" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/Sightseeing.png" alt="Sightseeing" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/car.png" alt="car" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/meal.png" alt="Meal" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
												</ul>
											</div>
											<span className="block text-primary font-semibold">Starting from</span>
											<span>
												<s className="text-lg text-citrusyellow">$799</s> $549
											</span>
											<span className="block">Per Person on twin sharing</span>
										</div>
										<ul className="mt-2.5 mb-5">
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Swarovski World.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Mini Train Ride in Vaduz.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Versailles Palace.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Romantic River Seine Cruise.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Visit Iconic Eiffel Tower. 
											</li>
										</ul>
										<div className="flex items-center justify-between">
											<div className="trv-book">
												<a href="javascript:void(0);" className="site-button outline">Book Now</a>
											</div>
											<div className="trv-tour-rating">
												<span className="trv-tour-review-count">(4.8 Review)</span>
												<div className="flex items-center text-citrusyellow mt-1.25">
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
							</div>

							{/* COLUMNS 8 */}
							<div className="masonry-item cat-3 xl:w-[33.33%] md:w-1/2 w-full mb-7.5">
								<div>
									<div className="relative overflow-hidden rounded-t-3xl">
										<a href="javascript:void(0);"><img src="/assets/images/tour/style1/pic8.jpg" alt="Image" className="h-55 w-full object-cover object-center" /></a>
										<div className="absolute top-7.5 left-0 py-1.5 px-2.5 bg-white text-primary font-semibold text-sm rounded-r-3xl flex items-center">
											<input className="mr-2.5" type="checkbox" />
											<span className="block">Add Compare</span>
										</div>
									</div>
									<div className="bg-white p-7.5 rounded-b-3xl shadow-[0px_18px_18px_rgba(0,106,114,0.15)]">
										<div className="mb-2.5 flex items-center">
											<i className="text-xl las la-calendar-week mr-1.25"></i>
											<span>10N / 11D | Group Departure</span>
										</div>
										<div className="mb-2.5">
											<h3 className="text-2xl font-medium text-primary!">
												<a href="javascript:void(0);" className="hover:text-citrusyellow duration-500">
													Budget Paris & Swiss Getaway
												</a>
											</h3>
										</div>
										<div className="text-base leading-[1.3] font-title font-medium">
											<div>
												<p className="mb-4">3N Paris | 1N Geneva | 2N Central Switzerland | 1N Innsbruck | 1N Padova | 1N Arezzo | 1N Rome</p>
											</div>
											<div className="border-y border-paleaqua pt-2.5 mb-2.5">
												<ul>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/hotels.png" alt="Hotal" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/Sightseeing.png" alt="Sightseeing" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/car.png" alt="car" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/meal.png" alt="Meal" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
												</ul>
											</div>
											<span className="block text-primary font-semibold">Starting from</span>
											<span>
												<s className="text-lg text-citrusyellow">$799</s> $549
											</span>
											<span className="block">Per Person on twin sharing</span>
										</div>
										<ul className="mt-2.5 mb-5">
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Swarovski World.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Mini Train Ride in Vaduz.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Versailles Palace.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Romantic River Seine Cruise.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Visit Iconic Eiffel Tower. 
											</li>
										</ul>
										<div className="flex items-center justify-between">
											<div className="trv-book">
												<a href="javascript:void(0);" className="site-button outline">Book Now</a>
											</div>
											<div className="trv-tour-rating">
												<span className="trv-tour-review-count">(4.8 Review)</span>
												<div className="flex items-center text-citrusyellow mt-1.25">
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
							</div>
							
							{/* COLUMNS 9 */}
							<div className="masonry-item cat-3 xl:w-[33.33%] w-full mb-7.5">
								<div>
									<div className="relative overflow-hidden rounded-t-3xl">
										<a href="javascript:void(0);"><img src="/assets/images/tour/style1/pic9.jpg" alt="Image" className="h-55 w-full object-cover object-center" /></a>
										<div className="absolute top-7.5 left-0 py-1.5 px-2.5 bg-white text-primary font-semibold text-sm rounded-r-3xl flex items-center">
											<input className="mr-2.5" type="checkbox" />
											<span className="block">Add Compare</span>
										</div>
									</div>
									<div className="bg-white p-7.5 rounded-b-3xl shadow-[0px_18px_18px_rgba(0,106,114,0.15)]">
										<div className="mb-2.5 flex items-center">
											<i className="text-xl las la-calendar-week mr-1.25"></i>
											<span>10N / 11D | Group Departure</span>
										</div>
										<div className="mb-2.5">
											<h3 className="text-2xl font-medium text-primary!">
												<a href="javascript:void(0);" className="hover:text-citrusyellow duration-500">
													Budget Paris & Swiss Getaway
												</a>
											</h3>
										</div>
										<div className="text-base leading-[1.3] font-title font-medium">
											<div>
												<p className="mb-4">3N Paris | 1N Geneva | 2N Central Switzerland | 1N Innsbruck | 1N Padova | 1N Arezzo | 1N Rome</p>
											</div>
											<div className="border-y border-paleaqua pt-2.5 mb-2.5">
												<ul>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/hotels.png" alt="Hotal" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/Sightseeing.png" alt="Sightseeing" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/car.png" alt="car" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
													<li className="mx-2 inline-block text-center">
														<div className="mb-2.5">
															<img src="/assets/images/holi-icon/meal.png" alt="Meal" className="w-auto h-7.5 filter-[brightness(0)_saturate(100%)_invert(28%)_sepia(17%)_saturate(3758%)_hue-rotate(146deg)_brightness(94%)_contrast(95%)]" />
														</div>
													</li>
												</ul>
											</div>
											<span className="block text-primary font-semibold">Starting from</span>
											<span>
												<s className="text-lg text-citrusyellow">$799</s> $549
											</span>
											<span className="block">Per Person on twin sharing</span>
										</div>
										<ul className="mt-2.5 mb-5">
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Swarovski World.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Mini Train Ride in Vaduz.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Versailles Palace.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Romantic River Seine Cruise.
											</li>
											<li className="font-base text-xs font-normal text-primary relative pl-5 mb-[2px] text-left inline-block mr-2.5">
												<a className="absolute bg-citrusyellow size-3.75 p-0.75 flex items-center justify-center text-white rounded-full left-0 top-0"><i className="text-[8px] fa-solid fa-check"></i></a>
												Visit Iconic Eiffel Tower. 
											</li>
										</ul>
										<div className="flex items-center justify-between">
											<div className="trv-book">
												<a href="javascript:void(0);" className="site-button outline">Book Now</a>
											</div>
											<div className="trv-tour-rating">
												<span className="trv-tour-review-count">(4.8 Review)</span>
												<div className="flex items-center text-citrusyellow mt-1.25">
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
							</div> 																									
						</div>
						{/* PROJECT CONTENT END */} 
					</div>
				</div>
    </div>
  );
}
