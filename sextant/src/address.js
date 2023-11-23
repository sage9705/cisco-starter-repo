import React, { useState, useEffect } from 'react';

const AddrDisplay = ({ url }) => {
    const [ipAddress, setIpAddress] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setIpAddress(data.ip);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [url]);

    return <span className="addrDisplay">{ipAddress}</span>;
};

export default AddrDisplay;
