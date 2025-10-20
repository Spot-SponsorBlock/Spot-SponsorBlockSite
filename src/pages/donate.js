import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { DonateComponent } from "../components/donate";

const IndexPage = () => (
    <Layout>
        <Seo title="Donate" />

        <div className="container">
            <h1>Donate</h1>

            <p>
                Hi there 👋! We are Spot SponsorBlock, 
                an organization dedicated to developing our{" "}
                <a href="https://github.com/Spot-SponsorBlock/Spot-SponsorBlock-Extension">
                open-source web extension
                </a>{" "}
                with the same name.
            </p>

            <p>
                Consider supporting our development using an option below so that we can keep working on maintaining and improving the extension.❤️
            </p>

            <DonateComponent />

            <hr noshade />

            <h4>Creators</h4>

            <p>
                Consider helping out the creators of podcasts you listen to by
                subscribing to them on services such as Patreon, or by any other
                means supporting them so that they can continue their mission of 
                keeping you entertained.
            </p>

            <h4>Contributors</h4>

            <p>
                Also check out all the other contributors who have helped out
                with this project;{" "}
                <a href="https://github.com/Spot-SponsorBlock/Spot-SponsorBlock-Extension/graphs/contributors">
                    Spot SponsorBlock contributors
                </a>
                ,{" "}
                <a href="https://github.com/ajayyy/SponsorBlockServer/graphs/contributors">
                    SponsorBlockServer contributors
                </a>{" "}
                and{" "}
                <a href="https://github.com/Spot-SponsorBlock/Spot-SponsorBlockSite/graphs/contributors">
                    Spot SponsorBlockSite contributors
                </a>.
            </p>

            <p>
                Also, all of the <a href="https://leaderboard.sbstats.uk/">segment submitters</a>.
            </p>
        </div>
    </Layout>
);

export default IndexPage;
