import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BlogDetails() {
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
									<h2 className="lg:text-60 md:text-52 text-28 relative text-primary!">Blog Detail</h2>
								</div>
								{/* BREADCRUMB ROW */}                            
								<div>
									<ul className="inline-block">
										<li className="text-base pr-7.5 relative inline-block font-semibold text-primary after:content-['-'] after:absolute after:right-2 after:-top-1.5 after:text-primary after:text-26 after:font-normal">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}>Home</a></li>
										<li className="relative inline-block text-base font-semibold text-primary">Blog Detail</li>
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
                    <div className="section-full xl:pt-30 pt-12.5 xl:pb-22.5 pb-5">
                        <div className="container">
                            {/* BLOG SECTION START */}
                            <div className="section-content">
                                <div className="row flex justify-center">
                                    <div className="lg:w-2/3 w-full mb-7.5">
                                        <div className="trv-detail-main-wrap">
                                            {/*Top Image*/}
                                            <div className="rounded-3xl overflow-hidden relative mb-10">
                                                <img src="/assets/images/trv-blog/blog-detail/pic-large.jpg" alt="image" className="w-full object-cover object-center md:h-107.5 sm:h-72.5 h-77.25" width="856" height="430" loading="lazy" />
                                            </div>
                                            {/*Info Image*/}
                                            <div className="bg-white dark:bg-dark sm:p-10 p-5 rounded-3xl">
                                                <ul className="flex flex-wrap mb-5">
                                                    <li className="text-lg font-normal text-heading leading-[1.2] relative font-title pe-5 after:content-['/'] after:absolute after:right-1.5 after:-top-1 after:text-xl after:text-citrusyellow">By <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()}>Mike Hardson</a></li>
                                                    <li className="text-lg font-normal text-heading leading-[1.2] relative font-title pe-5 after:content-['/'] after:absolute after:right-1.5 after:-top-1 after:text-xl after:text-citrusyellow">20 June 2025</li>
                                                    <li className="text-lg font-normal text-heading leading-[1.2] relative font-title">Tour Guide</li>
                                                </ul>
                                                <h3 className="md:text-4xl text-28 leading-[1.2] mb-5">Tour guide who give you proper information about every destination</h3>
                                                <div className="mb-7.5">
													<p className="text-base font-normal text-primary dark:text-paleaqua leading-[1.4] mb-4">Choosing a destination can be exciting but also a bit overwhelming with so many amazing places out there! Let's narrow it Travlla is a multi-award-winning strategy and content creation agency that specializes in travel arketing. Morbi consequat risus consequat, porttitor orci sit amet, iaculis nisl. Integer quis sapien nec elit ultrices euismon sit amet id lacus. Sed a imperdiet erat. Duis eu est dignissim lacus dictum</p>
													<p className="text-base font-normal text-primary dark:text-paleaqua leading-[1.4] mb-4">Here's a curated overview of top travel destinations and what makes each one special, perfect for your next adventure or web project inspiration: Tropical beaches, spiritual retreats, water sports Futuristic tech, ancient temples, vibrant culture Desert landscapes, forts, palaces, vibrant festivals Table Mountain, vineyards, coastal drives Gaudí architecture, beaches, tapas Skyscrapers, desert safaris, luxury shopping Palaces, K-pop culture, street food Fjords, hiking trails, Maori culture Alps, lakes, scenic trains.</p>
													<blockquote className="my-7.5">
														<div className="sm:pl-7.5 sm:mb-5 sm:ml-17.5 relative z-1 sm:text-xl text-2sm text-primary dark:text-paleaqua sm:border-l-2 border-primary font-medium font-title">
															<div className="sm:absolute text-74 sm:-left-17.5 sm:right-auto sm:top-auto text-citrusyellow min-w-12 mr-7.5 size-12 flex items-center justify-center max-sm:pb-5">
															<i className="fa-solid fa-quote-left pt-1.25 leading-[0.75]"></i>
														</div>
														Why do you go away? So that you can come back. So that you can see the  place  you came from with new eyes and extra colors. And the people there see you differently, too. Coming back to where you started is not the  same as never leaving.
														</div>
														<div className="font-title text-lg font-bold relative pl-12 before:h-0.5 before:w-9.5 before:bg-citrusyellow before:left-0 before:top-1/2 before:-translate-y-1/2 before:absolute">
															Terry Pratchet
														</div>
													</blockquote>
													<p className="text-base font-normal text-primary dark:text-paleaqua leading-[1.4] mb-4">Choosing a destination can be exciting but also a bit overwhelming with so many amazing places out there! Let's narrow it Travlla is a multi-award-winning strategy and content creation agency that specializes in travel arketing. Morbi consequat risus consequat, porttitor orci sit amet, iaculis nisl. Integer quis sapien nec elit ultrices euismon sit amet id lacus. Sed a imperdiet erat. Duis eu est dignissim lacus dictum</p>
													<div className="trv-blog-d-column-wrap">
														<div className="row">
															<div className="md:w-1/2 w-full mb-7.5">
																<div className="rounded-3xl overflow-hidden">
																	<img src="/assets/images/trv-blog/blog-detail/bx-pic1.jpg" alt="img" className="w-full" width="376" height="316" loading="lazy" />
																</div>
															</div>
															<div className="md:w-1/2 w-full mb-7.5">
																<div className="rounded-3xl overflow-hidden">
																	<img src="/assets/images/trv-blog/blog-detail/bx-pic2.jpg" alt="img" className="w-full" width="376" height="316" loading="lazy" />
																</div>
															</div>
														</div>
													</div>
													<h2 className="md:text-28 text-22 mb-6.25">International Tourists Arriving in Spain, Portugal, Greece, Italy, France Rose at Huge Rate, Now Over tourism…</h2>
													<p className="text-base font-normal text-primary dark:text-paleaqua leading-[1.4] mb-4">Choosing a destination can be exciting but also a bit overwhelming with so many amazing places out there! Let's narrow it Travlla is a multi-award-winning strategy and content creation agency that specializes in travel arketing. Morbi consequat risus consequat, porttitor orci sit amet, iaculis nisl. Integer quis sapien nec elit ultrices euismon sit amet id lacus. Sed a imperdiet erat. Duis eu est dignissim lacus dictum</p>
                                                </div>
                                                <h2 className="md:text-28 text-22 mb-6.25">What precautions should we take while travelling?</h2>
                                                <ul className="mb-10">
                                                    <li className="md:text-lg text-base font-normal leading-[1.2] text-primary dark:text-paleaqua relative pl-11.25 mb-4.5">
                                                        <i className="fa-solid fa-circle-check absolute text-2xl text-secondary left-0 -top-0.75"></i>
                                                        Stay aware of local laws and customs
                                                    </li>
                                                    <li className="md:text-lg text-base font-normal leading-[1.2] text-primary dark:text-paleaqua relative pl-11.25 mb-4.5">
                                                        <i className="fa-solid fa-circle-check absolute text-2xl text-secondary left-0 -top-0.75"></i>
                                                        Keep copies of important documents
                                                    </li>
                                                    <li className="md:text-lg text-base font-normal leading-[1.2] text-primary dark:text-paleaqua relative pl-11.25 mb-4.5">
                                                        <i className="fa-solid fa-circle-check absolute text-2xl text-secondary left-0 -top-0.75"></i>
                                                        Stay hydrated and eat wisely
                                                    </li>
                                                    <li className="md:text-lg text-base font-normal leading-[1.2] text-primary dark:text-paleaqua relative pl-11.25 mb-4.5">
                                                        <i className="fa-solid fa-circle-check absolute text-2xl text-secondary left-0 -top-0.75"></i>
                                                        Download offline maps and translation apps
                                                    </li>
                                                </ul>
                                                <div className="md:flex justify-between pt-7.5 pb-5 items-baseline border-t border-primary/20 dark:border-paleaqua/20">
                                                    <div className="flex flex-wrap mb-2.5">
                                                        <h3 className="text-xl mb-2.5 mr-5">Tags</h3>
                                                        <div className="-mt-0.75 flex flex-wrap gap-1.25">
                                                            <a className="block text-heading bg-primary/10 text-base font-title font-medium duration-500 py-1.75 px-5 rounded-3xl hover:bg-citrusyellow" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/services'); }}>Food</a>
                                                            <a className="block text-heading bg-primary/10 text-base font-title font-medium duration-500 py-1.75 px-5 rounded-3xl hover:bg-citrusyellow" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/services'); }}>Tour </a>
                                                            <a className="block text-heading bg-primary/10 text-base font-title font-medium duration-500 py-1.75 px-5 rounded-3xl hover:bg-citrusyellow" href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/services'); }}>Pool</a>
                                                        </div>
                                                    </div>
                                                    <div className="md:text-right max-md:mt-7.5">
                                                        <ul className="social-icons">
                                                            <li className="inline-flex size-11.5 bg-citrusyellow mr-2.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg mb-2.5 group">
                                                                <a className="inline-flex size-9 bg-primary rounded-full justify-center items-center duration-500 text-white text-lg" href="https://www.x.com" target="_blank"><i className="fa-brands fa-x-twitter group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
                                                                </a>
                                                            </li>
                                                            <li className="inline-flex size-11.5 bg-citrusyellow mr-2.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg mb-2.5 group">
                                                                <a className="inline-flex size-9 bg-primary rounded-full justify-center items-center duration-500 text-white text-lg" href="https://www.facebook.com " target="_blank"><i className="fa-brands fa-facebook group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
                                                                </a>
                                                            </li>
                                                            <li className="inline-flex size-11.5 bg-citrusyellow mr-2.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg mb-2.5 group">
                                                                <a className="inline-flex size-9 bg-primary rounded-full justify-center items-center duration-500 text-white text-lg" href="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
                                                                </a>
                                                            </li>
                                                            <li className="inline-flex size-11.5 bg-citrusyellow mr-2.5 rounded-4xl justify-center items-center duration-500 hover:rounded-2lg mb-2.5 group">
                                                                <a className="inline-flex size-9 bg-primary rounded-full justify-center items-center duration-500 text-white text-lg" href="https://www.pinterest.com/" target="_blank"><i className="fa-brands fa-pinterest group-hover:rotate-y-[360deg] group-hover:scale-[1.2] !inline-block duration-[0.5s] group-hover:text-citrusyellow"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="py-5 mb-15 border-t border-primary/20 dark:border-paleaqua/20">
                                                    <div className="flex flex-wrap items-start -mx-3.75">
                                                        <div className="sm:flex flex-nowrap items-center w-1/2 px-3.75">
                                                            <div className="nav-post-meta"> 
                                                                <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="text-sm">
                                                                    <p className="max-w-75 mb-4">Destination can be exciting but also a bit over whelming with so many amazing places out.</p>
                                                                    <b className="text-sm font-semibold block mb-0.75 font-title"><i className="las la-angle-left"></i>Previous Post</b>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="sm:flex flex-nowrap items-center w-1/2 px-3.75 flex-row-reverse text-right">
                                                            <div className="nav-post-meta"> 
                                                                <a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()} className="text-sm">
                                                                    <p className="max-w-75 mb-4">Destination can be exciting but also a bit over whelming with so many amazing places out.</p>
                                                                    <b className="text-sm font-semibold block mb-0.75 font-title">Next Post<i className="las la-angle-right"></i></b> 
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="twm-post-com-wrap">
                                                    <div className="clear" id="comment-list">
                                                        <div className="comments-area" id="comments">
                                                            <h3 className="relative pl-4 table text-2xl font-semibold py-1.25 px-5 bg-linear-(--heading-gradient) border-l-4 border-citrusyellow mb-6">Customer Review</h3>
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
                                                                            <li className="comment odd parent">
                                                                            
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
                                                                {/* LEAVE A REPLY START */}
                                                                <div className="bg-eggshell dark:bg-eggshell/5 xl:py-15 xl:px-12.5 p-7.5 rounded-3xl max-lg:mx-auto max-lg:max-w-160 max-md:max-w-full">
                                                                    {/* TITLE START*/}
                                                                    <div className="sm:mb-15 mb-7.5">
                                                                        <h2 className="xl:text-46 md:text-40 text-3xl mb-2.5"><span className="text-citrusyellow">Comment</span> Section</h2>
                                                                        <div className="text-base">We'love to hear from you. Our friendly team is always here to chat</div>
                                                                    </div>
                                                                    {/* TITLE END*/}
                                                                    <form className="dz-form dzForm" method="POST" action="assets/script/contact_smtp.php">
                                                                        <input type="hidden" className="block w-full sm:h-18.5 h-12.5 rounded-5xl border border-primary/20 dark:border-paleaqua/20 sm:py-5 sm:px-10 py-1.25 px-3.75 sm:text-base text-sm text-bodycolor bg-white outline-0 placeholder:text-bodycolor" name="dzToDo" value="Contact" />
                                                                        <input type="hidden" className="block w-full sm:h-18.5 h-12.5 rounded-5xl border border-primary/20 dark:border-paleaqua/20 sm:py-5 sm:px-10 py-1.25 px-3.75 sm:text-base text-sm text-bodycolor bg-white outline-0 placeholder:text-bodycolor" name="reCaptchaEnable" value="0" />
                                                                        <div className="dzFormMsg"></div>
																		
                                                                        <div className="mb-5 relative">
																			<input required placeholder="Name" type="text" name="dzName" id="dzname" autoComplete="name" className="block w-full sm:h-18.5 h-12.5 rounded-5xl border border-primary/20 dark:border-paleaqua/20 sm:py-5 sm:px-10 py-1.25 px-3.75 sm:text-base text-sm text-bodycolor bg-white placeholder:text-bodycolor/0 duration-300 peer outline-0" />
																			<label htmlFor="dzname" className="absolute sm:text-base text-sm text-bodycolor left-10 top-6 duration-300 transform -translate-y-3.5 scale-75 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 pointer-events-none origin-left">Enter Your Name</label>
																		</div>
																		
                                                                        <div className="mb-5 relative">
                                                                            <input className="block w-full sm:h-18.5 h-12.5 rounded-5xl border border-primary/20 dark:border-paleaqua/20 sm:py-5 sm:px-10 py-1.25 px-3.75 sm:text-base text-sm text-bodycolor bg-white placeholder:text-bodycolor/0 duration-300 peer outline-0" required type="email" name="dzEmail" id="emailaddress" placeholder="Enter Email Address" autoComplete="email" />
                                                                            <label htmlFor="emailaddress" className="absolute sm:text-base text-sm text-bodycolor left-10 top-6 duration-300 transform -translate-y-3.5 scale-75 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 pointer-events-none origin-left">Email Address</label>   
                                                                        </div>
                                                                        <div className="mb-5 relative">
                                                                            <input className="block w-full sm:h-18.5 h-12.5 rounded-5xl border border-primary/20 dark:border-paleaqua/20 sm:py-5 sm:px-10 py-1.25 px-3.75 sm:text-base text-sm text-bodycolor bg-white placeholder:text-bodycolor/0 duration-300 peer outline-0" required type="text" name="dzOther" id="Subject" placeholder="Select Your Subject" />
                                                                            <label htmlFor="Subject" className="absolute sm:text-base text-sm text-bodycolor left-10 top-6 duration-300 transform -translate-y-3.5 scale-75 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 pointer-events-none origin-left">Subject</label>
                                                                        </div>
                                                                        <div className="mb-5 relative">
                                                                            <textarea autoComplete="off" placeholder="Write here" name="dzMessage" id="message" className="block w-full min-h-42 h-full rounded-3xl border border-primary/20 dark:border-paleaqua/20 py-10 px-7.5 sm:text-base text-sm text-bodycolor bg-white outline-0 placeholder:text-bodycolor/0 peer"></textarea>
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
                                                                {/* LEAVE A REPLY END */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div> 
                                    {/* SIDE BAR START */}
                                    <div className="lg:w-1/3 w-full mb-7.5">
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
