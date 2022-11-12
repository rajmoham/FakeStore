import React from "react";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";
import Hightlights from "../components/Highlights";
import Landing from "../components/Landing";
import MostLiked from "../components/MostLiked";

function Home(){
    return (
        <>
            <Landing/>
            <Hightlights/>
            <MostLiked/>
            <Discounted/>
            <Explore/>
        </>
    )
}

export default Home