import styled from "styled-components"

declare type AngleCardProps = {
    title: string;
    age?: string;
    qualification?: string;
}

const AngleCard = ({ title, age, qualification } : AngleCardProps) => {
    return (
        <ShadowContainer>
            <Container>
                <TopHalf>
                    <div>
                        <p>Job posting</p>
                        <p>{title}</p>
                    </div>
                </TopHalf>
                <BottomHalf>
                    <div>
                        {age && <p>{age}</p>}
                        {qualification && <p>{qualification}</p>}
                        <p>Send your CV to vontechengineering@gmail.com</p>
                    </div>
                    <div>
                        <button>Apply now!</button>
                    </div>
                </BottomHalf>
            </Container>
        </ShadowContainer>
    )
}

export default AngleCard

const ShadowContainer = styled.div `
    filter: drop-shadow(2px 2px 8px #3E63EC);
    height: 22.5vw;
    margin-right: 3vw;
`

const Container = styled.div `
    @font-face {
        font-family: Gilroy-Bold;
        src: url(fonts/Gilroy-Bold.ttf);
    }
    @font-face {
        font-family: Gilroy-Light;
        src: url(fonts/Gilroy-Light.ttf);
    }
    @font-face {
        font-family: Gilroy-Medium;
        src: url(fonts/Gilroy-Medium.ttf);
    }

    clip-path: polygon(0 0, 80% 0, 100% 27%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);
    height: 100%;
    width: 20vw;
    display: flex;
    flex-direction: column;
    background-color: white;
    transition: 0.4s ease;
`

const TopHalf = styled.div `
    padding: 2vw 2vw 1vw 2vw;
    background-color: #3E63EC;
    flex: 0.4;
    display: flex;
    flex-direction: column;
`

const BottomHalf = styled.div `
    padding: 2vw 2vw 1vw 2vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 0.6;

    > div:last-child {
        display: flex;
        justify-content: flex-end;

        > button {
            clip-path: polygon(0 0, 84% 0, 100% 30%, 100% 70%, 100% 100%, 30% 100%, 0 100%, 0% 30%);


            background: transparent;
            border: 1px solid #3E63EC;
            color: white;
            background-color: #3E63EC;
            padding: 0.5vw;
            font-family: Gilroy-Light;
            transition: 0.2s ease;

            :hover {
                background-color: #282828;
            }
        }
    }
`