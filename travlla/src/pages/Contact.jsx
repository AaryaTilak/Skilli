import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
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
									<h2 className="lg:text-60 md:text-52 text-28 relative text-primary!">Contact Us</h2>
								</div>
								{/* BREADCRUMB ROW */}                            
								<div>
									<ul className="inline-block">
										<li className="text-base pr-7.5 relative inline-block font-semibold text-primary after:content-['-'] after:absolute after:right-2 after:-top-1.5 after:text-primary after:text-26 after:font-normal">
											<a href="#" onClick={(e) => e.preventDefault()} onClick={(e) => { e.preventDefault(); handleLinkClick('/'); }}>Home</a></li>
										<li className="relative inline-block text-base font-semibold text-primary">Contact Us</li>
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
				{/*CONTACT US SECTION START*/}
				<div className="xl:py-30 py-12.5 px-5">
					<div className="max-w-437.5 mx-auto bg-white dark:bg-dark rounded-6xl xl:p-15 p-5 shadow-[0px_4px_80px_rgba(6,97,104,0.28)] relative">
						{/* GOOGLE MAP */}
						<div className="w-full md:h-150 mb-15">
							<div className="gmap-outline">
								<div className="google-map">
									<div className="overflow-hidden" style={{ width: "100%" }}>
										<iframe className="max-md:h-90 w-full rounded-4xl" height="600" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.272796714594!2d-87.64937353634511!3d41.90849403896016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd324fc400797%3A0x76a989827d7eb84e!2s853%20W%20Blackhawk%20St%2C%20Chicago%2C%20IL%2060642%2C%20USA!5e0!3m2!1sen!2sin!4v1745326667544!5m2!1sen!2sin"></iframe>
									</div>
								</div>
							</div>
						</div>
						<div className="grid grid-cols-12 lg:gap-7.5">
							<div className="2xl:col-span-6 lg:col-span-5 col-span-12">
								<div>
									<div className="bg-eggshell dark:bg-eggshell/5 xl:py-15 xl:px-12.5 sm:p-7.5 p-5 rounded-3xl max-lg:mx-auto max-lg:max-w-160 max-md:max-w-full">
										{/* TITLE START*/}
										<div className="sm:mb-15 mb-7.5">
											<h2 className="xl:text-46 md:text-40 text-3xl mb-2.5"><span className="text-citrusyellow">Reach</span> & Get in Touch With Us!</h2>
											<div className="text-base">We'love to hear from you. Our friendly team is always here to chat</div>
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
							<div className="2xl:col-span-6 lg:col-span-7 col-span-12">
								<div className="relative z-1">
									<div className="lg:pt-34.5 pt-12.5 lg:w-112.5 w-full lg:ml-6 max-lg:px-7.5  max-md:px-0">
										{/* TITLE START*/}
										<div className="sm:mb-15 mb-7.5">
											<h2 className="xl:text-46 md:text-40 text-3xl mb-2.5">Contact Us<span className="text-citrusyellow"> Detail</span></h2>
											<div className="text-base">Travlla is a multi-award-winning strategy and content creation agency that specializes in travel marketing.</div>
										</div>
										{/* TITLE END*/}
										<ul>
											<li className="mb-7.5">
												<div className="sm:flex items-center max-sm:text-center">
													<div className="bg-[#45869D] size-25 rounded-5xl flex items-center justify-center max-sm:mx-auto max-sm:mb-5">
														<div className="bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] size-17.5 rounded-5xl flex items-center justify-center">
															<i className="fa-solid fa-phone-volume text-34 text-skyblue"></i>
														</div>
													</div>
													<div className="sm:w-[calc(100%_-_100px)] sm:pl-7.5">
														<span className="text-lg font-normal text-primary dark:text-paleaqua leading-[1.4]">Phone</span>
														<h2 className="md:text-28 text-xl text-primary !font-semibold"><a href="callto:1236540214">123 654 0214</a></h2>
													</div>
												</div>
											</li>
											<li className="mb-7.5">
												<div className="sm:flex items-center max-sm:text-center">
													<div className="bg-[#CE8594] size-25 rounded-5xl flex items-center justify-center max-sm:mx-auto max-sm:mb-5">
														<div className="bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] size-17.5 rounded-5xl flex items-center justify-center">
															<i className="fa-solid fa-envelope text-34 text-[#CE8594]"></i>
														</div>
													</div>
													<div className="sm:w-[calc(100%_-_100px)] sm:pl-7.5">
														<span className="text-lg font-normal text-primary dark:text-paleaqua leading-[1.4]">Email</span>
														<h2 className="md:text-28 text-xl text-primary !font-semibold"><a href="mailto:info@example.com">travllainfo@gmail.com</a></h2>
													</div>
												</div>
											</li>
											<li className="mb-7.5">
												<div className="sm:flex items-center max-sm:text-center">
													<div className="bg-[#047881] size-25 rounded-5xl flex items-center justify-center max-sm:mx-auto max-sm:mb-5">
														<div className="bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] size-17.5 rounded-5xl flex items-center justify-center">
															<i className="fa-solid fa-house text-34 text-[#047881]"></i>
														</div>
													</div>
													<div className="sm:w-[calc(100%_-_100px)] sm:pl-7.5">
														<span className="text-lg font-normal text-primary dark:text-paleaqua leading-[1.4]">Address</span>
														<h2 className="md:text-28 text-xl text-primary !font-semibold">55/11 ronin tower, New York</h2>
													</div>
												</div>
											</li>
										</ul>
										<div className="lg:pt-12.5 max-sm:text-center">
											<h3 className="!font-display md:text-48 sm:text-40 text-2xl">Let's <span className="text-citrusyellow">Talk</span> About You !</h3>
										</div>
									</div>
									<img src="/assets/images/Image-cont.png" alt="Image" className="absolute -bottom-5 -right-5 w-65 -z-1 max-2xl:hidden" width="260" height="488" loading="lazy" />
								</div>
							</div>
						</div>
					</div>
				</div>
    </div>
  );
}
