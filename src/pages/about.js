import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
    <Layout>
        <Seo title="About" />

        <div className="container">
            <h2>How it works</h2>

            <p>
                When you listen to a Spotify podcast, it will check the database to
                see if anyone has made any submissions for the podcast. If so, the
                segment will automatically get skipped when you reach it.
            </p>

            <div className="text-center">
                <img
                    src="/new_notice.gif"
                    alt="The notice notification"
                    title="The notice you receive (you can disable it)"
                />
            </div>

            <p>
                Once the sponsorship is skipped, you can upvote or downvote this
                segment and it will be recorded in the database.
            </p>

            <p>
                Instead of just sending the top reported segment, it finds all
                of the overlapping segments. Only one segment from each group of
                overlapping segments will be sent to the user.
            </p>

            <h3>Dynamic advertising</h3>

            <p>
                Some podcasts have dynamic ads inserted into their audio
                tracks from services like Acast or Simplecast. These ads
                are different for every user and are not part of the original
                podcast audio. To prevent this from affecting submissions,
                Spot SponsorBlock blocks Spotify from loading external
                audio files which makes it fall back to the original podcast
                audio uploaded by the podcast creator or service. This track
                can still contain ads, but the audio track will stay the same
                for all Spot SponsorBlock users.
            </p>

            <h3>Pseudo-random distribution</h3>

            <p>
                To prevent one submission with a lot of votes never being able
                to be replaced, a weighted random distribution is used
                based on the equation on the right.
                <br />
                <img
                    className="pull-right"
                    src="/sqrtFunction.png"
                    alt="Square root function"
                />
                This formula makes the first few votes matter a lot more than
                votes on a submission that already has a lot of votes. This
                gives newly submitted segments a better chance of being sent out
                to users to get votes. So, most users will get the best
                submission, but some users will get lesser votes submissions so
                that they can either be upvoted or downvoted. Submissions with
                less than -1 votes are ignored entirely.
            </p>

            <p>
                This algorithm was created by <a href="https://github.com/ajayyy">Ajay</a>. You can read more about it{" "}
                <a href="https://blog.ajay.app/voting-and-pseudo-randomness-or-sponsorblock-or-youtube-sponsorship-segment-blocker">
                    here
                </a>
                .
            </p>

            <h3>Submissions</h3>

            <p>
                Anyone can submit segments, either by clicking on the button
                that is added to the Spotify player or by opening the extensions
                popup. The button in the Spotify player can be hidden. You click
                once to indicate the start of a segment, then click again to
                indicate the end. You can submit as many segments as there are
                in the podcast. Make sure to choose the correct category for each
                segment.
            </p>

            <h3>What data is stored?</h3>

            <p>
                The bare minimum. Check{" "}
                <a href="https://gist.github.com/ajayyy/aa9f8ded2b573d4f73a3ffa0ef74f796">
                    this list
                </a>{" "}
                for more information
            </p>

            <h3>Previous projects like this</h3>

            <p>
                This project is forked from <a href="https://github.com/ajayyy/SponsorBlock">SponsorBlock</a>, 
                which does the same thing but for YouTube. A lot of our code
                and infrastructure is reused from that project.
            </p>

            <p>
                Spot SponsorBlock uses the same server as the original SponsorBlock 
                and is hosted by <a href="https://github.com/ajayyy">Ajay</a>. 
                The database can be downloaded by anyone and will always be available{" "}
                <a href="https://api.sponsor.ajay.app/database">here</a>. It is
                a csv and can be opened in any csv or text reading program.
                Certain sensitive info is not in this database and is not public
                such as individual votes (not vote counts) and hashed IP
                addresses. That information isn't needed by anyone else, only
                the server.
            </p>

            <h3>When was this started</h3>

            <p>
                The project originally started as a school project September
                2nd 2025. When our school project extension was done we forked
                SponsorBlock and utilised our previous code and knowledge 
                to make Spot SponsorBlock which started 29th September 2025.
                It was first released to the public on ??th ??? 2025.
            </p>

            <h2>Contact Info</h2>

            <p>If you have any suggestions, feel free to tell us.</p>

            <p>
                You can contact us by email at dev @ spotsponsorblock.org if you have any
                questions.
            </p>

            <p>
                Feel free to join this Discord:{" "}
                <a href="https://discord.gg/SponsorBlock">
                    https://discord.gg/SponsorBlock
                </a>
            </p>

            <h4>Credit</h4>

            <p>
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
            
            <p>
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

            <p>
                Logo by <a href="https://github.com/munadikieh">@munadikieh</a> and modified by <a href="https://github.com/jiraph">@jiraph</a>
            </p>

            <p>
                Some icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> and are licensed by <a href="https://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
            </p>

            <p>
                Some icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> and are licensed by <a href="https://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
            </p>

            <p>
                Some icons made by <a href="https://dazzleui.gumroad.com/l/dazzleiconsfree/" title="Dazzle Ui">Dazzle Ui</a> from <a href="https://www.svgrepo.com/" target="SVG Repo">SVG Repo</a> and are licensed by <a href="https://creativecommons.org/licenses/by/4.0/" title="Creative Commons BY 4.0" target="_blank">CC 4.0 BY</a>
            </p>
        </div>
    </Layout>
);

export default IndexPage;
