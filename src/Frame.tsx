import React, { useEffect, useState } from "react";
import "./invalid"
import invalidXkcds from "./invalid";


// gets a random number of an xkcd comic
function randomXkcd(): number {
    const comicCount: number = 2705;

    let id: number = 0;
    while (id == 0 || invalidXkcds.indexOf(id) != -1) {
        id = Math.floor(Math.random() * comicCount) + 1;
    }

    return id;
}

function Frame(props: { timeout: number; }) {
    const [id, setId] = useState(randomXkcd())

    useEffect(() => {
        const interval = setInterval(() => {
            setId(randomXkcd());
        }, props.timeout)

    }, []);

    return <iframe src={`https://xkcd.com/${id}`} />
}

export default Frame;
