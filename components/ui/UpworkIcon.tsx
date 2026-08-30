type UpworkIconProps = {
    className?: string;
};

export function UpworkIcon({ className = "" }: UpworkIconProps) {
    return (
        <img
            src="https://cdn.simpleicons.org/upwork/6FDA44"
            alt=""
            className={className}
            aria-hidden="true"
            loading="lazy"
        />
    );
}
