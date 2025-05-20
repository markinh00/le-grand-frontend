import React from "react";

type Props = React.ComponentProps<"div">

export default function Card({ children, className, ...props }: Props) {
    return (
        <div
            className={`bg-card-background p-3 border rounded-2xl ${className ?? ''}`}
            {...props}
        >
            {children}
        </div>
    )
}