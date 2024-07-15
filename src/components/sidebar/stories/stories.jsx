import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import user1 from './../../../assets/user1.svg';
import user2 from './../../../assets/user2.svg';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const Stories = () => {
    const stories = [
        user1, user2
    ]
    return (
        <div className="text-start p-6 border-t border-gray-700">
            <div>
                <p className="text-xl font-medium">Stories</p>
                <div className='mt-4 flex space-x-4'>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white cursor-pointer" >
                        <FontAwesomeIcon className='text-[#26272D]' icon={faPlus} />
                    </div>
                    {
                        stories.map(story => (<img
                            key={story}
                            className="w-12 h-12 rounded-full cursor-pointer" src={story}
                            alt="tools avatar" />))
                    }
                </div>
            </div>
        </div>
    )
}
export default Stories;