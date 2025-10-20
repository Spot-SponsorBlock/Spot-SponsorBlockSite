/**
 * Layout of the main website.
 */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import "normalize.css/normalize.css";
import "./layout.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Layout = ({ children }) => {
    return (
        <>
            <div
                style={{
                    backgroundColor: "#262626",
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px #1c1c1c solid",
                }}
            >
                <ul className="nav">
                    <li>
                        <Link
                            to="/"
                            className="nav-link"
                            style={{ padding: "0.7rem 1.5rem" }}
                        >
                            <img
                                src="/LogoSponsorBlockSimple256px.png"
                                alt="Home"
                                style={{
                                    height: "2.1rem",
                                    verticalAlign: "middle",
                                }}
                            />
                        </Link>
                    </li>

                    <li>
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </li>

                    <li>
                        <a
                            href="https://wiki.sponsor.ajay.app/w/Guidelines"
                            className="nav-link"
                        >
                            Guidelines
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://wiki.sponsor.ajay.app/w/API_Docs"
                            className="nav-link"
                        >
                            API
                        </a>
                    </li>

                    <li>
                        <Link to="/donate" className="nav-link">
                            Donate
                        </Link>
                    </li>
                </ul>

                <ul className="nav">
                    <li className="author">
                        <a
                            href="https://github.com/orgs/Spot-SponsorBlock/people"
                            className="nav-link text-small profile"
                        >
                            Created by The Spot SponsorBlock Team
                            <img
                                src="/RectangleIconSponsorBlocker.png"
                                alt="Organization logo"
                            ></img>
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://discord.gg/SponsorBlock"
                            className="nav-link"
                            title="Discord Invite"
                        >
                            <i className="fa-brands fa-discord"></i>
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://github.com/Spot-SponsorBlock/Spot-SponsorBlock-Extension"
                            className="nav-link"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <main>{children}</main>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
