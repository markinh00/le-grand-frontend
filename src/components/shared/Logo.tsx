import { Cookie } from "next/font/google";
import React from "react";

const cookie = Cookie({
    weight: "400"
});

type Props = React.ComponentProps<"h1">;


export default function Logo({ className, ...props }: Props) {
    return (
        <a href="/">
            <h1 className={`${cookie.className} ${className ?? "text-2xl"}`} {...props}>le grand</h1>
        </a>
    )
}