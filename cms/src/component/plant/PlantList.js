import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PlantList = () => {
    const [plants, setPlant] = useState([]);

    useEffect(() => {
        getPlants();
    }, []);

    const getPlants = async () => {
        const response = await axios.get("api/plants");
        setPlant(response.data.data);
    };

    const deletePlant = async (id) => {
        try {
            await axios.delete(`api/plants/${id}`);
            getPlants();
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
                            <th>ID</th>
                            <th>Nama Lokal</th>
                            <th>Nama Ilmiah</th>
                            <th>Kingdom</th>
                            <th>Division</th>
                            <th>Subdivision</th>
                            <th>Class</th>
                            <th>Order</th>
                            <th>Family</th>
                            <th>Genus</th>
                            <th>Species</th>
                            <th>Deskripsi</th>
                            <th>URL Gambar</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plants.map((plant, index) => (
                            <tr key={plant.id}>
                                <td>{index + 1}</td>
                                <td>{plant.id}</td>
                                <td>{plant.localName}</td>
                                <td>{plant.scientificName}</td>
                                <td>{plant.kingdom}</td>
                                <td>{plant.division}</td>
                                <td>{plant.subdivision}</td>
                                <td>{plant.class}</td>
                                <td>{plant.order}</td>
                                <td>{plant.family}</td>
                                <td>{plant.genus}</td>
                                <td>{plant.species}</td>
                                <td>{plant.description}</td>
                                <td>{plant.imageUrl}</td>
                                <td>
                                    <Link
                                        to={`edit/${plant.id}`}
                                        className="button is-small is-info mr-2"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => deletePlant(plant.id)}
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

export default PlantList;