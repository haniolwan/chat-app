import user1 from './../../../assets/user1.svg';

const Title = () => {

    return (
        <div className="row-span-4 grid justify-items-center space-y-4 p-6 border-b border-gray-700">
            <img className="w-[124px] h-[124px] rounded-full" src={user1}
                alt="chat user" />
            <div className="grid justify-items-center">
                <h1>
                    Lara Mueller
                </h1>
                <p className="text-gray-400">
                    +49 1522 792358
                </p>
            </div>
        </div>
    )
}
export default Title;