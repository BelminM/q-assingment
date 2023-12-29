import { FC, PropsWithChildren } from "react";
import { LoggingContext } from "./LoggingContext";


export const LoggingProvider: FC<PropsWithChildren> = ({ children }) => {
    const log = (message: string) => {
        console.log(message);
    };

    return (
        <LoggingContext.Provider value={{ log }}>
            {children}
        </LoggingContext.Provider>
    );
};
