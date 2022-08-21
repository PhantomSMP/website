// hi :3 - from yourfriend
// copy IP functionality
function copyIP(t) {
    if (t.innerText.includes("copied")) return;

    t.innerText = "phantomsmp.fun (copied!)";

    navigator.clipboard.writeText("phantomsmp.fun");

    setTimeout(() => {
        t.innerText = "phantomsmp.fun (copy)";
    }, 6969);
}

// this is shitcode yes i know uwu
const doc = new DOMParser().parseFromString(
    (
        await (
            await fetch(
                `https://api.allorigins.win/get?url=https%3A%2F%2Fshop.phantomsmp.fun`
            )
        ) // change to own api eventually (this is not healthy)
            .json()
    ).contents,
    "text/html"
);

// top donator
{
    const td = document.getElementById("topDonator");

    const topDonatorHTML = doc.getElementsByClassName("top-donator")[0];

    const topDonator = {
        uuid: topDonatorHTML.firstElementChild.firstElementChild.src
            .split("renders/body/")
            .at(-1),
        name: topDonatorHTML.children[1].firstElementChild.innerText,
        amountDonated:
            topDonatorHTML.children[1].children[1].firstElementChild.innerText,
    };

    const topDonatorIMG = document.createElement("img");
    const topDonatorH3 = document.createElement("h3");

    topDonatorH3.innerText = `${topDonator.name}  (${topDonator.amountDonated}$)`;
    topDonatorIMG.title = topDonator.name;
    topDonatorIMG.src = `https://crafatar.com/avatars/${topDonator.uuid}?size=64`;

    td.appendChild(topDonatorIMG);
    td.appendChild(topDonatorH3);
}

// recent payments
{
    const rc = document.getElementById("recentDonations");

    const recentDonations = [
        ...doc.getElementsByClassName("recent-payments")[0].children,
    ].map((x) => {
        return {
            name: x.children[1].firstElementChild.firstElementChild.innerText,
            image: x.firstElementChild.firstElementChild.src,
        };
    });
    recentDonations.forEach((donation) => {
        const recentDonationIMG = document.createElement("img");
        const recentDonationH3 = document.createElement("h3");

        recentDonationH3.innerText = `${donation.name}`;
        recentDonationIMG.title = donation.name;
        recentDonationIMG.src = donation.image;

        rc.appendChild(recentDonationIMG);
        rc.appendChild(recentDonationH3);
    });
}
