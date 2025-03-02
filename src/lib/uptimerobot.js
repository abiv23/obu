// src/lib/uptimerobot.js
import axios from 'axios';

const API_KEY = process.env.UPTIMEROBOT_API_KEY;

export async function createMonitor(url) {
  try {
    const response = await axios.post('https://api.uptimerobot.com/v2/newMonitor', {
      api_key: API_KEY,
      format: 'json',
      type: 1, // HTTP(s) monitor
      url: url || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
      friendly_name: 'Obu Interactive Dev',
    }, {
      headers: {
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
    return response.data;
  } catch (error) {
    console.error('UptimeRobot API Error:', error);
    throw error;
  }
}

// ... getMonitorStatus function remains the same