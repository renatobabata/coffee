import React from 'react'

export default function Footer() {
    return (
        <footer className="footer py-3">
            <div clasName="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
                        <h3>all rights reserverd &copy;{new Date().getFullYear().toString()}</h3>
                    </div>
                </div>
            </div>
        </footer>
    )
}
