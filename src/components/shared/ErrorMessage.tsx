import React from "react";

type Props = React.ComponentProps<"p">

export default function ErrorMessage({ children }: Props) {
    return (
        !children ? (
            null
        ) : (
            <p className="text-red-500 text-sm mb-1">{children}</p>
        )
    )
}