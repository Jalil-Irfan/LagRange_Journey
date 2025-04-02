import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Simple API to check if the server is running
  app.get('/api/health', (req, res) => {
    res.json({ status: 'healthy', message: 'Vibe coding showcase server is running!' });
  });

  // If you need to add more API routes, add them here with the /api prefix

  const httpServer = createServer(app);

  return httpServer;
}
