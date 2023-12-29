import { createContext } from 'react';
import { LoggingContextProps } from './types';

export const LoggingContext = createContext<LoggingContextProps | undefined>(undefined);
