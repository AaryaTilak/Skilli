import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-content">
      {/* Banner Style One */}
				<div className="2xl:h-237.5 lg:h-192 overflow-hidden relative" style={{ backgroundImage: "url('/assets/images/main-slider/slider2/slider-bg.jpg')" }}>
                <div className="bg-black/20 lg:rounded-3xl lg:m-8.75 lg:mt-0 lg:top-8.75 2xl:h-220 lg:h-174.5 relative z-2 flex justify-between max-lg:text-center">
                    <div className="max-w-480 mx-auto relative w-full lg:pb-0 pb-10">
                        <div className="px-5 pt-30 sm:pt-37.5 lg:pl-7.5 2xl:pt-50 2xl:pl-17.5 lg:pr-0 max-w-255">
                            <span className="xl:text-5xl text-28 leading-17.5 text-white lg:pl-12.5 font-display block">Discover</span>
                            <div className="relative">
                                <h1 className="!font-display 4xl:!text-50xl 2xl:!text-40xl md:!text-30xl sm:!text-80 text-5xl !text-white relative inline-block mb-5 animate-slide-left" title="The World">The World</h1>
                            </div>
                            <div className="xl:text-28 sm:text-xl text-lg leading-7.5 text-white relative mb-7.5 italic lg:pl-12.5">The Safety of our customers at all stages</div>
                            <div className="mb-10 lg:pl-12.5 relative z-4"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/contact'); }} className="site-button butn-bg-shape">Get In Touch</a></div>
    
                            {/* SEARCH BAR START*/}
                            <div className="lg:w-162.5 w-full lg:ml-12.5 lg:mb-7.5 relative z-100">
                                <div className="bg-white lg:rounded-25xl rounded-2xl sm:pt-3 sm:pr-3.25 sm:pb-2.25 sm:pl-10 p-5">
                                    <form>
                                        <div className="flex justify-between items-center max-lg:flex-wrap max-sm:flex-col">
                                            <div className="lg:w-42.5 sm:w-[48%] w-full max-sm:mb-5 max-lg:mb-5 max-lg:border-b border-paleaqua custom-select">
                                                <div className="form-group" data-label="Color">
                                                    <label className="text-xl text-primary font-bold font-title block">
                                                        Location
                                                    </label>
                                                    <select className="dynamic-select" id="sortingSelect" defaultValue="Zealand">
                                                        <option value="Zealand">New Zealand</option>
                                                        <option value="Paris">Paris</option>
                                                        <option value="Bali">Bali</option>
                                                        <option value="Indonesia">Indonesia</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="lg:w-42.5 sm:w-[48%] w-full max-sm:mb-5 max-lg:mb-5 max-lg:border-b border-paleaqua">
                                                <div className="text-start">
                                                    <label className="text-xl text-primary font-bold font-title block">Date</label>
                                                    <div className="relative">
                                                        <input className="outline-none h-8.5 p-0 font-base font-normal text-sm text-darkgray bg-transparent placeholder:!text-darkgray flatpickr1" placeholder="Date" />
                                                        <span className="absolute right-3.75 bottom-2 text-input text-sm pointer-events-none">
                                                            <i className="fa fa-solid fa-calendar-days"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="lg:w-42.5 sm:w-[48%] w-full max-sm:mb-5 max-lg:mb-5 max-lg:border-b border-paleaqua">
                                                <div className="text-start">
                                                    <label className="text-xl text-primary font-bold font-title block">Traveler</label>
                                                    <div className="input-group">
                                                        <span className="flex gap-2.5 w-full">
                                                            <input type="number" step="1" defaultValue="1" name="quantity" className="touchspin h-6 lg:w-17.5 w-full leading-6.75 text-darkgray font-bold outline-none font-base text-sm" />
                                                            <button type="button" value="-" data-field="quantity" aria-label="Decrease quantity" className="button-minus cursor-pointer size-6 leading-6.75 text-center text-base text-input"><i className="las la-minus text-lg" aria-hidden="true"></i></button>
                                                            <button type="button" value="+" data-field="quantity" aria-label="Increase quantity"className="button-plus cursor-pointer size-6 leading-6.75 text-center text-base text-input"><i className="las la-plus text-lg" aria-hidden="true"></i></button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="lg:w-auto w-full">
                                                <button className="text-28 rounded-2lg sm:rounded-full size-15 bg-secondary text-primary max-lg:!w-full duration-500 cursor-pointer hover:bg-citrusyellow" aria-label="Search"><i className="fa-solid fa-magnifying-glass"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* SEARCH BAR END*/} 
                            <div className="lg:pl-12.5 text-white flex items-center max-lg:justify-center">
                                <span className="py-7.5 pr-26.25 lg:py-0 text-xs leading-4.5 tracking-[0.2em] uppercase relative inline-block after:content-[''] after:absolute after:w-16 after:h-px after:bg-white after:right-5 after:top-1/2 after:-translate-y-1/2">Follow Us</span>
								<ul className="flex">
									<li><a href="https://www.facebook.com" target="_blank" className="text-white text-xl ml-5 duration-500 block hover:text-secondary hover:-translate-y-1.25"><i className="fa-brands fa-facebook-f"></i></a></li>
									<li><a href="https://www.linkedin.com" target="_blank" className="text-white text-xl ml-5 duration-500 block hover:text-secondary hover:-translate-y-1.25"><i className="fa-brands fa-linkedin-in"></i></a></li>
									<li><a href="https://www.instagram.com" target="_blank" className="text-white text-xl ml-5 duration-500 block hover:text-secondary hover:-translate-y-1.25"><i className="fa-brands fa-instagram"></i></a></li>
									<li><a href="https://www.x.com" target="_blank" className="text-white text-xl ml-5 duration-500 block hover:text-secondary hover:-translate-y-1.25"><i className="fa-brands fa-x-twitter"></i></a></li>
								</ul>
                            </div>
                            <div className="twm-img-bg-circle-area">
                                <div className="twm-img-bg-circle1-wrap">
                                    <div className="twm-img-bg-circle1 rotate-center"><span></span></div>
                                </div>
                                <div className="twm-img-bg-circle2-wrap">
                                    <div className="twm-img-bg-circle2 rotate-center-reverse"><span></span></div>
                                </div>
                                <div className="twm-img-bg-circle3-wrap">
                                    <div className="twm-img-bg-circle3 rotate-center"><span></span></div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:absolute top-0 right-0 z-12">
                            <div className="absolute top-40 right-[30%] w-[30%] xl:w-[55%] xl:right-[45%] 3xl:left-[-55%] 3xl:w-auto 3xl:right-auto max-lg:hidden">
                                <img src="/assets/images/main-slider/slider2/Plane-With-Line.png" alt="Image" width="770" height="291" loading="lazy" />
                            </div>
                            <div className="relative lg:top-40 ml-auto 2xxl:w-full xl:w-3/4 w-1/2 max-2xl:mr-12.5 max-lg:!mr-auto">
                                <img src="/assets/images/main-slider/slider2/right-pic.png" alt="Image" width="819" height="702" loading="lazy" />
                            </div>
                        </div>
                        <div className="absolute top-37.5 w-full z-10">            
                            <div className="inline-block whitespace-nowrap animate-moveCloud">
                                <img src="/assets/images/main-slider/slider2/Cloud1.png" alt="Image" width="168" height="131" loading="lazy" />
                            </div>
                        </div>
                        <div className="absolute top-0 w-full z-10">
                            <div className="inline-block whitespace-nowrap animate-moveCloud">
                                <img src="/assets/images/main-slider/slider2/Cloud2.png" alt="Image" width="168" height="131" loading="lazy" />    
                            </div>
                        </div>
                        <div className="lg:absolute xl:right-12.5 lg:right-5 lg:top-1/2 lg:-translate-y-1/2 text-white z-15">
                            <span className="block font-light text-base xl:text-22 leading-6.5 italic rotate-[-15deg]">Get Up To</span>
                            <span className="block font-black text-5xl xl:text-82 leading-[0.75] italic rotate-[-15deg] ">45%</span>
                            <span className="block font-bold text-base xl:text-2xl leading-6 italic rotate-[-15deg] -mt-1.25 ml-7.5 capitalize">Discount</span>
                        </div>
                    </div>
                </div>
            </div>
				{/* Banner Style One */}

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
				{/*STEPS SECTION END*/}
				
				{/*MOST FAVORITE TOUR PLACE SECTION START*/}
				<div className="bg-light 2xl:p-12.5 xl:p-9 p-0">
                <div className="relative bg-primary xl:rounded-3xl overflow-hidden">
                    <div className="lg:flex items-center max-w-405 mx-auto px-3 pb-7.5 md:p-7.5 pt-12.5 lg:px-5 lg:pt-25 lg:pb-18.75">
                        <div className="max-w-125">
                            <div className="sm:mb-15 mb-7.5">
                                <h2 className="xl:text-46 md:text-40 text-3xl mb-3.5 text-white!"><span className="text-citrusyellow">Most Favorite</span> Tour Places!</h2>
                                <div className="text-base sm:mb-15 mb-7.5 text-paleaqua!">Choosing a destination can be exciting but also a bit overwhelming with so many amazing places out there! Let's narrow it down a little. Are you dreaming of peaceful nature, buzzing cities, historical wonders, or relaxing beaches?</div>
                            </div>
                            <div className="flex mb-7.5">
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
                                <div className="trv-hpy-cus-count">
                                    <span className="block font-black text-22 text-secondary">3.5k</span>
                                    <p className="uppercase font-medium text-xs text-white">Happy Customer</p>
                                </div>
                            </div>
                            <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }} className="site-button butn-bg-shape">View More Destinations</a>
                        </div>
                        <div className="lg:pl-25 max-lg:pt-7.5 font-base font-black 2xl:text-30xl xl:text-8xl lg:text-7xl text-4xl leading-[1.2] uppercase text-white">
                            <span className="block text-citrusyellow">Top!</span> 
                            Destination
                        </div>
                    </div>

                    <div className="px-3 sm:px-8.5 pb-7.5">
                        <div className="">
                           <div className="!grid swiper trv-mf-tour-swiper">
                            <div className="swiper-wrapper">
                                {/*BOX-1*/}
                                <div className="swiper-slide group !flex-1 sm:hover:!flex-2 duration-500 !transition-all">
                                    <div className="mb-px border border-white/40 rounded-3xl p-3.75 duration-500 bg-primary group-hover:bg-light">
                                        <div className="trv-media">
                                            <img src="/assets/images/trv-mostfav/pic1.jpg" alt="Image" className="h-87 object-cover object-center rounded-2xl w-full" width="291" height="348" loading="lazy" />
                                        </div>
                                        <h3 className="text-center text-28 font-medium mt-3.75 mb-1.25">
                                            <a className="text-white duration-500 mb-2.5 block group-hover:text-heading" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}>Paris</a>
                                            <span className="block text-base font-medium text-white duration-500 group-hover:text-heading">28 Listing</span>
                                        </h3>
                                    </div>
                                </div>
                                {/*BOX-2*/}
                                <div className="swiper-slide group !flex-1 sm:hover:!flex-2 duration-500 !transition-all">
                                    <div className="mb-px border border-white/40 rounded-3xl p-3.75 duration-500 bg-primary group-hover:bg-light">
                                        <div className="trv-media">
                                            <img src="/assets/images/trv-mostfav/pic2.jpg" alt="Image" className="h-87 object-cover object-center rounded-2xl w-full" width="291" height="348" loading="lazy" />
                                        </div>
                                        <h3 className="text-center text-28 font-medium mt-3.75 mb-1.25">
                                            <a className="text-white duration-500 mb-2.5 block group-hover:text-heading" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}>Kashmir</a>
                                            <span className="block text-base font-medium text-white duration-500 group-hover:text-heading">32 Listing</span>
                                        </h3>
                                    </div>
                                </div>
                                {/*BOX-3*/}
                                <div className="swiper-slide group !flex-1 sm:hover:!flex-2 duration-500 !transition-all">
                                    <div className="mb-px border border-white/40 rounded-3xl p-3.75 duration-500 bg-primary group-hover:bg-light">
                                        <div className="trv-media">
                                            <img src="/assets/images/trv-mostfav/pic3.jpg" alt="Image" className="h-87 object-cover object-center rounded-2xl w-full" width="291" height="348" loading="lazy" />
                                        </div>
                                        <h3 className="text-center text-28 font-medium mt-3.75 mb-1.25">
                                            <a className="text-white duration-500 mb-2.5 block group-hover:text-heading" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}>Thailand</a>
                                            <span className="block text-base font-medium text-white duration-500 group-hover:text-heading">20 Listing</span>
                                        </h3>
                                    </div>
                                </div>
                                {/*BOX-4*/}
                                <div className="swiper-slide group !flex-1 sm:hover:!flex-2 duration-500 !transition-all">
                                    <div className="mb-px border border-white/40 rounded-3xl p-3.75 duration-500 bg-primary group-hover:bg-light">
                                        <div className="trv-media">
                                            <img src="/assets/images/trv-mostfav/pic4.jpg" alt="Image" className="h-87 object-cover object-center rounded-2xl w-full" width="291" height="348" loading="lazy" />
                                        </div>
                                        <h3 className="text-center text-28 font-medium mt-3.75 mb-1.25">
                                            <a className="text-white duration-500 mb-2.5 block group-hover:text-heading" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}>Maldives</a>
                                            <span className="block text-base font-medium text-white duration-500 group-hover:text-heading">40 Listing</span>
                                        </h3>
                                    </div>
                                </div>
                                {/*BOX-5*/}
                                <div className="swiper-slide group !flex-1 sm:hover:!flex-2 duration-500 !transition-all">
                                    <div className="mb-px border border-white/40 rounded-3xl p-3.75 duration-500 bg-primary group-hover:bg-light">
                                        <div className="trv-media">
                                            <img src="/assets/images/trv-mostfav/pic5.jpg" alt="Image" className="h-87 object-cover object-center rounded-2xl w-full" width="291" height="348" loading="lazy" />
                                        </div>
                                        <h3 className="text-center text-28 font-medium mt-3.75 mb-1.25">
                                            <a className="text-white duration-500 mb-2.5 block group-hover:text-heading" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}>Indonesia</a>
                                            <span className="block text-base font-medium text-white duration-500 group-hover:text-heading">80 Listing</span>
                                        </h3>
                                    </div>
                                </div>
                                {/*BOX-6*/}
                                <div className="swiper-slide group !flex-1 sm:hover:!flex-2 duration-500 !transition-all">
                                    <div className="mb-px border border-white/40 rounded-3xl p-3.75 duration-500 bg-primary group-hover:bg-light">
                                        <div className="trv-media">
                                            <img src="/assets/images/trv-mostfav/pic6.jpg" alt="Image" className="h-87 object-cover object-center rounded-2xl w-full" width="291" height="348" loading="lazy" />
                                        </div>
                                        <h3 className="text-center text-28 font-medium mt-3.75 mb-1.25">
                                            <a className="text-white duration-500 mb-2.5 block group-hover:text-heading" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}>Bali</a>
                                            <span className="block text-base font-medium text-white duration-500 group-hover:text-heading">20 Listing</span>
                                        </h3>
                                    </div>
                                </div>
                                {/*BOX-7*/}
                                <div className="swiper-slide group !flex-1 sm:hover:!flex-2 duration-500 !transition-all">
                                    <div className="mb-px border border-white/40 rounded-3xl p-3.75 duration-500 bg-primary group-hover:bg-light">
                                        <div className="trv-media">
                                            <img src="/assets/images/trv-mostfav/pic7.jpg" alt="Image" className="h-87 object-cover object-center rounded-2xl w-full" width="291" height="348" loading="lazy" />
                                        </div>
                                        <h3 className="text-center text-28 font-medium mt-3.75 mb-1.25">
                                            <a className="text-white duration-500 mb-2.5 block group-hover:text-heading" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/destinations'); }}>Mauritius</a>
                                            <span className="block text-base font-medium text-white duration-500 group-hover:text-heading">20 Listing</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-button-next !size-14 rounded-full bg-citrusyellow text-white! hover:text-citrusyellow! hover:!bg-white after:text-base!"></div>
                            <div className="swiper-button-prev !size-14 rounded-full bg-citrusyellow text-white! hover:text-citrusyellow! hover:!bg-white after:text-base!"></div>
                           </div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 max-lg:w-[35%] max-md:!w-[30%] max-md:hidden">
                        <img src="/assets/images/man-rock.png" alt="Image" />
                    </div>
                </div>
            </div>
				{/*MOST FAVORITE TOUR PLACE SECTION END*/} 
				
				{/*WE RECOMMEND SECTION START*/}
				<div className="xl:pt-30 pt-12.5 bg-white dark:bg-dark">
                <div className="container">
                    <div className="section-content">
                        <div className="trv-we-recommend2-row">
                            <div className="row">
                                <div className="lg:w-7/12 w-full">
                                    <div className="relative pt-17.5 lg:mr-6 sm:h-152.5 h-115 max-lg:mb-7.5">
                                        <div className="absolute top-0 right-0 z-2 animate-slide-left max-sm:w-50">
                                            <img src="/assets/images/airplane.png" alt="image" className="max-md:w-full" width="431" height="166" loading="lazy" />
                                        </div>
                                        <div className="sm:max-w-69.5 max-w-50 overflow-hidden">
                                            <img src="/assets/images/we-rec-pic5.jpg" alt="image" className="w-full rounded-s-3xl rounded-e-25xl" width="478" height="420" loading="lazy" />
                                        </div>
                                        <div className="mt-3 md:size-97.5 sm:size-67.5 size-50 md:border-[20px] border-8 border-white rounded-full shadow-circle-bx2 absolute left-1/2 top-1/2 -translate-1/2 z-1">
                                            <img src="/assets/images/we-rec-pic3.jpg" alt="image" className="w-full rounded-full" width="350" height="350" loading="lazy" />
                                        </div>
                                        <div className="absolute bottom-0 right-0 sm:max-w-69.5 max-w-50">
                                            <img src="/assets/images/we-rec-pic4.jpg" alt="image" className="w-full rounded-s-3xl rounded-e-25xl" width="278" height="420" loading="lazy" />
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
                                            
                                            <div className="flex items-center max-w-104 py-3.75 px-10 bg-white border border-primary/10 rounded-2xl mb-5">
                                                <div className="bg-no-repeat size-13.75 min-w-13.75 bg-size-[100%] mr-7.5 flex items-center justify-center">
                                                    <span><img src="/assets/images/trv-icon/travel-guide.png" alt="img" className="image-filter-2 max-w-12" style={{ filter: "brightness(0) saturate(100%) invert(12%) sepia(96%) saturate(4615%) hue-rotate(176deg) brightness(92%) contrast(95%)" }}
													width="48" height="49" loading="lazy" /></span>
                                                </div>
                                                <div>
                                                    <h2 className="text-2xl text-primary! font-medium mb-3">Trusted travel guide</h2>
                                                    <p className="">Provides reliable information to help travelers plan their trips efficiently and safely.</p>   
                                                </div>
                                            </div>
                                            <div className="flex items-center max-w-104 py-3.75 px-10 bg-white border border-primary/10 rounded-2xl mb-5">
                                                <div className="bg-no-repeat size-13.75 min-w-13.75 bg-size-[100%] mr-7.5 flex items-center justify-center">
                                                    <span><img src="/assets/images/trv-icon/mission-icon.png" alt="img" className="image-filter-2 max-w-12" style={{ filter: "brightness(0) saturate(100%) invert(12%) sepia(96%) saturate(4615%) hue-rotate(176deg) brightness(92%) contrast(95%)" }} width="48" height="49" loading="lazy"  /></span>
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
				
				{/*TOUR CATEGORY SECTION START*/}
				<div className="xl:pt-30 pt-12.5 max-xl:pb-5 xl:h-226.5 relative bg-cover after:bottom-0 after:left-0 after:right-0 after:h-63.75 after:absolute after:bg-linear-(--bg1-gradient)" style={{ backgroundImage: "url('/assets/images/background/tour-bg.jpg')" }}>
                <div className="lg:flex items-center mx-auto w-full max-w-370 xl:h-140 lg:h-105 lg:mb-16.25 sm:mb-0 mb-7.5 px-7.5" id="module">
                    <div className="flex justify-center items-start flex-col flex-1 max-w-92.5 lg:mr-30 trv-feature max-lg:mb-5">
                        <h2 className="xl:text-46 md:text-40 text-3xl mb-2.5 text-primary!"></h2>
                        <p className="text-base relative sm:mb-11.25 mb-5"></p>
                        <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="site-button butn-bg-shape">View More</a>
                    </div>
                    <div className="swiper trv-tr-cat-swiper !flex-2 sm:!pl-7.5">
                        <div className="swiper-wrapper">
                            {/*Block 1*/}
                            <div className="trv-cat-sld swiper-slide text-center flex justify-center items-center rotate-[3deg] scale-[0.8] duration-500 relative overflow-hidden" data-title="Wildlife Tourism" 
                            data-description="Observing animals in their natural habitats like tiger safaris in Ranthambore or birdwatching in Keoladeo Ghana Bird Sanctuary has become a popular and educational form of travel.">
                                <div className="rounded-3xl p-3.75 bg-white overflow-hidden text-center">
                                    <img src="/assets/images/tour-cat/style1/pic1.jpg" alt="Image" className="size-full block object-center object-contain rounded-xl" width="450" height="450" loading="lazy" />
                                    <h3 className="2xl:text-28 text-2xl font-medium mt-2.5 trv-bx-title"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="text-primary duration-500">Wildlife</a></h3>
                                </div>
                            </div>
                            {/*Block 2*/}
                            <div className="trv-cat-sld swiper-slide text-center flex justify-center items-center rotate-[3deg] scale-[0.8] duration-500 relative overflow-hidden" data-title="Hiking" data-description="Here are the people who we believe most changed the stories that defined the past year.">
                                <div className="rounded-3xl p-3.75 bg-white overflow-hidden text-center">
                                    <img src="/assets/images/tour-cat/style1/pic2.jpg" alt="Image" className="size-full block object-center object-contain rounded-xl" width="450" height="450" loading="lazy" />
                                    <h3 className="2xl:text-28 text-2xl font-medium mt-2.5"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="text-primary duration-500">Hiking</a></h3>
                                </div>
                            </div>
                            {/*Block 3*/}
                            <div className="trv-cat-sld swiper-slide text-center flex justify-center items-center rotate-[3deg] scale-[0.8] duration-500 relative overflow-hidden" data-title="Adventure Tours" data-description="Prime Minister Anthony Albanese has plenty of reasons to ban social media for under-16s.">
                                <div className="rounded-3xl p-3.75 bg-white overflow-hidden text-center">
                                    <img src="/assets/images/tour-cat/style1/pic3.jpg" alt="Image" className="size-full block object-center object-contain rounded-xl" width="450" height="450" loading="lazy" />
                                    <h3 className="2xl:text-28 text-2xl font-medium mt-2.5"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="text-primary duration-500">Adventure Tours</a></h3>
                                </div>
                            </div>
                            {/*Block 4*/}
                            <div className="trv-cat-sld swiper-slide text-center flex justify-center items-center rotate-[3deg] scale-[0.8] duration-500 relative overflow-hidden" data-title="Cultural Tours" data-description="The seven-time Formula One world champion moves to the iconic brand after more than a decade with Mercedes">
                                <div className="rounded-3xl p-3.75 bg-white overflow-hidden text-center">
                                    <img src="/assets/images/tour-cat/style1/pic4.jpg" alt="Image" className="size-full block object-center object-contain rounded-xl" width="450" height="450" loading="lazy" />
                                    <h3 className="2xl:text-28 text-2xl font-medium mt-2.5"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="text-primary duration-500">Cultural Tours</a></h3>
                                </div>
                            </div>
                            {/*Block 5*/}
                            <div className="trv-cat-sld swiper-slide text-center flex justify-center items-center rotate-[3deg] scale-[0.8] duration-500 relative overflow-hidden" data-title="Cruise Tours" data-description="TIME solicited nominations of places including hotels, cruises, restaurants, attractions, museums, parks, and more from around the world.">
                                <div className="rounded-3xl p-3.75 bg-white overflow-hidden text-center">
                                    <img src="/assets/images/tour-cat/style1/pic5.jpg" alt="Image" className="size-full block object-center object-contain rounded-xl" width="450" height="450" loading="lazy" />
                                    <h3 className="2xl:text-28 text-2xl font-medium mt-2.5"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="text-primary duration-500">Cruise Tours</a></h3>
                                </div>
                            </div>
                            {/*Block 6*/}
                            <div className="trv-cat-sld swiper-slide text-center flex justify-center items-center rotate-[3deg] scale-[0.8] duration-500 relative overflow-hidden" data-title="Dark Tourism" data-description="After inauguration day, it is on Trump and America to ensure that the oath to defend the U.S. Constitution is kept.">
                                <div className="rounded-3xl p-3.75 bg-white overflow-hidden text-center">
                                    <img src="/assets/images/tour-cat/style1/pic6.jpg" alt="Image" className="size-full block object-center object-contain rounded-xl" width="450" height="450" loading="lazy" />
                                    <h3 className="2xl:text-28 text-2xl font-medium mt-2.5"><a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="text-primary duration-500">Dark Tourism</a></h3>
                                </div>
                            </div>
                            {/*Last Content*/}
                            <div className="trv-cat-sld swiper-slide text-center !flex justify-center items-center rotate-[3deg] scale-[0.8] duration-500 relative overflow-hidden swiper-slide-last sm:!h-100" data-title="" data-description="">
                                <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="site-button butn-bg-shape">View All</a>
                            </div>
                        </div>
                        <div className="swiper-button-next !size-14 rounded-full bg-citrusyellow !text-white hover:!text-citrusyellow hover:!bg-white after:!text-base"></div>
                        <div className="swiper-button-prev !size-14 rounded-full bg-citrusyellow !text-white hover:!text-citrusyellow hover:!bg-white after:!text-base"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="relative text-right z-1">
                        <span className="text-white font-title not-italic md:font-bold font-medium md:text-28 text-xl">Wornderful Place For You</span>
                        <h2 className="font-black lg:text-80 sm:text-5xl text-3xl leading-none uppercase !text-citrusyellow !font-base">Tour Categories</h2>
                    </div>
                </div>
            </div>
				{/*TOUR CATEGORY SECTION END*/}
				
				{/*TEAM GUIDE START*/}
				<div className="bg-light 2xl:p-12.5 sm:p-6.25 py-12.5 px-3">
                <div className="relative bg-white dark:bg-dark rounded-3xl overflow-hidden xl:pt-30 pt-12.5 xl:pb-22.5 pb-0.5 max-xl:px-5 max-sm:!px-0">
                    <div className="absolute w-150 h-137.5 -left-75 top-1/2 bg-citrusyellow/15 blur-[100px]"></div>
                    <div className="absolute w-150 h-125 -right-75 top-1/2 bg-citrusyellow/5 blur-[100px]"></div>
                    <div className="absolute w-150 h-137.5 left-1/2 -translate-x-1/2 -top-50 bg-citrusyellow/5 blur-[100px]"></div>
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="sm:mb-15 mb-7.5 max-w-150 mx-auto text-center">
                            <h2 className="xl:text-46 md:text-40 text-3xl mb-2.5"><span className="text-citrusyellow">Meet With</span> Tour Guide</h2>
                            <div className="text-base">Destinations worth exploring! Here are a few popular spots</div>
                            <div className="-mt-7">
                                <img src="/assets/images/background/Title-Separator.png" alt="Image" className="w-117.5 inline-block dark:invert" width="470" height="70" loading="lazy" />
                            </div>
                        </div>
                        {/* TITLE END*/}

                        <div className="section-content">

                            <div className="row">
                                <div className="md:w-1/2 w-full flex items-center max-xl:justify-center">
                                    <div className="4xl:-ml-46 3xl:-ml-25 sm:ml-12.5 text-center relative z-1 4xl:w-191.25 3xl:w-166.25 2xl:w-150 w-125">
                                        <div className="pt-22.5 font-display font-normal 2xl:text-52 sm:text-40 text-28 leading-[1.2] text-primary pb-6.25">
                                            Meet with
                                            <span className="font-display 2xl:text-25xl sm:text-7xl text-40 leading-none text-white text-shadow-[2px_5px_0px_rgba(41,137,145,0.2)] block">Expert guide</span>
                                        </div>
                                        <img src="/assets/images/CircleShape.png" alt="Image" className="absolute right-0 top-0 -z-1 animate-spinZ" width="715" height="715" loading="lazy" />
                                        <img src="/assets/images/team-l-pic.png" alt="Image" className="relative"  width="739" height="653" loading="lazy" />
                                    </div>
                                </div>
                                <div className="md:w-1/2 w-full">
                                    {/*tv tour guide style 1*/}
                                    <div className="row">
                                        <div className="md:w-1/2 w-full">
                                            <div className="bg-white p-3.75 shadow-guide-bx1 rounded-3xl text-center mb-7.5">
                                                <div className="mb-5">
                                                    <img src="/assets/images/trv-guide/pic1.jpg" alt="image" className="rounded-3xl w-full" width="276" height="276" loading="lazy" />
                                                </div>
                                               <ul className="mt-5">
													<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow 2xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
														<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.x.com" target="_blank">
															<i className="fa-brands fa-x-twitter group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
														</a>
													</li>
													<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow 2xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
														<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.facebook.com" target="_blank">
															<i className="fa-brands fa-facebook group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
														</a>
													</li>
													<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow 2xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
														<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.instagram.com" target="_blank">
															<i className="fa-brands fa-instagram group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
														</a>
													</li>
													<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow 2xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
														<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.pinterest.com/" target="_blank">
															<i className="fa-brands fa-pinterest group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
														</a>
													</li>
												</ul>
                                                <h3 className="md:text-28 text-22 font-medium leading-[1.2] my-2.5 text-primary!">
                                                    <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()}> Murphy</a>
                                                </h3>
                                                <span className="text-base font-medium leading-[1.2] text-citrusyellow mb-3.75 inline-block">Tourist Guide</span>
                                            </div>
                                        </div>

                                        <div className="md:w-1/2 w-full">
                                            <div className="bg-white p-3.75 shadow-guide-bx1 rounded-3xl text-center mb-7.5">
                                                <div className="mb-5">
                                                    <img src="/assets/images/trv-guide/pic2.jpg" alt="image" className="rounded-3xl w-full" />
                                                </div>
												<ul className="mt-5">
													<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow 2xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
														<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.x.com" target="_blank">
															<i className="fa-brands fa-x-twitter group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
														</a>
													</li>
													<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow 2xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
														<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.facebook.com" target="_blank">
															<i className="fa-brands fa-facebook group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
														</a>
													</li>
													<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow 2xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
														<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.instagram.com" target="_blank">
															<i className="fa-brands fa-instagram group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
														</a>
													</li>
													<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow 2xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
														<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.pinterest.com/" target="_blank">
															<i className="fa-brands fa-pinterest group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
														</a>
													</li>
												</ul>
                                                <h3 className="md:text-28 text-22 font-medium leading-[1.2] my-2.5 text-primary!">
                                                    <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()}>Alexis Cox</a>
                                                </h3>
                                                <span className="text-base font-medium leading-[1.2] text-citrusyellow mb-3.75 inline-block">Tourist Guide</span>
                                            </div>
                                        </div>

                                        <div className="md:w-1/2 w-full">
                                            <div className="bg-white p-3.75 shadow-guide-bx1 rounded-3xl text-center mb-7.5">
                                                <div className="mb-5">
                                                    <img src="/assets/images/trv-guide/pic3.jpg" alt="image" className="rounded-3xl w-full" width="276" height="276" loading="lazy" />
                                                </div>
                                                <ul className="mt-5">
													<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow 2xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
														<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.x.com" target="_blank">
															<i className="fa-brands fa-x-twitter group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
														</a>
													</li>
													<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow 2xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
														<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.facebook.com" target="_blank">
															<i className="fa-brands fa-facebook group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
														</a>
													</li>
													<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow 2xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
														<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.instagram.com" target="_blank">
															<i className="fa-brands fa-instagram group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
														</a>
													</li>
													<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow 2xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
														<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.pinterest.com/" target="_blank">
															<i className="fa-brands fa-pinterest group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
														</a>
													</li>
												</ul>
                                                <h3 className="md:text-28 text-22 font-medium leading-[1.2] my-2.5 text-primary!">
                                                    <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()}> Murray</a>
                                                </h3>
                                                <span className="text-base font-medium leading-[1.2] text-citrusyellow mb-3.75 inline-block">Tourist Guide</span>
                                            </div>
                                        </div>

                                        <div className="md:w-1/2 w-full">
                                            <div className="bg-white p-3.75 shadow-guide-bx1 rounded-3xl text-center mb-7.5">
                                                <div className="mb-5">
                                                    <img src="/assets/images/trv-guide/pic4.jpg" alt="image" className="rounded-3xl w-full" width="276" height="276" loading="lazy" />
                                                </div>
                                                 <ul className="mt-5">
													<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow 2xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
														<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.x.com" target="_blank">
															<i className="fa-brands fa-x-twitter group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
														</a>
													</li>
													<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow 2xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
														<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.facebook.com" target="_blank">
															<i className="fa-brands fa-facebook group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
														</a>
													</li>
													<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow 2xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
														<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.instagram.com" target="_blank">
															<i className="fa-brands fa-instagram group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
														</a>
													</li>
													<li className="inline-flex xl:size-11.5 size-10.5 bg-citrusyellow 2xl:mr-2.5 mr-1.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg group">
														<a className="inline-flex size-9 bg-primary rounded-4xl justify-center items-center duration-500 text-white text-lg group-hover:rounded-2lg" href="https://www.pinterest.com/" target="_blank">
															<i className="fa-brands fa-pinterest group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
														</a>
													</li>
												</ul>
                                                <h3 className="md:text-28 text-22 font-medium leading-[1.2] my-2.5 text-primary!">
                                                    <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()}> Crawford</a>
                                                </h3>
                                                <span className="text-base font-medium leading-[1.2] text-citrusyellow mb-3.75 inline-block">Tourist Guide</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
				{/*TEAM GUIDE END*/}

				{/*TESTIMONIAL START*/}
				<div className="xl:pt-30 pt-12.5 xl:pb-26.5 pb-5 bg-center bg-no-repeat bg-lightturquoise relative" style={{ backgroundImage: "url('/assets/images/Map.png')" }}>
                <div className="container">

                    {/* TITLE START*/}
                    <div className="sm:mb-15 mb-7.5 max-w-150 mx-auto text-center">
                        <h2 className="xl:text-46 md:text-40 text-3xl mb-2.5">Our CLient<span className="text-citrusyellow"> Says!</span></h2>
                        <div className="text-base">Destinations worth exploring! Here are a few popular spots</div>
                        <div className="-mt-7">
                            <img src="/assets/images/background/Title-Separator.png" alt="Image" className="w-117.5 inline-block dark:invert" width="470" height="70" loading="lazy" />
                        </div>
                    </div>
                    {/* TITLE END*/}

                    <div className="section-content">

                        <div className="swiper trv-t-monial-swiper xl:!pb-29 !pb-22.5">
                            <div className="swiper-wrapper">
                                {/*BOX-1*/}
                                <div className="swiper-slide">
                                    <div className="lg:mx-17.5 mx-2.5 mb-12.5 mt-0">
                                        <div className="mb-7.5 relative max-w-76.5 max-md:mx-auto">
                                            <img src="/assets/images/trv-testimonial/pic1.jpg" alt="image" className="rounded-3xl rounded-es-none w-full h-auto" width="306" height="297" loading="lazy" />

                                            <div className="inline-flex items-center bg-primary rounded-2xl rounded-ss-none absolute left-0 -bottom-2.5 py-1.25 px-3.75">
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="flex items-start justify-between mb-6.25">
                                                <div className="left-part">
                                                    <h4 className="lg:text-4xl text-28 font-normal text-primary !font-display">Amelia Warner</h4>
                                                    <span className="font-title text-xl font-medium text-citrusyellow inline-block">Tourist</span>
                                                </div>
                                                <div className="right-part">
                                                    <img src="/assets/images/trv-icon/Quote.png" className="lg:max-w-17.5 max-w-11 max-h-14.5 image-filter-2" alt="image" style={{ filter: "brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" }} />
                                                </div>
                                            </div>
                                            <p className="font-title lg:text-2xl text-lg text-primary dark:text-paleaqua max-md:text-center">
                                                I Was Very Impresed Lorem posuere in miss drana en the nisan semere 
                                                sceriun amiss etiam ornare in the miss drana is lorem fermen nunta 
                                                mauris.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/*BOX-2*/}
                                <div className="swiper-slide">
                                    <div className="lg:mx-17.5 mx-2.5 mb-12.5 mt-0">
                                        <div className="mb-7.5 relative max-w-76.5 max-md:mx-auto">
                                            <img src="/assets/images/trv-testimonial/pic2.jpg" alt="image" className="rounded-3xl rounded-es-none w-full h-auto" width="306" height="297" loading="lazy" />
                                            <div className="inline-flex items-center bg-primary rounded-2xl rounded-ss-none absolute left-0 -bottom-2.5 py-1.25 px-3.75">
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="flex items-start justify-between mb-6.25">
                                                <div className="left-part">
                                                    <h4 className="lg:text-4xl text-28 font-normal text-primary !font-display">Amelia Warner</h4>
                                                    <span className="font-title text-xl font-medium text-citrusyellow inline-block">Tourist</span>
                                                </div>
                                                <div className="right-part">
                                                    <img src="/assets/images/trv-icon/Quote.png" className="lg:max-w-17.5 max-w-11 max-h-14.5 image-filter-2" alt="image" style={{ filter: "brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" }} />
                                                </div>
                                            </div>
                                            <p className="font-title lg:text-2xl text-lg text-primary dark:text-paleaqua max-md:text-center">
                                                I Was Very Impresed Lorem posuere in miss drana en the nisan semere 
                                                sceriun amiss etiam ornare in the miss drana is lorem fermen nunta 
                                                mauris.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/*BOX-3*/}
                                <div className="swiper-slide">
                                    <div className="lg:mx-17.5 mx-2.5 mb-12.5 mt-0">
                                        <div className="mb-7.5 relative max-w-76.5 max-md:mx-auto">
                                            <img src="/assets/images/trv-testimonial/pic3.jpg" alt="image" className="rounded-3xl rounded-es-none w-full h-auto" width="306" height="297" loading="lazy" />
                                            <div className="inline-flex items-center bg-primary rounded-2xl rounded-ss-none absolute left-0 -bottom-2.5 py-1.25 px-3.75">
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="flex items-start justify-between mb-6.25">
                                                <div className="left-part">
                                                    <h4 className="lg:text-4xl text-28 font-normal text-primary !font-display">Amelia Warner</h4>
                                                    <span className="font-title text-xl font-medium text-citrusyellow inline-block">Tourist</span>
                                                </div>
                                                <div className="right-part">
                                                    <img src="/assets/images/trv-icon/Quote.png" className="lg:max-w-17.5 max-w-11 max-h-14.5 image-filter-2" alt="image" style={{ filter: "brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" }} />
                                                </div>
                                            </div>
                                            <p className="font-title lg:text-2xl text-lg text-primary dark:text-paleaqua max-md:text-center">
                                                I Was Very Impresed Lorem posuere in miss drana en the nisan semere 
                                                sceriun amiss etiam ornare in the miss drana is lorem fermen nunta 
                                                mauris.
                                            </p>
                                        </div>
                                    </div>  
                                </div>
                                {/*BOX-4*/}
                                <div className="swiper-slide">
                                    <div className="lg:mx-17.5 mx-2.5 mb-12.5 mt-0">
                                        <div className="mb-7.5 relative max-w-76.5 max-md:mx-auto">
                                            <img src="/assets/images/trv-testimonial/pic4.jpg" alt="image" className="rounded-3xl rounded-es-none w-full h-auto" width="306" height="297" loading="lazy" />

                                            <div className="inline-flex items-center bg-primary rounded-2xl rounded-ss-none absolute left-0 -bottom-2.5 py-1.25 px-3.75">
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="flex items-start justify-between mb-6.25">
                                                <div className="left-part">
                                                    <h4 className="lg:text-4xl text-28 font-normal text-primary !font-display">Kavin Martin</h4>
                                                    <span className="font-title text-xl font-medium text-citrusyellow inline-block">Traver</span>
                                                </div>
                                                <div className="right-part">
                                                    <img src="/assets/images/trv-icon/Quote.png" className="lg:max-w-17.5 max-w-11 max-h-14.5 image-filter-2" alt="image" style={{ filter: "brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" }} />
                                                </div>
                                            </div>
                                            <p className="font-title lg:text-2xl text-lg text-primary dark:text-paleaqua max-md:text-center">
                                                I Was Very Impresed Lorem posuere in miss drana en the nisan semere 
                                                sceriun amiss etiam ornare in the miss drana is lorem fermen nunta 
                                                mauris.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/*BOX-5*/}
                                <div className="swiper-slide">
									<div className="lg:mx-17.5 mx-2.5 mb-12.5 mt-0">
										<div className="mb-7.5 relative max-w-76.5 max-md:mx-auto">
											<img src="/assets/images/trv-testimonial/pic5.jpg" alt="image" className="rounded-3xl rounded-es-none w-full h-auto" width="306" height="297" loading="lazy" />

											<div className="inline-flex items-center bg-primary rounded-2xl rounded-ss-none absolute left-0 -bottom-2.5 py-1.25 px-3.75">
												<i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
												<i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
												<i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
												<i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
												<i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
											</div>
										</div>
										<div className="info">
											<div className="flex items-start justify-between mb-6.25">
												<div className="left-part">
													<h4 className="lg:text-4xl text-28 font-normal text-primary !font-display">Amelia Warner</h4>
													<span className="font-title text-xl font-medium text-citrusyellow inline-block">Tourist</span>
												</div>
												<div className="right-part">
													<img src="/assets/images/trv-icon/Quote.png" className="lg:max-w-17.5 max-w-11 max-h-14.5 image-filter-2" alt="image" style={{ filter: "brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" }} />
												</div>
											</div>
											<p className="font-title lg:text-2xl text-lg text-primary dark:text-paleaqua max-md:text-center">
												I Was Very Impresed Lorem posuere in miss drana en the nisan semere 
												sceriun amiss etiam ornare in the miss drana is lorem fermen nunta 
												mauris.
											</p>
										</div>
									</div> 
                                </div>
                                {/*BOX-6*/}
                                <div className="swiper-slide">
                                    <div className="lg:mx-17.5 mx-2.5 mb-12.5 mt-0">
                                        <div className="mb-7.5 relative max-w-76.5 max-md:mx-auto">
                                            <img src="/assets/images/trv-testimonial/pic6.jpg" alt="image" className="rounded-3xl rounded-es-none w-full h-auto" width="306" height="297" loading="lazy" />

                                            <div className="inline-flex items-center bg-primary rounded-2xl rounded-ss-none absolute left-0 -bottom-2.5 py-1.25 px-3.75">
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                                <i className="fa-solid fa-star text-citrusyellow text-base mr-0.75"></i>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="flex items-start justify-between mb-6.25">
                                                <div className="left-part">
                                                    <h4 className="lg:text-4xl text-28 font-normal text-primary !font-display">Kavin Martin</h4>
                                                    <span className="font-title text-xl font-medium text-citrusyellow inline-block">Traver</span>
                                                </div>
                                                <div className="right-part">
                                                    <img src="/assets/images/trv-icon/Quote.png" className="lg:max-w-17.5 max-w-11 max-h-14.5 image-filter-2" alt="image" style={{ filter: "brightness(0) saturate(100%) invert(25%) sepia(21%) saturate(4469%) hue-rotate(154deg) brightness(93%) contrast(95%)" }} />
                                                </div>
                                            </div>
                                            <p className="font-title lg:text-2xl text-lg text-primary dark:text-paleaqua max-md:text-center">
                                                I Was Very Impresed Lorem posuere in miss drana en the nisan semere 
                                                sceriun amiss etiam ornare in the miss drana is lorem fermen nunta 
                                                mauris.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="swiper-button-next !top-auto !bottom-0 !size-14 rounded-full bg-citrusyellow !text-white hover:!text-citrusyellow hover:!bg-white after:!text-base !right-[calc(50%_-_70px)]"></div>
                            <div className="swiper-button-prev !top-auto !bottom-0 !size-14 rounded-full bg-citrusyellow !text-white hover:!text-citrusyellow hover:!bg-white after:!text-base !left-[calc(50%_-_70px)]"></div>
                        </div>
                        
                    </div> 

                </div>
                <div className="absolute md:-left-28.75 -left-12.5 top-2/5 md:w-57.5 w-25 animate-slide-top2 opacity-50"><img src="/assets/images/hotballon-Left.png" alt="image" /></div>
            </div>
				{/*TESTIMONIAL END*/}
			
				{/* VIDEO WITH ACHIVMENT SECTION START*/}
				            <div className="xl:h-165 lg:h-125 h-50 relative overflow-hidden bg-cover max-md:bg-right">
                <video muted loop autoPlay className="absolute left-1/2 top-1/2 -translate-1/2 max-w-auto object-cover size-full z-0">
                    <source src="/assets/images/video-2.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 z-1">
                    <a href="http://www.youtube.com/watch?v=0O2aH4XLbto" className="popup-youtube play-now-video block size-34.5 absolute left-1/2 top-1/2 -translate-1/2 rounded-full border border-white">
                        <i className="icon fa fa-play absolute left-1/2 top-1/2 size-16.25 text-center leading-16.25 bg-white/30 backdrop-blur-[5px] text-white z-1 text-lg pl-1.25 block -translate-1/2 origin-center rounded-full shadow-video-icon"></i>
                        <span className="ripple"></span>
                    </a>
                </div>
            </div>
				{/*VIDEO WITH ACHIVMENT SECTION END*/}
				
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
				{/*EXPLORE POPULAR TOUR END*/}
				
				{/*ALL BLOGS SECTION START*/}
				<div className="bg-primary xl:pt-30 pt-12.5 xl:pb-22.5 pb-5" style={{ backgroundImage: "url('/assets/images/background/patern.png')" }}>
                <div className="container">
                    {/* TITLE START*/}
                     <div className="row flex items-center mb-15">
                        <div className="xl:w-1/3 lg:w-1/2 w-full">
                            <div className="text-left">
                                <h2 className="xl:text-46 md:text-40 text-3xl mb-3.5 !text-white">Explore<span className="text-citrusyellow"> Latest News</span></h2>
                                <div className="text-paleaqua max-lg:mb-7.5">Maybe for a travel blog, wildlife site, or web development project here are a few sample templates you can use to simulate real-time news updates:</div>
                            </div>
                        </div>
                        <div className="xl:w-2/3 lg:w-1/2 w-full">
                            <div className="lg:text-right text-left">
                                <a href="#" onClick={(e) => e.preventDefault()} className="site-button butn-bg-shape">See More Articles</a>
                            </div>
                        </div>
                     </div>
                    
                    {/* TITLE END*/}

                    <div className="section-content">

                        <div className="row flex justify-center">

                            <div className="lg:w-1/3 md:w-1/2 w-full">

                                <div className="relative mb-7.5">
                                    <div className="relative z-1 rounded-2xl overflow-hidden">
                                        <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}><img src="/assets/images/trv-blog/blog-lg/pic1.jpg" alt="Image" className="w-full object-cover object-center xl:h-113.25 md:h-97.5 h-85" /></a>
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

                            <div className="lg:w-1/3 md:w-1/2 w-full">

                                <div className="relative mb-7.5">
                                    <div className="relative z-1 rounded-2xl overflow-hidden">
                                        <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}><img src="/assets/images/trv-blog/blog-lg/pic2.jpg" alt="Image" className="w-full object-cover object-center xl:h-113.25 md:h-97.5 h-85" /></a>
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

                            <div className="lg:w-1/3 md:w-1/2 w-full">

                                <div className="relative mb-7.5">
                                    <div className="relative z-1 rounded-2xl overflow-hidden">
                                        <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/blog'); }}><img src="/assets/images/trv-blog/blog-lg/pic3.jpg" alt="Image" className="w-full object-cover object-center xl:h-113.25 md:h-97.5 h-85" /></a>
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
                            
                    </div> 

                </div>
            </div>
				{/*ALL BLOGS SECTION END*/}
			
			
			{/* FOOTER START*/}
			<div className="bg-eggshell dark:bg-eggshell/5 text-center xl:pt-20 xl:pb-35 pt-12.5 pb-35 border-b-4 border-primary relative">
            <div className="container">
                <h3 className="text-28 mb-7.5">Follow Instagram</h3>
                <ul className="flex xl:gap-5 max-xl:gap-y-2.5 max-xl:gap-x-[2%] max-xl:flex-wrap">
                    <li className="xl:w-[9.43%] lg:w-[9.33%] sm:w-[18.4%] w-[32%]">
                        <a className="relative rounded-2xl overflow-hidden flex items-center justify-center bg-primary group" href="https://www.instagram.com">
                            <img src="/assets/images/insta-gallery/pic1.jpg" alt="img" className="w-full duration-500 group-hover:opacity-30 group-hover:blur-[3px]" width="122" height="122" loading="lazy" />
                            <span className="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
                                <i className="fa-brands fa-instagram absolute left-1/2 top-1/2 -translate-1/2 text-white opacity-0 duration-500 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-1/2"></i>
                            </span>
                        </a>
                    </li>
                    <li className="xl:w-[9.43%] lg:w-[9.33%] sm:w-[18.4%] w-[32%]">
                        <a className="relative rounded-2xl overflow-hidden flex items-center justify-center bg-primary group" href="https://www.instagram.com">
                            <img src="/assets/images/insta-gallery/pic2.jpg" alt="img" className="w-full duration-500 group-hover:opacity-30 group-hover:blur-[3px]" width="122" height="122" loading="lazy" />
                            <span className="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
                                <i className="fa-brands fa-instagram absolute left-1/2 top-1/2 -translate-1/2 text-white opacity-0 duration-500 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-1/2"></i>
                            </span>
                        </a>
                    </li>
                    <li className="xl:w-[9.43%] lg:w-[9.33%] sm:w-[18.4%] w-[32%]">
                        <a className="relative rounded-2xl overflow-hidden flex items-center justify-center bg-primary group" href="https://www.instagram.com">
                            <img src="/assets/images/insta-gallery/pic3.jpg" alt="img" className="w-full duration-500 group-hover:opacity-30 group-hover:blur-[3px]" width="122" height="122" loading="lazy" />
                            <span className="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
                                <i className="fa-brands fa-instagram absolute left-1/2 top-1/2 -translate-1/2 text-white opacity-0 duration-500 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-1/2"></i>
                            </span>
                        </a>
                    </li>
                    <li className="xl:w-[9.43%] lg:w-[9.33%] sm:w-[18.4%] w-[32%]">
                        <a className="relative rounded-2xl overflow-hidden flex items-center justify-center bg-primary group" href="https://www.instagram.com">
                            <img src="/assets/images/insta-gallery/pic4.jpg" alt="img" className="w-full duration-500 group-hover:opacity-30 group-hover:blur-[3px]" width="122" height="122" loading="lazy" />
                            <span className="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
                                <i className="fa-brands fa-instagram absolute left-1/2 top-1/2 -translate-1/2 text-white opacity-0 duration-500 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-1/2"></i>
                            </span>
                        </a>
                    </li>
                    <li className="xl:w-[9.43%] lg:w-[9.33%] sm:w-[18.4%] w-[32%]">
                        <a className="relative rounded-2xl overflow-hidden flex items-center justify-center bg-primary group" href="https://www.instagram.com">
                            <img src="/assets/images/insta-gallery/pic5.jpg" alt="img" className="w-full duration-500 group-hover:opacity-30 group-hover:blur-[3px]" width="122" height="122" loading="lazy" />
                            <span className="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
                                <i className="fa-brands fa-instagram absolute left-1/2 top-1/2 -translate-1/2 text-white opacity-0 duration-500 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-1/2"></i>
                            </span>
                        </a>
                    </li>
                    <li className="xl:w-[9.43%] lg:w-[9.33%] sm:w-[18.4%] w-[32%]">
                        <a className="relative rounded-2xl overflow-hidden flex items-center justify-center bg-primary group" href="https://www.instagram.com">
                            <img src="/assets/images/insta-gallery/pic6.jpg" alt="img" className="w-full duration-500 group-hover:opacity-30 group-hover:blur-[3px]" width="122" height="122" loading="lazy" />
                            <span className="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
                                <i className="fa-brands fa-instagram absolute left-1/2 top-1/2 -translate-1/2 text-white opacity-0 duration-500 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-1/2"></i>
                            </span>
                        </a>
                    </li>
                    <li className="xl:w-[9.43%] lg:w-[9.33%] sm:w-[18.4%] w-[32%]">
                        <a className="relative rounded-2xl overflow-hidden flex items-center justify-center bg-primary group" href="https://www.instagram.com">
                            <img src="/assets/images/insta-gallery/pic7.jpg" alt="img" className="w-full duration-500 group-hover:opacity-30 group-hover:blur-[3px]" width="122" height="122" loading="lazy" />
                            <span className="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
                                <i className="fa-brands fa-instagram absolute left-1/2 top-1/2 -translate-1/2 text-white opacity-0 duration-500 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-1/2"></i>
                            </span>
                        </a>
                    </li>
                    <li className="xl:w-[9.43%] lg:w-[9.33%] sm:w-[18.4%] w-[32%]">
                        <a className="relative rounded-2xl overflow-hidden flex items-center justify-center bg-primary group" href="https://www.instagram.com">
                            <img src="/assets/images/insta-gallery/pic8.jpg" alt="img" className="w-full duration-500 group-hover:opacity-30 group-hover:blur-[3px]" width="122" height="122" loading="lazy" />
                            <span className="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
                                <i className="fa-brands fa-instagram absolute left-1/2 top-1/2 -translate-1/2 text-white opacity-0 duration-500 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-1/2"></i>
                            </span>
                        </a>
                    </li>
                    <li className="xl:w-[9.43%] lg:w-[9.33%] sm:w-[18.4%] w-[32%]">
                        <a className="relative rounded-2xl overflow-hidden flex items-center justify-center bg-primary group" href="https://www.instagram.com">
                            <img src="/assets/images/insta-gallery/pic9.jpg" alt="img" className="w-full duration-500 group-hover:opacity-30 group-hover:blur-[3px]" width="122" height="122" loading="lazy" />
                            <span className="absolute top-1/2 left-1/2 table -translate-1/2 size-22.5 after:absolute after:block after:w-[0%] after:h-1.5 after:border-t after:border-b after:border-white after:opacity-80 after:top-1/2 after:-translate-y-1/2 after:duration-500 before:absolute before:block before:w-[0%] before:h-1.5 before:border-t before:border-b before:border-white before:opacity-80 before:top-1/2 before:-translate-y-1/2 before:duration-500 before:-right-3/5 after:-left-3/5 group-hover:opacity-100 group-hover:before:w-4/5 group-hover:after:w-4/5">
                                <i className="fa-brands fa-instagram absolute left-1/2 top-1/2 -translate-1/2 text-white opacity-0 duration-500 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-1/2"></i>
                            </span>
                        </a>
                    </li>
                </ul>  
            </div>
            <marquee direction="right" className="absolute left-0 bottom-0 z-2">
				<div className="relative w-71 h-33.75">
					<img className="absolute left-0 bottom-0 h-33.75" src="/assets/images/background/Left-Car.png" alt="img" width="248" height="135" loading="lazy" />
					<span className="absolute left-[10.1%] bottom-0 w-[15%]">
						<img src="/assets/images/background/Left-Car-tyre.png" alt="img" className="animate-spin" width="43" height="43" loading="lazy" />
					</span>
					<span className="absolute right-[20.8%] bottom-0 w-[15%]">
						<img src="/assets/images/background/Left-Car-tyre.png" alt="img" className="animate-spin" width="43" height="43" loading="lazy" />
					</span>
				</div>
            </marquee>
            <div className="absolute right-0 bottom-0 z-0 w-55">
                <img src="/assets/images/background/Righttreepic.png" alt="img" width="220" height="146" loading="lazy" />
            </div>
        </div>
    </div>
  );
}
