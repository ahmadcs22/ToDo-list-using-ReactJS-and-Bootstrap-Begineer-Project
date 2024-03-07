import React from 'react'

export const About = () => {
  let myyStyle={
    minHeight:"80vh",
    margin: "40px auto",
  }
  return (
    <>
    <div className="container text-center my-5"><h1>About Todo List App</h1></div>
    <div class="container " style={myyStyle}>
    <ul>
      <li><b><p>This Todo List App is created by Ahmad Siraj, a computer science student, as a project.</p></b></li>
    <li><b><p>It allows you to manage your tasks efficiently by adding, deleting.</p></b></li>
    <li><b><p>Feel free to use this app to organize your daily tasks!</p></b></li>
    <li><b><p>If you have any feedback or suggestions for improvement, you can reach out to Ahmad Siraj via email: ahmadsirajcode@gmail.com</p></b></li>
    <li><b><i>Ahmad Tech</i></b></li>
    
    
    </ul>
    
</div>
    </>
  )
}
