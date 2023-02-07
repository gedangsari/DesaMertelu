import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PariwisataList = () => {
    const [pariwisata, setPariwisata] = useState([]);

    useEffect(() => {
        getPariwisata();
    }, []);

    const getPariwisata = async () => {
        const response = await axios.get("api/pariwisata");
        setPariwisata(response.data.data);
    };

    const deletePariwisata = async (id) => {
        try {
            await axios.delete(`api/pariwisata/${id}`);
            getPariwisata();
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
                            <th>Judul</th>
                            <th>Judul 2</th>
                            <th>Deskripsi</th>
                            <th>URL Gambar</th>
                            <th>URL Gambar 2</th>
                            <th>Keterangan</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pariwisata.map((pariwisata, index) => (
                            <tr key={pariwisata.id}>
                                <td>{index + 1}</td>
                                <td>{pariwisata.title}</td>
                                <td>{pariwisata.subtitle}</td>
                                <td>{pariwisata.description}</td>
                                <td>{pariwisata.imageUrl}</td>
                                <td>{pariwisata.imageUrl2}</td>
                                <td>{pariwisata.note}</td>
                                <td>
                                    <Link
                                        to={`edit/${pariwisata.id}`}
                                        className="button is-small is-info mr-2"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => deletePariwisata(pariwisata.id)}
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

export default PariwisataList;