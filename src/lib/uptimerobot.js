// src/lib/uptimerobot.js
import axios from 'axios';

const API_KEY = process.env.UPTIMEROBOT_API_KEY;

export async function createMonitor(url) {
  try {
    const response = await axios.post('https://api.uptimerobot.com/v2/newMonitor', {
      api_key: API_KEY,
      format: 'json',
      type: 1, // HTTP(s) monitor
      url: url || 'https://obuinteractive-8b3e2b.vercel.app',
      friendly_name: 'Obu Interactive Live',
      alert_contacts: '1', // Default email alert (configure in dashboard)
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

export async function getMonitorStatus(monitorId) {
  try {
    const response = await axios.post('https://api.uptimerobot.com/v2/getMonitors', {
      api_key: API_KEY,
      format: 'json',
      monitors: monitorId,
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