import AddContact from './component/contact/AddContact';
import ContactList from './component/contact/ContactList';
import EditContact from './component/contact/EditContact';

import AddPariwisata from './component/pariwisata/AddPariwisata';
import PariwisataList from './component/pariwisata/PariwisataList';
import EditPariwisata from './component/pariwisata/EditPariwisata';

import AddUmkm from './component/umkm/AddUmkm';
import UmkmList from './component/umkm/UmkmList';
import EditUmkm from './component/umkm/EditUmkm';

import AddPlant from './component/plant/AddPlant';
import PlantList from './component/plant/PlantList';
import EditPlant from './component/plant/EditPlant';

import Login from './component/auth/Login';
import Menu from './component/Menu';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Menu />} />
        <Route path='/login' element={<Login />} />

        <Route path='contacts/' element={<ContactList />} />
        <Route path='contacts/add' element={<AddContact />} />
        <Route path='contacts/edit/:id' element={<EditContact />} />

        <Route path='pariwisata/' element={<PariwisataList />} />
        <Route path='pariwisata/add' element={<AddPariwisata />} />
        <Route path='pariwisata/edit/:id' element={<EditPariwisata />} />

        <Route path='umkm/' element={<UmkmList />} />
        <Route path='umkm/add' element={<AddUmkm />} />
        <Route path='umkm/edit/:id' element={<EditUmkm />} />

        <Route path='plants/' element={<PlantList />} />
        <Route path='plants/add' element={<AddPlant />} />
        <Route path='plants/edit/:id' element={<EditPlant />} />

        <Route path='*' element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
};