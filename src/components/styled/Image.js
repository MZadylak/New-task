import styled from "styled-components"

const Image = styled.img.attrs(({ src, alt }) => ({ alt, src }))`
    max-width: 100%;
    width: 100vw;
    height: auto;
    margin: 2rem 0;
`;

export default Image;