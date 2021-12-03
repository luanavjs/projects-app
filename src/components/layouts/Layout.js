import Nav from "../Nav";

export default function Layout({children}) {
    return (
        <>
            <Nav/>
            {children}
            <h1>Footer</h1>
        </>
    )
}
