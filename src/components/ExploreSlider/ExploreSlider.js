import React from 'react'
import './ExploreSlider.css'

const ExploreSlider = () => {
     return (
          <div className="headersBgColorExplore container-fluid">
              <div className="row py-5 align-items-center justify-content-around text-white">
                <div className="col-md-5">
                  <h5 className="getAnExtra">GET AN EXTRA 20% OFF YOUR FIRST ORDER</h5>
                  <h1 className="fw-bold mb-4 mt-4 comfortableCar">Explore your car and buy the one you like</h1>
                  <p className="honda-cbr-detail mb-3 getAnExtra">Honda Car is currently the best of all car with a very good quality service. So buy without delay. This Car has a lot of features and let's buy it in our stock much less quickly.</p>

                    <button type="button" className="btn btn-danger px-5 mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Purchase
                    </button>

                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title text-dark fw-bolder" id="exampleModalLabel">Do you want to buy</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <p className="text-dark">If you want to buy, click on Buy Now.
                            It has been sold in Thai market starting from 2002 and have been 
                            exported to many Asian countries and South Africa.</p>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Not Now</button>
                          <button type="button" className="btn btn-primary"> Yes! Click </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 mt-lg-0 mt-md-0 mt-5">
                  <img src="https://i.ibb.co/RDHMsfC/card-Img-4.png" className="img-fluid" alt="Car Image"/>
                </div>
              </div>
          </div>
     )
}

export default ExploreSlider;
