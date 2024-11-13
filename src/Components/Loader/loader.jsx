import styled, {keyframes} from 'styled-components'


const Rotate = keyframes`
from{
transform: rotate(0deg);
}to{
transform: rotate(360deg);
}
`

const LoaderContainer = styled.div`
padding: 30px;
border: 6px solid #88B04B;
animation: ${Rotate} 1s infinite linear;
border-radius: 50px;
border-bottom-color: transparent;
height: 0;
width: 0;
`

export function Loader(){
    return(
        <LoaderContainer>

        </LoaderContainer>
    )
}