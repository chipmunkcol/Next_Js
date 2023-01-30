import { Dummy_meat } from "@/Components/Dummy_meat"

const MeatName = ({ meat }) => {

    return(
        <div>{meat.address}</div>
    )
}

const meat = () => {

    return (
        <div>
            <h1>meat 페이지!</h1>
            {
                Dummy_meat.map((meat, index) => 
                    <MeatName
                    key={index} 
                    meat={meat}
                    />
                )
            }
        </div>
    )
}

export default meat;