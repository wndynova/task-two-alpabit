import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";


export const AddContact =() => {
    let history = useHistory();
    const {addContact, contacts} = useContext(GlobalContext);
    const [nama, setNama] = useState('');
    const [alamat, setAlamat] = useState('');
    const [email, setEmail] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            id: contacts.length + 1,
            nama,
            alamat,
            email,
        };
        addContact(newContact);
        history.push("/");
    };
    return (
        <React.Fragment>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <h3 className="mb-10 text-center leading-3 font-semibold text-xl">Tambah Data Contact</h3>
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nama">Nama Contact</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                            type="text"
                            placeholder="Silahkan Isi Nama Anda" 
                        />
                    </div>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="alamat">Alamat</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                            value={alamat}
                            onChange={(e) => setAlamat(e.target.value)}
                            type="text"
                            placeholder="Silahkan Isi Alamat Anda" 
                        />
                    </div>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Email</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            type="text"
                            placeholder="Silahkan Isi Email Anda"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="mt-5 bg-blue-700 w-full hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">Tambah Data</button>
                    </div>
                    <div className="text-center mt-4 text-gray-500">
                        <Link to="/">Batal</Link>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};

//export default AddContact;