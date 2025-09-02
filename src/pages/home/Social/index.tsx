import React, { useContext, useRef, useState } from "react";
import { SocialContainer } from "./styled";
import SocialVideoCard from "./SocialVideoCard";
import { motion, useInView } from "motion/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ContextProviderWrapper } from "@/Context";

const Social = () => {
  const refSocial = useRef(null);
  const isInViewSocial = useInView(refSocial, { once: true, margin: "-100px" });
  const refVideo = useRef(null);
  const isInViewVideo = useInView(refVideo, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const { isDesktop } = useContext(ContextProviderWrapper)!;

  const VIDEO_SHOWCASE: Array<{ video: any; full?: boolean }> = [
    {
      full: true,
      video: "/assets/video/blueprint-box-face-decor/master.m3u8",
    },
    {
      video: "/assets/video/google-mlkit/master.m3u8",
    },
    {
      video: "/assets/video/face-id-test/master.m3u8",
    },
    {
      video: "/assets/video/gradient-skia/master.m3u8",
    },
    {
      video: "/assets/video/swift-anim-text/master.m3u8",
    },
    {
      full: true,
      video: "/assets/video/myvng-maestro/master.m3u8",
    },
    { video: "/assets/video/gen-text/master.m3u8" },
    {
      video: "/assets/video/blueprint-circle-anim/master.m3u8",
    },
    {
      video: "/assets/video/circle-anim-v2/master.m3u8",
    },
    {
      video: "/assets/video/video_02/master.m3u8",
    },
    {
      video: "/assets/video/circle-ring/master.m3u8",
    },
  ];

  return (
    <SocialContainer className="relative w-full min-h-screen py-20 pt-32 bg-gradient-to-b from-black via-gray-950 to-gray-900">
      <div className="wrapper">
        <div className="relative z-10 w-full flex flex-col justify-center min-h-screen">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-16" ref={refSocial}>
              <motion.div
                className="inline-flex items-center gap-2 px-6 py-3 bg-lime-500/10 border border-lime-500/30 rounded-full text-lime-400 text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 200 }}
                animate={
                  isInViewSocial ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }
                }
                transition={{
                  duration: 0.5,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-video w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                  <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                </svg>
                Chia Sẻ Kiến Thức
              </motion.div>
              <motion.h2
                className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 200 }}
                animate={
                  isInViewSocial ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                }}
              >
                <span className="text-lime-500">CONTENT </span>
                <span className="text-white/90">CONTENT</span>
              </motion.h2>
              <motion.p
                className="text-xl text-white/60 max-w-lg mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 200 }}
                animate={
                  isInViewSocial ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                }}
              >
                Mình muốn hoàn thiện bản thân mỗi ngày và chia sẻ điều đó. Tìm
                mình trên:
              </motion.p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mt-12 max-w-4xl mx-auto px-4">
                <motion.div
                  className="w-full sm:max-w-xs"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isInViewSocial
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.9,
                  }}
                >
                  <div className="relative rounded-3xl border border-neutral-800 overflow-hidden p-4 md:p-6 lg:p-8 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"></div>
                    <a
                      href="https://www.tiktok.com/@lehuythaidotcom"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-4 text-center"
                    >
                      <div className="relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-music w-12 h-12 md:w-16 md:h-16 text-pink-400 group-hover:scale-110 transition-transform duration-300"
                          aria-hidden="true"
                        >
                          <path d="M9 18V5l12-2v13"></path>
                          <circle cx="6" cy="18" r="3"></circle>
                          <circle cx="18" cy="16" r="3"></circle>
                        </svg>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg md:text-xl font-bold text-pink-400">
                          TikTok
                        </h3>
                      </div>
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  className="w-full sm:max-w-xs"
                  initial={{ opacity: 0, scale: 0, rotate: 360 }}
                  animate={
                    isInViewSocial
                      ? { opacity: 1, scale: 1, rotate: 0 }
                      : { opacity: 0, scale: 0, rotate: 360 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 1,
                  }}
                >
                  <div className="relative rounded-3xl border border-neutral-800 overflow-hidden p-4 md:p-6 lg:p-8 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"></div>
                    <a
                      href="https://www.facebook.com/lehuythaidotcom/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-4 text-center"
                    >
                      <div className="relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-facebook w-12 h-12 md:w-16 md:h-16 text-blue-400 group-hover:scale-110 transition-transform duration-300"
                          aria-hidden="true"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg md:text-xl font-bold text-blue-400">
                          Facebook
                        </h3>
                      </div>
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  className="w-full sm:max-w-xs"
                  initial={{ opacity: 0, x: 200 }}
                  animate={
                    isInViewSocial
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 200 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 1.2,
                  }}
                >
                  <div className="relative rounded-3xl border border-neutral-800 overflow-hidden p-4 md:p-6 lg:p-8 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"></div>
                    <a
                      href="https://www.youtube.com/@lehuythaidotcom"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-4 text-center"
                    >
                      <div className="relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-youtube w-12 h-12 md:w-16 md:h-16 text-red-400 group-hover:scale-110 transition-transform duration-300"
                          aria-hidden="true"
                        >
                          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                          <path d="m10 15 5-3-5-3z"></path>
                        </svg>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg md:text-xl font-bold text-red-400">
                          YouTube
                        </h3>
                      </div>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* new video */}
            <div className="mt-16" ref={refVideo}>
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 200 }}
                animate={
                  isInViewSocial ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }
                }
                transition={{
                  duration: 0.5,
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  Video Mới nhất
                </h3>
                <p className="text-white/60 max-w-lg mx-auto">
                  Đừng bỏ lỡ những video mới nhất của mình.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={
                  isInViewVideo ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }
                }
                transition={{
                  duration: 0.5,
                }}
              >
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={isDesktop ? "auto" : 2}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={true}
                  modules={[EffectCoverflow]}
                  className="mySwiper"
                >
                  {VIDEO_SHOWCASE.map((item, index) => (
                    <SwiperSlide>
                      <SocialVideoCard
                        src={item.video}
                        title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                        isActive={index === activeIndex}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </SocialContainer>
  );
};

export default Social;
