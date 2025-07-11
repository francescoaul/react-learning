

export default function Card({
    title,
    children,
    footer,
    style,
    ...rest
}) {
    return (
        <div
        style={{
                maxWidth: "500px",
                backgroundColor: "#fff",
                border: "1px solid $e5e7eb",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1",
                padding: "2rem",
                ...style
            }}
            {...rest}
        >
        {title && (
            <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.25rem" }}>
                {title}
            </h3>
        )}
            <div style={{ marginBottom: footer ? "0.75rem" : 0}}>
                {children}
            </div>

        {footer && (
            <div
            style={{
                borderTop: "1px solid #e5e7eb",
                paddingTop: "0.5rem",
                textAlign: "right"
            }}
            >
                {footer}

            </div>
        )}

        </div>
    )
}