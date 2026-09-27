import React from 'react';
import SocialShare from '../others/SocialShare';
import ReactWOW from 'react-wow';
import { toast } from 'react-toastify';
import { NavHashLink as Link } from "react-router-hash-link";
import ClientV1 from '../client/ClientV1';
import PriceV1 from '../price/PriceV3';
import PriceV2 from '../price/PriceV2';
import Dropdown from "react-bootstrap/Dropdown";
import AnimatedBg from "react-animated-bg";
import SurpriseSanta from 'surprise-santa';
import ComingSoon2 from '../ComingSoon2';

const BuyTicketContent = () => {

    const handlePurchase = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Purchase Request Submitted!")
    }

    return (
      <>
        <section className="buy-ticket" style={{ backgroundColor: "#dedede" }}>
          <div className="auto-container">
            <div className="image-box">
              <figure className="image wow fadeIn">
                <img
                  src="/images/resource/pig1024.png"
                  alt="NC BBQ Hall of Fame"
                />
              </figure>
            </div>

            <div
              style={{
                textAlign: "center",
                margin: "30px auto",
                padding: "0 15px",
              }}
            >
              <img
                src="/images/bbq2026.jpg"
                alt="Coming Soon"
                style={{
                  width: "100%",
                  maxWidth: "900px",
                  height: "auto",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </div>
            <p
              style={{
                color: "#333",
                fontSize: "24px",
                fontWeight: "bold",
                lineHeight: "1.7",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              Proceeds from this event help support ALCOVETS
            </p>
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

          {/* <div><PriceV2/></div> */}

          <ClientV1 />
        </section>
      </>
    );
};

export default BuyTicketContent;
