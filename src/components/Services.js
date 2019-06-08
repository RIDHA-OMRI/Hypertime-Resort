import React, { Component } from 'react'
import Title from "../components/Title"
import { FaCocktail, FaHiking, FaBeer, FaShuttleVan } from "react-icons/fa"
export default class Services extends Component {
    state = {
        services:
            [
                {
                    icon: <FaCocktail />,
                    title: "Free Cocktails",
                    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ne infantes quidem possin"


                },
                {
                    icon: <FaHiking />,
                    title: "Endless Hiking",
                    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ne infantes quidem possin"


                },
                {
                    icon: <FaShuttleVan />,
                    title: "Free Shuttle",
                    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ne infantes quidem possin"


                },
                {
                    icon: <FaBeer />,
                    title: "free Beer",
                    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ne infantes quidem possin"


                }
            ]
    }
    render() {
        return (
            <section className="services">

                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })
                    }
                </div>


            </section>


        )
    }
}





