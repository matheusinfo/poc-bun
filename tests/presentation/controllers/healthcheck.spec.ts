import { describe, it, expect, spyOn } from 'bun:test';
import { Healthcheck } from '../../../src/data/usecases';
import { HealthcheckController } from '../../../src/presentation/controllers';

const mockHealthCheckSuccess = {
  check: async () => 'Server is up and running!',
} as Healthcheck;

const makeSut = (mockHealthCheck = mockHealthCheckSuccess) => {
  return new HealthcheckController(mockHealthCheck);
}

describe('HealthcheckController', () => {
  it('should return success response when health check succeeds', async () => {
    const sut = makeSut()
    const response = await sut.handle();
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Server is up and running!' });
  });

  it('should return server error response when health check throws an error', async () => {
    const mockHealthCheckError = {
      check: async () => {
        throw new Error('Health check failed');
      },
    } as Healthcheck;
    const sut = makeSut(mockHealthCheckError);

    const response = await sut.handle();

    expect(response.statusCode).toBe(500);
    expect(response.body).toContain('Health check failed');
  });
});