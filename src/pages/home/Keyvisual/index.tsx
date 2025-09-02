import {
  motion,
  SpringOptions,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { KeyvisualContainer } from "./styled";
import { useRef, useState } from "react";
import CircularText from "./circular";
import TextType from "./typeText";

interface TiltedCardProps {
  imageSrc?: React.ComponentProps<"img">["src"];
  altText?: string;
  captionText?: string;
  containerHeight?: React.CSSProperties["height"];
  containerWidth?: React.CSSProperties["width"];
  imageHeight?: React.CSSProperties["height"];
  imageWidth?: React.CSSProperties["width"];
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

const Keyvisual = ({
  imageSrc = "/assets/images/avatar.jpeg",
  altText = "Tilted card image",
  captionText = "My name is Ty",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = (
    <>
      <p className="mt-4 ml-4 bg-black/50 rounded-xl px-2 py-1 font-medium text-white text-sm border border-white/50">
        Trương Văn Ty
      </p>
    </>
  ),
  displayOverlayContent = true,
}: TiltedCardProps) => {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <KeyvisualContainer className="h-dvh flex items-center justify-center overflow-hidden bg-gradient-to-br">
      <div className="wrapper">
        <div className="wrapper-inner">
          <motion.figure
            ref={ref}
            className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center pointer-events-auto"
            style={{
              height: containerHeight,
              width: containerWidth,
            }}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}
          >
            <motion.div
              className="relative [transform-style:preserve-3d]"
              style={{
                width: imageWidth,
                height: imageHeight,
                rotateX,
                rotateY,
                scale,
              }}
            >
              <motion.img
                src={imageSrc}
                alt={altText}
                className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform [transform:translateZ(0)]"
                style={{
                  width: imageWidth,
                  height: imageHeight,
                }}
              />

              {displayOverlayContent && overlayContent && (
                <motion.div className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)]">
                  {overlayContent}
                </motion.div>
              )}
            </motion.div>

            {showTooltip && (
              <motion.figcaption
                className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
                style={{
                  x,
                  y,
                  opacity,
                  rotate: rotateFigcaption,
                }}
              >
                {captionText}
              </motion.figcaption>
            )}
          </motion.figure>
          <motion.div
            className="absolute -bottom-12 -right-12 w-32 h-32"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.75 }}
          >
            <div className="mb-8 flex justify-center">
              <CircularText
                text="CONTACT ✦ ME ✦ HERE ✦ "
                onHover="slowDown"
                spinDuration={20}
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          className="text-center text-3xl md:text-4xl font-black md:flex md:gap-2 justify-center mb-8"
          initial={{ opacity: 0, y: 0, scale: 1 }}
          animate={{
            opacity: 1,
            scale: [1, 1.4, 1],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 0.75,
            delay: 1.25,
          }}
        >
          <h1 className="mb-2 md:mb-0">XIN CHÀO, </h1>
          <p>MÌNH LÀ TY</p>
        </motion.div>
        <motion.div
          className="text-center text-3xl font-bold flex items-center justify-center mb-8"
          initial={{ opacity: 0, y: 0, scale: 1 }}
          animate={{
            opacity: 1,
            scale: [1, 1.4, 1],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 0.75,
            delay: 1,
          }}
        >
          <div className="hidden md:block">Mình là </div>
          <div className="inline-block whitespace-pre-wrap tracking-tight text-center text-3xl font-bold ml-2">
            <TextType
              text={[
                "Software Engineer_",
                "Front End Developer",
                "Happy coding!",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              textColors={["rgb(245, 158, 11)", "rgb(132, 204, 22)"]}
            />
          </div>
        </motion.div>
        <motion.div
          className="flex justify-center pointer-events-auto"
          initial={{ opacity: 0, y: 0, scale: 1 }}
          animate={{
            opacity: 1,
            scale: [1, 1.4, 1],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 0.75,
            delay: 1.75,
          }}
        >
          <button className="bg-white text-black px-8 md:px-12 py-3 md:py-4 rounded-full font-medium cursor-pointer hover:scale-105 transition-transform duration-200">
            Xem thêm
          </button>
        </motion.div>
      </div>
    </KeyvisualContainer>
  );
};

export default Keyvisual;
