import React from 'react';
import './Results.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import WarningImage from '../../assets/WarningImage.png';
import OkImage from '../../assets/OkImage.png';
import { useLocation, useNavigate } from 'react-router-dom';



export const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();


  const handleSelect = () => {

  navigate('/', { replace: true });

  };
  
  return (
    <div className="container">

        <div className="content">

          <div className="results_container">
              <div className="results_image">
                  {location.state.data === "benign" ? (
                    <img src={OkImage} alt="Result" className="the_image" />
                  ) : location.state.data === "malignant" ? (
                    <img src={WarningImage} alt="Result" className="the_image" />
                  ) : (
                    <img src={WarningImage} alt="Result" className="the_image" />
                  )}
              </div>
              <div className="results_caption">
                  <p className="the_caption" style={{ fontWeight: "bold" }}>
                      {location.state.data === "benign"
                      ? "Cool!! This Person Have Benign Skin Cancer, that a check!!"
                      : location.state.data === "malignant"
                      ? "Oops!! This Person Have Malignant Skin Cancer, that's bad!!"
                      : "Oops!! This is not even a skin photo, better select a skin photo!!"
                      }
                  </p>
              </div>
          </div>

          <Button variant="outline-primary" className="custom_button" onClick={handleSelect}>
                Try Again
          </Button>

            <div className="d-grid gap-2">

            </div>

        </div>

    </div>
  );
};
