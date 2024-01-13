export default function Tabs({ ButtonsContainer, buttons, children }) {
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}
