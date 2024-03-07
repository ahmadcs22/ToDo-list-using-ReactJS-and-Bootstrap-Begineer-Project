import React from 'react'

export const Footer = () => {
  let footerStyle={
    position : "absolute",
    top : "95vh",
    width: "100%",
    border:"4px solid #F9F7C9"
  }
  return (
    <footer className=" bg-dark text-light py-2" style={footerStyle}>
      <p className='text-center'>
      Copyright &copy; mytodolist.com
      </p>
    </footer>
  )
}
