//import logo from "./logo.svg";
//import runner from "./runner.svg";
import { useState, useEffect } from "react";
import "./App.css";
import FadeIn from "./FadeIn";
import Walletbutton from "./components/walletConnect";
import * as React from "react";
import SuccessModal from "./components/successModal";
import Success from "./pages/success";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function App() {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <div className="borrowPage">
        <FadeIn>
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
              <SuccessModal />
            </div>
          </div>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Borrow" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Repay" icon={<FavoriteIcon />} />
          </BottomNavigation>
        </FadeIn>
      </div>
    </>
  );
}
