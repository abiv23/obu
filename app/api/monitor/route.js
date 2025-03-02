// app/api/monitor/route.js
import { createMonitor, getMonitorStatus } from '../../../src/lib/uptimerobot';

export async function POST(req) {
  try {
    const { url } = await req.json();
    const monitorData = await createMonitor(url || 'https://obuinteractive-8b3e2b.vercel.app');
    return Response.json(monitorData);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}