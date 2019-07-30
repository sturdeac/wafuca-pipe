import React, { Component } from "react";
import {
  vbanim,
  fireItUp,
  monster,
  titWrap,
  titWrapText,
  stainless,
  stainlessText
} from "../img/index.js";

class Content extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="container my-5 p-5" id="hd2">
            <div className="row align-items-center my-5">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img
                    className="img-fluid"
                    src={vbanim}
                    alt="hood dump fire ball"
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h4 className="display-4">
                    <img
                      src={fireItUp}
                      className="img-fluid"
                      alt="Fire it up!"
                    />
                  </h4>
                  <p>
                    Let the competition know you mean business. Show them your
                    ride is bult not bought with fire! Designed and built for
                    tuned 1.8T MK4 Volkswagens, the HD2 downpipe and hood dump
                    is controlled with a 12v toggle switch installed in the
                    cockpit.
                  </p>
                  <p>
                    Simply open the exhaust gate and and let it rip! Stage 3
                    projects see the best visual and audio results with large
                    flames and
                    <img src={monster} className="img-fluid" alt="monster" />
                    sized BANGS!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="p-5">
                  <img
                    className="img-fluid rounded-circle"
                    src={titWrap}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="p-5">
                  <h2 className="display-4">
                    <img
                      src={titWrapText}
                      className="img-fluid"
                      alt="Titanium Wrapped"
                    />
                  </h2>
                  <p>
                    The up-pipe to the hood exit is fully protected by titanium
                    and fiberglass hood wrap. Protecting wiring and other
                    flamable materials under your hood from destruction.
                    Relocation of an evap hose and sensor deletes such as the
                    n249 will be necassary to complete installation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 order-lg-2">
                <div className="p-5">
                  <img
                    className="img-fluid rounded-circle"
                    src={stainless}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-7 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4">
                    <img
                      src={stainlessText}
                      className="img-fluid"
                      alt="Stainless Steel"
                    />
                  </h2>
                  <ul>
                    <li>
                      Made in the USA! Manufactured in Terre Haute, Indiana
                    </li>
                    <li>
                      Made of High Quality T-304 Stainless Steel with
                      Computerized Mandrel-Bends
                    </li>
                    <li>Pipe Diameter: 3"</li>
                    <li>Mandrel Bent Piping with TUG welded CNC flanges</li>
                    <li>
                      Gives instant horsepower by removing restrictive stock
                      downpipe. Gives gains of 10-15hp
                    </li>
                    <li>
                      Fitment: 99-05 Volkswagen Jetta/Bora 1.8T, 99-05
                      Volkswagen New Bettle 1.8T, 99-05 Volkswagen Golf MK4 1.8T
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Content;
