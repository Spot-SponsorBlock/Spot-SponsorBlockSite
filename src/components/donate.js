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
                    ,{" "}
                    <a href="https://www.patreon.com/SpotSponsorBlock">Patreon</a>
                    ,{" "}
                    <a href="https://liberapay.com/Spot-SponsorBlock">Liberapay</a>
                </p>

                <p>
                    One-time donation:{" "}
                    <a href="https://github.com/sponsors/Spot-SponsorBlock?frequency=one-time">
                        GitHub (lowest fees)
                    </a>
                    ,{" "}
                    <a style={{ textDecoration: "underline" }} onClick={() => {
                        alert("BIC: SWEDSESS\nIBAN: SE12 8000 0810 5984 4216 3526");
                    }}>SEPA</a>,{" "}
                    <a href="bitcoin:bc1qssr38067xsfdgd0utucjp9j8v86fakkdw4ppzfjz9zgtlqm45ujse5ht30">
                        BTC
                    </a>,{" "}
                    <a href="monero:44X5tzro79g2v97j43HAPWRVBS7o8w8uXRwrWvA9CmiGZyQChHiJySS558aWye3GNERAt8qA5CWu98qbtvHbSXg12rh4rqt">
                        XMR
                    </a>
                </p>
            </span>
        </>
    )
}