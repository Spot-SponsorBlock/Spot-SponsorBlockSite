import React, { useState, useEffect } from "react";

import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
    const chromeLink = "https://chromewebstore.google.com/detail/apoddhkbbnbfkhpjhpfdjachfifbedbk";
    const firefoxLink = "https://addons.mozilla.org/addon/spot-sponsorblock/?src=external-github";
    const edgeLink = "https://microsoftedge.microsoft.com/addons/detail/sponsorblock-for-spotify-/fekacklpnbdokmiljhjbmaclgpdegpcd";
    const operaLink = "";

    return (
        <Layout>
            <Seo
                title="Home"
                overwriteTitle="Spot SponsorBlock - Skip over Spotify Podcast Sponsors - Sponsorship Skipper"
            />

            <div className="title">
                <img src="/LogoSponsorBlock256px.png" alt="Logo" />

                <span style={{ color: "white" }}>Spot SponsorBlock</span>
            </div>
            
            <div className="container">
                <div className="">
                    <p>
                        Spot SponsorBlock is an open-source crowdsourced browser
                        extension which utilises the{" "}
                        <a href="https://wiki.sponsor.ajay.app/w/API_Docs">
                            SponsorBlock API
                        </a>{" "}
                        for skipping sponsor segments in
                        Spotify podcasts. Users submit when a sponsor happens from
                        the extension, and the extension automatically skips
                        sponsors it knows about using a{" "}
                        <a href="https://github.com/ajayyy/SponsorBlock/wiki/K-Anonymity">
                            privacy preserving query system
                        </a>
                        . It also supports skipping other categories, such as
                        intros, outros and self promotions, and skipping
                        to the point with highlight.
                    </p>

                    <p>
                        Check{" "}
                        <a href="https://status.sponsor.ajay.app">
                            status.sponsor.ajay.app
                        </a>{" "}
                        for server status.
                    </p>

                    <a style={{display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textDecoration: "none"
                        }}
                        href="https://sponsor.ajay.app/"
                        target="_blank"
                        rel="noreferrer">
                        <img src="LogoYoutubeSponsorBlock256px.png"
                            style={{width: "35px", padding: "10px"}}/>

                        <span>
                            Also check out SponsorBlock for Youtube
                        </span>
                    </a>

                    <div className="text-center">
                        <h2>Download</h2>
                        
                        <div className="extension-icon">
                        <a href={chromeLink}
                        >
                            <img
                                src="/ChromeWebStore_BadgeWBorder_v2_206x58.png"
                                alt="Download for Chrome"
                            />
                        </a>

                        <a href={firefoxLink}
                        >
                            <img
                                src="/AMO-button_1.png"
                                alt="Download for Firefox"
                            />
                        </a>

                        <a href={edgeLink}
                        >
                            <img
                                src="/English_Get it from Microsoft Edge.png"
                                alt="Download for Edge"
                                style={{ height: "58px" }}
                            />
                        </a>

                        <a href={operaLink}
                        >
                            <img
                                src="/Opera_206x58_en@2x.png"
                                alt="Download for Opera"
                                style={{ height: "58px" }}
                            />
                        </a>

                        <a
                            href=""
                        >
                            <img
                                src="/android.png"
                                alt="Download for Android"
                                style={{ height: "58px" }}
                            />
                        </a>
                        </div>
                    </div>

                    <div className="donate-ask">
                        <div className="donate-text">
                            <img
                                src="/RectangleIconSponsorBlocker.png"
                                alt="Organization logo"
                            ></img>
                            Support our development of Spot SponsorBlock
                        </div>

                        <Link to="/donate" className="donate-button">
                            Donate
                        </Link>
                    </div>

                    <p>
                        The{" "}
                        <a href="https://github.com/Spot-SponsorBlock/Spot-SponsorBlock-Extension">
                            source code
                        </a>{" "}
                        is fully open and the{" "}
                        <a href="https://sponsor.ajay.app/database">database</a>{" "}
                        can be downloaded by anyone. We want to keep this as open
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
                        Check out <Link to="/about">how it works</Link>, and <a href="https://wiki.sponsor.ajay.app/w/Community">all the community tools</a>.
                    </p>

                    <p className="text-center">
                        Come chat with us on{" "}
                        <a href="https://discord.gg/SponsorBlock">Discord</a>
                        .
                    </p>

                    <p style={{ fontSize: "0.7em", textAlign: "center" }}>
                        Spot SponsorBlock works best alongside Spotify Premium.
                    </p>

                    <h4 className="text-center">Credit</h4>

                    <p className="text-center">
                        Site built by{" "}
                        <a href="https://ajay.app/">
                        Ajay Ramachandran
                        </a>.{" "}
                        The original code can be found{" "}
                        <a href="https://github.com/ajayyy/SponsorBlockSite">
                        here
                        </a>{" "}
                        and our forked version{" "}
                        <a href="https://github.com/Spot-SponsorBlock/Spot-SponsorBlockSite">
                        here
                        </a>
                    </p>

                    <p className="text-center">
                        Website rewritten by{" "}
                        <a href="https://github.com/jplsek">Jeremy Plsek</a>
                    </p>

                    <p className="text-center">
                        Extension forked from the amazing{' '}
                        <a href="https://github.com/ajayyy/SponsorBlock">
                        SponsorBlock
                        </a>
                        . A special thanks to{' '}
                        <a href="https://github.com/ajayyy">Ajay</a>{' '}
                        for his help throughout our development
                    </p>

                    <p>
                        Thanks to all{' '}
                        <a href="https://github.com/Spot-SponsorBlock/Spot-SponsorBlock-Extension/graphs/contributors">
                        Spot SponsorBlock contributors
                        </a>{' '}
                        and{' '}
                        <a href="https://github.com/ajayyy/SponsorBlockServer/graphs/contributors">
                        SponsorBlockServer contributors
                        </a>
                    </p>

                    <p className="text-center">
                    Logo by <a href="https://github.com/munadikieh">@munadikieh</a> and modified by <a href="https://github.com/jiraph">@jiraph</a>
                    </p>

                    <p className="text-center">
                        <a href="https://gist.github.com/kreativK/a67137bf0027e12e52ba38d375e1c132">
                            Privacy Policy (Human Readable)
                        </a>
                        {", "}
                        <a href="https://gist.github.com/kreativK/374f3e902cc4fab13120cdddb5367545">
                            Terms of Use
                        </a>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
