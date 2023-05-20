import { prisma } from '../lib/prisma';
import { FastifyInstance } from "fastify";

export async function memoriesRoutes(app: FastifyInstance) {
    app.get('/memories', async () => {
      const memories = await prisma.memory.findMany({
          orderBy: {
            createdAt: 'asc'
          },
        })
        return memories.map(memory => {
          return {
            id: memory.id,
            coverUrl: memory.coverUrl,
            excerpt: memory.content.substring(0 ,115).concat('...'),
          }
        })
      })
    app.get('/memories/:id', async () => {
      
    })
    app.post('/memories', async () => {
      
    })
    app.put('/memories', async () => {
      
    })
    app.delete('/memories', async () => {
      
    })
}