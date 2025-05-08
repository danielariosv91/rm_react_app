
import { Divider, Typography } from "../libraries/MUI"

import CharacterCard from "./../components/CharacterCard"

function Index() {
    return (
        <>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://external-preview.redd.it/OChPW2Qg4Y0suZQAosIrXwm5t91SZIILbXSU9-g0QME.png?width=1080&crop=smart&auto=webp&s=013e00d4cd5c8722950528e2a30b3923dbc460ed)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold">This project is a fun and interactive built with <strong>React</strong></h1>
                        <p className="mb-5">
                            It uses the public <a href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer">Rick and Morty API</a> to display detailed information about characters, locations, and episodes from the series.
                        </p>
                        <button className="btn btn-success">Explore</button>
                    </div>
                </div>
            </div>

            <div className="flex justify-around m-6 ">
                <article class="prose">
                    <h1> Characters</h1>
                </article>
            </div>
            <CharacterCard />
        </>
    )
}

export default Index