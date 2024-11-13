import styled from 'styled-components'

const FormContainer = styled.div`
width: 100%;
dispaly: flex;
flex-direction: column;
padding-left: 5rem;
align-items: center;


`
const Form =styled.form`
width: 50%;
dispaly: flex;
flex-direction: column;
justify-content: center;
`
const ItemContainer = styled.div`

display: flex;
flex-direction: column;
width: 90%;
margin-bottom: 20px;
align-items: left;
`
const LabelForm = styled.label`
margin-bottom:10px;
font-size: 25px;
`
const InputForm = styled.input`
padding: 15px;
width: 100%;
border-radius: 10px;

`
const TextareaForm = styled.textarea`
padding: 15px;
max-width: 100%;
border-radius: 10px;
`
const SubmitForm = styled.input`
width:90%;
border-radius: 22px;
background-color: #88B04B;
padding: 20px

`

export function ContactForm(){
     return(
        <FormContainer>
            <Form action="">
              <h3>Nous Contacter</h3>
              <ItemContainer>
                <LabelForm htmlFor="name">Votre Nom Complet</LabelForm>
                <InputForm type="text" />
              </ItemContainer>
              <ItemContainer>
                <LabelForm htmlFor="Email">Votre Adress Email</LabelForm>
                <InputForm type="text" />
              </ItemContainer>

              <ItemContainer> 
                <LabelForm htmlFor="message">Votre Message </LabelForm>
                <TextareaForm type="textarea" />
              </ItemContainer> 
               <SubmitForm type="submit" value="Envoyer" />
              </Form>
        </FormContainer>
     )
}