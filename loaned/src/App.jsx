import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import Walletbutton from "./components/walletConnect";

import * as React from "react";
export default function App() {
  return (
    <>
      <div className="columns">
        <div className="landing">
          <header className="header">
            <picture>
              <source
                srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F636434d8296044d388768d4b8581a5b1?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F636434d8296044d388768d4b8581a5b1?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F636434d8296044d388768d4b8581a5b1?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F636434d8296044d388768d4b8581a5b1?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F636434d8296044d388768d4b8581a5b1?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F636434d8296044d388768d4b8581a5b1?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F636434d8296044d388768d4b8581a5b1?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F636434d8296044d388768d4b8581a5b1"
                type="image/webp"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F636434d8296044d388768d4b8581a5b1"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F636434d8296044d388768d4b8581a5b1?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F636434d8296044d388768d4b8581a5b1?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F636434d8296044d388768d4b8581a5b1?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F636434d8296044d388768d4b8581a5b1?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F636434d8296044d388768d4b8581a5b1?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F636434d8296044d388768d4b8581a5b1?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F636434d8296044d388768d4b8581a5b1?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F636434d8296044d388768d4b8581a5b1"
                className="image"
                alt="logo"
              />
            </picture>
            <div className="builder-image-sizer image-sizer" />
          </header>
          <div className="logo">Loaned</div>
        </div>
        <div className="body">
          <div className="runner">
            <picture>
              <source
                srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F64bf4e740cdd4ee999fe28b1739d59ca?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F64bf4e740cdd4ee999fe28b1739d59ca?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F64bf4e740cdd4ee999fe28b1739d59ca?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F64bf4e740cdd4ee999fe28b1739d59ca?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F64bf4e740cdd4ee999fe28b1739d59ca?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F64bf4e740cdd4ee999fe28b1739d59ca?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F64bf4e740cdd4ee999fe28b1739d59ca?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F64bf4e740cdd4ee999fe28b1739d59ca"
                type="image/webp"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F64bf4e740cdd4ee999fe28b1739d59ca"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F64bf4e740cdd4ee999fe28b1739d59ca?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F64bf4e740cdd4ee999fe28b1739d59ca?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F64bf4e740cdd4ee999fe28b1739d59ca?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F64bf4e740cdd4ee999fe28b1739d59ca?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F64bf4e740cdd4ee999fe28b1739d59ca?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F64bf4e740cdd4ee999fe28b1739d59ca?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F64bf4e740cdd4ee999fe28b1739d59ca?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F64bf4e740cdd4ee999fe28b1739d59ca"
                className="image"
                alt="logo"
              />
            </picture>
            <div className="builder-image-sizer image-sizer-2" />
          </div>
          <div className="uncollateralized-loan-in-just">
            <p>Uncollateralized loan in just a minute</p>
          </div>
          <div className="button-container">
            <button>Log in LENS / Metamask / Wallet connect</button>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  );
}
