// src/App.js
import React from 'react';
import NavBar from '@/Components/Header/NavBar';
import Map from '@/Components/Body/Map';
import Table from '@/Components/Table/Table';
import DetailsInfoCard from '@/Components/Body/DetailInfoCard';
import Footer from '@/Components/Footer/Footer';



function App() {
  return (
    <>
    <NavBar />
    <Map/>
    <Table/>
    <DetailsInfoCard/>
    <Footer/>
    </>
   
  );
}

export default App;
