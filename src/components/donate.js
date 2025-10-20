import React from "react";

import "./donate.scss";

export function DonateComponent() {
    const [activeButton, setActiveButton] = React.useState(null);
    const [showOtherDonationMethods, setShowOtherDonationMethods] = React.useState(false);

    return (
        <>
            <div className="donate-modal">
                <div>
                    <a className={activeButton === 1 ? "active" : ""} onClick={() => setActiveButton(1)}>
                        $1
                    </a>

                    <a className={activeButton === 5 ? "active" : ""} onClick={() => setActiveButton(5)}>
                        $5
                    </a>

                    <a className={activeButton === 15 ? "active" : ""} onClick={() => setActiveButton(15)}>
                        $15
                    </a>

                    <a className={activeButton === "other" ? "active" : ""} onClick={() => setActiveButton("other")}>
                        Custom
                    </a>
                </div>

                <div style={{ visibility: activeButton === null ? "hidden" : "visible" }}>
                    <a href="https://github.com/sponsors/Spot-SponsorBlock?frequency=one-time" target="_blank" rel="noopener noreferrer">
                        One-time
                    </a>

                    <a href="https://github.com/sponsors/Spot-SponsorBlock?frequency=recurring" target="_blank" rel="noopener noreferrer">
                        Monthly
                    </a>

                    <a className={showOtherDonationMethods ? "active" : ""}
                        onClick={() => setShowOtherDonationMethods(!showOtherDonationMethods)}>
                        Other ways to donate
                    </a>
                </div>
            </div>

            <span style={{ display: !showOtherDonationMethods ? "none" : null, textAlign: "center" }}>
                <p>
                    Recurring:{" "}
                    <a href="https://github.com/sponsors/Spot-SponsorBlock">
                        GitHub (lowest fees)
                    </a>
                </p>

                <p>
                    One-time donation:{" "}
                    <a href="https://github.com/sponsors/Spot-SponsorBlock?frequency=one-time">
                        GitHub (lowest fees)
                    </a>
                </p>
            </span>
        </>
    )
}