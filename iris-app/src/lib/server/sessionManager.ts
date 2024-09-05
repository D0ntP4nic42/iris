import { RedisSessionStore } from '@ethercorps/sveltekit-redis-session';
import Redis from 'ioredis';

// Now we will create new Instance for RedisSessionStore
const options = {
  redisClient: new Redis('redis://localhost:6379'),
  secret: 'ameixa',
  prefix: 'teste:',
  cookieName: 'geraldo',
  cookiesOptions: {
    maxAge: 10 * 60
  }
} 

// These are the required options to use RedisSessionStore.
export const sessionManager = new RedisSessionStore(options)
