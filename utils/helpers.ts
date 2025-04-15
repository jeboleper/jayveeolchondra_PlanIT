export function generateRandomEmail(): string {
  return `jayveeolchondra_${Math.floor(Math.random() * 10000)}@mail.com`;
}

export async function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}