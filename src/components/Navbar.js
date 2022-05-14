import React from 'react'

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="">My Doc Tracker</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Dash Board</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/documents">Documents</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/chat">Chat</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/notification">Notification</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar