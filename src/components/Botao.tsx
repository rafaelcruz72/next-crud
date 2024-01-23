interface BotoaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotoaoProps) {
    const cor = props.cor ?? 'gray'
    return (
        <button
            onClick={props.onClick}
            className={`
                bg-${cor}-500
                text-white px-4 py-2 rounded-md
                ${props.className}
            `}>
            {props.children}
        </button>
    )
}