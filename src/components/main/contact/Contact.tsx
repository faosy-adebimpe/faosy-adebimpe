import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
    return (
        <section className="section w-full lg:mt-30" id="contact">
            <div className="wrapper">
                <div className="pt-10 sm:pt-0 bg-[#1f1f1f] rounded-[8px] wrapper flex gap-[70px] flex-col items-center sm:flex-row sm:items-end sm:min-h-[396px] lg:min-h-[539px] lg:max-h-[540px] shadow-md shadow-[#1a1a1a]">
                    {/* <div className="flex gap-[16px] lg:gap-[30px] flex-col items-center min-w-[392px] sm:min-w-[275px] lg:min-w-[433px] xl:min-w-[469px] sm:items-start sm:my-auto max-w-full bg-red-200"> */}
                    <div className="flex gap-[16px] lg:gap-[30px] flex-col items-center w-[392px] sm:min-w-[275px] lg:min-w-[433px] xl:min-w-[469px] sm:items-start sm:my-auto max-w-full">
                        <h2 className="font-bold text-(--theme-color) text-[16px]">
                            04.
                        </h2>
                        <h2 className="text-(--white) text-[30px] font-extrabold leading-[30px] text-center sm:text-start lg:text-[60px] lg:leading-[60px]">
                            Let&apos;s talk about your project
                        </h2>
                        {/* <p className="mt-[14px]leading-[26.4px] text-center sm:text-start"> */}
                        <p className="mt-[14px] leading-[26.4px] text-center sm:text-start">
                            Every great project starts with a conversation. Tell
                            me about your goals, and let&apos;s make something
                            amazing happen together.
                        </p>

                        <Link
                            href="/contact"
                            className="mt-[19px] W-[189px] h-[53px] bg-(--theme-color) text-(--white) rounded-[8px] flex basis-0 gap-[normal_8px] justify-center leading-[26.4px] py-[14px] px-[60px] items-center link-button"
                        >
                            <span className="text-(--white) text-[15px] font-medium leading-[24.75px] text-center uppercase lg:font-bold">
                                CONTACT
                            </span>
                        </Link>
                    </div>
                    {/* <div className='size-[392px] overflow-clip sm:size-[275px] md:size-[387px] lg:size-[498px] bg-red-200'> */}
                    {/* <div className="w-[392] overflow-clip sm:-w-[500px] md:w-[700px] lg:w-[750px] flex justify-center items-end"> */}
                    {/* <div className="w-[392] max-w-full overflow-clip sm:-w-[500px] md:w-[700px] lg:w-[750px] flex justify-center items-end"> */}
                    <div className="w-[392] max-w-full overflow-clip sm:w-[500px] flex justify-center items-end">
                        <Image
                            src="/images/image-1-flip.png"
                            title="contact image"
                            alt="contact image"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
