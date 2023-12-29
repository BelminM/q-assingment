import { useContext } from "react";
import { LoggingContext } from "../../contexts/Logging";

export const useLogging = () => {
    const context = useContext(LoggingContext);
    if (!context) {
        throw new Error('useLogging must be used within a LoggingProvider');
    }
    return context;
};
