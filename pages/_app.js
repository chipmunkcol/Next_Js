import Navbar from "@/Components/Navbar";

function MyApp ({ Component, pageProps }) {
    return(
        <>
            <Navbar />
            <Component {...pageProps}/>
            <style jsx global>{`
                h1 {
                    color: tomato;
                }
            `}</style>
        </>
    )
}

export default MyApp;