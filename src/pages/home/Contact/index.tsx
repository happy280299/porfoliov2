import React, { useRef } from "react";
import { ContactContainer } from "./styled";
import { motion, useInView } from "motion/react";

const Contact = () => {
  const refContact = useRef(null);
  const isInViewContact = useInView(refContact, {
    once: true,
    margin: "-100px",
  });
  return (
    <ContactContainer
      className="relative w-full min-h-screen py-20 pt-32 bg-gradient-to-t from-gray-950 via-black to-gray-900 overflow-hidden flex items-center justify-center"
      ref={refContact}
    >
      <div className="wrapper">
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 200 }}
              animate={
                isInViewContact ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }
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
                className="lucide lucide-share2 lucide-share-2 w-4 h-4"
                aria-hidden="true"
              >
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
              </svg>
              Kết Nối Với Tôi
            </motion.div>
            <motion.h2
              className="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight"
              initial={{ opacity: 0, x: 200 }}
              animate={
                isInViewContact ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }
              }
              transition={{
                duration: 0.5,
                delay: 0.25,
              }}
            >
              <span className="text-blue-400">LET'S </span>
              <span className="text-white/90">CONNECT</span>
            </motion.h2>
          </div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0, rotate: 360 }}
            animate={
              isInViewContact
                ? { opacity: 1, scale: 1, rotate: 0 }
                : { opacity: 0, scale: 0, rotate: 360 }
            }
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
          >
            <div className="max-w-3xl mx-auto p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
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
                    className="lucide lucide-send w-8 h-8 text-white"
                    aria-hidden="true"
                  >
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                    <path d="m21.854 2.147-10.94 10.939"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Bắt đầu cuộc trò chuyện
              </h3>
              <p className="text-white/60 mb-8 leading-relaxed max-w-lg mx-auto">
                Tôi luôn sẵn sàng thảo luận về các ý tưởng mới, cơ hội hợp tác
                hoặc chỉ đơn giản là trò chuyện về bất cứ điều gì.
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2 md:px-8 md:py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base font-medium md:font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
                    className="lucide lucide-mail w-6 h-6"
                    aria-hidden="true"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                  Email
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2 md:px-8 md:py-3 bg-white/10 hover:bg-white/20 text-white text-sm md:text-base font-medium md:font-bold rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
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
                    className="lucide lucide-facebook w-6 h-6"
                    aria-hidden="true"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;
