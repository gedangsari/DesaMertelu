import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPlant = () => {
    const [localName, setLocalName] = useState("");
    const [scientificName, setScientificName] = useState("");
    const [kingdom, setKingdom] = useState("");
    const [division, setDivision] = useState("");
    const [subdivision, setSubdivison] = useState("");
    const [classis, setClass] = useState("");
    const [order, setOrder] = useState("");
    const [family, setFamily] = useState("");
    const [genus, setGenus] = useState("");
    const [species, setSpecies] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getPlantById();
    }, []);

    const updatePlant = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`api/plants/${id}`, {
                localName,
                scientificName,
                kingdom,
                division,
                subdivision,
                class: classis,
                order,
                family,
                genus,
                species,
                description,
                imageUrl,
            });
            navigate("/plants");
        } catch (error) {
            console.log(error);
        }
    };

    const getPlantById = async () => {
        const response = await axios.get(`api/plants/${id}`);
        setLocalName(response.data.data.localName);
        setScientificName(response.data.data.scientificName);
        setKingdom(response.data.data.kingdom);
        setDivision(response.data.data.division);
        setSubdivison(response.data.data.subdivision);
        setClass(response.data.data.class);
        setOrder(response.data.data.order);
        setFamily(response.data.data.family);
        setGenus(response.data.data.genus);
        setSpecies(response.data.data.species);
        setDescription(response.data.data.description);
        setImageUrl(response.data.data.imageUrl);
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updatePlant}>
                    <div className="field">
                        <label className="label">Nama lokal</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={localName}
                                onChange={(e) => setLocalName(e.target.value)}
                                placeholder="Masukkan nama lokal"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Nama ilmiah</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={scientificName}
                                onChange={(e) => setScientificName(e.target.value)}
                                placeholder="Masukkan nama ilmiah"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Kingdom</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={kingdom}
                                onChange={(e) => setKingdom(e.target.value)}
                                placeholder="Masukkan kingdom"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Division</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={division}
                                onChange={(e) => setDivision(e.target.value)}
                                placeholder="Masukkan division"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Subdivision</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={subdivision}
                                onChange={(e) => setSubdivison(e.target.value)}
                                placeholder="Masukkan subdivision"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Class</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={classis}
                                onChange={(e) => setClass(e.target.value)}
                                placeholder="Masukkan class"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Order</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={order}
                                onChange={(e) => setOrder(e.target.value)}
                                placeholder="Masukkan order"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Family</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={family}
                                onChange={(e) => setFamily(e.target.value)}
                                placeholder="Masukkan family"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Genus</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={genus}
                                onChange={(e) => setGenus(e.target.value)}
                                placeholder="Masukkan genus"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Species</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={species}
                                onChange={(e) => setSpecies(e.target.value)}
                                placeholder="Masukkan spesies"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Deskripsi</label>
                        <div className="control">
                            <textarea
                                rows="10"
                                className="textarea"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Masukkan deskripsi"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">URL Gambar</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                placeholder="Masukkan URL gambar"
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

export default EditPlant;