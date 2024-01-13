export default function Tabs({ ButtonsContainer = 'menu', buttons, children }) {
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}
