import Header from "@/components/screens/Header/Header"


const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <Header/>
    {children}
    </>
    
  )
}

export default layout