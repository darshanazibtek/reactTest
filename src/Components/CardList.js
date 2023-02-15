import React from "react";
import clock from "../Images/clock.png";
import house from "../Images/house.png";
import shakehand from "../Images/shake-hand.png";
import shield from "../Images/shield.png";

const CardList = () => {
    return (
        <div className="card">
            <div
                style={{
                    backgroundColor: "#610005",
                    alignContent: "center",
                    justifyContent: "center",
                }}
            >
                <div
                    className="row row-columns-2"
                    style={{ justifyContent: "center" }}
                >
                    <div className="col-lg-6 col-sm-12">
                        <img src={clock} style={{ height: "100px" }} />
                        <div style={{ color: "white" }}>
                            {" "}
                            Current Portfolio — $145 Million
                        </div>
                        <div style={{ color: "white" }}>
                            Forward Commitments — $400 Million{" "}
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <img src={house} style={{ height: "100px" }} />
                        <div style={{ color: "white" }}>
                            {" "}
                            Current Portfolio — $145 Million
                        </div>
                        <div style={{ color: "white" }}>
                            Forward Commitments — $400 Million{" "}
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <img src={shakehand} style={{ height: "100px" }} />
                        <div style={{ color: "white" }}>
                            Current Portfolio — $145 Million
                        </div>
                        <div style={{ color: "white" }}>
                            Forward Commitments — $400 Million{" "}
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <img src={shield} style={{ height: "100px" }} />
                        <div style={{ color: "white" }}>
                            {" "}
                            Current Portfolio — $145 Million
                        </div>
                        <div style={{ color: "white" }}>
                            Forward Commitments — $400 Million{" "}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardList;
