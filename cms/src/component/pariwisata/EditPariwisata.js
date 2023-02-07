import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPariwisata = () => {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [imageUrl2, setImageUrl2] = useState("");
    const [note, setNote] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getPariwisataById();
    }, []);

    const updatePariwisata = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`api/pariwisata/${id}`, {
                title,
                subtitle,
                description,
                imageUrl,
                imageUrl2,
                note,
            });
            navigate("/pariwisata");
        } catch (error) {
            console.log(error);
        }
    };

    const getPariwisataById = async () => {
        const response = await axios.get(`api/pariwisata/${id}`);
        setTitle(response.data.data.title);
        setSubtitle(response.data.data.subtitle);
        setDescription(response.data.data.description);
        setImageUrl(response.data.data.imageUrl);
        setImageUrl2(response.data.data.imageUrl2);
        setNote(response.data.data.note);
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updatePariwisata}>
                    <div className="field">
                        <label className="label">Judul</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Masukkan judul"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Judul 2</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={subtitle}
                                onChange={(e) => setSubtitle(e.target.value)}
                                placeholder="Masukkan judul 2"
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
                        <label className="label">URL Gambar 2</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={imageUrl2}
                                onChange={(e) => setImageUrl2(e.target.value)}
                                placeholder="Masukkan URL gambar 2"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Keterangan</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                placeholder="Masukkan keterangan"
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

export default EditPariwisata;