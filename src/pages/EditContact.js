import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const EditContact = (route) => {
    let history = useHistory();

    const {contacts, updateContact} = useContext(GlobalContext);

    const [selectedPerson, setSelectedPerson] = useState({
        id: null,
        nama: "",
        alamat: "",
        email: "",
    });

    const currentPersonId = route.match.params.id;

    useEffect(() => {
        const contactId = currentPersonId;
        const selectedPerson = contacts.find(
            (currentContact) => currentContact.id === parseInt(contactId)
        );
        setSelectedPerson(selectedPerson);
    }, [currentPersonId, contacts]);

    const onSubmit= (e) => {
        e.preventDefault();
        updateContact(selectedPerson);
        history.push("/");
    };
 
    const handleOnChange = (userKey, newValue) => setSelectedPerson({...selectedPerson, [userKey]: newValue});

    if (!selectedPerson || !selectedPerson.id) {
        return <div>ID Contact Salah..</div>
    }
    return (
        <React.Fragment>
            <div className="w-full max-w-sm container mt-20 mx-auto">
            <h3 className="mb-10 text-center leading-3 font-semibold text-xl">Ubah Data Contact</h3>
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nama">Nama Contact</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                            value={selectedPerson.nama}
                            onChange={(e) => handleOnChange("nama", e.target.value)} 
                            type="text"
                            placeholder="Ubah Nama Anda"
                        />
                    </div>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="alamat">Alamat</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                            value={selectedPerson.alamat}
                            onChange={(e) => handleOnChange("alamat", e.target.value)}
                            type="text"
                            placeholder="Ubah Alamat Anda"
                        />
                    </div>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">Email</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" 
                            value={selectedPerson.email}
                            onChange={(e) => handleOnChange("email", e.target.value)}
                            type="text"
                            placeholder="Ubah Email Anda"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="block mt-5 bg-blue-700 w-full hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full focus:text-gray-600 focus:shadow-outline">Edit Contact</button>
                    </div>
                    <div className="text-center mt-4 text-gray-500">
                        <Link to="/">Batal</Link>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default EditContact;