
interface MerchantBodyProps {
    children: React.ReactNode
}


const MerchantBody: React.FC<MerchantBodyProps> = ({children}) => {
    return <div className="flex flex-col gap-6 p-10">{children}</div>
}

export default MerchantBody