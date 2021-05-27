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
    padding: 1.5vw 2vw;
    background-color: #3E63EC;
    flex: 0.4;
    display: flex;
    flex-direction: column;

    > div {
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: space-between;
        color: white;

        > p:first-child {
            font-family: Gilroy-Light;
        }

        > p:last-child {
            font-family: Gilroy-Light;
            font-size: 1.5vw;
        }
    }
`

const BottomHalf = styled.div `
    padding: 2vw 2vw 1vw 2vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 0.6;

    > div:first-child {
        > p {
            font-family: Gilroy-Medium;
            color: #3E63EC;   
            font-size: 1vw;
            margin-bottom: 1vw;
        }

        > p:last-child {
            font-size: 0.8vw;
        }
    }

    > div:last-child {
        display: flex;
        justify-content: flex-end;

        > button {
            background: transparent;
            border: 1px solid #3E63EC;
            color: #3E63EC;
            padding: 0.5vw;
            font-family: Gilroy-Light;
            transition: 0.2s ease;

            :hover {
                background-color: #282828;
                border-color: #282828;
                color: white;
                cursor: pointer;
            }
        }
    }
`