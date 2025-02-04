import React, { useState, useEffect } from 'react';
import SceneControls from './components/SceneControls';
import WeatherDisplay from './components/WeatherDisplay';
import AIPanel from './components/AIPanel';
import useWeather from './hooks/useWeather';

const App: React.FC = () => {
    const { weather, loading, error } = useWeather();
    const [currentScene, setCurrentScene] = useState<string>('day');

    useEffect(() => {
        if (weather) {
            const scene = determineScene(weather);
            setCurrentScene(scene);
        }
    }, [weather]);

    return (
        <div className={`scene ${currentScene}`}>
            <SceneControls />
            <WeatherDisplay weather={weather} />
            <AIPanel />
            {loading && <div className="loading">Cargando...</div>}
            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default App;