import { describe, it, expect, spyOn } from 'bun:test';
import { HealthcheckService } from '../../../src/data/services';

const makeSut = () => {
  return new HealthcheckService();
}

describe('HealthcheckService', () => {
  it('should return "Server is up and running!" in success case', async () => {
    const sut = makeSut()
    const result = await sut.check();
    expect(result).toBe('Server is up and running!');
  });
});