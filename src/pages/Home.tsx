import useUser from "../hooks/useUser";

const Home = () => {
    const {users} = useUser();
    console.log("usuaris", users)
    return(
        <div>
            Home
        </div>
    )
}

export default Home