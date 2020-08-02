import Head from 'next/head'
import styled from 'styled-components'
import tw from 'twin.macro'
import Link from 'next/link'
const Heading = styled.h1`
  ${tw`text-scheme-100 text-4xl text-center  p-4 font-bold `}
`
const Container = styled.div`
${tw `p-4 h-screen flex flex-col items-center justify-center bg-scheme-400`}
p{
  ${tw`text-scheme-100 text-lg`}
}
`
const A = styled.div`
  ${tw `
     cursor-pointer rounded-lg px-4 py-2 bg-scheme-200 shadow-xl hover:bg-opacity-75 text-scheme-400 my-4
  `}
`
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Kitchen Notes</title>
      </Head>
      <Container>
        <Heading>My Kitchen Notes</Heading>
        <p>A handy kitchen notebook in which I jotted down simple go-to recipes </p>
        <Link href={"/recipes/[id]"} as="/recipes/2" ><A>Check out recepies</A></Link>
      </Container>
      
    </div>
  )
}