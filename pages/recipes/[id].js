import {getIds, getRecipeData} from '../../lib/data'
import Layout from '../../components/Layout'
import tw from 'twin.macro'
import styled from 'styled-components'
const Container = styled.div`
${tw `
   text-colorinspo-100
    flex flex-col text-left w-full pl-4 sm:pl-64 py-8 z-0 border border-red-600
`}
`
const SubTitle = styled.h1`
${tw `
    text-4xl font-semibold 
`}
`

const UL = styled.ul `
    ${tw `
        list-disc ml-4
    `}
    li {
        ${tw`text-teal-500`}
    }
`
const PUL = styled(UL)`${tw `
list-decimal
`}`
const Recipe = ({data}) => {
    return (
        <Layout name={data.name} id={data.id}>
            <Container>
                <SubTitle>Ingredients</SubTitle>
    <UL>{data.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}</UL>
                <SubTitle>Procedure</SubTitle>
                <PUL>{data.procedure.map((p, i) => <li key={i}>{p}</li>)}</PUL>
            </Container>
        </Layout>
        
    )
}

export async function getStaticPaths(){
    const paths = getIds();
    return {
        paths, fallback: false
    }

}
export async function getStaticProps ({params}) {
    const data = getRecipeData(params.id)
    return {
        props: {
            data
        }
    }
}
export default Recipe