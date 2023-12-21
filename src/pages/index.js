import React, { useState, useEffect } from "react";

import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Donate from "../components/donate";

const IndexPage = () => {
    const [totalStats, setTotalStats] = useState({
        apiUsers: "Loading",
        totalSubmissions: "Loading",
        minutesSaved: "Loading",
    });

    const [donateModal, setDonateModal] = useState(null);

    const [linkActive, setLinkActive] = useState(true);
    const chromeLink = "https://chrome.google.com/webstore/detail/mnjggcdmjocbbbhaepdhchncahnbgone";
    const firefoxLink = "https://addons.mozilla.org/addon/sponsorblock";

    useEffect(() => {
        fetch("https://sponsor.ajay.app/api/getTotalStats")
            .then((response) => response.json())
            .then((resultData) => resultData.apiUsers !== undefined ? setTotalStats(resultData) : null);
    }, []);

    return (
        <Layout>
            <Seo
                title="Home"
                overwriteTitle="SponsorBlock - Skip over YouTube Sponsors - Sponsorship Skipper"
            />

            <div className="title">
                <img src="/LogoSponsorBlock256px.png" alt="Logo" />

                <span style={{ color: "white" }}>SponsorBlock</span>
            </div>
            
            {donateModal}

            <div className="container">
                <div className="">
                    <p>
                        SponsorBlock is an open-source crowdsourced browser
                        extension and open API for skipping sponsor segments in
                        YouTube videos. Users submit when a sponsor happens from
                        the extension, and the extension automatically skips
                        sponsors it knows about using a{" "}
                        <a href="https://github.com/ajayyy/SponsorBlock/wiki/K-Anonymity">
                            privacy preserving query system
                        </a>
                        . It also supports skipping other categories, such as
                        intros, outros and reminders to subscribe, and skipping
                        to the point with highlight.
                    </p>

                    <p>
                        Check{" "}
                        <a href="https://status.sponsor.ajay.app">
                            status.sponsor.ajay.app
                        </a>{" "}
                        for server status.
                    </p>

                    <p>
                        There are currently{" "}
                        <strong>{totalStats.apiUsers.toLocaleString()}</strong>{" "}
                        users who have submitted{" "}
                        <strong>
                            {totalStats.totalSubmissions.toLocaleString()}
                        </strong>{" "}
                        skip segments, which have saved a total of{" "}
                        <strong>
                            {isNaN(totalStats.minutesSaved)
                                ? totalStats.minutesSaved
                                : Math.floor(
                                      totalStats.minutesSaved / 60 / 24 / 365
                                  )}
                        </strong>{" "}
                        years and{" "}
                        <strong>
                            {isNaN(totalStats.minutesSaved)
                                ? totalStats.minutesSaved
                                : (
                                      (totalStats.minutesSaved / 60 / 24) %
                                      365
                                  ).toFixed(2)}
                        </strong>{" "}
                        days of people's lives. Check out{" "}
                        <Link to="/stats">the leaderboard</Link>.
                    </p>

                    <a style={{display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textDecoration: "none"
                        }}
                        href="https://dearrow.ajay.app"
                        target="_blank"
                        rel="noreferrer">
                        <img src="dearrow.svg"
                            style={{width: "35px", padding: "10px"}}/>

                        <span>
                            Tired of clickbait? Also check out DeArrow
                        </span>
                    </a>

                    <div className="text-center">
                        <h2>Download</h2>

                        <a href={linkActive ? chromeLink : null}
                            //onMouseDown={(e) => e.button === 0 && setLinkActive(false)}
                            //onClick={(e) => clickLink(chromeLink, setDonateModal, () => setLinkActive(true))}
                        >
                            <img
                                src="/ChromeWebStore_BadgeWBorder_v2_206x58.png"
                                alt="Download for Chrome"
                            />
                        </a>

                        <a href={linkActive ? firefoxLink : null}
                            //onMouseDown={(e) => e.button === 0 && setLinkActive(false)}
                            //onClick={() => clickLink(firefoxLink, setDonateModal, () => setLinkActive(true))}
                            style={{ paddingLeft: "15px" }}
                        >
                            <img
                                src="/AMO-button_1.png"
                                alt="Download for Firefox"
                            />
                        </a>

                        <a
                            href="https://github.com/ajayyy/SponsorBlock/wiki/Edge"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img
                                src="/edge.png"
                                alt="Download for Edge"
                                style={{ height: "58px" }}
                            />
                        </a>

                        <a
                            href="https://github.com/ajayyy/SponsorBlock/wiki/Safari"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img
                                src="/safari.svg"
                                alt="Download for Safari"
                                style={{ height: "58px" }}
                            />
                        </a>

                        <a
                            href={chromeLink}
                            style={{ paddingLeft: "15px" }}
                        >
                            <img src="/opera.png" alt="Download for Opera" />
                        </a>

                        <a
                            href="https://github.com/ajayyy/SponsorBlock/wiki/Android"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img
                                src="/android.png"
                                alt="Download for Android"
                                style={{ height: "58px" }}
                            />
                        </a>

                        <a
                            href="https://github.com/ajayyy/SponsorBlock/wiki/iOS"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img
                                src="/IOS_logo.png"
                                alt="Download for iOS"
                                style={{ height: "58px" }}
                            />
                        </a>

                        <h3>3rd Party Ports</h3>

                        <a
                            href="https://github.com/ajayyy/SponsorBlock/wiki/3rd-Party-Ports#mpv-media-player"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img src="/mpv.png" alt="Download for MPV" />
                        </a>

                        <a
                            href="https://github.com/ajayyy/SponsorBlock/wiki/3rd-Party-Ports#kodi"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img
                                src="/kodi.svg"
                                alt="Download for Kodi"
                                style={{ height: "30px" }}
                            />
                        </a>

                        <a
                            href="https://github.com/dmunozv04/iSponsorBlockTV#compatibility"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img
                                src="/tv.png"
                                alt="Download for TVs"
                                style={{ height: "30px" }}
                            />
                        </a>

                        <a
                            href="https://github.com/ajayyy/SponsorBlock/wiki/3rd-Party-Ports#android-tv"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img
                                src="/androidtv.png"
                                alt="Download for Android TV"
                                style={{ height: "30px" }}
                            />
                        </a>

                        <a
                            href="https://github.com/ajayyy/SponsorBlock/wiki/3rd-Party-Ports#Chromecast"
                            style={{ paddingLeft: "15px" }}
                        >
                            <img
                                src="/chromecast.svg"
                                alt="Download for Chromecast"
                                style={{ height: "30px" }}
                            />
                        </a>
                    </div>

                    <p>
                        The{" "}
                        <a href="https://github.com/ajayyy/SponsorBlock">
                            source code
                        </a>{" "}
                        is fully open and the{" "}
                        <a href="https://sponsor.ajay.app/database">database</a>{" "}
                        can be downloaded by anyone. I want to keep this as open
                        as possible! You can view the docs for the{" "}
                        <a href="https://wiki.sponsor.ajay.app/w/API_Docs">
                            public API
                        </a>{" "}
                        or{" "}
                        <a href="https://github.com/mchangrh/sb-mirror">
                            host a mirror
                        </a>
                        .
                    </p>

                    <p className="text-center">
                        Check out <Link to="/about">how it works</Link>.
                    </p>

                    <p className="text-center">
                        Come chat with us on{" "}
                        <a href="https://discord.gg/SponsorBlock">Discord</a> or{" "}
                        <a href="https://matrix.to/#/#sponsor:ajay.app?via=ajay.app&via=matrix.org&via=mozilla.org">
                            Matrix
                        </a>
                        .
                    </p>

                    <p style={{ fontSize: "0.7em", textAlign: "center" }}>
                        SponsorBlock works best alongside YouTube Premium and
                        uBlock Origin.
                    </p>

                    <h4 className="text-center">Credit</h4>

                    <p className="text-center">
                        Built and maintained by{" "}
                        <a href="https://ajay.app/">Ajay Ramachandran</a>
                    </p>

                    <p className="text-center">
                        Website rewritten by{" "}
                        <a href="https://github.com/jplsek">Jeremy Plsek</a>
                    </p>

                    <p>
                        Thanks to all{" "}
                        <a href="https://github.com/ajayyy/SponsorBlock/graphs/contributors">
                            SponsorBlock contributors
                        </a>
                        ,{" "}
                        <a href="https://github.com/ajayyy/SponsorBlockServer/graphs/contributors">
                            SponsorBlockServer contributors
                        </a>{" "}
                        and{" "}
                        <a href="https://github.com/ajayyy/SponsorBlockSite/graphs/contributors">
                            SponsorBlockSite contributors
                        </a>{" "}
                        such as <a href="https://github.com/NDevTK">NDev</a>,{" "}
                        <a href="https://github.com/Joe-Dowd">Joe Dowd</a>,{" "}
                        <a href="https://mchang.name/">Michael Chang</a> and
                        more.
                    </p>

                    <p className="text-center">
                        Logo by{" "}
                        <a href="https://github.com/munadikieh">@munadikieh</a>
                    </p>

                    <p className="text-center">
                        <a href="https://gist.github.com/ajayyy/aa9f8ded2b573d4f73a3ffa0ef74f796">
                            Privacy Policy (Human Readable)
                        </a>
                        {", "}
                        <a href="https://gist.github.com/ajayyy/9e8100f069348e0bc062641f34d6af12">
                            Terms of Use
                        </a>
                        {", "}
                        <a href="donate">Donate</a>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

function getDonateModal(link, clear) {
    return <Donate downloadLink={link} clear={clear} />;
}

function clickLink(link, set, clear) {
    if (window.localStorage.getItem("donateModalOpened") !== "true") {
        window.localStorage.setItem("donateModalOpened", "true");
        set(getDonateModal(link, () => {
            set(null);
            if (clear) clear();
        }));
    } else {
        window.location.href = link;
        
        // To prevent double link opens
        if (clear) setTimeout(() => clear(), 50);
    }
}

export default IndexPage;
