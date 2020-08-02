import {getIds, getRecipeData} from '../../lib/data'
import Layout from '../../components/Layout'
import tw from 'twin.macro'
import styled from 'styled-components'
const Container = styled.div`
${tw `
   text-scheme-100
    flex flex-col text-left w-full pl-4 sm:pl-64 py-8 z-0 
`}
`
const SubTitle = styled.h1`
${tw `
    text-lg sm:text-4xl sm:font-semibold 
`}
`

const UL = styled.ul `
    ${tw `
        list-disc ml-4 text-sm font-hairline sm:font-normal sm:text-lg
    `}
    li {
        ${tw`text-scheme-100`}
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