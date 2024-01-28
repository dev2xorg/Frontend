'use client'

import Glide from "@glidejs/glide";

import React, { useEffect } from "react";

interface CarouselIndicatorsOutsideProps { }
const CarouselIndicatorsOutside: React.FC<CarouselIndicatorsOutsideProps> = () => {
    useEffect(() => {
        const slider = new Glide(".glide-05", {
            type: "carousel",
            focusAt: "center",
            perView: 3, // Default perView value
            autoplay: 3000,
            animationDuration: 700,
            gap: 24,
            breakpoints: {
                1024: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                },
            },
        }).mount();

        const zoomCarousel = () => {
            // Change perView to 1 when zoom button is clicked
            slider.settings.perView = 1;
            slider.update();
        };

        const zoomButton = document.getElementById("zoomButton");

        if (zoomButton) {
            zoomButton.addEventListener("click", zoomCarousel);
        }

        return () => {
            slider.destroy();
            if (zoomButton) {
                zoomButton.removeEventListener("click", zoomCarousel);
            }
        };
    }, []);
    return (
        <>
            <div className="items-center justify-center flex mt-5">
                <h2 className="bold-20 items-center">Updates</h2>
            </div>
            <div className="bg-gray-200 align-center glide-05 relative w-full">
                <div className=" mt-8 overflow-hidden" data-glide-el="track">
                    <ul className="   whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                        <li className=" rounded-lg  shadow-lg  ">
                            <img
                                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-03.jpg"
                                className="m-auto py-[25px] w-full max-w-full "
                            />
                        </li>
                        <li>
                            <img
                                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-05.jpg"
                                className="m-auto py-[25px] w-full max-w-full"
                            />
                        </li>
                        <li >
                            <img
                                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-01.jpg"
                                className="m-auto py-[25px] w-full max-w-full"
                            />
                        </li>
                        <li className="rounded-lg ">
                            <img
                                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-02.jpg"
                                className="m-auto py-[25px] w-full max-w-full"
                            />
                        </li>
                    </ul>
                </div>
                <div
                    className="flex w-full items-center justify-center gap-2"
                    data-glide-el="controls[nav]"
                >
                    {/* ... your navigation buttons */}
                    <button
                        className="group p-4"
                        data-glide-dir="=0"
                        aria-label="goto slide 1"
                    >
                        <span className="block h-2 w-2 rounded-full bg-white ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
                    </button>
                    <button
                        className="group p-4"
                        data-glide-dir="=1"
                        aria-label="goto slide 2"
                    >
                        <span className="block h-2 w-2 rounded-full bg-white ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
                    </button>
                    <button
                        className="group p-4"
                        data-glide-dir="=2"
                        aria-label="goto slide 3"
                    >
                        <span className="block h-2 w-2 rounded-full bg-white ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
                    </button>
                    <button
                        className="group p-4"
                        data-glide-dir="=3"
                        aria-label="goto slide 4"
                    >
                        <span className="block h-2 w-2 rounded-full bg-white ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
                    </button>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <button
                      id="zoomButton"
                    className="px-4 py-2 bg-green-400 border border-black text-white rounded-md"
                >
                    Zoom
                </button>
            </div>
        </>
    );
};

export default CarouselIndicatorsOutside;
