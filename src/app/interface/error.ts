import type { Router } from 'express';

export interface IErrorMessage {
  path: string | number;
  message: string;
}

export interface IGenericErrorResponse {
  statusCode: number;
  success: boolean;
  message: string;
  errorMessages: IErrorMessage[];
}

export interface IRoute {
  path: string;
  route: Router;
}
