import React from 'react'

const Footer = () => {
  return (
    <div>


      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top bg-dark">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-white">Copyright © Your Website {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>

  )
}

export default Footer
