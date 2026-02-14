body {
    font-family: 'Arial', sans-serif;
    background: #f5f5dc; 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    color: #d63384;
    overflow: hidden; 
    position: relative;
}

.container {
    text-align: center;
    background: rgb(210, 210, 210); 
    padding: 25px; 
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); 
    position: relative;
    z-index: 1;
    max-width: 500px; 
    width: 70%;
}
h1 {
    font-size: 1.5em;
    margin-bottom: 2px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.buttons {
    margin-top: 20px;
}

button {
    font-size: 1.2em;
    padding: 12px 24px;
    margin: 0 10px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

#yes {
    background: linear-gradient(45deg, #ff69b4, #ff1493);
    color: white;
    box-shadow: 0 4px 8px rgba(255, 105, 180, 0.3);
}
#yes:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(255, 105, 180, 0.4);
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1.05); }
    50% { transform: scale(1.1); }
}

#no {
    background: linear-gradient(45deg, #ccc, #aaa);
    color: #333;
    position: relative;
    transition: all 0.5s ease; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
#no:hover {
    background: linear-gradient(45deg, #aaa, #888);
}


.message-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease;
    z-index: 10;
}
.message-overlay.show {
    opacity: 1;
    visibility: visible;
}
.message-content {
    background: white;
    padding: 40px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    animation: fadeIn 0.5s ease;
}
.message-content h2 {
    color: #d63384;
    margin-bottom: 10px;
}
.message-content p {
    color: #666;
}

@keyframes fadeIn {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}

.heart-burst {
    position: relative;
    overflow: visible; 
}

.heart-burst::before,
.heart-burst::after,
.heart-burst .heart1,
.heart-burst .heart2,
.heart-burst .heart3,
.heart-burst .heart4,
.heart-burst .heart5 {
    content: '💖';
    position: absolute;
    font-size: 1.5em;
    color: #ff69b4;
    animation: floatUp 2s ease-out forwards;
    pointer-events: none;
}

.heart-burst::before { left: 20%; animation-delay: 0s; }
.heart-burst::after { left: 40%; animation-delay: 0.2s; }
.heart-burst .heart1 { left: 60%; animation-delay: 0.4s; }
.heart-burst .heart2 { left: 80%; animation-delay: 0.6s; }
.heart-burst .heart3 { left: 10%; animation-delay: 0.8s; }
.heart-burst .heart4 { left: 30%; animation-delay: 1s; }
.heart-burst .heart5 { left: 50%; animation-delay: 1.2s; }

@keyframes floatUp {
    0% { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(-100px) scale(0.5); opacity: 0; }
}
