import React, { useContext } from "react"
import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState"

const ListContact =() => {
    const {contacts, deleteContact} = useContext(GlobalContext);
    return (
        <React.Fragment>
            {contacts.length > 0 ? (
                <React.Fragment>
                    {contacts.map((contact) => (
                        <div className="flex items-center bg-gray-200 mb-10 shadow" key={contact.id}>
                            <div className="flex-auto text-left px-4 py-2 m-2">
                                <p className="text-gray-900 font-medium leading-none">{contact.nama}</p>
                                <p className="text-gray-600">{contact.alamat}</p>
                                <span className="inline-block text-sm font-semibold mt-1">{contact.email}</span>
                            </div>
                            <div className="flex-auto text-right px-4 py-2 m-2">
                                <Link
                                    to={`/edit/${contact.id}`}
                                    title="Ubah Data"
                                >
                                    <div className="bg-gray-300 hover:text-gray-50 hover:bg-gray-500 text-gray-800 font-semibold mr-3 py-2 px-4  rounded-full inline-flex items-center">
                                        <p>Ubah Data</p>
                                    </div>
                                </Link>
                                <button
                                    onClick={() => deleteContact(contact.id)}
                                    className="bg-red-400 hover:bg-red-600 text-gray-100 font-semibold py-2 px-4 rounded-full items-center "
                                >
                                    <p>Hapus Data</p>
                                </button>
                            </div>
                        </div>         
                    ))}
                </React.Fragment>
            ) : (
                <p className="text-center bg-gray-100 text-gray-500 py-5">No Data</p>
            )}
        </React.Fragment>
    )
}

export default ListContact