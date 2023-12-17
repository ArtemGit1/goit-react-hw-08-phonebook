import { Hourglass } from "react-loader-spinner";
import { Wrapper } from "./Loader.styled";

export const Loader = () => {
    return (
        <Wrapper>
            <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="Hourglass-loading"
                wrapperStyle={{}}
                wrapperClass="Hourglass-wrapper"
            />
        </Wrapper>
    )
}
