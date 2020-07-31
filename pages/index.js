import Head from 'next/head'
import styled from 'styled-components'
import tw from 'twin.macro'
import Link from 'next/link'
const Heading = styled.h1`
  ${tw`text-colorinspo-200 text-4xl text-center  p-4 font-bold `}
`
const Container = styled.div`
${tw `p-4 h-screen flex flex-col items-center justify-center bg-colorinspo-400`}
p{
  ${tw`text-colorinspo-200 text-lg`}
}
`
const A = styled.div`
  ${tw `
    bg-opacity-50 cursor-pointer rounded-lg px-4 py-2 bg-colorinspo-200 shadow-xl hover:bg-opacity-75 text-colorinspo-300 my-4
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
        <p>Sources: blah blah blah</p>
        <Link href={"/recipes/[id]"} as="/recipes/1" ><A>Check out recepies</A></Link>
      </Container>
      
    </div>
  )
}