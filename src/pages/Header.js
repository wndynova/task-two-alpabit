import React from "react";
import { Link } from "react-router-dom";


const Header=() => {
    return (
        <div>
            <div className="flex items-center mt-24 mb-10">
                <div className="flex-grow text-left px-4 py-2 m-2">
                    <h5 className="text-gray-500 font-bold text-xl">List Contact</h5>
                </div>
                <div className="flex-grow text-right px-4 py-2 mt-2">
                    <Link to="/add">
                        <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full inline-flex items-center">
                            <span>Tambah Contact</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header