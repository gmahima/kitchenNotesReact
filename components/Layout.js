import styled from 'styled-components'
import tw from 'twin.macro'
import Link from 'next/link'
import { useRouter } from "next/router";
import {getAllRecipes} from '../lib/data'

const Menu = () => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
</Svg>
)
const Header = styled.div`
  ${tw`bg-colorinspo-400 text-xl sm:text-4xl font-semibold sm:font-bold text-colorinspo-200 flex py-4 px-2 justify-between  z-50 fixed w-full`}
`
const Container = styled.div`
${tw `min-h-screen h-full flex flex-col bg-colorinspo-500 `}
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
${tw `bg-colorinspo-300 h-full min-h-screen w-56 flex flex-col px-2 hidden sm:fixed sm:block overflow-y-auto pb-64`}
h1 {
    ${tw `text-lg font-black mt-4 text-left`}
}
ul {
    ${tw `text-left font-hairline text-sm`}
}
li {
    ${tw `py-1 px-2 text-colorinspo-500 rounded`}
    &.active {
        ${tw`bg-colorinspo-200 bg-opacity-25`}
    }
}
`
const list = getAllRecipes()

const NavList = () => {
    const router = useRouter();
    console.log(router.asPath)
    return <ul>{list.map(l => <li key={l.id}className={router.asPath == `/recipes/${l.id}` ? "active" : ""}><Link href='/recipes/[id]' as={`/recipes/${l.id}`}>{l.name}</Link></li>)}</ul>
}
const NavDiv = () => {
    return (<div>
        <h1>RECIPES</h1>
        {console.log(list)}
        <NavList />
    </div>)
}
const Content = styled.div`

`
const Svg =styled.svg`
${props => console.log(props)}
${tw `sm:hidden w-4 h-4`}

`

const Layout = (props) => {
  
    return (
        <Container>
            <Header>
                <Link href="/"><A>Home</A></Link>
                <Title>#{props.id} {props.name}</Title>
                <Menu/>
            </Header>
            <Div>
                <Drawer>
                    <NavDiv/>                  
                </Drawer>
                <Content>
                    {props.children}
                </Content>
            </Div>           
        </Container>
    )
}
export default Layout