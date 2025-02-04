import React from 'react';

const SceneControls: React.FC = () => {
    return (
        <div className="scene-controls">
            <button data-scene="day">Día ☀️</button>
            <button data-scene="night">Noche 🌙</button>
            <button data-scene="rain-scene">Lluvia 🌧️</button>
        </div>
    );
};

export default SceneControls;