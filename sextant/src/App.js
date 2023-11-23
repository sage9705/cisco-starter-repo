import React, { Component } from 'react';
import './App.css';
import Banner from './banner';
import Exhibit from './exhibit';
import AddrDisplay from './address';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant" />
                <Exhibit name="Public IPv4 Address">
                    <AddrDisplay url='https://api.ipify.org?format=json' />
                </Exhibit>
                <Exhibit name="Public IPv6 Address">
                    <AddrDisplay url='https://api64.ipify.org?format=json' />
                </Exhibit>
            </div>
        );
    }
}

export default App;