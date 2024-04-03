
interface AssestBodyProps {
    children: React.ReactNode
}


const AssestBody: React.FC<AssestBodyProps> = ({children}) => {
    return <div className="flex flex-col gap-6">{children}</div>
}

export default AssestBody