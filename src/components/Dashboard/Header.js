import React, { useState, useEffect } from 'react'


function Header() {
    var [date, setDate] = useState(new Date());
    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
        <div className="HeaderBlock">
        </div>
    );
}

export default Header;