import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UmkmList = () => {
    const [umkm, setUmkm] = useState([]);

    useEffect(() => {
        getUmkm();
    }, []);

    const getUmkm = async () => {
        const response = await axios.get("api/umkm");
        setUmkm(response.data.data);
    };

    const deleteUmkm = async (id) => {
        try {
            await axios.delete(`api/umkm/${id}`);
            getUmkm();
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
                            <th>Deskripsi 2</th>
                            <th>URL Gambar</th>
                            <th>URL Gambar 2</th>
                            <th>URL Gambar 3</th>
                            <th>URL Gambar 4</th>
                            <th>URL Gambar 5</th>
                            <th>Keterangan</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {umkm.map((umkm, index) => (
                            <tr key={umkm.id}>
                                <td>{index + 1}</td>
                                <td>{umkm.title}</td>
                                <td>{umkm.subtitle}</td>
                                <td>{umkm.description}</td>
                                <td>{umkm.description2}</td>
                                <td>{umkm.imageUrl}</td>
                                <td>{umkm.imageUrl2}</td>
                                <td>{umkm.imageUrl3}</td>
                                <td>{umkm.imageUrl4}</td>
                                <td>{umkm.imageUrl5}</td>
                                <td>{umkm.note}</td>
                                <td>
                                    <Link
                                        to={`edit/${umkm.id}`}
                                        className="button is-small is-info mr-2"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => deleteUmkm(umkm.id)}
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

export default UmkmList;