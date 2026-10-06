import React from "react";

const nominees = [
  {
    name: "Bum's Restaurant",
    image: "/images/resource/bums.webp",
  },
  {
    name: "Bob Garner",
    image: "/images/resource/bobg.jpg",
  },
  {
    name: "BAR-B-Q Center",
    image: "/images/resource/bbqcenter.jpg",
  },
  {
    name: "Bob Melton's (Posthumous)",
    image: "/images/resource/bm.jpg",
  },
];

const Nominees2026 = () => {
  return (
    <section className="nominees-2026">
      <div className="auto-container">
        {/* SECTION HEADER */}
        <div className="sec-title text-center">
          <span className="sub-title">NC BBQ Hall of Fame</span>

          <h2>2026 Nominees</h2>

          <div className="separator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* NOMINEE CARDS */}
        <div className="nominees-grid">
          {nominees.map((nominee, index) => (
            <div className="nominee-card" key={index}>
              <div className="nominee-image-wrapper">
                <img
                  src={nominee.image}
                  alt={nominee.name}
                  className="nominee-image"
                />
              </div>

              <div className="nominee-info">
                <h3>{nominee.name}</h3>
                <p>2026 Nominee</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          /* =========================================
             2026 NOMINEES SECTION
          ========================================= */

          .nominees-2026 {
            position: relative;
            padding: 90px 0 100px;
            background: #f5f5f5;
          }


          /* =========================================
             SECTION TITLE
          ========================================= */

          .nominees-2026 .sec-title {
            margin-bottom: 55px;
          }

          .nominees-2026 .sub-title {
            display: block;
            margin-bottom: 10px;

            color: #f20487;

            font-size: 16px;
            font-weight: 700;

            text-transform: uppercase;
            letter-spacing: 2px;
          }

          .nominees-2026 .sec-title h2 {
            margin: 0;

            color: #222;

            font-size: 42px;
            font-weight: 700;
          }


          /* =========================================
             SEPARATOR
          ========================================= */

          .nominees-2026 .separator {
            display: flex;

            justify-content: center;
            align-items: center;

            gap: 5px;

            margin-top: 18px;
          }

          .nominees-2026 .separator span {
            display: block;

            width: 8px;
            height: 8px;

            border-radius: 50%;

            background: #f20487;
          }

          .nominees-2026 .separator span:nth-child(2) {
            width: 45px;
            border-radius: 5px;
          }


          /* =========================================
             GRID
          ========================================= */

          .nominees-grid {
            display: grid;

            grid-template-columns:
              repeat(4, minmax(0, 1fr));

            gap: 30px;

            max-width: 1200px;

            margin: 0 auto;
          }


          /* =========================================
             CARD
          ========================================= */

          .nominee-card {
            position: relative;

            overflow: hidden;

            background: #ffffff;

            border-radius: 16px;

            box-shadow:
              0 10px 30px rgba(0, 0, 0, 0.12);

            transition:
              transform 0.35s ease,
              box-shadow 0.35s ease;
          }

          .nominee-card:hover {
            transform: translateY(-10px);

            box-shadow:
              0 20px 45px rgba(0, 0, 0, 0.20);
          }


          /* =========================================
             IMAGE
          ========================================= */

          .nominee-image-wrapper {
            position: relative;

            overflow: hidden;

            width: 100%;

            aspect-ratio: 1 / 1;
          }

          .nominee-image {
            display: block;

            width: 100%;
            height: 100%;

            object-fit: cover;

            transition:
              transform 0.5s ease,
              filter 0.5s ease;
          }

          .nominee-card:hover .nominee-image {
            transform: scale(1.07);

            filter: brightness(0.85);
          }


          /* =========================================
             2026 OVERLAY
          ========================================= */

          .nominee-overlay {
            position: absolute;

            top: 15px;
            right: 15px;

            display: flex;

            align-items: center;
            justify-content: center;

            width: 60px;
            height: 60px;

            border-radius: 50%;

            background:
              linear-gradient(
                135deg,
                #f20487,
                #f20487
              );

            box-shadow:
              0 5px 15px rgba(0, 0, 0, 0.25);
          }

          .nominee-overlay span {
            color: #ffffff;

            font-size: 13px;
            font-weight: 700;

            letter-spacing: 1px;
          }


          /* =========================================
             CARD INFORMATION
          ========================================= */

          .nominee-info {
            padding: 25px 20px 28px;

            text-align: center;
          }

          .nominee-info h3 {
            margin: 0 0 8px;

            color: #222;

            font-size: 23px;
            font-weight: 700;

            line-height: 1.3;
          }

          .nominee-info p {
            margin: 0;

            color: #f20487;

            font-size: 14px;
            font-weight: 600;

            text-transform: uppercase;

            letter-spacing: 1px;
          }


          /* =========================================
             TABLET
          ========================================= */

          @media (max-width: 991px) {

            .nominees-grid {
              grid-template-columns:
                repeat(2, minmax(0, 1fr));

              max-width: 750px;
            }

            .nominees-2026 .sec-title h2 {
              font-size: 36px;
            }
          }


          /* =========================================
             MOBILE
          ========================================= */

          @media (max-width: 575px) {

            .nominees-2026 {
              padding: 65px 15px 75px;
            }

            .nominees-grid {
              grid-template-columns: 1fr;

              gap: 25px;

              max-width: 400px;
            }

            .nominees-2026 .sec-title h2 {
              font-size: 32px;
            }

            .nominee-info h3 {
              font-size: 21px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Nominees2026;
