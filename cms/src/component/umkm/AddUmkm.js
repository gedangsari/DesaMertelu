import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUmkm = () => {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [description, setDescription] = useState("");
    const [description2, setDescription2] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [imageUrl2, setImageUrl2] = useState("");
    const [imageUrl3, setImageUrl3] = useState("");
    const [imageUrl4, setImageUrl4] = useState("");
    const [imageUrl5, setImageUrl5] = useState("");
    const [note, setNote] = useState("");
    const navigate = useNavigate();

    const saveUmkm = async (e) => {
        e.preventDefault();
        try {
            await axios.post("api/umkm", {
                title,
                subtitle,
                description,
                description2,
                imageUrl,
                imageUrl2,
                imageUrl3,
                imageUrl4,
                imageUrl5,
                note,
            });
            navigate("/umkm");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={saveUmkm}>
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
                        <label className="label">Deskripsi 2</label>
                        <div className="control">
                            <textarea
                                rows="10"
                                className="textarea"
                                value={description2}
                                onChange={(e) => setDescription2(e.target.value)}
                                placeholder="Masukkan deskripsi 2"
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
                        <label className="label">URL Gambar 3</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={imageUrl3}
                                onChange={(e) => setImageUrl3(e.target.value)}
                                placeholder="Masukkan URL gambar 3"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">URL Gambar 4</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={imageUrl4}
                                onChange={(e) => setImageUrl4(e.target.value)}
                                placeholder="Masukkan URL gambar 4"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">URL Gambar 5</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={imageUrl5}
                                onChange={(e) => setImageUrl5(e.target.value)}
                                placeholder="Masukkan URL gambar 5"
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
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUmkm;