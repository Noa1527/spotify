
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AlbumsD from './pages/AlbumsD'
import AlbumsL from './pages/AlbumsL'
import ArtistesL from './pages/ArtistesL'
import Artists168_252 from './pages/Artists168_252'
import Artists252_336 from './pages/Artists252_336'
import Artists336_420 from './pages/Artists336_420'
import Artists420_504 from './pages/Artists420_504'
import Artists504_588 from './pages/Artists504_588'
import Artists588_672 from './pages/Artists588_672'
import Artists84_168 from './pages/Artists84_168'
import Home from './pages/Home.jsx'


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/albumsListings" element={<AlbumsL />} />
                <Route path="/albumsdetails/:id" element={<AlbumsD />} />
                <Route path="/artistesListings" element={<ArtistesL />} />
                <Route path="/artistesListings168" element={<Artists84_168 />} />
                <Route path="/artistesListings252" element={<Artists168_252 />} />
                <Route path="/artistesListings336" element={<Artists252_336 />} />
                <Route path="/artistesListings420" element={<Artists336_420 />} />
                <Route path="/artistesListings504" element={<Artists420_504 />} />
                <Route path="/artistesListings588" element={<Artists504_588 />} />
                <Route path="/artistesListings672" element={<Artists588_672 />} />
                {/* path="*" fonction si jamais l'url ne corespond a rien de declarer haut dessus */}
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App