module.exports = {
    siteMetadata: {
        title: "Spot SponsorBlock",
        description:
            "Spot SponsorBlock is a crowdsourced browser extension to skip sponsor segments in Spotify podcasts.",
        author: "Spot SponsorBlock Team",
        icon: "https://spotsponsorblock.org/LogoSponsorBlockSimple256px.png",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Spot SponsorBlock",
                short_name: "SponsorBlock",
                start_url: "/",
                background_color: "#fff",
                theme_color: "#fff",
                icon: "static/LogoSponsorBlockSimple256px.png",
            },
        },
        "gatsby-plugin-sass",
    ],
};
