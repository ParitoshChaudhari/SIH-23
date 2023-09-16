// src/App.js
import React from 'react';
import NavBar from '@/Components/Header/NavBar';
import Map from '@/Components/Body/Map';
import Table from '@/Components/Table/Table';
import DetailsInfoCard from '@/Components/Body/DetailInfoCard';
import Footer from '@/Components/Footer/Footer';
import FAQ from '@/Components/FAQ/FAQ'
// import Accordion from '@/Components/Accordion/app';




function App() {
  return (
    <>
    <NavBar />
    <Map/>
    <Table/>
    <DetailsInfoCard/>
    <FAQ/>
    <Footer/>
    </>
   
  );
}

export default App;
