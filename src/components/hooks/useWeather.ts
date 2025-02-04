import { useState, useEffect } from 'react';
import { WeatherData } from '../models/Weather';

const useWeather = () => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=40.7128&lon=-74.0060&appid=TU_API_KEY&units=metric&lang=es`
                );
                const data = await response.json();
                setWeather(data);
            } catch (err) {
                setError('Error obteniendo el clima');
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    return { weather, loading, error };
};

export default useWeather;