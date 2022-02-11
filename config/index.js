const env = process.env.NODE_ENV !== 'prod'
export const server = env ? 'http://localhost:3000' : 'https://turbojaguarenigma.kramergatos.com'
