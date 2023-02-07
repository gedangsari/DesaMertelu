import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const saveContact = async (e) => {
        e.preventDefault();
        try {
            await axios.post("api/contacts", {
                name,
                phone,
                email,
            });
            navigate("/contacts");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={saveContact}>
                    <div className="field">
                        <label className="label">Nama</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Masukkan nama kontak"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Telepon</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Masukkan nomor telepon"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Masukkan alamat email"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <button type="submit" className="button is-success">
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddContact;