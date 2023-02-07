import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ContactList = () => {
    const [contacts, setContact] = useState([]);

    useEffect(() => {
        getContacts();
    }, []);

    const getContacts = async () => {
        const response = await axios.get("api/contacts");
        setContact(response.data.data);
    };

    const deleteContact = async (id) => {
        try {
            await axios.delete(`api/contacts/${id}`);
            getContacts();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column">
                <Link to='/' className="button is-success mr-5">
                    ←
                </Link>
                <Link to={`add`} className="button is-success">
                    Tambah Baru
                </Link>
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Nama</th>
                            <th>Telepon</th>
                            <th>Email</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact, index) => (
                            <tr key={contact.id}>
                                <td>{index + 1}</td>
                                <td>{contact.name}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.email}</td>
                                <td>
                                    <Link
                                        to={`edit/${contact.id}`}
                                        className="button is-small is-info mr-2"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => deleteContact(contact.id)}
                                        className="button is-small is-danger"
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContactList;