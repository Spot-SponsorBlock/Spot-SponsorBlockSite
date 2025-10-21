import React, { useState, useEffect } from "react";

import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
    const chromeLink = "";
    const firefoxLink = "";

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

                        <a href={chromeLink}
                        >
                            <img
                                src="/ChromeWebStore_BadgeWBorder_v2_206x58.png"
                                alt="Download for Chrome"
                            />
                        </a>

                        <a href={firefoxLink}
                            style={{ paddingLeft: "15px" }}
                        >
                            <img
                                src="/AMO-button_1.png"
                                alt="Download for Firefox"
                            />
                        </a>
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
                        Spot SponsorBlock works best alongside Spotify Premium and
                        uBlock Origin.
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
                        <a href="https://gist.github.com/ajayyy/aa9f8ded2b573d4f73a3ffa0ef74f796">
                            Privacy Policy (Human Readable)
                        </a>
                        {", "}
                        <a href="https://gist.github.com/ajayyy/9e8100f069348e0bc062641f34d6af12">
                            Terms of Use
                        </a>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
