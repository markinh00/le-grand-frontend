import { Button } from "../ui/button";


type Props = React.ComponentProps<typeof Button>;

export function IconButton({ children, className, ...props }: Props) {
    return (
        <Button
            variant="ghost"
            size="icon"
            className={`hover:bg-primary/20 size-8 ${className ?? ''}`}
            {...props}
        >
            {children}
        </Button>
    );
};