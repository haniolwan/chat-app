import avatar from './../../../assets/avatar.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faMessage } from '@fortawesome/free-solid-svg-icons'

const Tools = () => {

    return (
        <div className='grid grid-cols-2 items-center p-4'>
            <img
                className="w-10 h-10 rounded-full" src={avatar}
                alt="tools avatar" />
            <div className='flex justify-end space-x-4 '>
                <FontAwesomeIcon icon={faMessage} />
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
        </div>
    )
}
export default Tools