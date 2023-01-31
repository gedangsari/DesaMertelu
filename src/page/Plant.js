import axios from 'axios';
import Layout from "../common/layout/Layout";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PlantSection from '../common/section/plant/PlantSection';

export default function Plant() {
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
    const { id } = useParams();

    useEffect(() => {
        getPlantById();
    }, []);

    const getPlantById = async () => {
        const response = await axios.get(`api/d/plants/${id}`);
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
        <Layout color='gray.800'>
            <PlantSection
                localName={localName}
                scientificName={scientificName}
                kingdom={kingdom}
                division={division}
                subdivision={subdivision}
                class={classis}
                order={order}
                family={family}
                genus={genus}
                species={species}
                description={description}
                imageUrl={imageUrl}
            />
        </Layout>
    );
};