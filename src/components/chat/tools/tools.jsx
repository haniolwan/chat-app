import { faEllipsisVertical, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import user1 from './../../../assets/user1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Tools = ({ setOpenDrawer }) => {
    return (
        <div className='row-span-1 flex justify-between items-center px-6 bg-[#1C1D22]'>
            <div className='flex items-center space-x-2.5'>
                <img className="w-10 h-10 rounded-full" src={user1}
                    alt="chat user" />
                <span>
                    Lara Mueller
                </span>
            </div>
            <div className='flex justify-end space-x-4'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <FontAwesomeIcon className='hover:bg-white' icon={faEllipsisVertical} onClick={() => setOpenDrawer(true)} />
            </div>
        </div>
    )

}
export default Tools;