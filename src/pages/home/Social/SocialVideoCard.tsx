import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

interface SocialVideoCardProps {
  title: string;
  badgeText?: string;
  src: string;
  width?: number | string;
  isActive?: boolean;
}

const SocialVideoCard: React.FC<SocialVideoCardProps> = ({
  src,
  title,
  width,
  isActive,
  badgeText = "Coming Soon",
}) => {
  const hlsVideoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [hlsSpeed, setHlsSpeed] = useState<number | null>(null);
  const [startupTime, setStartupTime] = useState<number | null>(null);
  const [levels, setLevels] = useState<any[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<number>(-1); // -1: Auto

  useEffect(() => {
    const hlsVideo = hlsVideoRef.current;

    let hlsStartTime: number;

    if (hlsVideo && Hls.isSupported()) {
      const hls = new Hls();
      hlsRef.current = hls;
      hlsStartTime = performance.now();

      hls?.loadSource(src);
      hls?.attachMedia(hlsVideo);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        // hlsVideo.play().catch(() => {});
        setLevels(hls.levels);
      });

      hlsVideo.addEventListener("canplay", () => {
        const elapsed = performance.now() - hlsStartTime;
        setStartupTime(elapsed);

        const buffered = hlsVideo.buffered.length
          ? hlsVideo.buffered.end(0)
          : 0;
        const speed = buffered / (elapsed / 1000);
        setHlsSpeed(speed);
      });

      return () => {
        hls.destroy();
      };
    }
  }, [src]);

  // play video follow swiper active
  useEffect(() => {
    const videoEl = hlsVideoRef.current;

    if (isActive && videoEl) {
      videoEl.play().catch(() => {});
    } else if (!isActive && videoEl) {
      videoEl.pause();
    }
  }, [isActive]);

  return (
    <div className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-lime-500/50 transition-all duration-300 ">
      <div className="relative aspect-[9/16] bg-gradient-to-br from-lime-500/20 to-green-500/20 flex items-center justify-center overflow-hidden">
        {/* <img
          className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-500 text-transparent"
          src={image}
          loading="lazy"
          alt=""
        /> */}
        {/* <video
          controls={true}
          muted={true}
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500 text-transparent"
          loop={true}
          src={image}
          playsInline={true}
          autoPlay={true}
        /> */}
        <video
          ref={hlsVideoRef}
          controls={false}
          width={width}
          muted={true}
          className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-500 text-transparent"
          loop={true}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 active-bg"></div>
        {/* <div className="relative z-10 text-center">
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
            className="lucide lucide-play w-12 h-12 text-lime-400/80 group-hover:scale-110 transition-transform duration-300 mx-auto mb-2"
          >
            <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
          </svg>
          <p className="px-3 py-1 bg-black/60 rounded-full text-xs text-white font-medium">
            {badgeText}
          </p>
        </div> */}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-between p-4">
        <h3 className="text-white font-bold text-sm mb-3 group-hover:text-lime-400 transition-colors duration-300">
          {title}
        </h3>
        {/* <div className="flex gap-2">
          <a
            href="https://www.tiktok.com/@lehuythaidotcom"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-pink-500/60 rounded-full text-white hover:bg-pink-500 transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <svg
              className="lucide lucide-music w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 18V5l12-2v13"></path>
              <circle cx="6" cy="18" r="3"></circle>
              <circle cx="18" cy="16" r="3"></circle>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@lehuythaidotcom"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-blue-500/60 rounded-full text-white hover:bg-blue-500 transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <svg
              className="lucide lucide-youtube w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
              <path d="m10 15 5-3-5-3z"></path>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/lehuythaidotcom/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-red-500/60 rounded-full text-white hover:bg-red-500 transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <svg
              className="lucide lucide-facebook w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
        </div> */}
      </div>

      {/* <div className="absolute inset-0 bg-lime-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div> */}
    </div>
  );
};

export default SocialVideoCard;
