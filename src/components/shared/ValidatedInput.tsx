import React from "react";
import { Input } from "../ui/input";
import ErrorMessage from "./ErrorMessage";

type InputProps = React.ComponentProps<typeof Input> & {
    errorMessage?: string;
};

export default function ValidatedInput({ errorMessage, ...props }: InputProps) {
    return (
        <>
            <Input {...props} />
            <ErrorMessage>{errorMessage}</ErrorMessage>
        </>
    );
}
