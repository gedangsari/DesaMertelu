import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditContact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getContactById();
    }, []);

    const updateContact = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`api/contacts/${id}`, {
                name,
                phone,
                email,
            });
            navigate("/contacts");
        } catch (error) {
            console.log(error);
        }
    };

    const getContactById = async () => {
        const response = await axios.get(`api/contacts/${id}`);
        setName(response.data.data.name);
        setPhone(response.data.data.phone);
        setEmail(response.data.data.email);
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updateContact}>
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
                            Edit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditContact;