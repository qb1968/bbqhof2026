import React from "react";
import ClientV1 from "../client/ClientV1";

const BuyTicketContent = () => {
  return (
    <>
      <section
        className="buy-ticket"
        style={{
          backgroundColor: "#dedede",
        }}
      >
        <div className="auto-container">
          {/* NC BBQ HALL OF FAME IMAGE */}
          <div className="image-box">
            <figure className="image wow fadeIn">
              <img
                src="/images/resource/pig1024.png"
                alt="NC BBQ Hall of Fame"
              />
            </figure>
          </div>

          {/* BBQ 2026 FLYER */}
          <div className="bbq-flyer-section">
            <div className="bbq-flyer-wrapper">
              {/* =====================================
                  RISING SMOKE AROUND THE FLYER
              ===================================== */}
              <svg
                className="ncbbq-smoke-svg"
                viewBox="0 0 900 700"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <filter
                    id="bbqSmokeBlur"
                    x="-100%"
                    y="-100%"
                    width="300%"
                    height="300%"
                  >
                    <feGaussianBlur stdDeviation="15" />
                  </filter>

                  <filter
                    id="bbqSmokeBlurHeavy"
                    x="-100%"
                    y="-100%"
                    width="300%"
                    height="300%"
                  >
                    <feGaussianBlur stdDeviation="24" />
                  </filter>
                </defs>

                {/* LEFT SIDE */}
                <g filter="url(#bbqSmokeBlur)">
                  <ellipse
                    className="rising-smoke smoke-1"
                    cx="70"
                    cy="650"
                    rx="55"
                    ry="75"
                  />

                  <ellipse
                    className="rising-smoke smoke-2"
                    cx="100"
                    cy="570"
                    rx="65"
                    ry="85"
                  />

                  <ellipse
                    className="rising-smoke smoke-3"
                    cx="65"
                    cy="470"
                    rx="55"
                    ry="75"
                  />

                  <ellipse
                    className="rising-smoke smoke-4"
                    cx="125"
                    cy="360"
                    rx="60"
                    ry="85"
                  />
                </g>

                {/* LEFT CENTER */}
                <g filter="url(#bbqSmokeBlurHeavy)">
                  <ellipse
                    className="rising-smoke smoke-5"
                    cx="250"
                    cy="650"
                    rx="70"
                    ry="80"
                  />

                  <ellipse
                    className="rising-smoke smoke-6"
                    cx="220"
                    cy="540"
                    rx="65"
                    ry="90"
                  />

                  <ellipse
                    className="rising-smoke smoke-7"
                    cx="270"
                    cy="430"
                    rx="60"
                    ry="80"
                  />
                </g>

                {/* CENTER */}
                <g filter="url(#bbqSmokeBlurHeavy)">
                  <ellipse
                    className="rising-smoke smoke-8"
                    cx="450"
                    cy="670"
                    rx="85"
                    ry="90"
                  />

                  <ellipse
                    className="rising-smoke smoke-9"
                    cx="430"
                    cy="550"
                    rx="70"
                    ry="90"
                  />

                  <ellipse
                    className="rising-smoke smoke-10"
                    cx="475"
                    cy="430"
                    rx="65"
                    ry="85"
                  />

                  <ellipse
                    className="rising-smoke smoke-11"
                    cx="440"
                    cy="310"
                    rx="60"
                    ry="80"
                  />
                </g>

                {/* RIGHT CENTER */}
                <g filter="url(#bbqSmokeBlurHeavy)">
                  <ellipse
                    className="rising-smoke smoke-12"
                    cx="650"
                    cy="650"
                    rx="70"
                    ry="80"
                  />

                  <ellipse
                    className="rising-smoke smoke-13"
                    cx="680"
                    cy="540"
                    rx="65"
                    ry="90"
                  />

                  <ellipse
                    className="rising-smoke smoke-14"
                    cx="630"
                    cy="430"
                    rx="60"
                    ry="80"
                  />
                </g>

                {/* RIGHT SIDE */}
                <g filter="url(#bbqSmokeBlur)">
                  <ellipse
                    className="rising-smoke smoke-15"
                    cx="830"
                    cy="650"
                    rx="55"
                    ry="75"
                  />

                  <ellipse
                    className="rising-smoke smoke-16"
                    cx="790"
                    cy="570"
                    rx="65"
                    ry="85"
                  />

                  <ellipse
                    className="rising-smoke smoke-17"
                    cx="835"
                    cy="470"
                    rx="55"
                    ry="75"
                  />

                  <ellipse
                    className="rising-smoke smoke-18"
                    cx="775"
                    cy="360"
                    rx="60"
                    ry="85"
                  />
                </g>
              </svg>

              {/* BBQ FLYER */}
              <img
                src="/images/bbq2026.jpg"
                alt="BBQ 2026 Event"
                className="bbq-flyer-image"
              />
            </div>
          </div>

          {/* PROCEEDS MESSAGE */}
          <p className="alcovets-message">
            Proceeds from this event help support ALCOVETS
          </p>

          {/* DIVIDER */}
          <div
            className="container"
            style={{
              padding: 20,
              marginBottom: 70,
              marginTop: 50,
              borderBottom: "1rem solid black",
            }}
          ></div>
        </div>

        {/* EXISTING CLIENT SECTION */}
        <ClientV1 />
      </section>

      {/* =========================================
          COMPONENT CSS
      ========================================= */}
      <style>
        {`
          /* Flyer section */
          .bbq-flyer-section {
            width: 100%;
            max-width: 1000px;
            margin: 50px auto;
            padding: 100px 40px 120px;
            text-align: center;
          }

          /* Flyer wrapper */
          .bbq-flyer-wrapper {
            position: relative;
            width: 100%;
            max-width: 900px;
            margin: 0 auto;
            overflow: visible !important;
          }

          /* Smoke */
          .ncbbq-smoke-svg {
            position: absolute !important;
            top: -170px !important;
            left: -150px !important;
            width: calc(100% + 300px) !important;
            height: calc(100% + 350px) !important;
            z-index: 30 !important;
            overflow: visible !important;
            pointer-events: none !important;
          }

          /* Smoke particles */
          .rising-smoke {
            fill: rgba(65, 65, 65, 0.58);
            opacity: 0;
            transform-box: fill-box;
            transform-origin: center;
            animation-name: bbqRisingSmoke;
            animation-duration: 8s;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }

          /* Smoke timing */
          .smoke-1 {
            animation-delay: 0s;
          }

          .smoke-2 {
            animation-delay: 1.2s;
          }

          .smoke-3 {
            animation-delay: 2.4s;
          }

          .smoke-4 {
            animation-delay: 3.6s;
          }

          .smoke-5 {
            animation-delay: 0.8s;
          }

          .smoke-6 {
            animation-delay: 2s;
          }

          .smoke-7 {
            animation-delay: 3.2s;
          }

          .smoke-8 {
            animation-delay: 1.5s;
          }

          .smoke-9 {
            animation-delay: 2.7s;
          }

          .smoke-10 {
            animation-delay: 4s;
          }

          .smoke-11 {
            animation-delay: 5.2s;
          }

          .smoke-12 {
            animation-delay: 0.5s;
          }

          .smoke-13 {
            animation-delay: 1.8s;
          }

          .smoke-14 {
            animation-delay: 3s;
          }

          .smoke-15 {
            animation-delay: 1s;
          }

          .smoke-16 {
            animation-delay: 2.2s;
          }

          .smoke-17 {
            animation-delay: 3.5s;
          }

          .smoke-18 {
            animation-delay: 4.7s;
          }

          /* Rising smoke animation */
          @keyframes bbqRisingSmoke {
            0% {
              opacity: 0;
              transform:
                translate(0px, 50px)
                scale(0.45)
                rotate(0deg);
            }

            12% {
              opacity: 0.68;
            }

            30% {
              opacity: 0.58;
              transform:
                translate(-25px, -40px)
                scale(0.75)
                rotate(-7deg);
            }

            50% {
              opacity: 0.45;
              transform:
                translate(30px, -130px)
                scale(1.05)
                rotate(9deg);
            }

            70% {
              opacity: 0.30;
              transform:
                translate(-35px, -230px)
                scale(1.4)
                rotate(-10deg);
            }

            85% {
              opacity: 0.16;
              transform:
                translate(35px, -320px)
                scale(1.8)
                rotate(12deg);
            }

            100% {
              opacity: 0;
              transform:
                translate(-20px, -420px)
                scale(2.25)
                rotate(-8deg);
            }
          }

          /* Flyer */
          .bbq-flyer-image {
  position: relative;
  z-index: 10;

  display: block;

  width: 100%;
  max-width: 900px;

  height: auto;

  margin: 0 auto;

  border-radius: 18px;

  filter: brightness(0.82);

  /* BBQ FIRE GLOW */
  box-shadow:
    0 0 12px rgba(255, 80, 0, 0.95),
    0 0 25px rgba(255, 110, 0, 0.85),
    0 0 45px rgba(255, 70, 0, 0.65),
    0 0 70px rgba(255, 40, 0, 0.45),
    0 12px 35px rgba(0, 0, 0, 0.55);

  animation: bbqFlyerGlow 3s ease-in-out infinite;
}
  @keyframes bbqFlyerGlow {
  0% {
    box-shadow:
      0 0 10px rgba(255, 70, 0, 0.75),
      0 0 22px rgba(255, 100, 0, 0.65),
      0 0 40px rgba(255, 50, 0, 0.45),
      0 0 60px rgba(255, 30, 0, 0.30),
      0 12px 35px rgba(0, 0, 0, 0.55);
  }

  50% {
    box-shadow:
      0 0 18px rgba(255, 100, 0, 1),
      0 0 35px rgba(255, 130, 0, 0.9),
      0 0 60px rgba(255, 70, 0, 0.75),
      0 0 90px rgba(255, 40, 0, 0.5),
      0 12px 35px rgba(0, 0, 0, 0.55);
  }

  100% {
    box-shadow:
      0 0 10px rgba(255, 70, 0, 0.75),
      0 0 22px rgba(255, 100, 0, 0.65),
      0 0 40px rgba(255, 50, 0, 0.45),
      0 0 60px rgba(255, 30, 0, 0.30),
      0 12px 35px rgba(0, 0, 0, 0.55);
  }
}

          /* ALCOVETS message */
          .alcovets-message {
            color: #333;
            font-size: 24px;
            font-weight: 700;
            line-height: 1.7;
            text-align: center;
            max-width: 900px;
            margin: 0 auto;
            padding: 0 20px;
          }

          /* Tablet */
          @media (max-width: 768px) {
            .bbq-flyer-section {
              padding: 80px 25px 100px;
            }

            .ncbbq-smoke-svg {
              top: -110px !important;
              left: -100px !important;
              width: calc(100% + 200px) !important;
              height: calc(100% + 250px) !important;
            }

            .rising-smoke {
              animation-duration: 9s;
            }

            .alcovets-message {
              font-size: 20px;
            }
          }

          /* Mobile */
          @media (max-width: 480px) {
            .bbq-flyer-section {
              padding: 60px 15px 80px;
            }

            .ncbbq-smoke-svg {
              top: -75px !important;
              left: -65px !important;
              width: calc(100% + 130px) !important;
              height: calc(100% + 180px) !important;
            }

            .rising-smoke {
              animation-duration: 10s;
            }

            .alcovets-message {
              font-size: 18px;
            }
          }

          /* Accessibility */
          @media (prefers-reduced-motion: reduce) {
            .rising-smoke {
              animation: none;
              opacity: 0.35;
            }
          }
        `}
      </style>
    </>
  );
};

export default BuyTicketContent;