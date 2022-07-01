import React from "react"
import Header from "./Header"
import ListContact from "./ListContact"

const Home =() => {
    return (
        <React.Fragment>
            <div className="container mx-auto">
                <h4 className="text-center text-2xl mt-20 leading-8 font-bold text-black tracking-wide uppercase">Task Two ReactJS dengan Router, Hook dan Context</h4>
            </div>
            <Header />
            <ListContact />
        </React.Fragment>
    )
}

export default Home