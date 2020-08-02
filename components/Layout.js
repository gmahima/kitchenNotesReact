import styled from 'styled-components'
import tw from 'twin.macro'
import Link from 'next/link'
import { useRouter } from "next/router";
import {getAllRecipes} from '../lib/data'
import {useState, useEffect} from 'react'

const Menu = (props) => {
    if(props.isModalOpen) return (
        <div onClick={props.handleClick}>
            <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" isModalOpen={props.isModalOpen}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </Svg>
        </div>
    )
    else {
        return (
            <div onClick={props.handleClick}>
            <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" isModalOpen={props.isModalOpen}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </Svg>
        </div>
        )
    }

}
const Header = styled.div`
  ${tw`bg-colorinspo-400 text-xl sm:text-4xl font-semibold sm:font-bold text-colorinspo-200 flex py-4 px-2 justify-between  z-50 fixed w-full`}
`
const Container = styled.div`
${tw `min-h-screen h-full flex flex-col bg-colorinspo-500 relative`}
`
const A = styled.a`
${tw ` text-xs sm:text-xl font-normal sm:font-bold cursor-pointer`}
`
const Title = styled.h1`
${tw `text-xs sm:text-xl font-normal sm:font-bold `}
`
const Div = styled.div`${tw`
    flex flex-col pt-16
    
`}
`
const Drawer = styled.div`

${tw `bg-colorinspo-300 w-screen h-screen  pb-4 pt-12 flex flex-col px-2 overflow-y-auto  sm:h-full sm:min-h-screen sm:w-56   sm:fixed sm:block sm:pb-64 sm:pt-16`}
h1 {
    ${tw `text-sm font-semibold mt-4 text-left mx-1 border-b-2 border-blue-800 sm:text-lg sm:font-black mt-4 mx-1`}
}
ul {
    ${tw `text-left font-normal text-xs sm:text-left sm:font-hairline sm:text-sm`}
}
li {
    ${tw `py-1 px-1 text-colorinspo-500 rounded`}
    &.active {
        ${tw`bg-colorinspo-200 bg-opacity-25`}
    }

}
${props => {
    console.log(props)
    if(props.isModalOpen){
        return tw` absolute `
    }


    else {
        return tw`hidden`
    }
}}
`
const Modal = styled(Drawer)`
${tw `pl-2`}
h1 {
    ${tw `text-sm font-semibold mt-4 text-left mx-1 border-b-2 border-blue-800`}
}
ul {
    ${tw `text-left font-normal text-xs`}
}
${props => {
    console.log(props)
    if(props.isModalOpen){
        return tw`flex  w-screen absolute h-screen overflow-y-auto pb-4 pt-12`
    }


    else {
        return tw`hidden`
    }
}}

`
const list = getAllRecipes()
const NavDiv = () => {
    const router = useRouter();
    console.log(router.asPath)
    return (<div>
        <h1>RECIPES</h1>
        <ul>{list.map(l => <li key={l.id}className={router.asPath == `/recipes/${l.id}` ? "active" : ""}><Link href='/recipes/[id]' as={`/recipes/${l.id}`}><a>{l.name}</a></Link></li>)}</ul>
    </div>)
}
const Content = styled.div`

`
const Svg =styled.svg`
${tw `sm:hidden w-4 h-4 cursor-pointer`}

`


const Layout = (props) => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false)
    useEffect(() => {setIsModalOpen(false)}, [router.asPath])
    return (
        <Container>
            
            <Header>
                <Link href="/"><A>Home</A></Link>
                <Title>#{props.id} {props.name}</Title>
                <Menu handleClick={() => (setIsModalOpen(!isModalOpen))} isModalOpen={isModalOpen}/>
            </Header>
            {/* <Modal isModalOpen={isModalOpen}>
                <NavDiv />
            </Modal> */}
            <Drawer isModalOpen={isModalOpen}>
                <NavDiv/>                  
            </Drawer>
            <Div>
                
                <Content>
                    {props.children}
                </Content>
            </Div>           
        </Container>
    )
}
export default Layout