import styled from "styled-components"

declare type AngleCardProps = {
    title: string;
    age?: string;
    qualification?: string;
}

const AngleCard = ({ title, age, qualification } : AngleCardProps) => {
    return (
        <Container>
            <div>
                <p>Job posting</p>
                <p>{title}</p>
            </div>
            <div>
                {age && <p>{age}</p>}
                {qualification && <p>{qualification}</p>}
                <p>Send your CV to vontechengineering@gmail.com</p>
            </div>
            <div>
                <button>Apply now!</button>
            </div>
        </Container>
    )
}

export default AngleCard

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
    padding: 2vw 2vw 1vw 2vw;
    height: 18vw;

    > div:first-child {
        background-color: #3E63EC;
        height: 35%;
    }
`