import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import AnimatedBg from "react-animated-bg";
import Snowfall from "react-snowfall";

const SingleBannerV1 = ({ banner }) => {
  const {
    thumb,
    subTitle,
    title1,
    title2,
    list1,
    list2,
    list3,
    btnLink,
    btnText,
    thumb2,
    thumb3
  } = banner;

  return (
    <>
      <div
        className="slide-item"
        style={{ backgroundImage: `url(images/main-slider/${thumb}` }}
      >
        {/* Adjust snowflakeCount as needed */}
        <div
          style={{
            border: "3px solid rgba(255, 255, 255, 0.8)",
            borderRadius: "20px",
            padding: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.55)",
            boxShadow: "0 0 30px rgba(255, 140, 0, 0.6)",
            backdropFilter: "blur(5px)",
            textAlign: "center",
            maxWidth: "650px",
            margin: "0 auto",
          }}
        >
          <img
            src={`/images/main-slider/${thumb2}`}
            alt="image"
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />

          <h1
            style={{
              color: "white",
              fontSize: "50px",
              fontWeight: "bold",
              lineHeight: "1.05",
              marginTop: "20px",
              marginBottom: "0",
              textShadow: "0 3px 10px rgba(0, 0, 0, 0.8)",
            }}
          >
            SATURDAY
            <br />
            OCTOBER 10
            <br />
            2026
          </h1>
        </div>
      </div>
    </>
  );
};

export default SingleBannerV1;
